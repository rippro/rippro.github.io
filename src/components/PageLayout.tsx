'use client';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { usePathname } from 'next/navigation';
import NextHead from 'next/head';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';

type PageLayoutProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
};

const defaultDescription =
  '立命館大学情報理工学部プロジェクト団体 競技プログラミング部門「RiPPro」です。ACM-ICPC (プログラミングの学生世界大会) などの大会で入賞することを目的として活動しています。';
const defaultTitle = 'RiPPro - 立命館大学情報理工学部プロジェクト団体';

type SiteMetaProps = {
  title: string | undefined;
  description: string | undefined;
};

const navButtonSx = {
  minWidth: 0,
  px: { xs: 1, sm: 1.8 },
  py: 0.5,
  whiteSpace: 'nowrap',
  fontSize: { xs: '0.84rem', sm: '1rem' }
};

const SiteMeta: FC<SiteMetaProps> = ({ title, description }) => (
  <NextHead>
    <title>{title ?? defaultTitle}</title>
    <meta name="description" content={description ?? defaultDescription} />
    <link rel="icon" href="/favicon.ico" />
    <meta name="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:image" content="https://avatars.githubusercontent.com/u/7278547?s=200&amp;v=4" />
  </NextHead>
);

const navItems = [
  { href: '/', label: 'トップ' },
  { href: '/welcome', label: '新歓情報' },
  { href: '/event', label: 'ブログ' },
  { href: '/contact', label: 'お問い合わせ' },
  { href: '/links', label: 'リンク' },
  { href: '/members', label: '部員向け' }
];

const SiteNavigator: FC = () => {
  const pathname = usePathname() ?? '/';

  return (
    <Stack
      direction="row"
      sx={{
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', lg: 'flex-end' },
        columnGap: { xs: 0.5, sm: 1 },
        rowGap: 0.5
      }}
    >
      {navItems.map((item) => {
        const isActive =
          item.href === '/' ? pathname === item.href : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link href={item.href} key={item.href}>
            <Button
              variant="text"
              sx={navButtonSx}
              className={isActive ? '!font-semibold !text-black' : '!font-normal !text-gray-600 hover:!text-black'}
              aria-current={isActive ? 'page' : undefined}
            >
              {item.label}
            </Button>
          </Link>
        );
      })}
    </Stack>
  );
};

const SiteHeader: FC = () => (
  <header className="mt-3 flex flex-col items-center gap-3 border-b border-slate-300/70 pb-6 lg:flex-row lg:items-end lg:justify-between">
    <Link href="/" className="transition-opacity hover:opacity-1">
      <img className="w-[180px] object-contain sm:w-[210px]" src="/rippro-rogo.png" alt="rippro-rogo" />
    </Link>
    <nav className="w-full lg:w-auto">
      <SiteNavigator />
    </nav>
  </header>
);

const SiteFooter: FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-6 border-t border-gray-200 text-center text-sm tracking-normal text-gray-500">
      <p>&copy; 2005-{year} RiPPro All rights reserved.</p>
    </footer>
  );
};

export const Layout: FC<PageLayoutProps> = ({ children, title, description }) => (
  <div className="min-h-screen px-3 py-8 sm:px-6 sm:py-12 selection:bg-slate-300 selection:text-black">
    <SiteMeta title={title} description={description} />
    <div className="mx-auto w-full max-w-[920px] bg-white px-5 py-4 pb-12 shadow ring-1 ring-slate-900/5 sm:px-10 sm:py-8">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  </div>
);
