atcoder.api = {};

atcoder.api.baseUrl = 'https://kenkoooo.com/atcoder/atcoder-api';

atcoder.api.request = (url, params) => {
  return fetch(`${url}?${$.param(Object.assign({ _timestamp: +new Date() }, params))}`).then(x => x.json());
};

atcoder.api.getACCount = () => {
  return atcoder.api.request(`${atcoder.api.baseUrl}/info/ac`).then(data => {
    const obj = {};
    data.forEach(({ user_id: user, problem_count: count }) => {
      obj[user] = parseInt(count);
    });
    return obj;
  });
};

atcoder.api.getResults = users => {
  return atcoder.api.request(`${atcoder.api.baseUrl}/results`, { rivals: users.join(',') }).then(results => {
    results.sort((a, b) => a.epoch_second - b.epoch_second);
    let problems = new Map(), userResults = new Map();
    for (let user of atcoder.settings.users) {
      problems.set(user, new Set());
      userResults.set(user, []);
    }
    for (let result of results) {
      if (result.result != "AC") continue;
      if (problems.get(result.user_id).has(result.problem_id)) continue;
      problems.get(result.user_id).add(result.problem_id);
      userResults.get(result.user_id).push(result);
    }
    return userResults;
  });
};

atcoder.ui = {};

atcoder.ui.renderDailyEfforts = userResults => {
  let chart = new Highcharts.Chart({
    title: { text: null },
    tooltip: {
      formatter: function () {
        return `<b>${this.point.userId}</b><br />` +
          `Date: ${Highcharts.dateFormat('%Y/%m/%d', this.x)}<br />` +
          `Solved: ${this.y}`;
      }
    },
    xAxis: {
      events: {
        afterSetExtremes: function (e) {
          let length = (e.max - e.min) || 1;
          if (e.min == chart.xAxis[0].dataMin || e.max == chart.xAxis[0].dataMax) {
            this.setExtremes(e.min - length * 0.01, e.max + length * 0.01);
          }
        }
      },
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
      plotBands: [
        { 'from': 0, 'to': 100 - 1, 'color': '#F9F9F9' },
        { 'from': 100, 'to': 200 - 1, 'color': '#F9E6D3' },
        { 'from': 200, 'to': 400 - 1, 'color': '#D3F9D3' },
        { 'from': 400, 'to': 600 - 1, 'color': '#D3FCFC' },
        { 'from': 600, 'to': 800 - 1, 'color': '#D3D3FF' },
        { 'from': 800, 'to': 900 - 1, 'color': '#FCFCC3' },
        { 'from': 900, 'to': 1000 - 1, 'color': '#FFE9C3' },
        { 'from': 1000, 'to': 1000000, 'color': '#FFC3C3' }
      ]
    },
    chart: {
      height: 600, type: 'line', zoomType: 'x', renderTo: 'daily-efforts',
      resetZoomButton: {
        position: {
          align: 'left',
          verticalAlign: 'top',
          x: 10,
          y: 10
        }
      }
    },
    plotOptions: { series: { marker: { enabled: false } } },
    credits: { enabled: false },
    series: (() => {
      let series = [];
      for (let [user, results] of userResults) {
        if (results.length <= 1) continue;
        let obj = { name: user, data: [], turboThreshold: 2000 };
        for (let result of [results[0], results[results.length - 1]]) {
          obj.data.push({
            x: new Date(result.epoch_second - (results[0].epoch_second + 2208988800)) * 1000,
            y: (result.epoch_second === results[0].epoch_second ? 1 : results.length),
            name: result.problem_id,
            userId: user
          });
        }
        series.push(obj);
      }
      return series;
    })()
  });
};

atcoder.main = () => {
  let loadedDailyEfforts = false;
  {
    function loadingAnimation() {
      $('#daily-efforts-loading').text($('#daily-efforts-loading').text() + '.');
      if (!loadedDailyEfforts) setTimeout(loadingAnimation, 1000);
    }
    loadingAnimation();
  }
  atcoder.api.getResults(atcoder.settings.users).then(userResults => {
    atcoder.ui.renderDailyEfforts(userResults);
    $('#daily-efforts-loading').css('display', 'none');
    loadedDailyEfforts = true;
  });
};

atcoder.main();
