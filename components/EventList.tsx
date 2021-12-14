/** @format */

export interface EventType {
  title: string;
  detail: string;
  date?: "Day 1" | "Day 2" | "Day 3";
  id: string;
}

// TODO: detailの日時・場所をのフォーマット統一させる
export const Events: EventType[] = [
  {
    title: "立命合宿 2019",
    date: "Day 1",
    detail: "3/5 - 3/7 立命館大学 BKC にて合宿を開催．",
    id: "rupc2019",
  },
  {
    title: "会津合宿 2018",
    date: "Day 1",
    detail: "会津大学 9/19 - 9/21 に行われた合宿に参加しました．",
    id: "acpc2018",
  },
  {
    title: "立命合宿 2018",
    date: "Day 1",
    detail: "3/26 - 3/28 立命館大学 BKC にて合宿を開催．",
    id: "rupc2018",
  },
  {
    title: "会津合宿 2017",
    date: "Day 1",
    detail: "会津大学にて 9/18 - 9/20 に行われた合宿に参加しました．",
    id: "acpc2017",
  },
  {
    title: "立命合宿 2017",
    date: "Day 1",
    detail: "3/22 - 3/24 立命館大学 BKC にて合宿を開催しました．",
    id: "rupc2017",
  },
  {
    title: "会津合宿 2016",
    date: "Day 1",
    detail: "会津大学にて 9/17 - 9/19 に行われた合宿に参加しました．",
    id: "acpc2016",
  },
  {
    title: "立命合宿 2016",
    date: "Day 1",
    detail: "3/6 - 3/8 立命館大学 BKC にて合宿を開催しました．",
    id: "rupc2016",
  },
  {
    title: "会津合宿 2015",
    date: "Day 1",
    detail: "会津大学にて 9/21 - 9/23 に行われた合宿に参加しました．",
    id: "acpc2015",
  },
  {
    title: "立命合宿 2015",
    date: "Day 1",
    detail: "3/14 - 3/16 立命館大学 BKC にて合宿を開催しました．",
    id: "rupc2015",
  },
  {
    title: "立命合宿 2013",
    date: "Day 3",
    detail: "3/11 - 3/13 立命館大学 BKC にて合宿を開催しました．",
    id: "rupc2013",
  },
  {
    title: "会津合宿 2012",
    date: "Day 1",
    detail: "会津大学にて9/3 - 9/5に行われた合宿に参加しました．",
    id: "acpc2012",
  },
  {
    title: "立命合宿 2012",
    date: "Day 3",
    detail: "3/13 - 3/15 立命館大学 BKC にて合宿を開催しました．",
    id: "rupc2012",
  },
  {
    title: "立命館プログラミングコンテスト2011",
    detail: "10/15 立命館大学 BKC にてコンテストを開催しました.",
    id: "rupc2011",
  },
];

interface problemSetType {
  college: string;
  link: string;
}

interface problemType {
  title: string;
  link: string;
}

interface otherContentType {
  title: string;
  content: JSX.Element;
}

interface EventDetailType {
  title: string;
  day?: "Day 1" | "Day 2" | "Day 3";
  date: {
    begin: string;
    end: string;
  };
  detailURL: string;
  problemSet: problemSetType[];
  commentary: problemType[];
  writer?: string[];
  otherContent?: otherContentType;
}

interface EventDetailsType {
  [key: string]: EventDetailType;
}

