import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ backgroundColor: "var(--cream)", position: "relative", overflow: "hidden" }}
    >
      {/* Decorative floating spices */}
      {[
        { emoji: "🌿", top: "8%",  left: "38%",  size: "3rem",  rotate: "15deg",  opacity: 0.18 },
        { emoji: "🌶️", top: "12%", right: "12%", size: "2.5rem", rotate: "-10deg", opacity: 0.22 },
        { emoji: "⭐", bottom: "18%", left: "4%",  size: "3rem",  rotate: "8deg",   opacity: 0.18 },
        { emoji: "🍂", bottom: "12%", right: "6%", size: "2rem",  rotate: "-15deg", opacity: 0.2  },
        { emoji: "🌰", top: "50%",  left: "3%",   size: "2.5rem", rotate: "0deg",   opacity: 0.14 },
        { emoji: "🫚", top: "25%",  left: "48%",  size: "1.8rem", rotate: "-8deg",  opacity: 0.12 },
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
          paddingTop: "clamp(60px, 8vw, 110px)",
          paddingBottom: "clamp(60px, 8vw, 110px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left */}
        <div className="fade-up">
          <span className="section-tag">Welcome to Indian Eats</span>

          <h1
            style={{
              fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
              fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
              fontWeight: 800,
              color: "var(--brown-dark)",
              lineHeight: 1.08,
              marginBottom: "1.2rem",
            }}
          >
            Authentic<br />
            <span style={{ color: "var(--accent)" }}>Indian</span> Spices
          </h1>

          <div className="divider" />

          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              maxWidth: "440px",
              marginBottom: "2rem",
            }}
          >
            Journey through the vibrant flavours of India. From the smoky warmth
            of cumin to the floral heat of cardamom — discover spices that have
            defined cuisine for centuries.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/recipes" id="hero-explore" className="btn-primary">
              Explore Recipes
            </Link>
            <Link href="/spices" id="hero-spices" className="btn-outline">
              Our Spices
            </Link>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            {[
              { value: "200+", label: "Recipes" },
              { value: "50+",  label: "Spices" },
              { value: "10K+", label: "Happy Foodies" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontSize: "1.7rem",
                    fontWeight: 800,
                    color: "var(--brown-dark)",
                    fontFamily: "var(--font-playfair)",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </p>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "4px", letterSpacing: "0.05em" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — circular image */}
        <div className="fade-up fade-up-delay-2" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {/* Outer glow ring */}
          <div
            style={{
              position: "relative",
              width: "clamp(280px, 38vw, 500px)",
              height: "clamp(280px, 38vw, 500px)",
            }}
          >
            {/* Decorative ring */}
            <div
              style={{
                position: "absolute",
                inset: "-12px",
                borderRadius: "50%",
                border: "2px dashed var(--brown-light)",
                opacity: 0.35,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "-24px",
                borderRadius: "50%",
                border: "1px dashed var(--accent)",
                opacity: 0.2,
              }}
            />

            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                border: "6px solid var(--brown-mid)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <Image
                src="/images/hero-spices.png"
                alt="A clay bowl filled with aromatic cinnamon sticks and spices"
                width={500}
                height={500}
                priority
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS to make this section responsive */}
      <style>{`
        @media (max-width: 768px) {
          #hero > .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          #hero .divider { margin-inline: auto; }
          #hero p { margin-inline: auto; }
          #hero .btn-primary, #hero .btn-outline { width: 100%; justify-content: center; }
          #hero > .container > div:last-child { order: -1; }
          #hero > .container > div:last-child > div { width: clamp(220px, 60vw, 320px) !important; height: clamp(220px, 60vw, 320px) !important; }
        }
      `}</style>
    </section>
  );
}
