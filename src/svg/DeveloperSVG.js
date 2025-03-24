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
      {/* Background Grid */}
      <rect width="100%" height="100%" fill="#111111" />
      
      {/* Developer Character */}
      <circle cx="250" cy="200" r="80" fill="#555" stroke="#000" strokeWidth="3" />
      <rect x="190" y="280" width="120" height="100" fill="#39FF14" stroke="#000" strokeWidth="3" />
      <circle cx="220" cy="200" r="10" fill="#000" />
      <circle cx="280" cy="200" r="10" fill="#000" />
      <path d="M220 230 Q250 250 280 230" stroke="#000" strokeWidth="3" fill="none" />
      <rect x="205" y="300" width="90" height="40" fill="#222" />

      {/* Laptop */}
      <rect x="150" y="330" width="140" height="80" fill="#888" />
      <circle cx="190" cy="370" r="4" fill="#000" />
      
      {/* Speech Bubble for Code */}
      <rect x="320" y="150" width="80" height="40" fill="#222" stroke="#39FF14" strokeWidth="2" />
      <text x="340" y="175" fill="#39FF14" fontSize="18" fontWeight="bold">&lt;/&gt;</text>

      {/* Coffee Cup */}
      <rect x="350" y="310" width="30" height="50" fill="#8B4513" />
      <rect x="355" y="300" width="20" height="10" fill="#333" />

      {/* Books */}
      <rect x="340" y="370" width="50" height="20" fill="#222" />
      <rect x="340" y="390" width="50" height="10" fill="#39FF14" />
    </svg>
  );
};

export default DeveloperSVG;
