"use client";

import React from "react";

interface LogoMarkProps {
  size?: number;
  color?: string;
  id?: string;
  className?: string;
  opacity?: string | number;
}

export function LogoMark({ 
  size = 40, 
  color, 
  id = "bynd-grad", 
  className,
  opacity 
}: LogoMarkProps) {
  const width = size * 1.2;
  const height = size;

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 120 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={opacity !== undefined ? { opacity: Number(opacity) } : undefined}
    >
      <defs>
        {!color && (
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF5F0F" />
            <stop offset="60%" stopColor="#E8A830" />
            <stop offset="100%" stopColor="#F0C060" />
          </linearGradient>
        )}
      </defs>
      
      {/* Central spine */}
      <line 
        x1="52" y1="10" x2="52" y2="90" 
        stroke={color || `url(#${id})`} 
        strokeWidth="6" 
        strokeLinecap="butt" 
      />
      
      {/* B upper bowl */}
      <path 
        d="M52 10C75 10 90 20 90 35C90 50 75 60 52 60" 
        stroke={color || `url(#${id})`} 
        strokeWidth="11" 
        strokeLinecap="round" 
      />
      
      {/* B lower bowl */}
      <path 
        d="M52 50C85 50 105 60 105 75C105 90 85 100 52 100" 
        stroke={color || `url(#${id})`} 
        strokeWidth="13" 
        strokeLinecap="round" 
      />
      
      {/* D curve (right) */}
      <path 
        d="M52 10C95 10 115 50 115 50C115 50 95 90 52 90" 
        stroke={color || `url(#${id})`} 
        strokeWidth="11" 
        strokeLinecap="round" 
        opacity="0.6"
      />
    </svg>
  );
}
