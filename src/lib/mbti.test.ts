/// <reference types="vitest" />
import { tallyAnswers, toType } from './mbti';

test('tally + toType works', ()=>{
  const t = tallyAnswers([
    { questionId:'1', value:'yes', axis:'EI', pole:'E', weight:1 },
    { questionId:'2', value:'no',  axis:'SN', pole:'N', weight:1 },
  ]);
  expect(toType(t)).toHaveLength(4);
});
