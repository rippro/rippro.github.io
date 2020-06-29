aoj.api = {};

aoj.api.baseUrl = 'https://judgeapi.u-aizu.ac.jp';

aoj.api.request = (url, params) =>
  fetch(`${url}?${$.param(Object.assign({ _timestamp: +new Date() }, params))}`)
    .then(x => x.json());

aoj.api.users = {};

aoj.api.users.findById = id =>
  aoj.api.request(`${aoj.api.baseUrl}/users/${id}`);

aoj.api.solutions = {};

aoj.api.solutions.findByUserId = (userId, page) =>
  aoj.api.request(`${aoj.api.baseUrl}/solutions/users/${userId}`, { page });

aoj.api.solutions.findAllByUserId = userId =>
  new Promise((resolve, reject) => {
    let allSolutions = [];
    let page = 0;
    let tryUnlessEmpty = () => {
      aoj.api.solutions.findByUserId(userId, page).then(nextSolutions => {
        if (nextSolutions.length === 0) {
          allSolutions.sort((a, b) => a.submissionDate - b.submissionDate);
          resolve(allSolutions);
          return;
        }
        allSolutions = allSolutions.concat(nextSolutions);
        page++;
        tryUnlessEmpty();
      });
    };
    tryUnlessEmpty();
  });

aoj.ui = {};

aoj.ui.makeSeries = userSolutions => {
  let series = [];
  for (let { user, solutions } of userSolutions) {
    if (solutions.length === 0) continue;

    let obj = { name: user, data: [], turboThreshold: 2000 };
    let i = 1;
    for (let solution of solutions) {
      obj.data.push({
        x: new Date(solution.submissionDate) - 0,
        y: i++,
        name: solution.problemId,
        userId: user
      });
    }
    series.push(obj);
  }
  return series;
};

aoj.ui.renderDailyEfforts = userSolutions => {
  new Highcharts.Chart({
    title: { text: null },
    tooltip: {
      formatter: function () {
        return `<b>${this.point.userId}</b><br />` +
          `Problems: ${this.point.name}<br />` +
          `Date: ${Highcharts.dateFormat('%e %b %Y', this.x)}<br />` +
          `Solved: ${this.y}`;
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
      plotBands: [
        { "from": 0, "to": 100 - 1, "color": "rgba(153, 153, 153, 0.2)" },
        { "from": 100, "to": 200 - 1, "color": "rgba(0, 169, 0, 0.2)" },
        { "from": 200, "to": 300 - 1, "color": "rgba(102, 102, 255, 0.2)" },
        { "from": 300, "to": 700 - 1, "color": "rgba(221, 204, 0, 0.2)" },
        { "from": 700, "to": 1000000, "color": "rgba(238, 0, 0, 0.2)" }
      ]
    },
    chart: { height: 600, type: 'line', zoomType: 'x', renderTo: 'daily-efforts' },
    plotOptions: { series: { marker: { enabled: false } } },
    credits: { enabled: false },
    series: aoj.ui.makeSeries(userSolutions)
  });
};

aoj.ui.renderActivities = (userSolutions, registerDates) => {
  userSolutions.sort((a, b) => b.solutions.length - a.solutions.length);
  let rank = 1;
  let now = new Date();
  let lastWeek = now - 7 * 24 * 3600 * 1000;
  for (let { user, solutions } of userSolutions) {
    let $tr = $('<tr>');
    $('<td>').text(rank++).appendTo($tr);
    $('<td>').append($('<a>').attr('href', `https://onlinejudge.u-aizu.ac.jp/#/status/users/${user}`).text(user)).appendTo($tr);
    $('<td>').text(solutions.length).appendTo($tr);
    let perDay = solutions.length / (now - registerDates.get(user)) * (24 * 3600 * 1000)
    $('<td>').text(perDay.toFixed(2)).appendTo($tr);
    let inAWeek = 0;
    for (let solution of solutions) if (solution.submissionDate >= lastWeek) inAWeek++;
    $('<td>').text(inAWeek).appendTo($tr);
    for (let i = solutions.length - 1; i >= Math.max(0, solutions.length - 5); i--) {
      $('<td>').append($('<a>').attr('href', `https://onlinejudge.u-aizu.ac.jp/#/challenges/search/titles/${solutions[i].problemId}`).text(solutions[i].problemId)).appendTo($tr);
      $('<td>').append($('<a>').attr('href', `https://onlinejudge.u-aizu.ac.jp/#/recent_judges/${solutions[i].problemId}/judge/${solutions[i].judgeId}/${solutions[i].userId}/${solutions[i].language}`).text(`${aoj.formatDate(now - solutions[i].submissionDate)}前`)).appendTo($tr);
    }
    $tr.appendTo($('#activities'));
  }
};

aoj.formatDate = date => {
  if (date <= 1000 * 60 * 60) return `${(date / 1000 / 60).toFixed()}分`;
  if (date <= 1000 * 60 * 60 * 24) return `${(date / 1000 / 60 / 60).toFixed()}時間`;
  return `${(date / 1000 / 60 / 60 / 24).toFixed()}日`;
};

aoj.nubSolutions = solutions => { // Remove duplicates and junks
  let newSolutions = [];
  let problems = new Set();
  for (let solution of solutions) {
    if (!solution.problemId.match(/^[0-9]{4}$/)) continue;
    if (problems.has(solution.problemId)) continue;
    newSolutions.push(solution);
    problems.add(solution.problemId);
  }
  return newSolutions;
};

aoj.getAllSolutions = () =>
  Promise.all(aoj.settings.users
    .map(user =>
      aoj.api.solutions.findAllByUserId(user).then(solutions => {
        return { user, solutions };
      }))
  );

aoj.getAllUsers = () =>
  Promise.all(aoj.settings.users
    .map(user => aoj.api.users.findById(user))
  );

aoj.main = () => {
  aoj.getAllSolutions().then(userSolutions => {
    let nubbedUserSolutions = userSolutions.map(({ user, solutions }) => {
      return { user, solutions: aoj.nubSolutions(solutions) };
    });
    aoj.getAllUsers().then(users => {
      let registerDates = new Map();
      for (let user of users) registerDates.set(user.id, user.registerDate);
      aoj.ui.renderActivities(nubbedUserSolutions, registerDates);
      $('#activities-loading').css('display', 'none');
    })
    aoj.ui.renderDailyEfforts(nubbedUserSolutions);
    $('#daily-efforts-loading').css('display', 'none');
  });
};

$(aoj.main);
