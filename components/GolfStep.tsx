'use client';
import { useRouter } from 'next/navigation';
import Game, { Stage } from '@/components/golf/Game';

export default function GolfStep({ stage, nextHref }: { stage: Stage; nextHref: string }) {
  const router = useRouter();
  return (
    <Game
      currentStage={stage}
      onAdvance={() => {
        // Deterministic: always go to the next page for this stage
        router.push(nextHref);
      }}
    />
  );
}
