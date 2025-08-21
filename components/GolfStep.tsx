'use client';
import { useRouter } from 'next/navigation';
import Game, { Stage } from '@/components/golf/Game';

export default function GolfStep({
  stage,
  nextHref
}: {
  stage: Stage;      // tee | trees | bunker | green
  nextHref: string;  // /projects | /experience | /education | /connect
}) {
  const router = useRouter();
  return (
    <Game
      currentStage={stage}
      onAdvance={(next) => {
        // When this page's shot completes, navigate to the next section/page.
        // We don't require the next stage value here; the route encodes the flow.
        router.push(nextHref);
      }}
    />
  );
}

