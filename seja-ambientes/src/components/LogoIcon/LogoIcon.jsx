import React from 'react';

export default function LogoIcon({ className, light = false }) {
  const primary = light ? '#ffffff' : '#2C2C2C';
  return (
    <svg
      className={className}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="8" width="10" height="22" rx="1" fill={primary} fillOpacity={light ? 0.9 : 1} />
      <rect x="16" y="4" width="10" height="22" rx="1" fill="#9B1C1C" />
      <polygon points="4,8 14,8 14,14 9,20 4,14" fill={light ? 'rgba(255,255,255,0.6)' : '#555555'} />
      <polygon points="16,4 26,4 26,10 21,16 16,10" fill="#B02020" />
    </svg>
  );
}
