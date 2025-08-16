import { Theme } from '@mui/material/styles';

export const loginFormStyles = (theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    width: '100%',
    maxWidth: 400,
    margin: '0 auto',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
});

