declare module 'react-tinder-card' {
  import * as React from 'react';

  export interface TinderCardProps {
    children?: React.ReactNode;
    onSwipe?: (direction: string) => void;
    onCardLeftScreen?: () => void;
    preventSwipe?: string[];
  }

  const TinderCard: React.ComponentType<TinderCardProps>;
  export default TinderCard;
}
