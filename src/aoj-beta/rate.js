aoj.api = {};

aoj.api.baseUrl = 'https://judgedat.u-aizu.ac.jp';

aoj.api.request = (url, params) =>
  fetch(`${url}?${$.param(Object.assign({ _timestamp: +new Date() }, params))}`)
    .then(x => x.json());

aoj.api.rating = {};

aoj.api.rating.findByUserIdCategoryWeekly = userId =>
  aoj.api.request(`${aoj.api.baseUrl}/rating/users/${userId}/weekly`);

aoj.ui = {};

aoj.ui.makeSeries = ratings => {
  let series = [];
  for (let rating of ratings) {
    if (rating.weeklyRatings.length === 0) continue;

    let obj = { name: rating.userId, data: [], turboThreshold: 2000 };
    for (let r of rating.weeklyRatings) {
      obj.data.push({
        x: new Date(r.date) - 0,
        y: Math.floor(r.rating * 100) / 100,
        userId: rating.userId
      });
    }
    series.push(obj);
  }
  return series;
};

aoj.ui.renderDailyEfforts = ratings => {
  new Highcharts.Chart({
    title: { text: null },
    tooltip: {
      formatter: function () {
        return `<b>${this.point.userId}</b><br />` +
          `Date: ${Highcharts.dateFormat('%e %b %Y', this.x)}<br />` +
          `Rate: ${this.y}`;
      }
    },
    xAxis: {
      type: 'datetime',
      title: { text: null },
      dateTimeLabelFormats: { year: '%Y' },
      tickInterval: 30758400000
    },
    yAxis: {
      min: 0,
      startOnTick: false,
      title: { text: null },
      plotLines: [{ value: 0, width: 1, color: '#808080' }],
      plotBands: []
    },
    chart: { height: 600, type: 'line', zoomType: 'x', renderTo: 'daily-efforts' },
    plotOptions: { series: { marker: { enabled: false } } },
    credits: { enabled: false },
    series: aoj.ui.makeSeries(ratings)
  });
};

aoj.formatDate = date => {
  if (date <= 1000 * 60 * 60) return `${(date / 1000 / 60).toFixed()}分`;
  if (date <= 1000 * 60 * 60 * 24) return `${(date / 1000 / 60 / 60).toFixed()}時間`;
  return `${(date / 1000 / 60 / 60 / 24).toFixed()}日`;
};

aoj.main = () => {
  Promise.all(aoj.settings.users.map(aoj.api.rating.findByUserIdCategoryWeekly)).then(ratings => {
    console.log(ratings);
    aoj.ui.renderDailyEfforts(ratings);
    $('#daily-efforts-loading').css('display', 'none');
  });
};

$(aoj.main);
