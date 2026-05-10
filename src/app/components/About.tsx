import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--cream-dark)",
        padding: "clamp(60px,8vw,100px) 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "center",
          }}
        >
          {/* Image side */}
          <div className="fade-up" style={{ position: "relative" }}>
            {/* Main image */}
            <div
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                aspectRatio: "4/5",
                position: "relative",
              }}
            >
              <Image
                src="/images/about-kitchen.png"
                alt="Traditional Indian kitchen with terracotta pots and spice jars"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: "28px",
                right: "-20px",
                backgroundColor: "var(--brown-dark)",
                color: "var(--cream)",
                borderRadius: "var(--radius-md)",
                padding: "20px 24px",
                textAlign: "center",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <p style={{ fontSize: "2.2rem", fontWeight: 800, fontFamily: "var(--font-playfair)", lineHeight: 1 }}>
                12+
              </p>
              <p style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.8, marginTop: "4px" }}>
                Years of<br />Tradition
              </p>
            </div>
          </div>

          {/* Text side */}
          <div className="fade-up fade-up-delay-2">
            <span className="section-tag">Our Story</span>
            <h2 className="section-title">
              Rooted in Tradition,<br />Crafted with Love
            </h2>
            <div className="divider" />
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "1.2rem", fontSize: "1rem" }}>
              Indian Eats was born from a simple belief: that the best food starts with the best
              ingredients. Growing up in Kerala, our founder Priya watched her grandmother grind
              fresh spices every morning — a ritual that transformed everyday meals into something magical.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "2rem", fontSize: "1rem" }}>
              Today, we curate and deliver the finest spices from across India — straight from farms
              to your kitchen — along with the recipes that make them shine.
            </p>

            {/* Points */}
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "2.5rem" }}>
              {[
                "Direct partnerships with 40+ spice farms",
                "No artificial additives or preservatives",
                "Recipes developed by regional home chefs",
              ].map((pt) => (
                <li
                  key={pt}
                  style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.9rem", color: "var(--text-primary)" }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "2px",
                      fontSize: "0.65rem",
                      color: "white",
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>
                  {pt}
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-primary">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div {
            grid-template-columns: 1fr !important;
          }
          #about .container > div > div:first-child > div:last-child {
            right: 10px !important;
            bottom: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
