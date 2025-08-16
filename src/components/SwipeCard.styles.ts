import type { CSSProperties } from 'react';

export const swipeCardStyles: Record<'card' | 'text', CSSProperties> = {
  card: {
    width: '100%',
    maxWidth: '24rem',
    borderRadius: '1rem',
    backgroundColor: '#FFE5B4',
    padding: '1.5rem',
    boxShadow:
      '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
  },
  text: {
    textAlign: 'center',
    fontSize: '1.125rem',
  },
};
