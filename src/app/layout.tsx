import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const notoSansJp = Noto_Sans_JP({
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'RiPPro(立命館大学情報理工学部プロジェクト団体)',
  description:
    '立命館大学情報理工学部プロジェクト団体 RiPPro (Ritsumeikan Programming Project) は、ACM-ICPC (プログラミングの学生世界大会) などの大会で入賞することを目的として結成されました。'
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>{children}</body>
    </html>
  );
}
