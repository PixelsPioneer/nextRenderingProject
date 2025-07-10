import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import Link from 'next/link';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link href="/" passHref legacyBehavior>
          <Typography
            variant="h6"
            component="a"
            sx={{
              position: 'relative',
              color: 'inherit',
              textDecoration: 'none',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '0%',
                height: '2px',
                bottom: 0,
                left: 0,
                backgroundColor: 'currentColor',
                transition: 'width 0.3s ease',
              },
              '&:hover::after': {
                width: '100%',
              },
            }}
          >
            Next.js Rendering Types
          </Typography>
        </Link>

        <IconButton
          color="inherit"
          onClick={() => {
            toggleTheme();
          }}
        >
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
