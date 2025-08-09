'use client';
import { useRef, useMemo } from 'react';
import { motion } from 'motion/react';
import DottedMap from 'dotted-map';

import { useTheme } from 'next-themes';

export function WorldMap({ dots = [], lineColor = '#0ea5e9' }) {
  const svgRef = useRef(null);

  // Memoize the map instance and SVG to prevent re-creation on every render
  const { map, svgMap } = useMemo(() => {
    const mapInstance = new DottedMap({ height: 100, grid: 'diagonal' });
    const svg = mapInstance.getSVG({
      radius: 0.22,
      color: '#808080',
      shape: 'circle',
      backgroundColor: 'black',
    });
    return { map: mapInstance, svgMap: svg };
  }, []); // Empty dependency array - only create once

  const { theme } = useTheme();

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Memoize projected points to avoid recalculation
  const projectedDots = useMemo(() => {
    return dots.map((dot) => ({
      start: projectPoint(dot.start.lat, dot.start.lng),
      end: projectPoint(dot.end.lat, dot.end.lng),
      original: dot,
    }));
  }, [dots]);

  return (
    <div className='w-full aspect-[2/1] bg-black rounded-lg relative font-sans overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent z-10 pointer-events-none'></div>
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className='h-full w-full pointer-events-none select-none'
        alt='world map'
        height='495'
        width='1056'
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox='0 0 800 400'
        className='w-full h-full absolute inset-0 pointer-events-none select-none'
      >
        {projectedDots.map((dot, i) => {
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(dot.start, dot.end)}
                fill='none'
                stroke='url(#path-gradient)'
                strokeWidth='1'
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 2,
                  delay: 0.3 * i,
                  ease: 'easeOut',
                }}
                key={`start-upper-${i}`}
              ></motion.path>
            </g>
          );
        })}

        <defs>
          <linearGradient id='path-gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='white' stopOpacity='0' />
            <stop offset='5%' stopColor={lineColor} stopOpacity='1' />
            <stop offset='95%' stopColor={lineColor} stopOpacity='1' />
            <stop offset='100%' stopColor='white' stopOpacity='0' />
          </linearGradient>
        </defs>

        {projectedDots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={dot.start.x}
                cy={dot.start.y}
                r='2'
                fill={lineColor}
              />
              <circle
                cx={dot.start.x}
                cy={dot.start.y}
                r='2'
                fill={lineColor}
                opacity='0.5'
              >
                <animate
                  attributeName='r'
                  from='2'
                  to='6'
                  dur='2s'
                  begin='0s'
                  repeatCount='indefinite'
                />
                <animate
                  attributeName='opacity'
                  from='0.5'
                  to='0'
                  dur='2s'
                  begin='0s'
                  repeatCount='indefinite'
                />
              </circle>
            </g>
            <g key={`end-${i}`}>
              <circle cx={dot.end.x} cy={dot.end.y} r='2' fill={lineColor} />
              <circle
                cx={dot.end.x}
                cy={dot.end.y}
                r='2'
                fill={lineColor}
                opacity='0.5'
              >
                <animate
                  attributeName='r'
                  from='2'
                  to='6'
                  dur='2s'
                  begin='0s'
                  repeatCount='indefinite'
                />
                <animate
                  attributeName='opacity'
                  from='0.5'
                  to='0'
                  dur='2s'
                  begin='0s'
                  repeatCount='indefinite'
                />
              </circle>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
