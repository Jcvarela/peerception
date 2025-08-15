import { Answer, MbtiAxis, MbtiTally } from '@/types/mbti';

export const opposite: Record<MbtiAxis, Record<string, any>> = {
  EI:{ E:'I', I:'E' }, SN:{ S:'N', N:'S' }, TF:{ T:'F', F:'T' }, JP:{ J:'P', P:'J' }
};

export function tallyAnswers(answers: Answer[]): MbtiTally {
  const t: MbtiTally = {E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};
  for (const a of answers) t[a.pole] += a.weight;
  return t;
}

export function toType(t: MbtiTally): string {
  const e = t.E >= t.I ? 'E' : 'I';
  const s = t.S >= t.N ? 'S' : 'N';
  const f = t.T >= t.F ? 'T' : 'F';
  const j = t.J >= t.P ? 'J' : 'P';
  return `${e}${s}${f}${j}`;
}
