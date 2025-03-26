import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { createTheme, styled } from '@mui/material/styles';
import { Outlet } from 'react-router';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: { maxWidth: '450px' }
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: { padding: theme.spacing(4) },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', { backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))' }),
  },
}));

export function Auth() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Outlet />
        </Card>
      </SignInContainer>
    </ThemeProvider>
  )
}