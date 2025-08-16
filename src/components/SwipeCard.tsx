"use client";

import { motion, type PanInfo } from 'framer-motion';
import { useEffect } from 'react';
import { swipeCardStyles } from '@/components/SwipeCard.styles';

type Props = {
  text: string;
  onDecision: (v: 'yes' | 'no') => void;
};

export default function SwipeCard({ text, onDecision }: Props) {
  const threshold = 100;

  function onDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x > threshold) onDecision('yes');
    else if (info.offset.x < -threshold) onDecision('no');
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onDecision('yes');
      if (e.key === 'ArrowLeft') onDecision('no');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onDecision]);

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragEnd={onDragEnd}
      style={swipeCardStyles.card}
    >
      <p style={swipeCardStyles.text}>{text}</p>
    </motion.div>
  );
}
