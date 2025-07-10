import { Typography, Box } from '@mui/material';
import { GetStaticProps } from 'next';

import ComputerCardList from '@/components/ComputerCardList';
import Layout from '@/components/Layout.component';
import { Computer, mockComputers } from '@/data/mockComputers';

interface ISRPageProps {
  time: string;
  computers: Computer[];
  isDark: boolean;
  toggleTheme: () => void;
}

export default function ISRPage({
  time,
  computers,
  isDark,
  toggleTheme,
}: ISRPageProps) {
  return (
    <Layout
      title="Incremental Static Regeneration (ISR)"
      isDark={isDark}
      toggleTheme={toggleTheme}
    >
      <Typography variant="h6" gutterBottom>
        Time generated with ISR: {time}
      </Typography>

      {!computers || computers.length === 0 ? (
        <Box>Дані не знайдено</Box>
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
    revalidate: 10,
  };
};
