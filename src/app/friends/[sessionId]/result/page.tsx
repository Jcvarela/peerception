'use client';
import React from 'react';
import { MbtiTally } from '@/types/mbti';

function Bar({ a, b, label }: { a: number; b: number; label: string }) {
  const total = Math.max(1, a + b);
  const left = Math.round((a/total)*100);
  const right = 100 - left;
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span><span>{left}% / {right}%</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gray-900" style={{ width: `${left}%` }} />
      </div>
    </div>
  );
}

export default function Result({ params }: { params: { sessionId: string } }) {
  const { sessionId } = params;
  const [type, setType] = React.useState('----');
  const [tally, setTally] = React.useState<MbtiTally | null>(null);

  React.useEffect(()=>{
    const raw = localStorage.getItem(`mbti:${sessionId}:result`);
    if (raw) {
      const { tally, type } = JSON.parse(raw);
      setTally(tally); setType(type);
    }
  },[sessionId]);

  if (!tally) return <div className="p-6 text-center">No result yet.</div>;

  return (
    <main className="min-h-screen flex flex-col items-center gap-6 p-6">
      <h1 className="text-4xl font-bold">{type}</h1>
      <div className="w-full max-w-sm space-y-4">
        <Bar a={tally.E} b={tally.I} label="E vs I" />
        <Bar a={tally.S} b={tally.N} label="S vs N" />
        <Bar a={tally.T} b={tally.F} label="T vs F" />
        <Bar a={tally.J} b={tally.P} label="J vs P" />
      </div>
      <div className="text-sm text-gray-600 text-center">
        These answers were given by friends about the prompt sender.
      </div>
      <div className="flex gap-2">
        <a className="px-4 py-2 rounded-xl border" href={`/friends/${sessionId}`}>Retake</a>
        <button className="px-4 py-2 rounded-xl bg-gray-900 text-white"
          onClick={()=>navigator.share?.({ title:'MBTI Result', text:`My friend’s MBTI: ${type}` }).catch(()=>{})}>
          Share
        </button>
      </div>
    </main>
  );
}
