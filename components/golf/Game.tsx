'use client';
import { useEffect, useRef, useState } from 'react';

export type Stage = 'tee' | 'trees' | 'bunker' | 'green' | 'cup';
type Vec = { x: number; y: number };

const W = 960, H = 420;

const stageLabel: Record<Stage, string> = {
  tee:    'Tee Shot → Trees',
  trees:  'Recovery → Bunker',
  bunker: 'Bunker Shot → Green',
  green:  'Putt → Cup',
  cup:    'Cup'
};

const stageBallPos: Record<Stage, Vec> = {
  tee:    { x: 140, y: H/2 },
  trees:  { x: 180, y: H/2 - 40 },
  bunker: { x: W/2, y: H - 80 },
  green:  { x: W - 200, y: H/2 },
  cup:    { x: W - 120, y: H/2 },
};

function nextStageOf(s: Stage): Stage {
  if (s === 'tee') return 'trees';
  if (s === 'trees') return 'bunker';
  if (s === 'bunker') return 'green';
  return 'cup';
}

export default function Game({
  currentStage,
  onAdvance
}: {
  currentStage: Stage;               // where this page starts
  onAdvance: (next: Stage) => void;  // tell parent to navigate
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pos = useRef<Vec>({ ...stageBallPos[currentStage] });
  const [animating, setAnimating] = useState(false);
  const [stage, setStage] = useState<Stage>(currentStage);

  useEffect(() => {
    // sync to the stage for this page
    setStage(currentStage);
    pos.current = { ...stageBallPos[currentStage] };
  }, [currentStage]);

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, W, H);

    // background
    const grd = ctx.createLinearGradient(0, 0, 0, H);
    grd.addColorStop(0, '#dbffe7');
    grd.addColorStop(1, '#e7f7ff');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, W, H);

    // zones (decorative)
    ctx.fillStyle = '#14532d22'; ctx.fillRect(60, H/2 - 120, 180, 220); // trees
    ctx.fillStyle = '#fde68a88'; ctx.fillRect(W/2 - 100, H - 140, 200, 80); // bunker
    ctx.fillStyle = '#10b98133'; ctx.fillRect(W - 240, H/2 - 100, 180, 200); // green

    // cup
    ctx.beginPath(); ctx.arc(W - 120, H/2, 16, 0, Math.PI * 2); ctx.fillStyle = '#111827'; ctx.fill();

    // stage label
    ctx.fillStyle = '#0f172a';
    ctx.font = '16px system-ui, -apple-system, Segoe UI, Roboto, sans-serif';
    ctx.fillText(`Stage: ${stageLabel[stage]}`, 16, 28);

    // ball
    ctx.beginPath();
    ctx.arc(pos.current.x, pos.current.y, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#11182755';
    ctx.lineWidth = 2;
    ctx.fill(); ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    const ctx = canvas.getContext('2d')!;
    ctx.scale(dpr, dpr);

    let raf = 0;
    const loop = () => { draw(ctx); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  const animateShotTo = (target: Vec, done: () => void) => {
    setAnimating(true);
    const start = { ...pos.current };
    const dur = 450;
    const t0 = performance.now();
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / dur);
      const e = 1 - (1 - k) * (1 - k); // ease-out
      pos.current.x = start.x + (target.x - start.x) * e;
      pos.current.y = start.y + (target.y - start.y) * e;
      if (k < 1) requestAnimationFrame(step);
      else { setAnimating(false); done(); }
    };
    requestAnimationFrame(step);
  };

  const handleHitShot = () => {
    if (animating) return;
    const next = nextStageOf(stage);
    animateShotTo(stageBallPos[next], () => {
      setStage(next);
      onAdvance(next);
    });
  };

  return (
    <div className="rounded-2xl shadow bg-white/80 dark:bg-zinc-900/70 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm opacity-75">Hit Shot to advance.</div>
        <button
          onClick={handleHitShot}
          disabled={animating || stage === 'cup'}
          className="px-4 py-2 rounded-xl bg-emerald-600 text-white disabled:opacity-60"
        >
          {stage === 'green' ? 'Putt' : stage === 'cup' ? 'Done' : 'Hit Shot'}
        </button>
      </div>
      <div className="overflow-auto"><canvas ref={canvasRef} /></div>
      {stage === 'cup' && (
        <div className="mt-3 text-center text-emerald-700 dark:text-emerald-400 font-semibold">
          Nice putt! Heading to “Let’s Connect”… ⛳
        </div>
      )}
    </div>
  );
}

