atcoder.api = {};


atcoder.api.baseUrl = 'https://kenkoooo.com/atcoder/atcoder-api';

atcoder.api.request = (url) => {
  return fetch(`${url}`).then(function (response){
    return response.json();
  });
};

atcoder.api.getACCount= (handle) =>{
  let url = "https://kenkoooo.com/atcoder/atcoder-api/v2/user_info?user="+handle;
  return atcoder.api.request(url).then(data => {
    const user_info = {user:data.user_id,count:data.accepted_count};
    return user_info;
  });
};

// atcoder.api.getResults = users => {
//   return atcoder.api.request(`${atcoder.api.baseUrl}/results`, { rivals: users.join(',') }).then(results => {
//     results.sort((a, b) => a.epoch_second - b.epoch_second);
//     let problems = new Map(), userResults = new Map();
//     for (let user of atcoder.settings.users) {
//       problems.set(user, new Set());
//       userResults.set(user, []);
//     }
//     for (let result of results) {
//       if (result.result != "AC") continue;
//       if (problems.get(result.user_id).has(result.problem_id)) continue;
//       problems.get(result.user_id).add(result.problem_id);
//       userResults.get(result.user_id).push(result);
//     }
//     return userResults;
//   });
// };

atcoder.ui = {};

atcoder.ui.renderSummary = counts => {
  new Highcharts.Chart({
    title: { text: null },
    xAxis: {
      title: { text: null },
      categories: counts.map(({ user, count }) => user)
    },
    yAxis: {
      title: { text: null },
    },
    chart: { type: 'bar', renderTo: 'summary' },
    plotOptions: {
      bar: {
        showInLegend: false
      }
    },
    credits: { enabled: false },
    series: [{
      name: 'Solved',
      data: counts.map(({ user, count }) => count)
    }]
  });
};

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
        if (results.length === 0) continue;
        let obj = { name: user, data: [], turboThreshold: 2000 };
        let i = 1;
        for (let result of results) {
          obj.data.push({
            x: new Date(result.epoch_second) * 1000,
            y: i++,
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

// atcoder.main = () => {
//   atcoder.api.getACCount().then(data => {
//     let counts = [];
//     atcoder.settings.users.forEach(user => {
//       counts.push({ user, count: data[user] });
//     });
//     counts.sort((a, b) => b.count - a.count);
//     atcoder.ui.renderSummary(counts);
//     $('#summary-loading').css('display', 'none');
//   });
//   let loadedDailyEfforts = false;
//   {
//     function loadingAnimation() {
//       $('#daily-efforts-loading').text($('#daily-efforts-loading').text() + '.');
//       if (!loadedDailyEfforts) setTimeout(loadingAnimation, 1000);
//     }
//     loadingAnimation();
//   }
//   atcoder.api.getResults(atcoder.settings.users).then(userResults => {
//     atcoder.ui.renderDailyEfforts(userResults);
//     $('#daily-efforts-loading').css('display', 'none');
//     loadedDailyEfforts = true;
//   });
// };

atcoder.main = () => {
  let members = [];

  atcoder.settings.users.forEach(user => {
    atcoder.api.getACCount(user).then(data => {
      members.push(data);
      members.sort((a,b)　=> b.count - a.count);
      atcoder.ui.renderSummary(members);
      $('#summary-loading').css('display', 'none');
    });
  });


  //atcoder.ui.renderSummary(members);
  //
  // atcoder.api.getACCount().then(data => {
  //   let counts = [];
  //   atcoder.settings.users.forEach(user => {
  //     counts.push({ user, count: data[user] });
  //   });
  //   counts.sort((a, b) => b.count - a.count);
  //   atcoder.ui.renderSummary(counts);
  //   $('#summary-loading').css('display', 'none');
  // });
  // let loadedDailyEfforts = false;
  // {
  //   function loadingAnimation() {
  //     $('#daily-efforts-loading').text($('#daily-efforts-loading').text() + '.');
  //     if (!loadedDailyEfforts) setTimeout(loadingAnimation, 1000);
  //   }
  //   loadingAnimation();
  // }

  // atcoder.api.getResults(atcoder.settings.users).then(userResults => {
  //   atcoder.ui.renderDailyEfforts(userResults);
  //   $('#daily-efforts-loading').css('display', 'none');
  //   loadedDailyEfforts = true;
  // });
};

atcoder.main();
