aoj.api = {};

aoj.api.baseUrl = 'https://judgeapi.u-aizu.ac.jp';

aoj.api.request = (url, params) =>
  fetch(`${url}?${$.param(Object.assign({ _timestamp: +new Date() }, params))}`)
    .then(x => x.json());

aoj.api.users = {};

aoj.api.users.findById = id =>
  aoj.api.request(`${aoj.api.baseUrl}/users/${id}`);

aoj.api.submissions = {};

aoj.api.submissions.findByUserId = (userId, page) =>
  aoj.api.request(`${aoj.api.baseUrl}/submission_records/users/${userId}`, { page });

aoj.api.submissions.findAllByUserId = userId =>
  new Promise((resolve, reject) => {
    let allSubmissions = [];
    let page = 0;
    let tryUnlessEmpty = () => {
      aoj.api.submissions.findByUserId(userId, page).then(nextSubmissions => {
        if (nextSubmissions.length === 0) {
          allSubmissions.sort((a, b) => b.submissionDate - a.submissionDate);
          resolve(allSubmissions);
          return;
        }
        allSubmissions = allSubmissions.concat(nextSubmissions);
        page++;
        tryUnlessEmpty();
      });
    };
    tryUnlessEmpty();
  });

aoj.getAllSubmissions = () =>
  Promise.all(aoj.settings.users
    .map(user =>
      aoj.api.submissions.findAllByUserId(user).then(submissions => {
        return { user, submissions };
      }))
  );

aoj.main = () => {
  {
    let m = new Map();
    let xs = location.search.substring(1).split('&');
    for (let x of xs) {
      let p = x.split('=');
      m.set(p[0], decodeURIComponent(p[1]));
    }
    if (m.has('q')) $('#input').val(m.get('q'));
  }
  aoj.getAllSubmissions().then(userSubmissions => {
    let submissions = [];
    for (let { submissions: _submissions } of userSubmissions) submissions = submissions.concat(_submissions);
    submissions.sort((a, b) => b.submissionDate - a.submissionDate);
    let map = new Map();
    for (let submission of submissions) {
      if (!map.has(submission.problemId.toLowerCase())) map.set(submission.problemId.toLowerCase(), []);
      if (!map.has(submission.userId.toLowerCase())) map.set(submission.userId.toLowerCase(), []);
      map.get(submission.problemId.toLowerCase()).push(submission);
      map.get(submission.userId.toLowerCase()).push(submission);
    }

    $('#input').on('keyup', update);
    let prevTarget = null;
    update();
    $('#loading').css('display', 'none');

    function update() {
      let target = $('#input').val().trim();
      if (prevTarget === target) return;
      prevTarget = target;
      history.replaceState('', '', `?q=${target}`);
      target = target.toLowerCase();

      let $newSubmissions = $('<tbody id="submissions">');

      let result = ['CE', 'WA', 'TLE', 'MLE', 'AC', 'WAITING', 'OLE', 'RE', 'PE', 'RUNNING'];
      result[-1] = 'JNA';

      if (target === '') {
        for (let i = 0; i < Math.min(400, submissions.length); i++) append(submissions[i]);
      } else if (map.has(target)) {
        let subs = map.get(target);
        for (let i = 0; i < Math.min(400, subs.length); i++) append(subs[i]);
      }
      $('#submissions').replaceWith($newSubmissions);


      function append(submission) {
        $tr = $('<tr>');
        $('<td>').text(moment(submission.submissionDate).format('YYYY/MM/DD HH:mm:ss')).appendTo($tr);
        $('<td>').append($('<a>').attr('href', `https://onlinejudge.u-aizu.ac.jp/#/challenges/search/titles/${submission.problemId}`).text(submission.problemId)).appendTo($tr);
        $('<td>').text(submission.userId).appendTo($tr);
        $('<td>').text(submission.language).appendTo($tr);
        $('<td class="right">').append($('<a>').attr('href', `https://onlinejudge.u-aizu.ac.jp/#/recent_judges/${submission.problemId}/judge/${submission.judgeId}/${submission.userId}/${submission.language}`).text(`${submission.codeSize} bytes`)).appendTo($tr);
        $('<td class="center">').append($('<div>').addClass(result[submission.status].toLowerCase()).text(result[submission.status])).appendTo($tr);
        if (submission.status === 4) $('<td class="right">').text(`${submission.cpuTime * 10}ms`).appendTo($tr);
        $tr.appendTo($newSubmissions);
      }
    }
  });
};

$(aoj.main);
