"use client";

const testimonials = [
  {
    name: "Ananya Sharma",
    location: "Mumbai",
    avatar: "🧕",
    rating: 5,
    text: "The saffron from Indian Eats is unlike anything I've bought from a supermarket. One pinch and my biryani had that gorgeous golden hue and aroma. Absolutely worth every rupee!",
  },
  {
    name: "Rahul Menon",
    location: "Bengaluru",
    avatar: "👨‍💼",
    rating: 5,
    text: "I tried their Butter Chicken recipe with the masala blend they recommended — my family said it was restaurant-quality. The step-by-step guide made it so easy to follow.",
  },
  {
    name: "Priya Nair",
    location: "Kochi",
    avatar: "👩‍🍳",
    rating: 5,
    text: "As a home chef, the quality of spices matters everything to me. Indian Eats consistently delivers freshness — you can smell the difference the moment you open the packet.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        background: "linear-gradient(135deg, var(--brown-dark) 0%, #3b1a08 100%)",
        padding: "clamp(60px,8vw,100px) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        .testimonial-card:hover {
          background-color: rgba(245,234,216,0.12) !important;
          transform: translateY(-4px);
        }
      `}</style>

      {/* Decorative background text */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontSize: "clamp(120px, 18vw, 200px)",
          fontFamily: "var(--font-playfair)",
          fontWeight: 800,
          color: "rgba(255,255,255,0.03)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        Reviews
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(40px, 5vw, 60px)" }}>
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--accent-light)",
            }}
          >
            What People Say
          </span>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "var(--cream)",
              margin: "10px 0 0",
            }}
          >
            Loved by Foodies
          </h2>
          <div
            style={{
              width: "48px",
              height: "3px",
              background: "var(--accent)",
              borderRadius: "9999px",
              margin: "16px auto 0",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(16px, 2.5vw, 28px)",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`testimonial-card fade-up fade-up-delay-${i}`}
              style={{
                backgroundColor: "rgba(245,234,216,0.07)",
                border: "1px solid rgba(245,234,216,0.12)",
                borderRadius: "var(--radius-lg)",
                padding: "clamp(24px, 3vw, 36px)",
                backdropFilter: "blur(4px)",
                transition: "background var(--transition), transform var(--transition)",
              }}
            >
              {/* Stars */}
              <div style={{ marginBottom: "16px" }}>
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <span key={idx} style={{ color: "#f5b940", fontSize: "1rem" }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "rgba(245,234,216,0.82)",
                  marginBottom: "24px",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(196,107,45,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: "var(--cream)", fontSize: "0.9rem" }}>{t.name}</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--accent-light)" }}>{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
