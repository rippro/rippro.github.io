/** @format */

import Link from 'next/link';
import type { FC } from 'react';

const IndexArticles: FC = () => {
  return (
    <div className="leading-relaxed text-gray-800">
      <section>
        <h2>入部希望の方へ</h2>
        <p>
          新入生のみなさん、ご入学おめでとうございます!
          <br />
          新入生に限らず、RiPPro に興味がある方は{' '}
          <Link href="/welcome" className="font-medium text-blue-700 hover:text-blue-900 transition-colors">
            新歓情報ページ
          </Link>{' '}
          をご覧ください。
        </p>
      </section>

      <section>
        <h2>ようこそ RiPPro へ</h2>
        <p>
          立命館大学情報理工学部プロジェクト団体 RiPPro (<b>Ri</b>tsumeikan <b>P</b>rogramming <b>Pro</b>ject)
          は、ACM-ICPC (プログラミングの学生世界大会) などの大会で入賞することを目的として結成されました。
        </p>
        <p>
          私達は、アルゴリズムの勉強会や問題を解くことで目的に向け頑張っています。
          正課と課外を相互に活用できることが、私たち RiPPro の利点です。
          また初心者の方にはわかりやすく指導し、プログラミングを「得意」に、
          そして「得意」から「大得意」になってもらおうと努めています。
        </p>

        <h3>ACM-ICPC</h3>
        <p>
          <a href="https://icpc.iisf.or.jp/" target="_blank" rel="noopener noreferrer">
            ACM-ICPC
          </a>{' '}
          とは国際学会の主催する歴史あるプログラミングコンテストです。
          パズルのような問題を適切なアルゴリズムで解くプログラムを作成し、正答数や解答時間を大学選抜グループ間で競います。
        </p>
      </section>

      <section>
        <h3>立命館大学情報理工学部プロジェクト連合</h3>
        <p>
          情報理工学部では、専門性を活かした課外活動を応援すべく以下の4団体で構成されるプロジェクト連合を2016年4月に設立しました。（RiSTは2019年9月より加入）
        </p>
        <dl>
          <div>
            <dt>RiPPro</dt>
            <dd>プログラミングコンテストを主目的とする団体です。</dd>
          </div>
          <div>
            <dt>
              <a href="http://rione.org/" target="_blank" rel="noopener noreferrer">
                Ri-one
              </a>
            </dt>
            <dd>RoboCupを主目的としている団体です。</dd>
          </div>
          <div>
            <dt>
              <a href="https://rigpp.sakura.ne.jp/wp/" target="_blank" rel="noopener noreferrer">
                RiG++
              </a>
            </dt>
            <dd>ゲームとCGの作成を主目的としている団体です。</dd>
          </div>
          <div>
            <dt>
              <a href="https://risec.github.io/" target="_blank" rel="noopener noreferrer">
                RiST
              </a>
            </dt>
            <dd>情報セキュリティの相互学習を主目的としている団体です。</dd>
          </div>
        </dl>
      </section>
    </div>
  );
};

export default IndexArticles;
