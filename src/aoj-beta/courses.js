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

aoj.api.problems = {};

aoj.api.problems.findAllcourses = () =>
  aoj.api.request(`${aoj.api.baseUrl}/courses`).then(x => x.courses);

aoj.api.problems.findBycourseId = courseId =>
  aoj.api.request(`${aoj.api.baseUrl}/courses/${courseId}`).then(x => x.course);

aoj.ui = {};

aoj.ui.renderTable = (userSolutions, courses) => {
  courses.sort((a, b) => a.serial - b.serial);
  for (let course of courses) {
    $('<h2>').attr('id', `course-header-${course.id}`).text(course.name).appendTo($('#courses'));
    let $table = $('<table>').attr('id', `course-${course.id}`).appendTo($('#courses'));
    {
      let $tr = $('<tr>');
      $('<th>').appendTo($tr);
      for (let user of aoj.settings.users) {
        $('<th>').text(user).appendTo($tr);
      }
      $tr.appendTo($table)
    }
    $('<li>').append($('<a>').attr('href', `#course-header-${course.id}`).text(course.name)).appendTo($('#course-list'));
    aoj.api.problems.findBycourseId(course.id).then(x => {
      let topics = x.topics;
      for (let topic of topics) {
        for (let problem of topic.problems) {
          let $tr = $('<tr>');
          $('<td>').append(
            $('<a>').attr('href', `https://onlinejudge.u-aizu.ac.jp/#/courses/${course.type}/${course.id}/${course.shortName}/${course.id}/${problem.id}`).text(problem.name)
          ).appendTo($tr);
          for (let user of aoj.settings.users) {
            let $td = $('<td>').appendTo($tr);
            if (userSolutions.get(user).has(problem.id)) {
              $td.text(user).addClass('solved');
            }
          }
          $tr.appendTo($table);
        }
      }
    });
  }
};

aoj.getAllSolutions = () =>
  Promise.all(aoj.settings.users
    .map(user =>
      aoj.api.solutions.findAllByUserId(user).then(solutions => {
        return { user, solutions };
      }))
  );

aoj.main = () => {
  aoj.getAllSolutions().then(userSolutions => {
    {
      let us = new Map();
      for (let x of userSolutions) {
        let solutions = new Set();
        for (let solution of x.solutions) solutions.add(solution.problemId);
        x.solutions = solutions;
        us.set(x.user, solutions);
      }
      userSolutions = us;
    }
    aoj.api.problems.findAllcourses().then(courses => {
      aoj.ui.renderTable(userSolutions, courses);
      $('#loading').css('display', 'none');
    });
  });
};

$(aoj.main);
