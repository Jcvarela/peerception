'use client';

import { useTheme } from '@mui/material/styles';
import type { CSSProperties } from 'react';
import { swipecardStyles } from './Swipecards.styles';

export interface SwipecardProps {
  text: string;
}

export function Swipecard({ text }: SwipecardProps) {
  const theme = useTheme();
  const styles = swipecardStyles(theme);

  return (
    <div role="group" aria-label={text} style={styles.root as CSSProperties}>
      <div style={styles.text as CSSProperties}>{text}</div>
      <div aria-live="polite" className="sr-only">
        Swipe right for Yes, left for No
      </div>
    </div>
  );
}

export default Swipecard;
