import { Button, Typography, useTheme, alpha, Box } from '@mui/material';
import { Grid } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

import Layout from '@/components/Layout.component';

const pages = [
  { label: 'Static Site Generation (SSG)', href: '/ssg' },
  { label: 'Server-Side Rendering (SSR)', href: '/ssr' },
  { label: 'Incremental Static Regeneration (ISR)', href: '/isr' },
  { label: 'Client-Side Rendering (CSR)', href: '/csr' },
];

export default function Home({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: () => void;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const theme = useTheme();

  return (
    <Layout
      title="Next.js Rendering Types"
      isDark={isDark}
      toggleTheme={toggleTheme}
    >
      <Grid
        container
        sx={{
          width: '100vw',
          height: '100vh',
          maxWidth: '100%',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            borderRight: '1px solid #ccc',
            padding: 3,
            boxSizing: 'border-box',
            width: '50%',
          }}
          {...({} as any)}
        >
          <Box
            component="img"
            src="/next.svg"
            alt="Next.js Logo"
            sx={{ maxWidth: 300, width: '100%', mb: 2 }}
          />
          <Typography variant="body1" sx={{ maxWidth: 500 }}>
            Next.js is a React framework that enables hybrid static & server
            rendering, route pre-fetching, and more, to build fast and
            SEO-friendly web applications easily.
          </Typography>
        </Grid>

        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 3,
            boxSizing: 'border-box',
            width: '50%',
          }}
          {...({} as any)}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: 600, textAlign: 'center', width: '100%' }}
          >
            Explore Rendering Techniques
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '100%',
              maxWidth: 400,
            }}
          >
            {pages.map(({ label, href }) => (
              <Link href={href} passHref key={href} legacyBehavior>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    transition:
                      'transform 0.3s ease, background-color 0.3s ease',
                    transform: hovered === href ? 'scale(1.05)' : 'scale(1)',
                    backgroundColor:
                      hovered === href
                        ? theme.palette.primary.main
                        : theme.palette.mode === 'dark'
                          ? theme.palette.grey[800]
                          : theme.palette.grey[100],
                    color:
                      hovered === href
                        ? theme.palette.getContrastText(
                            theme.palette.primary.main,
                          )
                        : theme.palette.text.primary,
                    boxShadow:
                      hovered === href
                        ? `0 8px 16px ${alpha(theme.palette.primary.main, 0.25)}`
                        : 'none',
                  }}
                  onMouseEnter={() => setHovered(href)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {label}
                </Button>
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}
