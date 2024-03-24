/** @format */
import detailsStyle from '../styles/details.module.css'

export type EventType = {
  title: string
  detail: string
  date?: 'Day 1' | 'Day 2' | 'Day 3'
  id: string
}

// TODO: detailの日時・場所をのフォーマット統一させる
export const Events: EventType[] = [
  {
    title: '立命合宿 2019',
    date: 'Day 1',
    detail: '3/5 - 3/7 立命館大学 BKC にて合宿を開催．',
    id: 'rupc2019'
  },
  {
    title: '会津合宿 2018',
    date: 'Day 1',
    detail: '会津大学 9/19 - 9/21 に行われた合宿に参加しました．',
    id: 'acpc2018'
  },
  {
    title: '立命合宿 2018',
    date: 'Day 1',
    detail: '3/26 - 3/28 立命館大学 BKC にて合宿を開催．',
    id: 'rupc2018'
  },
  {
    title: '会津合宿 2017',
    date: 'Day 1',
    detail: '会津大学にて 9/18 - 9/20 に行われた合宿に参加しました．',
    id: 'acpc2017'
  },
  {
    title: '立命合宿 2017',
    date: 'Day 1',
    detail: '3/22 - 3/24 立命館大学 BKC にて合宿を開催しました．',
    id: 'rupc2017'
  },
  {
    title: '会津合宿 2016',
    date: 'Day 1',
    detail: '会津大学にて 9/17 - 9/19 に行われた合宿に参加しました．',
    id: 'acpc2016'
  },
  {
    title: '立命合宿 2016',
    date: 'Day 1',
    detail: '3/6 - 3/8 立命館大学 BKC にて合宿を開催しました．',
    id: 'rupc2016'
  },
  {
    title: '会津合宿 2015',
    date: 'Day 1',
    detail: '会津大学にて 9/21 - 9/23 に行われた合宿に参加しました．',
    id: 'acpc2015'
  },
  {
    title: '立命合宿 2015',
    date: 'Day 1',
    detail: '3/14 - 3/16 立命館大学 BKC にて合宿を開催しました．',
    id: 'rupc2015'
  },
  {
    title: '立命合宿 2013',
    date: 'Day 3',
    detail: '3/11 - 3/13 立命館大学 BKC にて合宿を開催しました．',
    id: 'rupc2013'
  },
  {
    title: '会津合宿 2012',
    date: 'Day 1',
    detail: '会津大学にて9/3 - 9/5に行われた合宿に参加しました．',
    id: 'acpc2012'
  },
  {
    title: '立命合宿 2012',
    date: 'Day 3',
    detail: '3/13 - 3/15 立命館大学 BKC にて合宿を開催しました．',
    id: 'rupc2012'
  },
  {
    title: '立命館プログラミングコンテスト2011',
    detail: '10/15 立命館大学 BKC にてコンテストを開催しました.',
    id: 'rupc2011'
  }
]

type problemSetType = {
  college: string
  link: string
}

type problemType = {
  title: string
  link: string
}

type otherContentType = {
  title: string
  content: JSX.Element
}

export type EventDetailType = {
  title: string
  day?: 'Day 1' | 'Day 2' | 'Day 3'
  date: {
    begin: string
    end: string
  }
  detailURL?: string
  problemSet: problemSetType[]
  commentary: problemType[]
  writer?: string[]
  picture?: string
  judge?: string
  iodata?: JSX.Element
  schedule?: JSX.Element
  place?: string
  otherContent?: otherContentType[]
}

type EventDetailsType = {
  [key: string]: EventDetailType
}

