'use client';
import { motion, PanInfo } from 'framer-motion';
import React from 'react';

type Props = {
  text: string;
  onDecision: (v: 'yes'|'no') => void;
};

export default function SwipeCard({ text, onDecision }: Props) {
  const threshold = 120;

  function onDragEnd(_: any, info: PanInfo) {
    const x = info.offset.x;
    if (x > threshold) onDecision('yes');
    else if (x < -threshold) onDecision('no');
  }

  return (
    <motion.div
      role="group"
      aria-label={text}
      className="relative mx-auto w-full max-w-sm rounded-3xl bg-white p-6 shadow-xl"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragEnd={onDragEnd}
      initial={{ scale: 0.98, rotate: 0 }}
      whileTap={{ scale: 1.02 }}
    >
      <div className="text-lg font-medium text-gray-900 text-center">{text}</div>
      <div aria-live="polite" className="sr-only">Swipe right for Yes, left for No</div>
    </motion.div>
  );
}
