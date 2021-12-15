/** @format */

export interface LinksType {
  title: string;
  link: string;
}

const forMenbers: LinksType[] = [
  {
    title: "Aizu Online Judge 進捗",
    link: "./aoj",
  },
  {
    title: "AtCoder 進捗",
    link: "./atcoder",
  },
];

const ACMICPC: LinksType[] = [
  {
    title: "ACM-ICPC",
    link: "https://icpc.iisf.or.jp/",
  },
  {
    title: "ACM-ICPC OB/OG の会",
    link: "https://jag-icpc.org/",
  },
];

const InfoProjectClubs: LinksType[] = [
  {
    title: "RiG++",
    link: "https://rigpp.sakura.ne.jp/wp/",
  },
  {
    title: "Ri-one",
    link: "http://rione.org/",
  },
  {
    title: "RiST",
    link: "https://risec.github.io/",
  },
];
const ritsumeikan: LinksType[] = [
  {
    title: "立命館大学",
    link: "http://www.ritsumei.ac.jp/",
  },
  {
    title: "立命館コンピュータクラブ",
    link: "http://www.rcc.ritsumei.ac.jp/",
  },
];
const others: LinksType[] = [
  {
    title: "TPC @ 筑波大",
    link: "http://tkbpc.github.io/",
  },
  {
    title: "京大マイコンクラブ (KMC) @ 京大",
    link: "http://www.kmc.gr.jp/",
  },
  {
    title: "マイクロコンピュータークラブ (MCC) @ 東京農工大",
    link: "http://www.tuat.ac.jp/~tuatmcc/index.html",
  },
  {
    title: "ICPC チャレンジ部 (ICPCCC) @ 九大",
    link: "http://kyushu-u-icpccc.hatenablog.com/",
  },
  {
    title: "プロコンサークル @ 兵庫県立大",
    link: "https://sites.google.com/site/uhprocon/",
  },
  {
    title: "競技プログラミング部 @ 会津大",
    link: "http://web-ext.u-aizu.ac.jp/circles/acpc/ja/index.html",
  },
];

export interface SectionType {
  title: string;
  contents: LinksType[];
}

export const sections: SectionType[] = [
  { title: "部員向け", contents: forMenbers },
  { title: "ACM-ICPC", contents: ACMICPC },
  { title: "情報理工学部プロジェクト連合", contents: InfoProjectClubs },
  { title: "立命館大学", contents: ritsumeikan },
  { title: "他大学", contents: others },
];
