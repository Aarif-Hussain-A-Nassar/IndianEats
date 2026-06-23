import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  color?: string; // e.g. "currentColor", "var(--terracotta)", etc.
}

// 1. LogoMark: The vertical decorative oval with curves and star anise in the center
export const LogoMark: React.FC<LogoProps> = ({
  className = "",
  size = 120,
  color = "currentColor",
}) => {
  // Height is scaled with width (ratio 160:220)
  const height = (size * 220) / 160;

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 160 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      {/* Outer solid oval */}
      <ellipse
        cx="80"
        cy="110"
        rx="72"
        ry="102"
        stroke={color}
        strokeWidth="3.5"
        fill="none"
      />

      {/* Inner solid thin oval */}
      <ellipse
        cx="80"
        cy="110"
        rx="64"
        ry="94"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />

      {/* Traditional Indian corner/side scrolls (motifs) */}
      {/* Top ornamental scrolls */}
      <path
        d="M 50 38 C 50 30, 80 20, 80 32 C 80 20, 110 30, 110 38"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 60 48 C 65 38, 80 34, 80 38 C 80 34, 95 38, 100 48"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bottom ornamental scrolls */}
      <path
        d="M 50 182 C 50 190, 80 200, 80 188 C 80 200, 110 190, 110 182"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 60 172 C 65 182, 80 186, 80 182 C 80 186, 95 182, 100 172"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Center diamond outline with soft curve-points */}
      <path
        d="M 80 50 L 132 110 L 80 170 L 28 110 Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Scroll flourishes attached to the diamond corners */}
      {/* Top corner scroll */}
      <path d="M 80 50 Q 80 44 84 44 Q 88 44 88 48" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M 80 50 Q 80 44 76 44 Q 72 44 72 48" stroke={color} strokeWidth="1.5" fill="none" />
      
      {/* Bottom corner scroll */}
      <path d="M 80 170 Q 80 176 84 176 Q 88 176 88 172" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M 80 170 Q 80 176 76 176 Q 72 176 72 172" stroke={color} strokeWidth="1.5" fill="none" />

      {/* Side flourishes */}
      <path d="M 28 110 Q 22 106 22 102 Q 22 98 26 98" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M 28 110 Q 22 114 22 118 Q 22 122 26 122" stroke={color} strokeWidth="1.5" fill="none" />
      
      <path d="M 132 110 Q 138 106 138 102 Q 138 98 134 98" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M 132 110 Q 138 114 138 118 Q 138 122 134 122" stroke={color} strokeWidth="1.5" fill="none" />

      {/* Inside-diamond corner accent dots */}
      <circle cx="80" cy="66" r="3" fill={color} />
      <circle cx="80" cy="154" r="3" fill={color} />
      <circle cx="44" cy="110" r="3" fill={color} />
      <circle cx="116" cy="110" r="3" fill={color} />

      {/* Center 8-petal Star Anise (Flower Spice) */}
      <g transform="translate(80, 110)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <path
            key={angle}
            d="M 0 0 C -4 -16, 0 -25, 0 -25 C 0 -25, 4 -16, 0 0"
            fill={color}
            transform={`rotate(${angle})`}
          />
        ))}
        {/* Star anise center core */}
        <circle cx="0" cy="0" r="4.5" fill="var(--cream, #FEF4B9)" stroke={color} strokeWidth="1.5" />
      </g>
    </svg>
  );
};

// 2. LogoIE: Oval with "IE" letters inside, in secondary logo style
export const LogoIE: React.FC<LogoProps> = ({
  className = "",
  size = 120,
  color = "currentColor",
}) => {
  const height = (size * 220) / 160;

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 160 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      {/* Outer solid oval */}
      <ellipse
        cx="80"
        cy="110"
        rx="72"
        ry="102"
        stroke={color}
        strokeWidth="3.5"
        fill="none"
      />

      {/* Inner solid thin oval */}
      <ellipse
        cx="80"
        cy="110"
        rx="64"
        ry="94"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />

      {/* Top ornamental scrolls */}
      <path
        d="M 50 38 C 50 30, 80 20, 80 32 C 80 20, 110 30, 110 38"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 60 48 C 65 38, 80 34, 80 38 C 80 34, 95 38, 100 48"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bottom ornamental scrolls */}
      <path
        d="M 50 182 C 50 190, 80 200, 80 188 C 80 200, 110 190, 110 182"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 60 172 C 65 182, 80 186, 80 182 C 80 186, 95 182, 100 172"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Custom styled Serif Letters "IE" in the center */}
      <text
        x="80"
        y="126"
        fill={color}
        fontFamily="var(--font-playfair), 'Playfair Display', 'Fraunces', serif"
        fontSize="54"
        fontWeight="800"
        textAnchor="middle"
        letterSpacing="-3"
        style={{ userSelect: "none" }}
      >
        IE
      </text>
    </svg>
  );
};

// 3. LogoFull: Full stacked or horizontal brand logo with vintage flared serif text
interface LogoFullProps extends LogoProps {
  layout?: "horizontal" | "vertical" | "centered-badge";
  logoSize?: number;
}

export const LogoFull: React.FC<LogoFullProps> = ({
  className = "",
  layout = "horizontal",
  logoSize = 42,
  color = "var(--terracotta)",
}) => {
  if (layout === "vertical") {
    return (
      <div
        className={`flex flex-col items-center text-center ${className}`}
        style={{ gap: "10px" }}
      >
        <LogoMark size={logoSize} color={color} />
        <div className="flex flex-col items-center">
          <span
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.9rem",
              fontWeight: 800,
              color: color,
              lineHeight: 0.95,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              display: "block",
            }}
          >
            INDIAN
          </span>
          <span
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.9rem",
              fontWeight: 800,
              color: color,
              lineHeight: 0.95,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              display: "block",
            }}
          >
            EATS
          </span>
        </div>
      </div>
    );
  }

  if (layout === "centered-badge") {
    // Exactly matches the first image layout:
    // Logo mark in center, flanked by "ES TD" "20 26", and "INDIAN EATS" underneath
    return (
      <div
        className={`flex flex-col items-center text-center ${className}`}
        style={{ gap: "12px" }}
      >
        <div className="flex items-center justify-center gap-6 relative">
          <div
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "var(--sage-dark)",
              textTransform: "uppercase",
              lineHeight: 1.1,
              textAlign: "right",
            }}
          >
            ES
            <br />
            TD
          </div>

          <LogoMark size={64} color="var(--gold)" />

          <div
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "var(--sage-dark)",
              textTransform: "uppercase",
              lineHeight: 1.1,
              textAlign: "left",
            }}
          >
            20
            <br />
            26
          </div>
        </div>

        <div className="flex flex-col items-center mt-1">
          <h1
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "2.8rem",
              fontWeight: 800,
              color: color,
              lineHeight: 0.85,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            INDIAN
          </h1>
          <h1
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "2.8rem",
              fontWeight: 800,
              color: color,
              lineHeight: 0.95,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            EATS
          </h1>
        </div>
      </div>
    );
  }

  // Default: horizontal layout (ideal for standard navbar)
  return (
    <div
      className={`flex items-center gap-3.5 ${className}`}
      style={{ textDecoration: "none" }}
    >
      <LogoMark size={logoSize} color="var(--gold)" />
      <div className="flex flex-col justify-center">
        <span
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "1.45rem",
            fontWeight: 800,
            color: color,
            lineHeight: 0.9,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          INDIAN
        </span>
        <span
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "1.45rem",
            fontWeight: 800,
            color: color,
            lineHeight: 1,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          EATS
        </span>
      </div>
    </div>
  );
};
