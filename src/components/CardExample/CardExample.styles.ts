import { Theme } from '@mui/material/styles';

export const cardExampleStyles = (theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: 0,
  },
});
