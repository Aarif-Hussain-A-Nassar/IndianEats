import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  color?: string;
  bgColor?: string;
}

/**
 * LogoMark — The oval badge with decorative diamond + flower center.
 * Faithfully recreated from the brand reference image.
 * bgColor fills the oval background; color is used for all ornamental strokes/fills.
 */
export const LogoMark: React.FC<LogoProps> = ({
  className = "",
  size = 120,
  color = "#FEF4B9",
  bgColor = "transparent",
}) => {
  const h = (size * 280) / 200;

  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
    >
      {/* ── Filled oval background ── */}
      <ellipse cx="100" cy="140" rx="90" ry="128" fill={bgColor === "transparent" ? "none" : bgColor} />

      {/* ── Outer oval border ── */}
      <ellipse cx="100" cy="140" rx="90" ry="128" stroke={color} strokeWidth="4" fill="none" />

      {/* ── Inner oval border ── */}
      <ellipse cx="100" cy="140" rx="79" ry="117" stroke={color} strokeWidth="1.8" fill="none" />

      {/* ── TOP SCROLL ORNAMENT ── */}
      {/* Main arch */}
      <path
        d="M 68 34 Q 100 12 132 34"
        stroke={color} strokeWidth="2.8" strokeLinecap="round" fill="none"
      />
      {/* Inner smaller arch */}
      <path
        d="M 78 42 Q 100 26 122 42"
        stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none"
      />
      {/* Left curl */}
      <path
        d="M 68 34 Q 60 28 62 22 Q 64 16 70 20"
        stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none"
      />
      {/* Right curl */}
      <path
        d="M 132 34 Q 140 28 138 22 Q 136 16 130 20"
        stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none"
      />
      {/* Center top dot */}
      <circle cx="100" cy="14" r="3" fill={color} />
      {/* Side dots on top scroll */}
      <circle cx="63" cy="21" r="2.2" fill={color} />
      <circle cx="137" cy="21" r="2.2" fill={color} />

      {/* ── BOTTOM SCROLL ORNAMENT ── */}
      <path
        d="M 68 246 Q 100 268 132 246"
        stroke={color} strokeWidth="2.8" strokeLinecap="round" fill="none"
      />
      <path
        d="M 78 238 Q 100 254 122 238"
        stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none"
      />
      <path
        d="M 68 246 Q 60 252 62 258 Q 64 264 70 260"
        stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none"
      />
      <path
        d="M 132 246 Q 140 252 138 258 Q 136 264 130 260"
        stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none"
      />
      <circle cx="100" cy="266" r="3" fill={color} />
      <circle cx="63" cy="259" r="2.2" fill={color} />
      <circle cx="137" cy="259" r="2.2" fill={color} />

      {/* ── CENTER DIAMOND ── */}
      <path
        d="M 100 56 L 162 140 L 100 224 L 38 140 Z"
        stroke={color} strokeWidth="2.5" strokeLinejoin="round" fill="none"
      />

      {/* Diamond tip curls — TOP */}
      <path d="M 100 56 Q 96 48 90 50 Q 85 52 88 58" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M 100 56 Q 104 48 110 50 Q 115 52 112 58" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Diamond tip curls — BOTTOM */}
      <path d="M 100 224 Q 96 232 90 230 Q 85 228 88 222" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M 100 224 Q 104 232 110 230 Q 115 228 112 222" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Diamond tip curls — LEFT */}
      <path d="M 38 140 Q 30 136 28 130 Q 26 124 32 122" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M 38 140 Q 30 144 28 150 Q 26 156 32 158" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Diamond tip curls — RIGHT */}
      <path d="M 162 140 Q 170 136 172 130 Q 174 124 168 122" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M 162 140 Q 170 144 172 150 Q 174 156 168 158" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* ── LEAF / PETAL clusters on diamond sides ── */}
      {/* Left side leaves */}
      <path d="M 62 118 Q 50 110 55 100 Q 65 108 62 118 Z" fill={color} opacity="0.9" />
      <path d="M 62 162 Q 50 170 55 180 Q 65 172 62 162 Z" fill={color} opacity="0.9" />
      {/* Right side leaves */}
      <path d="M 138 118 Q 150 110 145 100 Q 135 108 138 118 Z" fill={color} opacity="0.9" />
      <path d="M 138 162 Q 150 170 145 180 Q 135 172 138 162 Z" fill={color} opacity="0.9" />

      {/* Leaf stems */}
      <path d="M 62 118 L 75 128" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 62 162 L 75 152" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 138 118 L 125 128" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 138 162 L 125 152" stroke={color} strokeWidth="1.2" strokeLinecap="round" />

      {/* ── CENTER 8-PETAL FLOWER ── */}
      <g transform="translate(100, 140)">
        {/* 8 petals at 45° intervals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <path
            key={angle}
            d="M 0 0 C -9 -22 -5 -38 0 -40 C 5 -38 9 -22 0 0"
            fill={color}
            opacity="0.95"
            transform={`rotate(${angle})`}
          />
        ))}
        {/* Ring between petals and center */}
        <circle cx="0" cy="0" r="13" fill={bgColor === "transparent" ? "none" : bgColor} stroke={color} strokeWidth="1.8" />
        {/* Center dot */}
        <circle cx="0" cy="0" r="5" fill={color} />
        {/* 8 tiny dots around ring */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <circle
              key={angle}
              cx={13 * Math.sin(rad)}
              cy={-13 * Math.cos(rad)}
              r="1.8"
              fill={color}
            />
          );
        })}
      </g>

      {/* ── Diamond accent dots at 4 corners ── */}
      <circle cx="100" cy="72" r="3.5" fill={color} />
      <circle cx="100" cy="208" r="3.5" fill={color} />
      <circle cx="54" cy="140" r="3.5" fill={color} />
      <circle cx="146" cy="140" r="3.5" fill={color} />
    </svg>
  );
};

