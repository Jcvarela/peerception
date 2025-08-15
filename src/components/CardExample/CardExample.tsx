import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';
import { cardExampleStyles } from './CardExample.styles';

export function CardExample() {
  const theme = useTheme();
  const styles = cardExampleStyles(theme);
  return (
    <Grid container sx={styles.root} component="section" role="region" aria-label="example card">
      <h2 style={{ margin: 0 }}>Card Example</h2>
      <p>Sample content.</p>
    </Grid>
  );
}

export default CardExample;
