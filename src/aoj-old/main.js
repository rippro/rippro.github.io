/*

 設定は冒頭の var config にまとまっています．
 ここをいじることで設定ができます．

 - メンバーの追加方法
   config.members に追加します
   ただし
      solved数 < config.deadline_solved && 最後に解いた日時 < 現在時刻 - config.deadline
   を満たしているメンバーは除外されます．

 - Volumeの追加方法
   config.volumes に追加します

 */

(function () {
    var config = {
        members: [
            { id: "Respect2D", generation: "OBOG" },
            { id: "kioa", generation: "OBOG" },
            { id: "yokit9", generation: "OBOG" },
            { id: "ik11235", generation: "OBOG" },
            { id: "utisam", generation: "OBOG" },
            { id: "OldBaka", generation: "OBOG" },
            { id: "nkkwe", generation: "OBOG" },
            { id: "KNKedge", generation: "OBOG" },
            { id: "slip0110", generation: "OBOG" },
            { id: "komi0222", generation: "OBOG" },
            { id: "menphim", generation: "OBOG" },
            { id: "ja3rno", generation: "OBOG" },
            { id: "dispenser", generation: "OBOG" },
            { id: "arsenic28", generation: "OBOG" },
            { id: "ayihis", generation: "OBOG" },
            { id: "fukku", generation: "OBOG" },
            { id: "bnsgny", generation: "OBOG" },
            { id: "CROW", generation: "OBOG" },
            { id: "is0220rk", generation: "OBOG" },
            { id: "okyyun", generation: "OBOG" },
            { id: "tmbsx", generation: "OBOG" },
            { id: "is0248vx", generation: "11th" },
            { id: "ixmel", generation: "11th" },
            { id: "futo", generation: "11th" },
            { id: "IS0283IR", generation: "11th" },
            { id: "moon_remon", generation: "11th" },
            { id: "Rp7rf", generation: "11th" },
            { id: "yazaten", generation: "OBOG" },
            { id: "sugarlight", generation: "12th" },
            { id: "is0310ph", generation: "12th" },
            { id: "is0332ev", generation: "12th" },
            { id: "Taka13", generation: "12th" },
            { id: "arle", generation: "12th" },
            { id: "noy72", generation: "12th" },
            { id: "rain", generation: "12th" },
            { id: "is0384er", generation: "13th" },
            { id: "shield_84", generation: "13th" },
            { id: "yoshikawa1118", generation: "13th" },
            { id: "yebityon", generation: "13th" },
            { id: "honey416x2", generation: "14th" },
            { id: "vvataarne", generation: "14th" },
            { id: "kuma13", generation: "14th" },
            { id: "UpGrass", generation: "14th" },
            { id: "pn33550336", generation: "14th" },
            { id: "masumi", generation: "14th" },
            { id: "k16180", generation: "14th" },
            { id: "fuu32", generation: "14th" }

        ],
        volumes: ["0", "1", "2", "5", "6", "10", "11", "12", "13", "15", "20", "21", "22", "23", "24", "25", "26", "27"],
        bounds: [
            { bound: 100, color: "rgba(153, 153, 153, 0.2)" },
            { bound: 200, color: "rgba(0, 169, 0, 0.2)" },
            { bound: 300, color: "rgba(102, 102, 255, 0.2)" },
            { bound: 700, color: "rgba(221, 204, 0, 0.2)" },
            { bound: 1000000, color: "rgba(238, 0, 0, 0.2)" }
        ],
        graph: {
            title: { text: null },
            tooltip: {
                "formatter": function () {
                    return '<b>' + this.point.userid + '</b><br/>' +
                        'Problem: ' + this.point.name + '<br/>Date: ' +
                        Highcharts.dateFormat('%e %b %Y', this.x) + '<br/>Solved: ' + this.y;
                }
            },
            xAxis: {
                type: 'datetime',
                "title": { "text": null },
                "dateTimeLabelFormats": { "year": "%Y" },
                "tickInterval": 30758400000
            },
            yAxis: {
                min: 0,
                startOnTick: false,
                "title": { "text": null },
                "plotLines": [{ "value": 0, "width": 1, "color": "#808080" }]
            },
            chart: { height: 600, type: 'line', zoomType: 'x', renderTo: "graph-container" },
            plotOptions: { series: { marker: { enabled: false } } },
            series: []
        },
        deadline: 24 * 3600 * 1000 * 90,
        deadline_solved: 100
    };

    var strage = {
        // membersから自動生成
        generations: [],
        currentProblems: [],
        currentMembers: []
    };

    // すべてのはじまり
    function init() {
        initGenerationArray();
        // 配列volumesに含まれるボリュームリストのDOMを構築する
        buildGeneraionTabAction();
        buildVolumeTabAction(config.volumes);

        // 初期状態
        selectGenaration('Active');
        selectVolume('0');

        $("#add-guest").click(function () {
            var guests = $.trim($("#guest-id").val()).split(" ");
            for (var i = 0; i < guests.length; i++) {
                addGuest(guests[i]);
            }
        });
        $("#remove-guest").click(function () {
            var guests = $.trim($("#guest-id").val()).split(" ");
            for (var i = 0; i < guests.length; i++) {
                removeGuest(guests[i]);
            }
        });
        $("#update-guest").click(function () {
            selectGenaration("Guest");
        });
    }

    // membersからvolumeを抽出し、strage.generationsを更新する
    // void -> void
    function initGenerationArray() {
        var temp = ["All", "Active"];
        for (var i = 0; i < config.members.length; i++) {
            temp.push(config.members[i].generation);
        }
        temp.sort();
        var n = temp.length;
        temp.push("XXXXX");
        strage.generations = [];
        for (var i = 0; i < n; i++) {
            if (temp[i] != temp[i + 1]) strage.generations.push(temp[i]);
        }
        strage.generations.push("Guest");
    }

    // String -> void
    function addGuest(guest_id) {
        var ok = true;
        for (var i = 0, l = config.members.length; i < l; i++) {
            if (config.members[i].generation === "Guest" && config.members[i].id === guest_id) {
                ok = false; break;
            }
        }
        if (!ok) return;
        config.members.push({ id: guest_id, generation: "Guest" });

        var gs = [];
        for (var i = 0, l = config.members.length; i < l; i++) {
            if (config.members[i].generation === "Guest") { gs.push(config.members[i].id); }
        }
        $("#guest-list").text(gs.join(" "));
    }

    // String -> void
    function removeGuest(guest_id) {
        var idx = -1;
        for (var i = 0, l = config.members.length; i < l; i++) {
            if (config.members[i].generation === "Guest" && config.members[i].id === guest_id) {
                idx = i; break;
            }
        }
        if (idx !== -1) {
            config.members.splice(idx, 1);
        } else return;
        var gs = [];
        for (var i = 0, l = config.members.length; i < l; i++) {
            if (config.members[i].generation === "Guest") { gs.push(config.members[i].id); }
        }
        $("#guest-list").text(gs.join(" "));
    }

    // volumeを切り替える
    // String -> void
    function selectVolume(volume) {
        // Volumeに含まれる問題リストを取得し、Objectの配列を構築する
        strage.currentProblems = getProblemList(volume);
        // DOMを構築する
        buildProblemList();
        // 構築したリストでメンバー毎にsolvedリストを埋める
        fillSolvedList();
    }

    // generationを切り替える
    // String -> void
    function selectGenaration(generation) {
        if (generation === "Guest") {
            $("#guest-form").show();
        } else {
            $("#guest-form").hide();
        }
        // メンバーを世代で指定し、Objectの配列を構築する
        strage.currentMembers = getMemberList(generation, generation === "Guest");
        // 構築したリストでメンバー毎にsolvedリストを埋める
        setTimeout(fillSolvedList, 1);
        setTimeout(fillRecentActivityList, 1);
        setTimeout(drawGraph, 1);
    }

    // strage.generationsに含まれるボリュームのタブを作る
    // [String] -> void
    function buildGeneraionTabAction() {
        // build tabs
        var $genarationUi = $('#generaion-tab');
        for (var i = 0, l = strage.generations.length; i < l; i++) {
            var $li = $('<li></li>')
                .append($('<a href="javascript:;">' + strage.generations[i] + '</a>')
                    .attr('id', 'generation-tab-' + strage.generations[i]));
            if (strage.generations[i] === 'Active') $li.addClass('active');
            $genarationUi.append($li);
        }

        for (var i = 0, l = strage.generations.length; i < l; i++) {
            $('#generation-tab-' + strage.generations[i]).click((function (gen) {
                selectGenaration(gen);
            }).bind(undefined, strage.generations[i]));
        }
        // tab onclick
        $('#generaion-tab > li > a').click(function () {
            $('#generaion-tab > li.active').removeClass('active');
            $(this).parent().addClass('active');
        });
    }

    // volumesに含まれるボリュームのタブを作る
    // [String] -> void
    function buildVolumeTabAction(volumes) {
        var $volumeUl = $('#volume-tab');
        // tabを作る
        function doit(volume) {
            var $li = $('<li></li>')
                .attr('id', 'volume-tab-' + volume)
                .append($('<a href="javascript:;">' + volume + '</a>'))
                .click((function (volume) {
                    selectVolume(volume);
                }).bind(undefined, volume));
            $volumeUl.append($li);
        }

        for (var i = 0, l = volumes.length; i < l; i++) {
            doit(volumes[i]);
        }
        doit("ALL");

        // tab onclick
        $('#volume-tab > li > a').click(function () {
            $('#volume-tab > li.active').removeClass('active');
            $(this).parent().addClass('active');
        });
    }

    // volumeから問題の配列を作る。ALLを指定すると全てのvolumeを連結する。
    // String -> [Object]
    function getProblemList(volume) {
        var res = [];
        if (volume != "ALL") {
            res = getProblemInfo(volume);
        } else {
            for (var i = 0, l = volumes.length; i < l; i++) {
                res = res.concat(getProblemInfo(volumes[i]));
            }
        }
        return res;
    }

    // volume::String に含まれる問題のリストを返す
    // String -> [Object]
    var dp2 = {}; // メモ化
    function getProblemInfo(volume) {
        if (dp2[volume]) return dp2[volume];
        var apiUrl = 'http://judge.u-aizu.ac.jp/onlinejudge/webservice/problem_list?volume=' + volume;
        var res = null;
        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'xml',
            timeout: '1000',
            async: false,
            success: function (xml) {
                // build ploblem list on table
                res = parseVolumeInfoXML(xml);
            }
        });
        return dp2[volume] = res;
    }

    // String -> [Object]
    function parseVolumeInfoXML(xml) {
        var problems = [];
        $(xml).find('problem_list').find('problem').each(function () {
            var problem = {};
            problem.id = $.trim($(this).find('id').text());
            problem.url = 'http://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=' + problem.id;
            problem.name = $.trim($(this).find('name').text());
            problems.push(problem);
        });
        return problems;
    }

    // void -> void
    // currntProblemを元に問題表のDOMを更新する
    function buildProblemList() {
        var $newTbody = $('<tbody id="problem-table-body"></tbody>');
        for (var i = 0, l = strage.currentProblems.length; i < l; i++) {
            var $tr = $('<tr id="' + strage.currentProblems[i].id + '"></tr>');
            var id = strage.currentProblems[i].id;
            var name = strage.currentProblems[i].name;
            var url = strage.currentProblems[i].url;
            var $a_id = $('<a>' + id + '</a>').attr('href', url);
            var $a_name = $('<a>' + name + '</a>').attr('href', url);
            $tr.append($('<td></td>').append($a_id));
            $tr.append($('<td></td>').append($a_name));
            $newTbody.append($tr);
        }
        $('#problem-table-body').replaceWith($newTbody);
    }

    // String,Bool -> [Object]
    // 世代に属するメンバーオブジェクトのリスト取得する。結果はsolved降順にソートされている
    function getMemberList(generation, noReject) {
        if (typeof noReject === 'undefined') noReject = false;
        var members_sel = [];
        for (var i = 0, l = config.members.length; i < l; i++) {
            var gen = config.members[i].generation;
            if (gen === undefined) continue;
            if (generation === 'All' ||
                (generation === 'Active' && gen.match(/th$/)) ||
                gen === generation) {
                members_sel.push(config.members[i].id);
            }
        }
        var res = [];
        var deadline = new Date(new Date() - config.deadline); // 3ヶ月前
        for (var i = 0, l = members_sel.length; i < l; i++) {
            var info = getMemberInfo(members_sel[i]);
            // 引退した人を排除する
            var len = info.solved_list.length;
            if (len === 0) continue;
            var solved = info.solved;
            var last_solved_at = new Date(info.solved_list[len - 1].submissiondate);
            if (!noReject && solved < config.deadline_solved && last_solved_at < deadline) {
                console.log(info.id + " has been dropped out (solved : " + solved + " last AC : " + last_solved_at + ")");
                continue;
            }
            res.push(info);
        }
        res.sort(function (a, b) {
            return -(a.solved - b.solved);
        });
        return res;
    }

    var dp1 = {};
    // String -> Object
    function getMemberInfo(memberid) {
        if (dp1[memberid]) return dp1[memberid];
        var apiUrl = 'http://judge.u-aizu.ac.jp/onlinejudge/webservice/user?id=' + memberid;
        var res = null;
        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'xml',
            timeout: '1000',
            // メンバーをsolved順にソートした後で表を埋めるなどの操作をしたいため、やむなく同期処理を行う
            async: false,
            success: function (xml) {
                res = parseUserInfoXML(xml);
            }
        });
        return dp1[memberid] = res;
    }

    // String -> Object
    function parseUserInfoXML(xml) {
        var res = {};
        var $xml = $(xml);
        res.id = $.trim($xml.find('user > id').text());
        res.name = $.trim($xml.find('user > name').text());
        // milisec
        var reg = new Date(parseInt($xml.find('user > registerdate').text()));
        res.age = new Date() - reg;
        res.solved = parseInt($.trim($xml.find('user > status > solved').text()));
        res.perDay = res.solved / (res.age / 1000 / 3600 / 24);
        res.inAWeek = 0;
        var lstweek = new Date() - 24 * 3600 * 1000 * 7;
        res.solved_list = [];
        res.solved_set = {};
        $xml.find('user > solved_list > problem').each(function () {
            var $prob = $(this);
            var prob = {};
            prob.id = $prob.find('id').text();
            prob.judge_id = $prob.find('judge_id').text();
            prob.submissiondate = parseInt($prob.find('submissiondate').text());
            if (prob.submissiondate >= lstweek) { res.inAWeek++; }
            res.solved_list.push(prob);
            res.solved_set[prob.id] = prob.judge_id;
        });
        res.solved_list.sort(function (a, b) {
            return a.submissiondate - b.submissiondate;
        });
        return res;
    }

    // void -> void
    function fillSolvedList() {
        var $header = $('#problem-table-head-tr');
        $('#problem-table > thead > tr > .header-user-name').remove();
        for (var i = 0, l = Math.min(20, strage.currentMembers.length); i < l; i++) {
            var id = strage.currentMembers[i].id;
            $header.append($('<th class="header-user-name text-center">' + id.substr(0, 3) + '</th>'));
        }

        $('#problem-table > tbody > tr').each(function () {
            var $raw = $(this);
            $raw.find('.solved-check').remove();
            var pid = $raw.attr('id');
            for (var i = 0, l = Math.min(20, strage.currentMembers.length); i < l; i++) {
                var member = strage.currentMembers[i];
                var $column = $('<td class="solved-check"></td>');
                var $solvedMark = $('<a></a>');
                if (pid in member.solved_set) {
                    $solvedMark.text('#');
                    $solvedMark.attr('href', 'http://judge.u-aizu.ac.jp/onlinejudge/review.jsp?rid=' + member.solved_set[pid]);
                }

                $column.append($solvedMark);
                $raw.append($column);
            }
        });
    }

    // void -> void
    function fillRecentActivityList() {
        var $newTbody = $('<tbody id="recent-activity-table-body"></tbody>');
        var cur = new Date();
        for (var i = 0, l = strage.currentMembers.length; i < l; i++) {
            var member = strage.currentMembers[i];
            var userColor = getColor(member.solved, 700, 300, 200, 100);
            var $row = $('<tr></tr>');
            $row.append($('<td>' + (i + 1) + '</td>'));
            var $id = $('<td></td>')
                .append($('<a>' + member.id + '</a>')
                    .attr('href', 'http://judge.u-aizu.ac.jp/onlinejudge/user.jsp?id=' + member.id)
                    .attr('style', userColor));
            $row.append($id);
            $row.append($('<td><span style="' + userColor + '">' + member.solved + '</span></td>'));
            $row.append($('<td>' + member.perDay.toFixed(2) + '</td>'));
            $row.append($('<td><span style="' + getColor(member.inAWeek, 10, 5, 3, 1) + '">' + member.inAWeek + '</td>'));
            for (var j = 0, m = Math.min(5, member.solved_list.length); j < m; j++) {
                var prob = member.solved_list[member.solved_list.length - 1 - j];
                var id = prob.id;
                var judge_id = prob.judge_id;
                var dt = cur - prob.submissiondate;
                var submissionColor = getColor(dt, 1000 * 60, 1000 * 60 * 60 * 24, 1000 * 60 * 60 * 24 * 7, 1000 * 60 * 60 * 24 * 30, true);
                var prob_url = 'http://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=' + id;
                var run_url = 'http://judge.u-aizu.ac.jp/onlinejudge/review.jsp?rid=' + judge_id;
                var $id = $('<td></td>')
                    .append($('<a><span style="' + submissionColor + '">' + id + '</span></a>')
                        .attr('href', prob_url));
                var $dt = $('<td></td>')
                    .append($('<a><span style="' + submissionColor + '">' + dtToString(dt) + '前</span></a>')
                        .attr('href', run_url));
                $row.append($id).append($dt);
            }
            $newTbody.append($row);
        }
        $('#recent-activity-table-body').replaceWith($newTbody);
    }

    // void -> void
    function drawGraph() {
        var series = [];
        for (var i = 0, n = strage.currentMembers.length; i < n; i++) {
            series.push(makeHighchartsSeries(strage.currentMembers[i]));
        }
        config.graph.yAxis.plotBands = config.bounds.map(function (b, i) {
            return { "from": i === 0 ? 0 : config.bounds[i - 1].bound, "to": b.bound - 1, "color": b.color };
        });
        config.graph.series = series;
        new Highcharts.Chart(config.graph);
    }

    // Object -> Object
    function makeHighchartsSeries(member_obj) {
        var n = member_obj.solved;
        var res = {
            name: member_obj.id,
            data: new Array(n),
            turboThreshold: 2000
        };
        for (var i = 0; i < n; i++) {
            var prob = member_obj.solved_list[i];
            // ユーザーによって solved_list.length != solved となる謎挙動がある
            // 例 : snukeさん
            if (prob === undefined) continue;
            res.data[i] = {
                x: new Date(prob.submissiondate) - 0,
                y: i + 1,
                name: prob.id,
                userid: member_obj.id
            };
        }
        return res;
    }

    // String -> String
    function dtToString(dt) {
        var res;
        if (dt <= 1000 * 60) {
            res = (dt / 1000).toFixed() + '秒';
        } else if (dt <= 1000 * 60 * 60) {
            res = (dt / 1000 / 60).toFixed() + '分';
        } else if (dt <= 1000 * 60 * 60 * 24) {
            res = (dt / 1000 / 60 / 60).toFixed() + '時間';
        } else {
            res = (dt / 1000 / 60 / 60 / 24).toFixed() + '日';
        }
        return res;
    };

    // Number,Number,Number,Number,Number,Bool -> String
    function getColor(x, a, b, c, d, inv) {
        if (inv) {
            x *= -1; a *= -1; b *= -1; c *= -1; d *= -1;
        }
        var res = 'color:';
        if (x >= a) {
            res += 'red';
        } else if (x >= b) {
            res += 'orange';
        } else if (x >= c) {
            res += 'blue';
        } else if (x >= d) {
            res += 'green';
        } else {
            res += 'grey';
        }
        res += ';';
        return res;
    };

    // main
    $.event.add(window, "load", init);
})();
