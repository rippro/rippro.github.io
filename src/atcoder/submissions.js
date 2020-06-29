atcoder.api = {};

atcoder.api.baseUrl = 'https://kenkoooo.com/atcoder/atcoder-api';

atcoder.api.request = (url, params) => {
  return fetch(`${url}?${$.param(Object.assign({ _timestamp: +new Date() }, params))}`).then(x => x.json());
};

atcoder.api.getResults = users =>
  atcoder.api.request(`${atcoder.api.baseUrl}/results`, { rivals: users.join(',') });

atcoder.main = () => {
  {
    let m = new Map();
    let xs = location.search.substring(1).split('&');
    for (let x of xs) {
      let p = x.split('=');
      m.set(p[0], decodeURIComponent(p[1]));
    }
    if (m.has('q')) $('#input').val(m.get('q'));
  }
  atcoder.api.getResults(atcoder.settings.users).then(results => {
    results.sort((a, b) => b.epoch_second - a.epoch_second);
    let map = new Map();
    for (let result of results) {
      if (!map.has(result.contest_id.toLowerCase())) map.set(result.contest_id.toLowerCase(), []);
      if (!map.has(result.problem_id.toLowerCase())) map.set(result.problem_id.toLowerCase(), []);
      if (!map.has(result.user_id.toLowerCase())) map.set(result.user_id.toLowerCase(), []);
      map.get(result.contest_id.toLowerCase()).push(result);
      map.get(result.problem_id.toLowerCase()).push(result);
      map.get(result.user_id.toLowerCase()).push(result);
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

      if (target === '') {
        for (let i = 0; i < Math.min(200, results.length); i++) append(results[i]);
      } else if (map.has(target)) {
        for (let result of map.get(target)) append(result);
      }
      $('#submissions').replaceWith($newSubmissions);

      function append(result) {
        $tr = $('<tr>');
        $('<td>').text(moment(result.epoch_second * 1000).format('YYYY/MM/DD HH:mm:ss')).appendTo($tr);
        $('<td>').append($('<a>').attr('href', `https://beta.atcoder.jp/contests/${result.contest_id}/tasks/${result.problem_id}`).text(result.problem_id)).appendTo($tr);
        $('<td>').text(result.user_id).appendTo($tr);
        $('<td>').text(result.language).appendTo($tr);
        $('<td class="right">').text(result.point).appendTo($tr);
        $('<td class="right">').append($('<a>').attr('href', `https://beta.atcoder.jp/contests/${result.contest_id}/submissions/${result.id}`).text(`${result.length} bytes`)).appendTo($tr);
        $('<td class="center">').append($('<div>').addClass(result.result.toLowerCase()).text(result.result)).appendTo($tr);
        if (result.result === 'AC') $('<td class="right">').text(`${result.execution_time}ms`).appendTo($tr);
        $tr.appendTo($newSubmissions);
      }
    }
  });
};

$(atcoder.main);
