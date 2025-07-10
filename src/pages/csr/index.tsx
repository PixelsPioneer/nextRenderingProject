import { Typography, CircularProgress, Box } from '@mui/material';
import { useEffect, useState } from 'react';

import ComputerCardList from '@/components/ComputerCardList';
import Layout from '@/components/Layout.component';
import { mockComputers, Computer } from '@/data/mockComputers';

interface CSRPageProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function CSRPage({ isDark, toggleTheme }: CSRPageProps) {
  const [time, setTime] = useState<string>('');
  const [computers, setComputers] = useState<Computer[] | null>(null);

  useEffect(() => {
    const fetchData = () => {
      setComputers(mockComputers);
    };

    fetchData();

    const interval = setInterval(() => {
      setTime(new Date().toISOString());
      fetchData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout
      title="Client-Side Rendering (CSR)"
      isDark={isDark}
      toggleTheme={toggleTheme}
    >
      <Typography variant="h6" gutterBottom>
        Time generated on client: {time}
      </Typography>

      {!computers ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <ComputerCardList computers={computers} />
      )}
    </Layout>
  );
}
