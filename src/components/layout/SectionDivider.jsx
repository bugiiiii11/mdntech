import React from 'react';

const SectionDivider = ({
  variant = 'default',
  flip = false,
  fromColor = 'dark', // 'dark' (#0f1419) or 'card' (#1a1f26)
  toColor = 'dark',   // 'dark' (#0f1419) or 'card' (#1a1f26)
}) => {
  // Color mappings
  const colors = {
    dark: { r: 15, g: 20, b: 25 },    // #0f1419
    card: { r: 26, g: 31, b: 38 },    // #1a1f26
  };

  const from = colors[fromColor];
  const to = colors[toColor];

  // Different divider styles - using CSS gradients for smooth transitions
  const variants = {
    // Default: smooth vertical gradient fade with subtle diagonal angle
    default: (
      <div className={`relative w-full h-48 ${flip ? 'rotate-180' : ''}`}>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `linear-gradient(180deg,
              rgba(${from.r}, ${from.g}, ${from.b}, 0) 0%,
              rgba(${from.r + (to.r - from.r) * 0.15}, ${from.g + (to.g - from.g) * 0.15}, ${from.b + (to.b - from.b) * 0.15}, 0.2) 15%,
              rgba(${from.r + (to.r - from.r) * 0.35}, ${from.g + (to.g - from.g) * 0.35}, ${from.b + (to.b - from.b) * 0.35}, 0.5) 35%,
              rgba(${from.r + (to.r - from.r) * 0.6}, ${from.g + (to.g - from.g) * 0.6}, ${from.b + (to.b - from.b) * 0.6}, 0.75) 60%,
              rgba(${from.r + (to.r - from.r) * 0.85}, ${from.g + (to.g - from.g) * 0.85}, ${from.b + (to.b - from.b) * 0.85}, 0.92) 85%,
              rgba(${to.r}, ${to.g}, ${to.b}, 1) 100%
            )`
          }}
        />
        {/* Subtle diagonal overlay for visual interest */}
        <div
          className="absolute inset-0 w-full h-full opacity-10"
          style={{
            background: `linear-gradient(175deg,
              transparent 0%,
              rgba(${to.r}, ${to.g}, ${to.b}, 0.2) 60%,
              rgba(${to.r}, ${to.g}, ${to.b}, 0.4) 100%
            )`
          }}
        />
      </div>
    ),

    // Accent: smooth gradient with blue glow effect
    accent: (
      <div className={`relative w-full h-48 ${flip ? 'rotate-180' : ''}`}>
        {/* Base gradient */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `linear-gradient(180deg,
              rgba(${from.r}, ${from.g}, ${from.b}, 0) 0%,
              rgba(${from.r + (to.r - from.r) * 0.15}, ${from.g + (to.g - from.g) * 0.15}, ${from.b + (to.b - from.b) * 0.15}, 0.2) 15%,
              rgba(${from.r + (to.r - from.r) * 0.35}, ${from.g + (to.g - from.g) * 0.35}, ${from.b + (to.b - from.b) * 0.35}, 0.5) 35%,
              rgba(${from.r + (to.r - from.r) * 0.6}, ${from.g + (to.g - from.g) * 0.6}, ${from.b + (to.b - from.b) * 0.6}, 0.75) 60%,
              rgba(${from.r + (to.r - from.r) * 0.85}, ${from.g + (to.g - from.g) * 0.85}, ${from.b + (to.b - from.b) * 0.85}, 0.92) 85%,
              rgba(${to.r}, ${to.g}, ${to.b}, 1) 100%
            )`
          }}
        />
        {/* Blue accent glow */}
        <div
          className="absolute inset-0 w-full h-full opacity-12"
          style={{
            background: `radial-gradient(ellipse at center,
              rgba(59, 130, 246, 0.25) 0%,
              rgba(96, 165, 250, 0.12) 40%,
              transparent 80%
            )`
          }}
        />
        {/* Subtle diagonal overlay */}
        <div
          className="absolute inset-0 w-full h-full opacity-10"
          style={{
            background: `linear-gradient(175deg,
              transparent 0%,
              rgba(59, 130, 246, 0.08) 50%,
              rgba(${to.r}, ${to.g}, ${to.b}, 0.3) 100%
            )`
          }}
        />
      </div>
    ),

    // Double: layered gradient for depth
    double: (
      <div className={`relative w-full h-56 ${flip ? 'rotate-180' : ''}`}>
        {/* First gradient layer - extra smooth */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `linear-gradient(180deg,
              rgba(${from.r}, ${from.g}, ${from.b}, 0) 0%,
              rgba(${from.r + (to.r - from.r) * 0.1}, ${from.g + (to.g - from.g) * 0.1}, ${from.b + (to.b - from.b) * 0.1}, 0.15) 10%,
              rgba(${from.r + (to.r - from.r) * 0.25}, ${from.g + (to.g - from.g) * 0.25}, ${from.b + (to.b - from.b) * 0.25}, 0.35) 25%,
              rgba(${from.r + (to.r - from.r) * 0.45}, ${from.g + (to.g - from.g) * 0.45}, ${from.b + (to.b - from.b) * 0.45}, 0.6) 45%,
              rgba(${from.r + (to.r - from.r) * 0.7}, ${from.g + (to.g - from.g) * 0.7}, ${from.b + (to.b - from.b) * 0.7}, 0.82) 70%,
              rgba(${from.r + (to.r - from.r) * 0.9}, ${from.g + (to.g - from.g) * 0.9}, ${from.b + (to.b - from.b) * 0.9}, 0.95) 90%,
              rgba(${to.r}, ${to.g}, ${to.b}, 1) 100%
            )`
          }}
        />
        {/* Second layer with diagonal */}
        <div
          className="absolute inset-0 w-full h-full opacity-20"
          style={{
            background: `linear-gradient(170deg,
              transparent 0%,
              rgba(${to.r}, ${to.g}, ${to.b}, 0.2) 50%,
              rgba(${to.r}, ${to.g}, ${to.b}, 0.5) 100%
            )`
          }}
        />
        {/* Subtle radial glow for depth */}
        <div
          className="absolute inset-0 w-full h-full opacity-8"
          style={{
            background: `radial-gradient(ellipse at center,
              rgba(96, 165, 250, 0.15) 0%,
              transparent 70%
            )`
          }}
        />
      </div>
    ),
  };

  return variants[variant] || variants.default;
};

export default SectionDivider;
