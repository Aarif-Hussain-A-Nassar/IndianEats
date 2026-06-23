"use client";

import { LogoMark } from "./BrandLogos";

export default function Features() {
  const manifestos = [
    {
      metric: "0%",
      accent: "Artificial Fillers",
      title: "Pure Botanical Integrity",
      desc: "Supermarket spices are often loaded with anti-caking agents, synthetic dyes, and flour fillers. Our spices are 100% pure, single-origin botanicals.",
    },
    {
      metric: "100%",
      accent: "Direct Trade",
      title: "Single-Estate Sourcing",
      desc: "By bypassing multi-layered broker networks, we buy directly from family farms in Kerala, Rajasthan, and Kashmir, securing fair wages and pristine quality.",
    },
    {
      metric: "Grade A",
      accent: "Lab Certified",
      title: "Scientific Purity Standards",
      desc: "Every single import batch undergoes high-performance chromatography testing to certify volatile oil concentrations and zero pesticide residues.",
    },
    {
      metric: "Aroma Lock",
      accent: "Sealed Fresh",
      title: "Optimized Packaging Tech",
      desc: "Packed within 48 hours of milling in tri-layer aluminum composite seals to block light, moisture, and oxygen, preserving maximum therapeutic oils.",
    },
  ];

  return (
    <section
      id="features"
      style={{ backgroundColor: "var(--sage-dark)", padding: "clamp(60px,8vw,110px) 0", position: "relative", overflow: "hidden" }}
    >
      {/* Decorative background logo */}
      <span
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          opacity: 0.03,
          transform: "rotate(45deg)",
          pointerEvents: "none",
        }}
      >
        <LogoMark size={280} color="var(--cream)" />
      </span>

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 80px)" }} className="fade-up">
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            The Indian Eats Standard
          </span>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
              fontWeight: 800,
              color: "var(--cream)",
              marginTop: "8px",
            }}
          >
            Our Purity Manifesto
          </h2>
          <div style={{ width: "60px", height: "4px", backgroundColor: "var(--gold)", margin: "16px auto 0", borderRadius: "var(--radius-full)" }} />
        </div>

        {/* Manifesto Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {manifestos.map((m, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${i}`}
              style={{
                backgroundColor: "rgba(254, 244, 185, 0.05)",
                border: "1px solid rgba(254, 244, 185, 0.08)",
                borderRadius: "var(--radius-lg)",
                padding: "36px 30px",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(254, 244, 185, 0.08)";
                e.currentTarget.style.borderColor = "rgba(254, 244, 185, 0.2)";
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(254, 244, 185, 0.05)";
                e.currentTarget.style.borderColor = "rgba(254, 244, 185, 0.08)";
                e.currentTarget.style.transform = "none";
              }}
            >
              {/* Metric Callout */}
              <p
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "3.2rem",
                  fontWeight: 800,
                  color: "var(--gold)",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {m.metric}
              </p>
              
              {/* Accent tag */}
              <p
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--cream)",
                  marginBottom: "1.5rem",
                  opacity: 0.9,
                }}
              >
                {m.accent}
              </p>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--cream)",
                  marginBottom: "0.8rem",
                }}
              >
                {m.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(254, 244, 185, 0.72)",
                  lineHeight: 1.7,
                }}
              >
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