export const EventDetails: EventDetailsType = {
  rupc2019: {
    title: '立命合宿 2019',
    day: 'Day 1',
    date: {
      begin: '2019/3/5',
      end: '2019/3/7'
    },
    problemSet: [
      {
        college: 'Day 1 (立命館大学)',
        link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp19Day1'
      },
      {
        college: 'Day 2 (会津大学さん)',
        link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp19Day2'
      },
      {
        college: 'Day 3 (北海道大学さん)',
        link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp19Day3'
      }
    ],
    commentary: [
      { title: '全体講評', link: 'kohyo.pdf' },
      { title: 'A: タイル貼り', link: 'A.pdf' },
      { title: 'B: たぬきつね', link: 'B.pdf' },
      { title: 'C: オセロ', link: 'C.pdf' },
      { title: 'D: 場所当てゲーム', link: 'D.pdf' },
      { title: 'E: LISum', link: 'E.pdf' },
      { title: 'F: Absum', link: 'F.pdf' },
      { title: 'G: イルミネーション', link: 'G.pdf' }
    ]
  },
  acpc2018: {
    title: '会津合宿 2018',
    day: 'Day 1',
    date: {
      begin: '2018/9/19',
      end: '2018/9/21'
    },
    detailURL: 'https://web.archive.org/web/20190321162010/https://atnd.org/events/98718',
    problemSet: [
      {
        college: 'Day1(立命館大学)',
        link: 'https://onlinejudge.u-aizu.ac.jp/services/room.html#ACPC2018Day1'
      },
      {
        college: 'Day2(会津大学)',
        link: 'https://onlinejudge.u-aizu.ac.jp/services/room.html#ACPC2018Day2'
      },
      {
        college: 'Day3(北海道大学)',
        link: 'https://onlinejudge.u-aizu.ac.jp/services/room.html#ACPC2018Day3'
      }
    ],
    commentary: [
      { title: '全体講評', link: 'kohyo.pdf' },
      { title: 'A: テスト', link: 'A.pdf' },
      { title: 'B: 直角三角形', link: 'B.pdf' },
      { title: 'C: 素数', link: 'C.pdf' },
      { title: 'D: 遭難', link: 'D.pdf' },
      { title: 'E: 凸凹数列', link: 'E.pdf' },
      { title: 'F: Swap', link: 'F.pdf' },
      { title: 'G: 式の切り取り', link: 'G.pdf' },
      { title: 'H: 板', link: 'H.pdf' }
    ]
  },
  rupc2018: {
    title: '立命合宿 2018',
    day: 'Day 1',
    date: {
      begin: '2018/3/26',
      end: '2018/3/28'
    },
    detailURL: 'https://web.archive.org/web/20180202123544/https://atnd.org/events/94033',
    problemSet: [
      {
        college: 'Day 1 (立命館大学)',
        link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp18Day1'
      },
      {
        college: 'Day 2 (会津大学さん)',
        link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp18Day2'
      },
      {
        college: 'Day 3 (北海道大学さん)',
        link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp18Day3'
      }
    ],
    commentary: [
      { title: '全体講評', link: 'kohyo.pdf' },
      { title: 'A: 鳩ノ巣原理', link: 'A.pdf' },
      { title: 'B: 写像', link: 'B.pdf' },
      { title: 'C: 一致', link: 'C.pdf' },
      { title: 'D: 水槽', link: 'D.pdf' },
      { title: 'E: いたずらされたグラフ', link: 'E.pdf' },
      { title: 'F: ごちうさ数', link: 'F.pdf' },
      { title: 'G: エレベータ', link: 'G.pdf' }
    ]
  },
  acpc2017: {
    title: '会津合宿 2017',
    day: 'Day 1',
    date: {
      begin: '2017/9/18',
      end: '2017/9/20'
    },
    problemSet: [
      { college: 'Day1(立命館大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#ACPC2017Day1' },
      { college: 'Day2(会津大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#ACPC2017Day2' },
      { college: 'Day3(北海道大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#ACPC2017Day3' }
    ],
    commentary: [
      { title: '全体講評', link: 'kohyo.pdf' },
      { title: 'A: 丸付け', link: 'A.pdf' },
      { title: 'B: 全日本帰りたい協会', link: 'B.pdf' },
      { title: 'C: ツイート数', link: 'C.pdf' },
      { title: 'D: 次元旅行', link: 'D.pdf' },
      { title: 'E: 敵襲から守れ', link: 'E.pdf' },
      { title: 'F: 階段', link: 'F.pdf' },
      { title: 'G: 鍵', link: 'G.pdf' }
    ]
  },
  rupc2017: {
    title: '立命合宿 2017',
    day: 'Day 1',
    date: {
      begin: '2017/3/22',
      end: '2017/3/24'
    },
    detailURL: 'https://web.archive.org/web/20181205111517/https://atnd.org/events/85691',
    problemSet: [
      {
        college: 'Day 1 (立命館大学 & 大阪大学)',
        link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp17Day1'
      },
      { college: 'Day 2 (会津大学さん)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp17Day2' },
      { college: 'Day 3 (北海道大学さん)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp17Day3' }
    ],
    commentary: [
      { title: '全体講評', link: 'kohyo.pdf' },
      { title: 'A: トーナメント', link: 'A.pdf' },
      { title: 'B: 重さの範囲', link: 'B.pdf' },
      { title: 'C: Fractal Tree', link: 'C.pdf' },
      { title: 'D: パスワード', link: 'D.pdf' },
      { title: 'E: 卒業式', link: 'E.pdf' },
      { title: 'F: カードゲーム', link: 'F.pdf' },
      { title: 'G: 雨降りバス乗り替え', link: 'G.pdf' },
      { title: 'H: ジャンプパーティ', link: 'H.pdf' },
      { title: 'I: Islands Survival', link: 'I.pdf' },
      { title: 'J: エナジードリンク', link: 'J.pdf' },
      { title: 'K: AORイカちゃんの成績', link: 'K.pdf' }
    ]
  },
  acpc2016: {
    title: '会津合宿 2016',
    day: 'Day 1',
    date: {
      begin: '2016/9/17',
      end: '2016/9/19'
    },
    detailURL: 'https://web.archive.org/web/20200326193543/https://atnd.org/events/79743',
    problemSet: [
      { college: 'Day1(立命館大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#ACPC2016Day1' },
      { college: 'Day2(会津大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#ACPC2016Day2' },
      { college: 'Day3(北海道大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp16Day3' }
    ],
    commentary: [
      { title: '全体講評', link: 'kohyo.pdf' },
      { title: 'A: キャベツ', link: 'A.pdf' },
      { title: 'B: イカったー', link: 'B.pdf' },
      { title: 'C: 失われしグラフ', link: 'C.pdf' },
      { title: 'D: DAGトリオ(Easy)', link: 'D.pdf' },
      { title: 'E: 札', link: 'E.pdf' },
      { title: 'F: 紙の折りたたみ', link: 'F.pdf' },
      { title: 'G: DAGトリオ(Hard)', link: 'G.pdf' }
    ]
  },
  rupc2016: {
    title: '立命合宿 2016',
    day: 'Day 1',
    date: {
      begin: '2016/3/6',
      end: '2016/3/8'
    },
    problemSet: [
      { college: 'Day 1 (立命館大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp16Day1' },
      { college: 'Day 2 (会津大学さん)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp16Day2' },
      { college: 'Day 3 (北海道大学さん)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp16Day3' }
    ],
    commentary: [
      { title: 'A: 秤', link: 'A.pdf' },
      { title: 'B: ハミング距離', link: 'B.pdf' },
      { title: 'C: 足し算掛け算', link: 'C.pdf' },
      { title: 'D: スキャナー', link: 'D.pdf' },
      { title: 'E: 28', link: 'E.pdf' },
      { title: 'F: リレー', link: 'F.pdf' },
      { title: '別解', link: 'F_tm.pdf' },
      { title: 'G: 塗るだけ', link: 'G.pdf' }
    ]
  },
  acpc2015: {
    title: '会津合宿 2015',
    day: 'Day 1',
    date: {
      begin: '2015/9/21',
      end: '2015/9/23'
    },
    detailURL: '',
    problemSet: [
      { college: 'Day1(立命館大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#ACPC2015Day1' },
      { college: 'Day2(会津大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#ACPC2015Day2' },
      { college: 'Day3(北海道大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#ACPC2015Day3' }
    ],
    commentary: [
      { title: 'A: 指折り数えて', link: 'A.pdf' },
      { title: 'B: 平均値の嘘', link: 'B.pdf' },
      { title: 'C: 壺', link: 'C.pdf' },
      { title: 'D: 市松模様', link: 'D.pdf' },
      { title: 'E: 台風', link: 'E.pdf' },
      { title: 'F: 卵', link: 'F.pdf' }
    ]
  },
  rupc2015: {
    title: '立命合宿 2015',
    day: 'Day 1',
    date: {
      begin: '2015/3/14',
      end: '2015/3/16'
    },
    detailURL: 'https://web.archive.org/web/20150928232752/https://atnd.org/events/62742',
    problemSet: [
      { college: 'Day1(立命館大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp15Day1' },
      { college: 'Day2(会津大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp15Day2' },
      { college: 'Day3(北海道大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp15Day3' }
    ],
    commentary: [
      { title: '総評', link: 'all.pdf' },
      { title: 'A: Soccer', link: 'A.pdf' },
      { title: 'B: RUPC', link: 'B.pdf' },
      { title: 'C: Shopping', link: 'C.pdf' },
      { title: 'D: Hopping Hearts', link: 'D.pdf' },
      { title: 'E: Ocarina of Time', link: 'E.pdf' },
      { title: 'F: Tree', link: 'F.pdf' },
      { title: "G: Bob's Bomb", link: 'G.pdf' }
    ],
    picture: 'rupc2015.png',
    judge: 'http://judge.u-aizu.ac.jp/onlinejudge/index.jsp',
    place: '立命館大学BKC',
    schedule: (
      <table className={detailsStyle.table}>
        <thead>
          <tr className={detailsStyle.tr}>
            <th className={detailsStyle.th}>Day</th>
            <th className={detailsStyle.th}>Time</th>
            <th className={detailsStyle.th}></th>
          </tr>
        </thead>
        <tbody>
          <tr className={detailsStyle.tr}>
            <th className={detailsStyle.th} rowSpan={5}>
              Day 1
            </th>
            <td className={detailsStyle.td}>13:00 - 14:00</td>
            <td className={detailsStyle.td}>集合，開会，自己紹介など</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <td className={detailsStyle.td}>14:00 - 14:30</td>
            <td className={detailsStyle.td}>チーム編成</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <td className={detailsStyle.td}>14:30 - 17:30</td>
            <td className={detailsStyle.td}>模擬コンテスト1 (3時間セット)</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <td className={detailsStyle.td}>17:30 - 18:30</td>
            <td className={detailsStyle.td}>問題解説</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <td className={detailsStyle.td}>19:00 -</td>
            <td className={detailsStyle.td}>懇親会</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <th className={detailsStyle.th} rowSpan={4}>
              Day 2
            </th>
            <td className={detailsStyle.td}>10:00 - 11:00</td>
            <td className={detailsStyle.td}>集合・チーム編成</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <td className={detailsStyle.td}>11:00 - 16:00</td>
            <td className={detailsStyle.td}>模擬コンテスト2 (5時間セット)</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <td className={detailsStyle.td}>16:00 - 17:00</td>
            <td className={detailsStyle.td}>問題解説</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <td className={detailsStyle.td}>19:00 -</td>
            <td className={detailsStyle.td}>懇親会</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <th className={detailsStyle.th} rowSpan={3}>
              Day 3
            </th>
            <td className={detailsStyle.td}>09:00 - 10:00</td>
            <td className={detailsStyle.td}>集合・チーム編成</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <td className={detailsStyle.td}>10:00 - 13:00</td>
            <td className={detailsStyle.td}>模擬コンテスト3 (3時間セット)</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <td className={detailsStyle.td}>13:00 -</td>
            <td className={detailsStyle.td}>問題解説</td>
          </tr>
        </tbody>
      </table>
    )
  },
  rupc2013: {
    title: '立命合宿 2013',
    day: 'Day 3',
    date: {
      begin: '2013/3/11',
      end: '2013/3/13'
    },
    detailURL: 'http://kokucheese.com/event/index/72089',
    problemSet: [
      { college: 'Day1(会津大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp13Day1' },
      { college: 'Day2(大阪大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp13Day2' },
      { college: 'Day3(立命館大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp13Day3' }
    ],
    commentary: [
      { title: 'A: Grid Mori', link: '' },
      { title: 'B: VOCAL ANDROID', link: '' },
      { title: 'C: Project Management	', link: '' },
      { title: 'D: Statement Coverage	', link: '' },
      { title: 'E: Twins Idol', link: '' },
      { title: 'F: Operation training for BYDOL', link: '' },
      { title: 'G: Computer Onesan', link: '' }
    ],
    judge: 'http://judge.u-aizu.ac.jp/onlinejudge/index.jsp',
    place: '立命館大学',
    schedule: (
      <table className={detailsStyle.table}>
        <thead>
          <tr className={detailsStyle.tr}>
            <th className={detailsStyle.th}>Day</th>
            <th className={detailsStyle.th}>Time</th>
            <th className={detailsStyle.th}></th>
          </tr>
        </thead>
        <tbody>
          <tr className={detailsStyle.tr}>
            <th className={detailsStyle.th} rowSpan={5}>
              Day 1
            </th>
            <td className={detailsStyle.td}>13:00 - 14:00</td>
            <td className={detailsStyle.td}>集合，開会，自己紹介など</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <td className={detailsStyle.td}>14:00 - 14:30</td>
            <td className={detailsStyle.td}>チーム編成</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <td className={detailsStyle.td}>14:30 - 17:30</td>
            <td className={detailsStyle.td}>模擬コンテスト1 (3時間セット)</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <td className={detailsStyle.td}>17:30 - 18:30</td>
            <td className={detailsStyle.td}>問題解説</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <td className={detailsStyle.td}>19:00 -</td>
            <td className={detailsStyle.td}>懇親会</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <th className={detailsStyle.th} rowSpan={3}>
              Day 2
            </th>
            <td className={detailsStyle.td}>10:00 - 11:00</td>
            <td className={detailsStyle.td}>集合・チーム編成</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <td className={detailsStyle.td}>11:00 - 16:00</td>
            <td className={detailsStyle.td}>模擬コンテスト2 (5時間セット)</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <td className={detailsStyle.td}>16:00 - 17:00</td>
            <td className={detailsStyle.td}>問題解説</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <th className={detailsStyle.th} rowSpan={3}>
              Day 3
            </th>
            <td className={detailsStyle.td}>09:00 - 10:00</td>
            <td className={detailsStyle.td}>集合・チーム編成</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <td className={detailsStyle.td}>10:00 - 13:00</td>
            <td className={detailsStyle.td}>模擬コンテスト3 (3時間セット)</td>
          </tr>
          <tr className={detailsStyle.tr}>
            <td className={detailsStyle.td}>14:00 - 15:00</td>
            <td className={detailsStyle.td}>問題解説</td>
          </tr>
        </tbody>
      </table>
    )
  },
  acpc2012: {
    title: '会津合宿 2012',
    day: 'Day 1',
    date: {
      begin: '2012/9/3',
      end: '2012/9/5'
    },
    problemSet: [
      { college: 'Day1(立命館大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#ACPC2012Day1' },
      { college: 'Day2(会津大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#ACPC2012Day2' },
      { college: 'Day3(会津大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#ACPC2012Day3' }
    ],
    commentary: [
      { title: 'A: フリック入力', link: 'A.pdf' },
      { title: 'B: 第二次ProblemB大戦	', link: 'B.pdf' },
      { title: 'C: 高所恐怖症', link: 'C.pdf' },
      { title: 'D: アニペロ2012', link: 'D.pdf' },
      { title: 'E: マークアップ言語は衰退しました', link: 'E.pdf' },
      { title: 'F: 透明な麻雀牌', link: 'F.pdf' },
      { title: 'G: コードアートオンライン', link: 'G.pdf' }
    ]
  },
  rupc2012: {
    title: '立命合宿 2012',
    day: 'Day 3',
    date: {
      begin: '2012/3/13',
      end: '2012/3/15'
    },
    judge: 'http://judge.u-aizu.ac.jp/onlinejudge/index.jsp',
    problemSet: [
      { college: 'Day1(会津大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp12Day1' },
      { college: 'Day2(大阪大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp12Day2' },
      { college: 'Day3(立命館大学)', link: 'https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp12Day3' }
    ],
    commentary: [
      { title: 'A: Chicken or the Egg', link: 'kohyo.pdf' },
      { title: 'B: Unequal Dice', link: 'A.pdf' },
      { title: 'C: Lucky Dip', link: 'B.pdf' },
      { title: 'D: Memory Leak', link: 'C.pdf' },
      { title: 'E: Elevator', link: 'D.pdf' },
      { title: 'F: Icy Composer', link: 'E.pdf' },
      { title: 'G: Satan Attacks', link: 'F.pdf' }
    ]
  },
  rupc2011: {
    title: '立命館プログラミングコンテスト2011',
    date: {
      begin: '2011/10/15',
      end: ''
    },
    judge: 'http://judge.u-aizu.ac.jp/onlinejudge/index.jsp',
    problemSet: [
      {
        college: '立命館大学',
        link: 'https://onlinejudge.u-aizu.ac.jp/challenges/sources/VPC/RUPC?year=2011'
      }
    ],
    commentary: [
      { title: '問題A: スワップ暗号', link: 'A.pdf' },
      { title: '問題B: B問題', link: 'B.pdf' },
      { title: '問題C: Seishun 18 Kippu', link: 'C.pdf' },
      { title: '問題D: 伝説の剣', link: 'D.pdf' },
      { title: '問題E: アニペロ', link: 'E.pdf' },
      { title: '問題F: Farey Sequence', link: 'F.pdf' },
      { title: '問題G: 水時計', link: 'G.pdf' },
      { title: '問題H: Oh, My Goat!', link: 'H.pdf' },
      { title: '問題I: カスタムペイント職人', link: 'I.pdf' }
    ],
    iodata: (
      <a href="dataset.zip" download>
        データセット
      </a>
    ),
    writer: ['shirokurostone', 'kioa341', 'slip0110', 'epee_noir', 'Respect2D', '_shnyh']
  }
}
