"use client";

import Image from "next/image";
import { LogoMark } from "./BrandLogos";

export default function Hero() {
  const scrollToSpices = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#spices");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToRecipes = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#recipes");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      style={{
        backgroundColor: "var(--cream)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "120px", // space for floating navbar
      }}
    >
      {/* ── Ambient Glow Blobs (DTC Product Style) ── */}
      <div
        className="animate-glow"
        style={{
          position: "absolute",
          top: "10%",
          right: "15%",
          width: "clamp(200px, 25vw, 350px)",
          height: "clamp(200px, 25vw, 350px)",
          borderRadius: "50%",
          backgroundColor: "var(--terracotta)",
          filter: "blur(110px)",
          opacity: 0.16,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        className="animate-glow-slow"
        style={{
          position: "absolute",
          bottom: "15%",
          left: "8%",
          width: "clamp(250px, 30vw, 400px)",
          height: "clamp(250px, 30vw, 400px)",
          borderRadius: "50%",
          backgroundColor: "var(--gold)",
          filter: "blur(130px)",
          opacity: 0.14,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Floating Ornaments */}
      <span
        aria-hidden="true"
        className="animate-float"
        style={{
          position: "absolute",
          top: "22%",
          left: "40%",
          opacity: 0.08,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <LogoMark size={70} color="var(--terracotta)" />
      </span>

      {[
        { emoji: "🌶️", top: "15%", right: "8%", size: "2.2rem", rotate: "-15deg", opacity: 0.2 },
        { emoji: "🍂", bottom: "18%", right: "4%", size: "1.8rem", rotate: "10deg", opacity: 0.18 },
        { emoji: "🌿", top: "45%", left: "4%", size: "2rem", rotate: "25deg", opacity: 0.15 },
      ].map((d, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: d.top,
            bottom: d.bottom,
            left: d.left,
            right: d.right,
            fontSize: d.size,
            transform: `rotate(${d.rotate})`,
            opacity: d.opacity,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        >
          {d.emoji}
        </span>
      ))}

      <div
        className="container"
        style={{
          paddingTop: "clamp(40px, 6vw, 80px)",
          paddingBottom: "clamp(60px, 8vw, 110px)",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left - Sales Hook */}
        <div className="fade-up">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(246, 99, 30, 0.08)",
              border: "1px solid rgba(246, 99, 30, 0.2)",
              padding: "6px 16px",
              borderRadius: "var(--radius-full)",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ fontSize: "0.8rem" }}>✨</span>
            <span
              style={{
                fontSize: "0.68rem",
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--terracotta)",
              }}
            >
              Direct-to-Kitchen Pure Craft Spices
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-playfair, 'Fraunces', serif)",
              fontSize: "clamp(3rem, 6vw, 5.2rem)",
              fontWeight: 800,
              color: "var(--brown-dark)",
              lineHeight: 1.05,
              marginBottom: "1.2rem",
              letterSpacing: "-0.02em",
            }}
          >
            Taste the<br />
            <span style={{ color: "var(--terracotta)", position: "relative", display: "inline-block" }}>
              Untamed
              <svg
                viewBox="0 0 100 10"
                style={{
                  position: "absolute",
                  bottom: "-6px",
                  left: 0,
                  width: "100%",
                  height: "8px",
                  fill: "var(--gold)",
                }}
                preserveAspectRatio="none"
              >
                <path d="M0,5 Q25,0 50,5 T100,5 L100,10 L0,10 Z" />
              </svg>
            </span>
            {" "}Flavours
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              maxWidth: "460px",
              marginBottom: "2.2rem",
            }}
          >
            Stop cooking with stale, dusty supermarket tins. Discover hand-selected, natural-dried spices sourced directly from single-estate Indian growers. Sealed at peak aroma, shipped to your door.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="#spices" onClick={scrollToSpices} className="btn-primary">
              Build Custom Blend
            </a>
            <a href="#recipes" onClick={scrollToRecipes} className="btn-outline" style={{ borderColor: "var(--terracotta)", color: "var(--terracotta)" }}>
              Browse Recipes
            </a>
          </div>

          {/* Stats Bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              marginTop: "3.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border)",
              maxWidth: "480px",
            }}
          >
            {[
              { value: "48 Hr", label: "Harvest to Seal" },
              { value: "100%", label: "Zero Fillers" },
              { value: "40+", label: "Single Farms" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    color: "var(--terracotta)",
                    fontFamily: "var(--font-playfair)",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </p>
                <p style={{ fontSize: "0.72rem", color: "var(--sage-dark)", fontWeight: 700, marginTop: "6px", letterSpacing: "0.02em", lineHeight: 1.2 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Interactive Product Circle Layout */}
        <div
          className="fade-up fade-up-delay-2"
          style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}
        >
          {/* Main Visual Frame */}
          <div
            style={{
              position: "relative",
              width: "clamp(290px, 35vw, 420px)",
              height: "clamp(290px, 35vw, 420px)",
            }}
          >
            {/* Outer rotating dashed ring (Terracotta) */}
            <div
              className="spin-slow-reverse"
              style={{
                position: "absolute",
                inset: "-20px",
                borderRadius: "50%",
                border: "2px dashed var(--terracotta)",
                opacity: 0.4,
              }}
            />
            
            {/* Inner rotating dashed ring (Gold) */}
            <div
              className="spin-slow"
              style={{
                position: "absolute",
                inset: "-10px",
                borderRadius: "50%",
                border: "3px dashed var(--gold)",
                opacity: 0.7,
              }}
            />

            {/* Core Circular image */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                border: "6px solid var(--cream-dark)",
                boxShadow: "var(--shadow-lg)",
                position: "relative",
                zIndex: 2,
              }}
            >
              <Image
                src="/images/hero-spices.png"
                alt="Premium Craft Spice kit"
                width={500}
                height={500}
                priority
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

            {/* ── Floating DTC Spec Badges ── */}
            {/* Spec Badge 1 (Top Left) */}
            <div
              className="animate-float glass-panel"
              style={{
                position: "absolute",
                top: "-15px",
                left: "-30px",
                zIndex: 10,
                borderRadius: "var(--radius-md)",
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>🥇</span>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 800, color: "var(--brown-dark)", lineHeight: 1.1 }}>Kashmir Saffron</p>
                <p style={{ fontSize: "0.58rem", color: "var(--sage-dark)", fontWeight: 700 }}>Grade A++ Purity</p>
              </div>
            </div>

            {/* Spec Badge 2 (Bottom Right) */}
            <div
              className="animate-float-reverse glass-panel"
              style={{
                position: "absolute",
                bottom: "20px",
                right: "-40px",
                zIndex: 10,
                borderRadius: "var(--radius-md)",
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>🌿</span>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 800, color: "var(--brown-dark)", lineHeight: 1.1 }}>Hand-Harvested</p>
                <p style={{ fontSize: "0.58rem", color: "var(--terracotta)", fontWeight: 800 }}>Organic Certified</p>
              </div>
            </div>

            {/* Spec Badge 3 (Bottom Left) */}
            <div
              className="animate-float-slow glass-panel"
              style={{
                position: "absolute",
                bottom: "-25px",
                left: "20px",
                zIndex: 10,
                borderRadius: "var(--radius-md)",
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <span style={{ fontSize: "1rem" }}>🔥</span>
              <span style={{ fontSize: "0.62rem", fontWeight: 800, color: "var(--brown-dark)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Aroma Lock Sealed
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive & Spin CSS */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .spin-slow {
          animation: spin 35s linear infinite;
        }
        .spin-slow-reverse {
          animation: spin 50s linear infinite reverse;
        }
        @media (max-width: 768px) {
          #hero {
            padding-top: 100px;
          }
          #hero > .container {
            grid-template-columns: 1fr !important;
            text-align: center;
            padding-top: 20px;
            padding-bottom: 60px;
          }
          #hero .divider { margin-inline: auto; }
          #hero p { margin-inline: auto; }
          #hero .btn-primary, #hero .btn-outline { width: 100%; justify-content: center; }
          #hero > .container > div:last-child { order: -1; margin-bottom: 40px; }
          #hero > .container > div:last-child > div { width: clamp(230px, 50vw, 290px) !important; height: clamp(230px, 50vw, 290px) !important; }
        }
      `}</style>
    </section>
  );
}
