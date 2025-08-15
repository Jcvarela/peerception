'use client';
import React from 'react';
import SwipeCard from './SwipeCard';
import { QUESTIONS } from '@/data/questions';
import { Answer } from '@/types/mbti';
import { opposite } from '@/lib/mbti';

type Props = {
  sessionId: string;
  promptSenderName: string;
  onFinish: (answers: Answer[]) => void;
};

export default function SwipeDeck({ sessionId, promptSenderName, onFinish }: Props) {
  const [i, setI] = React.useState(0);
  const [answers, setAnswers] = React.useState<Answer[]>([]);

  React.useEffect(() => {
    const saved = localStorage.getItem(`mbti:${sessionId}:answers`);
    if (saved) setAnswers(JSON.parse(saved));
  }, [sessionId]);

  function decide(v: 'yes'|'no') {
    const q = QUESTIONS[i];
    const weight = q.weight ?? 1;
    const pole = v === 'yes' ? q.yesPole : opposite[q.axis][q.yesPole];
    const a: Answer = { questionId: q.id, value: v, axis: q.axis, pole, weight };
    const next = [...answers, a];
    setAnswers(next);
    localStorage.setItem(`mbti:${sessionId}:answers`, JSON.stringify(next));

    if (i + 1 < QUESTIONS.length) setI(i + 1);
    else onFinish(next);
  }

  // keyboard support
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') decide('yes');
      if (e.key === 'ArrowLeft') decide('no');
      if (e.key === 'Backspace') { e.preventDefault(); undo(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  function undo() {
    if (answers.length === 0) return;
    const next = answers.slice(0, -1);
    setAnswers(next);
    localStorage.setItem(`mbti:${sessionId}:answers`, JSON.stringify(next));
    setI((x) => Math.max(0, x - 1));
  }

  const q = QUESTIONS[i];

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4 gap-4">
      <header className="w-full max-w-sm text-center">
        <div className="text-sm text-gray-500">Discover • {promptSenderName}</div>
        <div className="mt-1 text-xs text-gray-400">{i+1} / {QUESTIONS.length}</div>
      </header>

      <div className="w-full">
        <SwipeCard key={q.id} text={q.text} onDecision={decide} />
      </div>

      <footer className="w-full max-w-sm flex items-center justify-between text-sm text-gray-600">
        <button className="px-3 py-2 rounded-xl border" onClick={undo} aria-label="Undo last answer">Undo</button>
        <div className="opacity-70">Left = No • Right = Yes</div>
        <div className="flex gap-2">
          <button className="px-3 py-2 rounded-xl border" onClick={()=>decide('no')} aria-label="No">No</button>
          <button className="px-3 py-2 rounded-xl bg-pink-600 text-white" onClick={()=>decide('yes')} aria-label="Yes">Yes</button>
        </div>
      </footer>
    </div>
  );
}
