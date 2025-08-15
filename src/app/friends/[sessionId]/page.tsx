import SwipeDeck from '@/components/SwipeDeck';
import { tallyAnswers, toType } from '@/lib/mbti';

export default function FriendSession({ params }: { params: { sessionId: string } }) {
  const sessionId = params.sessionId;
  const promptSenderName = 'Your Friend'; // replace with real name if available

  return (
    <SwipeDeck
      sessionId={sessionId}
      promptSenderName={promptSenderName}
      onFinish={(answers)=>{
        const tally = tallyAnswers(answers);
        const type = toType(tally);
        localStorage.setItem(`mbti:${sessionId}:result`, JSON.stringify({ tally, type }));
        window.location.href = `/friends/${sessionId}/result`;
      }}
    />
  );
}
