"use client";

const testimonials = [
  {
    name: "Ananya Sharma",
    location: "Mumbai",
    avatar: "🧕",
    rating: 5,
    verified: true,
    product: "Alleppey Turmeric Jar",
    text: "The saffron and turmeric from Indian Eats are unlike anything I've bought from a standard retail store. The curcumin color is incredibly deep, and the earthy aroma immediately fills the kitchen. Absolutely worth every rupee!",
  },
  {
    name: "Rahul Menon",
    location: "Bengaluru",
    avatar: "👨‍💼",
    rating: 5,
    verified: true,
    product: "Royal Garam Masala Blend",
    text: "I tried their Butter Chicken recipe using the specialty Garam Masala pack. My family claimed it was restaurant-quality. The steps were easy to follow and being able to dynamically adjust servings saved me so much math!",
  },
  {
    name: "Priya Nair",
    location: "Kochi",
    avatar: "👩‍🍳",
    rating: 5,
    verified: true,
    product: "Green Cardamom Pods",
    text: "As a professional regional home chef, spice oil concentrations define the depth of my curries. These cardamom pods are plump, intact, and packed with floral oil. The packaging trace is brilliant and highly transparent.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        background: "linear-gradient(135deg, var(--brown-dark) 0%, var(--sage-dark) 100%)",
        padding: "clamp(60px,8vw,110px) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        .testimonial-card:hover {
          background-color: rgba(254,244,185,0.12) !important;
          transform: translateY(-4px);
        }
      `}</style>

      {/* Background Ornate Text */}
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
          color: "rgba(254,244,185,0.02)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        Verified Reviews
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 72px)" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            Real Feedback
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
            Loved by Culinary Artisans
          </h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              background: "var(--gold)",
              borderRadius: "var(--radius-full)",
              margin: "16px auto 0",
            }}
          />
        </div>

        {/* Card Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`testimonial-card fade-up fade-up-delay-${i}`}
              style={{
                backgroundColor: "rgba(254,244,185,0.05)",
                border: "1px solid rgba(254,244,185,0.09)",
                borderRadius: "var(--radius-lg)",
                padding: "36px 30px",
                backdropFilter: "blur(4px)",
                transition: "background var(--transition), transform var(--transition)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                {/* Rating Row & Verification Badge */}
                <div className="flex justify-between items-center mb-4">
                  <div style={{ display: "flex", gap: "2px" }}>
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <span key={idx} style={{ color: "var(--gold)", fontSize: "0.95rem" }}>★</span>
                    ))}
                  </div>
                  {t.verified && (
                    <span
                      style={{
                        fontSize: "0.62rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        backgroundColor: "rgba(142, 163, 148, 0.2)",
                        color: "var(--gold)",
                        padding: "3px 10px",
                        borderRadius: "var(--radius-full)",
                        border: "1px solid rgba(248, 158, 0, 0.2)",
                      }}
                    >
                      ✓ Verified Buyer
                    </span>
                  )}
                </div>

                {/* Purchased product reference */}
                <p style={{ fontSize: "0.72rem", color: "var(--gold)", fontWeight: 700, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Purchased: {t.product}
                </p>

                {/* Review Text */}
                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.75,
                    color: "rgba(254,244,185,0.82)",
                    marginBottom: "24px",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* User Avatar Row */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "auto", paddingTop: "16px", borderTop: "1px solid rgba(254,244,185,0.06)" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(246,99,30,0.25)",
                    border: "1px solid rgba(246,99,30,0.4)",
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
                  <p style={{ fontSize: "0.75rem", color: "var(--gold)", fontWeight: 600 }}>{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
