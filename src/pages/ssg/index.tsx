import { Typography, Box } from '@mui/material';
import { GetStaticProps } from 'next';

import ComputerCardList from '@/components/ComputerCardList';
import Layout from '@/components/Layout.component';
import { Computer, mockComputers } from '@/data/mockComputers';

interface SSGPageProps {
  time: string;
  computers: Computer[];
  isDark: boolean;
  toggleTheme: () => void;
}

export default function SSGPage({
  time,
  computers,
  isDark,
  toggleTheme,
}: SSGPageProps) {
  return (
    <Layout
      title="Static Site Generation (SSG)"
      isDark={isDark}
      toggleTheme={toggleTheme}
    >
      <Typography variant="h6" gutterBottom>
        Time generated at build: {time}
      </Typography>

      {!computers || computers.length === 0 ? (
        <Box>Data don`t found</Box>
      ) : (
        <ComputerCardList computers={computers} />
      )}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const computers = mockComputers;

  return {
    props: {
      time: new Date().toISOString(),
      computers,
    },
  };
};
