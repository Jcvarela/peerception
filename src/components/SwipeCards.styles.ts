import { CSSProperties } from 'react';

export const swipeCardsStyles: Record<'wrapper' | 'container' | 'card', CSSProperties> = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: '2rem',
  },
  container: {
    position: 'relative',
    width: '300px',
    height: '400px',
  },
  card: {
    position: 'absolute',
    backgroundColor: '#FFE5B4',
    borderRadius: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '1.25rem',
  },
};

export default swipeCardsStyles;
