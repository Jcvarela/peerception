'use client';

import { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import { Card } from '@fluentui/react-components';
import { componentPreviewStyles } from '@/app/component-playground/[componentName]/ComponentPreview.styles';

export interface ComponentPreviewProps {
  name: string;
}

export function ComponentPreview({ name }: ComponentPreviewProps) {
  const theme = useTheme();
  const styles = componentPreviewStyles(theme);
  const [Loaded, setLoaded] = useState<React.ComponentType<Record<string, unknown>> | null>(null);

  useEffect(() => {
    import(`@/components/${name}/${name}`).then((mod) => setLoaded(() => mod.default));
  }, [name]);

  if (!Loaded) {
    return null;
  }

  return (
    <Grid container sx={styles.root} component="section" role="region" aria-label={`${name} preview`}>
      <Card>
        <Loaded />
      </Card>
    </Grid>
  );
}

export default ComponentPreview;
