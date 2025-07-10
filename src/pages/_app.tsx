import { ThemeProvider, CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import { useEffect, useMemo, useState } from 'react';

import { lightTheme, darkTheme } from '@/theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDark(savedTheme === 'dark');
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  if (!mounted) return null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} isDark={isDark} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default MyApp;
