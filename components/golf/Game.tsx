'use client';
import { useEffect, useRef, useState } from 'react';

export type Stage = 'tee' | 'trees' | 'bunker' | 'green' | 'cup';
type Vec = { x: number; y: number };

const W = 960, H = 420;
const ballPos: Record<Stage, Vec> = {
  tee: { x: 140, y: H/2 }, trees: { x: 180, y: H/2 - 40 },
  bunker: { x: W/2, y: H - 80 }, green: { x: W - 200, y: H/2 },
  cup: { x: W - 120, y: H/2 },
};

export default function Game({
  currentStage,
  onAdvance,
}: {
  currentStage: Stage;
  onAdvance: (next: Stage) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stage, setStage] = useState<Stage>(currentStage);
  const pos = useRef<Vec>({ ...ballPos[currentStage] });
  const [animating, setAnimating] = useState(false);

  useEffect(() => { setStage(currentStage); pos.current = { ...ballPos[currentStage] }; }, [currentStage]);

  useEffect(() => {
    const c = canvasRef.current!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    c.width = W * dpr; c.height = H * dpr; c.style.width = W + 'px'; c.style.height = H + 'px';
    const ctx = c.getContext('2d')!; ctx.scale(dpr, dpr);
    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const g = ctx.createLinearGradient(0,0,0,H); g.addColorStop(0,'#dbffe7'); g.addColorStop(1,'#e7f7ff');
      ctx.fillStyle = g; ctx.fillRect(0,0,W,H);
      // zones (decorative)
      ctx.fillStyle = '#14532d22'; ctx.fillRect(60,H/2-120,180,220);
      ctx.fillStyle = '#fde68a88'; ctx.fillRect(W/2-100,H-140,200,80);
      ctx.fillStyle = '#10b98133'; ctx.fillRect(W-240,H/2-100,180,200);
      // cup
      ctx.beginPath(); ctx.arc(W-120,H/2,16,0,Math.PI*2); ctx.fillStyle='#111827'; ctx.fill();
      // ball
      ctx.beginPath(); ctx.arc(pos.current.x,pos.current.y,10,0,Math.PI*2);
      ctx.fillStyle='#fff'; ctx.strokeStyle='#11182755'; ctx.lineWidth=2; ctx.fill(); ctx.stroke();
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [stage]);

  const nextStage = (s: Stage): Stage => s === 'tee' ? 'trees' : s === 'trees' ? 'bunker' : s === 'bunker' ? 'green' : 'cup';

  const animateTo = (target: Vec, done: () => void) => {
    setAnimating(true);
    const start = { ...pos.current };
    const t0 = performance.now(), dur = 450;
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / dur), e = 1 - (1 - k) * (1 - k);
      pos.current.x = start.x + (target.x - start.x) * e;
      pos.current.y = start.y + (target.y - start.y) * e;
      if (k < 1) requestAnimationFrame(step); else { setAnimating(false); done(); }
    };
    requestAnimationFrame(step);
  };

  return (
    <div className="rounded-2xl shadow bg-white/80 dark:bg-zinc-900/70 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm opacity-75">Hit Shot to advance.</div>
        <button
          onClick={() => {
            if (animating || stage === 'cup') return;
            const next = nextStage(stage);
            animateTo(ballPos[next], () => { setStage(next); onAdvance(next); });
          }}
          disabled={animating || stage === 'cup'}
          className="px-4 py-2 rounded-xl bg-emerald-600 text-white disabled:opacity-60"
        >
          {stage === 'green' ? 'Putt' : stage === 'cup' ? 'Done' : 'Hit Shot'}
        </button>
      </div>
      <canvas ref={canvasRef} />
      {stage === 'cup' && <div className="mt-3 text-center text-emerald-700 dark:text-emerald-400 font-semibold">Nice putt! ⛳</div>}
    </div>
  );
}