export const EventDetails: EventDetailsType = {
  rupc2019: {
    title: "立命合宿 2019",
    day: "Day 1",
    date: {
      begin: "2019/3/5",
      end: "2019/3/7",
    },
    detailURL: "https://atnd.org/events/103718",
    problemSet: [
      {
        college: "Day 1 (立命館大学)",
        link: "https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp19Day1",
      },
      {
        college: "Day 2 (会津大学さん)",
        link: "https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp19Day2",
      },
      {
        college: "Day 3 (北海道大学さん)",
        link: "https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp19Day3",
      },
    ],
    commentary: [
      { title: "全体講評", link: "kohyo.pdf" },
      { title: "A: タイル貼り", link: "A.pdf" },
      { title: "B: たぬきつね", link: "B.pdf" },
      { title: "C: オセロ", link: "C.pdf" },
      { title: "D: 場所当てゲーム", link: "D.pdf" },
      { title: "E: LISum", link: "E.pdf" },
      { title: "F: Absum", link: "F.pdf" },
      { title: "G: イルミネーション", link: "G.pdf" },
    ],
  },
  acpc2018: {
    title: "会津合宿 2018",
    day: "Day 1",
    date: {
      begin: "2018/9/19",
      end: "2018/9/21",
    },
    detailURL: "https://atnd.org/events/98718",
    problemSet: [
      { college: "Day1(立命館大学)", link: "https://onlinejudge.u-aizu.ac.jp/services/room.html#ACPC2018Day1" },
      { college: "Day2(会津大学)", link: "https://onlinejudge.u-aizu.ac.jp/services/room.html#ACPC2018Day2" },
      { college: "Day3(北海道大学)", link: "https://onlinejudge.u-aizu.ac.jp/services/room.html#ACPC2018Day3" },
    ],
    commentary: [
      { title: "全体講評", link: "kohyo.pdf" },
      { title: "A: テスト", link: "A.pdf" },
      { title: "B: 直角三角形", link: "B.pdf" },
      { title: "C: 素数", link: "C.pdf" },
      { title: "D: 遭難", link: "D.pdf" },
      { title: "E: 凸凹数列", link: "E.pdf" },
      { title: "F: Swap", link: "F.pdf" },
      { title: "G: 式の切り取り", link: "G.pdf" },
      { title: "H: 板", link: "H.pdf" },
    ],
  },
  rcpc2018: {
    title: "立命合宿 2018",
    day: "Day 1",
    date: {
      begin: "",
      end: "",
    },
    detailURL: "",
    problemSet: [
      { college: "", link: "" },
      { college: "", link: "" },
      { college: "", link: "" },
    ],
    commentary: [
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
    ],
    writer: [""],
    otherContent: { title: "", content: <></> },
  },
  acpc2017: {
    title: "会津合宿 2017",
    day: "Day 1",
    date: {
      begin: "",
      end: "",
    },
    detailURL: "",
    problemSet: [
      { college: "", link: "" },
      { college: "", link: "" },
      { college: "", link: "" },
    ],
    commentary: [
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
    ],
    writer: [""],
    otherContent: { title: "", content: <></> },
  },
  rupc2017: {
    title: "立命合宿 2017",
    day: "Day 1",
    date: {
      begin: "",
      end: "",
    },
    detailURL: "",
    problemSet: [
      { college: "", link: "" },
      { college: "", link: "" },
      { college: "", link: "" },
    ],
    commentary: [
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
    ],
    writer: [""],
    otherContent: { title: "", content: <></> },
  },
  acpc2016: {
    title: "会津合宿 2016",
    day: "Day 1",
    date: {
      begin: "",
      end: "",
    },
    detailURL: "",
    problemSet: [
      { college: "", link: "" },
      { college: "", link: "" },
      { college: "", link: "" },
    ],
    commentary: [
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
    ],
    writer: [""],
    otherContent: { title: "", content: <></> },
  },
  rupc2016: {
    title: "立命合宿 2016",
    day: "Day 1",
    date: {
      begin: "",
      end: "",
    },
    detailURL: "",
    problemSet: [
      { college: "", link: "" },
      { college: "", link: "" },
      { college: "", link: "" },
    ],
    commentary: [
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
    ],
    writer: [""],
    otherContent: { title: "", content: <></> },
  },
  acpc2015: {
    title: "会津合宿 2015",
    day: "Day 1",
    date: {
      begin: "",
      end: "",
    },
    detailURL: "",
    problemSet: [
      { college: "", link: "" },
      { college: "", link: "" },
      { college: "", link: "" },
    ],
    commentary: [
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
    ],
    writer: [""],
    otherContent: { title: "", content: <></> },
  },
  rupc2015: {
    title: "立命合宿 2015",
    day: "Day 1",
    date: {
      begin: "",
      end: "",
    },
    detailURL: "",
    problemSet: [
      { college: "", link: "" },
      { college: "", link: "" },
      { college: "", link: "" },
    ],
    commentary: [
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
    ],
    writer: [""],
    otherContent: { title: "", content: <></> },
  },
  rupc2013: {
    title: "立命合宿 2013",
    day: "Day 3",
    date: {
      begin: "",
      end: "",
    },
    detailURL: "",
    problemSet: [
      { college: "", link: "" },
      { college: "", link: "" },
      { college: "", link: "" },
    ],
    commentary: [
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
    ],
    writer: [""],
    otherContent: { title: "", content: <></> },
  },
  acpc2012: {
    title: "会津合宿 2012",
    day: "Day 1",
    date: {
      begin: "",
      end: "",
    },
    detailURL: "",
    problemSet: [
      { college: "", link: "" },
      { college: "", link: "" },
      { college: "", link: "" },
    ],
    commentary: [
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
    ],
    writer: [""],
    otherContent: { title: "", content: <></> },
  },
  rupc2012: {
    title: "立命合宿 2012",
    day: "Day 3",
    date: {
      begin: "",
      end: "",
    },
    detailURL: "",
    problemSet: [
      { college: "", link: "" },
      { college: "", link: "" },
      { college: "", link: "" },
    ],
    commentary: [
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
    ],
    writer: [""],
    otherContent: { title: "", content: <></> },
  },
  rupc2011: {
    title: "立命館プログラミングコンテスト2011",
    date: {
      begin: "",
      end: "",
    },
    detailURL: "",
    problemSet: [
      { college: "", link: "" },
      { college: "", link: "" },
      { college: "", link: "" },
    ],
    commentary: [
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
      { title: "", link: "" },
    ],
    writer: [""],
    otherContent: { title: "", content: <></> },
  },
};
