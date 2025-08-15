'use client';

import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Link from 'next/link';
import { Card, CardHeader, Input } from '@fluentui/react-components';
import { componentPlaygroundStyles } from '@/app/component-playground/ComponentPlayground.styles';

export interface ComponentPlaygroundProps {
  componentNames: string[];
}

export function ComponentPlayground({ componentNames }: ComponentPlaygroundProps) {
  const [search, setSearch] = useState('');
  const theme = useTheme();
  const styles = componentPlaygroundStyles(theme);
  const filtered = componentNames.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Grid container spacing={2} sx={styles.root} component="section" role="region" aria-label="component playground">
      <Grid xs={12}>
        <Input
          aria-label="Search components"
          placeholder="Search components"
          value={search}
          onChange={(_, data) => setSearch(data.value)}
        />
      </Grid>
      {filtered.map((name) => (
        <Grid key={name} xs={12} sm={6} md={4}>
          <Card>
            <CardHeader header={<Link href={`/component-playground/${name}`} prefetch={false}>{name}</Link>} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ComponentPlayground;
