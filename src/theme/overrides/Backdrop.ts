import { alpha, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Backdrop(theme: Theme) {
  const varLow = alpha(theme.palette.grey[900], 0.2);

  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          color: theme.palette.background.blue,
          zIndex: theme.zIndex.drawer + 1,
          background: `${varLow}`,
          '&.MuiBackdrop-invisible': {
            background: 'transparent',
          },
        },
      },
    },
  };
}
