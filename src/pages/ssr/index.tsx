import { Typography, Box } from '@mui/material';
import { GetServerSideProps } from 'next';

import ComputerCardList from '@/components/ComputerCardList';
import Layout from '@/components/Layout.component';
import { Computer, mockComputers } from '@/data/mockComputers';

interface SSRPageProps {
  time: string;
  computers: Computer[];
  isDark: boolean;
  toggleTheme: () => void;
}

export default function SSRPage({
  time,
  computers,
  isDark,
  toggleTheme,
}: SSRPageProps) {
  return (
    <Layout
      title="Server-Side Rendering (SSR)"
      isDark={isDark}
      toggleTheme={toggleTheme}
    >
      <Typography variant="h6" gutterBottom>
        Time generated on server: {time}
      </Typography>

      {!computers || computers.length === 0 ? (
        <Box>Дані не знайдено</Box>
      ) : (
        <ComputerCardList computers={computers} />
      )}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const computers = mockComputers;

  return {
    props: {
      time: new Date().toISOString(),
      computers,
    },
  };
};
