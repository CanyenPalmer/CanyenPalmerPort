'use client';
import React, { useEffect, useRef } from 'react';
import createGlobe from 'globe.gl';

export default function Globe({ points }:{points:{lat:number; lng:number; size:number; name:string}[]}){
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if(!ref.current) return;
    const globe = createGlobe()(ref.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .pointsData(points)
      .pointAltitude('size')
      .pointLat('lat')
      .pointLng('lng')
      .pointLabel('name');
    const resize = () => globe.width(ref.current!.clientWidth).height(480);
    resize();
    window.addEventListener('resize', resize);
    return () => { window.removeEventListener('resize', resize); };
  }, [points]);

  return <div ref={ref} className="w-full"/>;
}

