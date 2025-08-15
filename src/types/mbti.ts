export type MbtiAxis = 'EI' | 'SN' | 'TF' | 'JP';
export type MbtiPole = 'E'|'I'|'S'|'N'|'T'|'F'|'J'|'P';

export interface Question {
  id: string;
  text: string;        // statement about the prompt sender
  axis: MbtiAxis;      // which dimension it informs
  yesPole: MbtiPole;   // YES supports this pole; NO supports the opposite on same axis
  weight?: number;     // default 1
}

export interface Answer {
  questionId: string;
  value: 'yes' | 'no';
  axis: MbtiAxis;
  pole: MbtiPole;      // pole awarded by this answer
  weight: number;
}

export interface MbtiTally {
  E: number; I: number; S: number; N: number; T: number; F: number; J: number; P: number;
}
