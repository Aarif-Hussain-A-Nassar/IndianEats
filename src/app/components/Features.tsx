"use client";

export default function Features() {
  const features = [
    {
      icon: "🌿",
      title: "Farm-Fresh Spices",
      desc: "Sourced directly from trusted farms across Kerala, Rajasthan, and Kashmir — hand-picked at peak aroma.",
    },
    {
      icon: "👩‍🍳",
      title: "Authentic Recipes",
      desc: "Handed down through generations. Each recipe carries the soul of an Indian home kitchen.",
    },
    {
      icon: "📦",
      title: "Delivered Fresh",
      desc: "Order online and receive your spices in sealed, aroma-lock packaging within 3–5 days.",
    },
    {
      icon: "🔬",
      title: "Purity Guaranteed",
      desc: "Every batch is lab-tested and certified free from artificial additives, colours, and preservatives.",
    },
  ];

  return (
    <section
      id="features"
      style={{ backgroundColor: "var(--brown-dark)", padding: "clamp(50px,7vw,90px) 0" }}
    >
      <style>{`
        .feature-item:hover { background-color: rgba(255,255,255,0.04); }
      `}</style>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className={`feature-item fade-up fade-up-delay-${i}`}
              style={{
                padding: "clamp(24px, 3vw, 40px)",
                textAlign: "center",
                borderRight:
                  i < features.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
                transition: "background var(--transition)",
              }}
            >
              <div
                style={{
                  fontSize: "2.4rem",
                  marginBottom: "1rem",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(196,107,45,0.2)",
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#f5ead8",
                  marginBottom: "0.6rem",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(245,234,216,0.65)",
                  lineHeight: 1.7,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
