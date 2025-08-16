"use client";

import TinderCard from "react-tinder-card";
import { swipeCardsStyles } from './SwipeCards.styles';

interface SwipeCardsProps {
  prompts?: string[];
}

const SwipeCards = ({ prompts = Array(20).fill('') }: SwipeCardsProps) => {
  const handleSwipe = (direction: string, text: string) => {
    console.log(`You swiped ${direction} on "${text || 'Prompt goes here'}"`);
  };

  const handleCardLeftScreen = (text: string) => {
    console.log(`"${text || 'Prompt goes here'}" left the screen`);
  };

  return (
    <div style={swipeCardsStyles.wrapper}>
      <div style={swipeCardsStyles.container}>
        {prompts.map((prompt, index) => (
          <TinderCard
            key={index}
            onSwipe={(dir) => handleSwipe(dir, prompt)}
            onCardLeftScreen={() => handleCardLeftScreen(prompt)}
            preventSwipe={['up', 'down']}
          >
            <div style={swipeCardsStyles.card}>{prompt || 'Prompt goes here'}</div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default SwipeCards;
