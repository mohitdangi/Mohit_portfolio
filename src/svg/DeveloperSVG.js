import React from "react";

const DeveloperSVG = ({ width = "100%", height = "auto" }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* Background */}
      <rect width="100%" height="100%" fill="#1a1a2e" />

      {/* Developer Character */}
      <circle cx="250" cy="150" r="60" fill="#ffcc99" stroke="#000" strokeWidth="3" />
      <rect x="200" y="210" width="100" height="120" fill="#007bff" stroke="#000" strokeWidth="3" rx="10" />
      
      {/* Eyes */}
      <circle cx="235" cy="145" r="7" fill="#000" />
      <circle cx="265" cy="145" r="7" fill="#000" />
      
      {/* Mouth (Smiling) */}
      <path d="M230 165 Q250 180 270 165" stroke="#000" strokeWidth="3" fill="none" />
      
      {/* Glasses */}
      <rect x="215" y="135" width="25" height="15" fill="transparent" stroke="#000" strokeWidth="3" />
      <rect x="260" y="135" width="25" height="15" fill="transparent" stroke="#000" strokeWidth="3" />
      <line x1="240" y1="143" x2="260" y2="143" stroke="#000" strokeWidth="2" />
      
      {/* Laptop */}
      <rect x="170" y="290" width="160" height="90" fill="#333" rx="10" />
      <rect x="180" y="300" width="140" height="70" fill="#222" />
      <text x="210" y="345" fill="#39FF14" fontSize="24" fontWeight="bold">&lt;Code/&gt;</text>

      {/* Keyboard */}
      <rect x="185" y="380" width="130" height="10" fill="#555" />
      
      {/* Coffee Cup */}
      <rect x="350" y="280" width="40" height="60" fill="#8B4513" rx="5" />
      <rect x="355" y="270" width="30" height="10" fill="#333" />
      <path d="M390 300 Q400 290 390 280" stroke="#8B4513" strokeWidth="4" fill="none" />
      
      {/* Code Bubble */}
      <rect x="320" y="120" width="100" height="50" fill="#222" stroke="#39FF14" strokeWidth="2" rx="5" />
      <text x="345" y="150" fill="#39FF14" fontSize="20" fontWeight="bold">&lt;/&gt;</text>
      
      {/* Books */}
      <rect x="60" y="350" width="50" height="20" fill="#ff4757" />
      <rect x="60" y="370" width="50" height="10" fill="#39FF14" />
      <rect x="60" y="380" width="50" height="10" fill="#00d2ff" />
    </svg>
  );
};

export default DeveloperSVG;
