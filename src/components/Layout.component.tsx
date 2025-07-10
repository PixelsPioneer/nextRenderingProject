import Head from 'next/head';

import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  isDark: boolean;
  toggleTheme: () => void;
  title?: string;
}

export default function Layout({
  children,
  isDark,
  toggleTheme,
  title,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || 'Next.js Rendering Demo'}</title>
      </Head>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>{children}</main>
    </>
  );
}