/**
 * LogoIE — The secondary oval badge with "IE" monogram.
 * Matches the secondary logo from the brand reference image.
 */
export const LogoIE: React.FC<LogoProps> = ({
  className = "",
  size = 120,
  color = "#FEF4B9",
  bgColor = "transparent",
}) => {
  const h = (size * 280) / 200;

  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
    >
      {/* Filled oval background */}
      <ellipse cx="100" cy="140" rx="90" ry="128" fill={bgColor === "transparent" ? "none" : bgColor} />

      {/* Outer oval */}
      <ellipse cx="100" cy="140" rx="90" ry="128" stroke={color} strokeWidth="4" fill="none" />

      {/* Inner oval */}
      <ellipse cx="100" cy="140" rx="79" ry="117" stroke={color} strokeWidth="1.8" fill="none" />

      {/* Top scroll */}
      <path d="M 68 34 Q 100 12 132 34" stroke={color} strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <path d="M 78 42 Q 100 26 122 42" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M 68 34 Q 60 28 62 22 Q 64 16 70 20" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M 132 34 Q 140 28 138 22 Q 136 16 130 20" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <circle cx="100" cy="14" r="3" fill={color} />
      <circle cx="63" cy="21" r="2.2" fill={color} />
      <circle cx="137" cy="21" r="2.2" fill={color} />

      {/* Bottom scroll */}
      <path d="M 68 246 Q 100 268 132 246" stroke={color} strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <path d="M 78 238 Q 100 254 122 238" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M 68 246 Q 60 252 62 258 Q 64 264 70 260" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M 132 246 Q 140 252 138 258 Q 136 264 130 260" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <circle cx="100" cy="266" r="3" fill={color} />
      <circle cx="63" cy="259" r="2.2" fill={color} />
      <circle cx="137" cy="259" r="2.2" fill={color} />

      {/* "IE" serif monogram */}
      <text
        x="100"
        y="166"
        fill={color}
        fontFamily="'Playfair Display', 'Georgia', serif"
        fontSize="96"
        fontWeight="700"
        textAnchor="middle"
        letterSpacing="-6"
        style={{ userSelect: "none" }}
      >
        IE
      </text>
    </svg>
  );
};

/**
 * LogoPrimaryText — The "INDIAN EATS" text-only wordmark in vintage display style.
 * Rendered as bold stacked text using the brand font, mimicking the hand-lettered look.
 */
interface LogoPrimaryTextProps {
  className?: string;
  color?: string;
  fontSize?: number;
}

export const LogoPrimaryText: React.FC<LogoPrimaryTextProps> = ({
  className = "",
  color = "#FEF4B9",
  fontSize = 60,
}) => {
  const lineH = fontSize * 0.95;
  const w = fontSize * 3.6;
  const h = lineH * 2 + 12;

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "inline-block" }}
    >
      <text
        x={w / 2}
        y={lineH}
        fill={color}
        fontFamily="'Playfair Display', 'Georgia', serif"
        fontSize={fontSize}
        fontWeight="900"
        textAnchor="middle"
        letterSpacing="2"
        style={{ userSelect: "none" }}
      >
        INDIAN
      </text>
      <text
        x={w / 2}
        y={lineH * 2 + 4}
        fill={color}
        fontFamily="'Playfair Display', 'Georgia', serif"
        fontSize={fontSize}
        fontWeight="900"
        textAnchor="middle"
        letterSpacing="2"
        style={{ userSelect: "none" }}
      >
        EATS
      </text>
    </svg>
  );
};

/**
 * LogoFull — Composed logo: LogoMark badge + wordmark text side-by-side (horizontal)
 * or stacked (vertical). Used in Navbar, Hero, etc.
 */
interface LogoFullProps extends LogoProps {
  layout?: "horizontal" | "vertical" | "centered-badge";
  logoSize?: number;
}

export const LogoFull: React.FC<LogoFullProps> = ({
  className = "",
  layout = "horizontal",
  logoSize = 42,
  color = "#FEF4B9",
  bgColor = "transparent",
}) => {
  if (layout === "vertical") {
    return (
      <div
        className={className}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}
      >
        <LogoMark size={logoSize} color={color} bgColor={bgColor} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {["INDIAN", "EATS"].map((word) => (
            <span
              key={word}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.9rem",
                fontWeight: 900,
                color,
                lineHeight: 0.95,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (layout === "centered-badge") {
    return (
      <div
        className={className}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}
      >
        <LogoMark size={logoSize} color={color} bgColor={bgColor} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {["INDIAN", "EATS"].map((word) => (
            <span
              key={word}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2.6rem",
                fontWeight: 900,
                color,
                lineHeight: 0.9,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // Horizontal (default — used in Navbar)
  return (
    <div
      className={className}
      style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
    >
      <LogoMark size={logoSize} color={color} bgColor={bgColor} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {["INDIAN", "EATS"].map((word, i) => (
          <span
            key={word}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: logoSize * 0.38 + "px",
              fontWeight: 900,
              color,
              lineHeight: i === 0 ? 1.05 : 0.95,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};
