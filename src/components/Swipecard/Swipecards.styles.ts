import { Theme } from '@mui/material/styles';

export const swipecardStyles = (theme: Theme) => ({
  root: {
    position: 'relative' as const,
    margin: '0 auto',
    width: '100%',
    maxWidth: '24rem',
    borderRadius: '1.5rem',
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(3),
    boxShadow: theme.shadows[3],
    textAlign: 'center' as const,
  },
  text: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.grey[900],
  },
});
