'use client';

import { useEffect, useState } from 'react';

export default function CitySkyline() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {/* Grid Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />

      {/* City Skyline SVG */}
      <svg
        viewBox="0 0 1200 400"
        className={`absolute bottom-0 w-full h-auto transition-opacity duration-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradient for buildings */}
          <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#4F46E5', stopOpacity: 0.6 }} />
          </linearGradient>

          {/* Glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background buildings (smaller, further back) */}
        <g opacity="0.4">
          <rect x="50" y="280" width="60" height="120" fill="url(#buildingGradient)" />
          <rect x="150" y="250" width="80" height="150" fill="url(#buildingGradient)" />
          <rect x="280" y="270" width="50" height="130" fill="url(#buildingGradient)" />
          <rect x="380" y="240" width="70" height="160" fill="url(#buildingGradient)" />
          <rect x="500" y="260" width="55" height="140" fill="url(#buildingGradient)" />
          <rect x="800" y="255" width="65" height="145" fill="url(#buildingGradient)" />
          <rect x="920" y="275" width="50" height="125" fill="url(#buildingGradient)" />
          <rect x="1050" y="265" width="60" height="135" fill="url(#buildingGradient)" />
        </g>

        {/* Mid-ground buildings */}
        <g opacity="0.6">
          <rect x="100" y="200" width="70" height="200" fill="url(#buildingGradient)" />
          <rect x="220" y="180" width="90" height="220" fill="url(#buildingGradient)" />
          <rect x="360" y="170" width="65" height="230" fill="url(#buildingGradient)" />
          <rect x="470" y="190" width="75" height="210" fill="url(#buildingGradient)" />
          <rect x="600" y="160" width="80" height="240" fill="url(#buildingGradient)" />
          <rect x="730" y="185" width="70" height="215" fill="url(#buildingGradient)" />
          <rect x="850" y="175" width="85" height="225" fill="url(#buildingGradient)" />
          <rect x="990" y="195" width="65" height="205" fill="url(#buildingGradient)" />
        </g>

        {/* Foreground buildings (tallest, most prominent) */}
        <g filter="url(#glow)">
          {/* Tall central tower */}
          <rect x="550" y="80" width="100" height="320" fill="url(#buildingGradient)" />
          <rect x="560" y="60" width="80" height="20" fill="url(#buildingGradient)" opacity="0.8" />

          {/* Left side tall building */}
          <rect x="320" y="120" width="85" height="280" fill="url(#buildingGradient)" />

          {/* Right side tall building */}
          <rect x="780" y="110" width="90" height="290" fill="url(#buildingGradient)" />

          {/* Medium buildings */}
          <rect x="180" y="140" width="75" height="260" fill="url(#buildingGradient)" />
          <rect x="680" y="150" width="70" height="250" fill="url(#buildingGradient)" />
          <rect x="920" y="145" width="80" height="255" fill="url(#buildingGradient)" />
        </g>

        {/* Window lights (animated) */}
        <g className="animate-pulse-slow">
          {/* Generate window grid pattern */}
          {Array.from({ length: 8 }).map((_, col) =>
            Array.from({ length: 15 }).map((_, row) => (
              <rect
                key={`window-${col}-${row}`}
                x={560 + (col * 10)}
                y={90 + (row * 20)}
                width="6"
                height="12"
                fill="#FCD34D"
                opacity={Math.random() > 0.3 ? 0.6 : 0.2}
              />
            ))
          )}
        </g>
      </svg>

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
