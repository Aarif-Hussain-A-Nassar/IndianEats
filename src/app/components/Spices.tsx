import Image from "next/image";
import Link from "next/link";

const spices = [
  {
    name: "Turmeric",
    origin: "Kerala, India",
    desc: "The golden wonder — anti-inflammatory, earthy, and essential in every Indian curry.",
    image: "/images/spice-turmeric.png",
    tag: "Most Popular",
  },
  {
    name: "Cardamom",
    origin: "Western Ghats",
    desc: "Fragrant green pods with a sweet, floral heat used in biryanis, chai, and desserts.",
    image: "/images/spice-cardamom.png",
    tag: "Bestseller",
  },
  {
    name: "Saffron",
    origin: "Kashmir",
    desc: "The world's most prized spice — a few strands infuse dishes with a royal golden glow.",
    image: "/images/spice-saffron.png",
    tag: "Premium",
  },
];

export default function Spices() {
  return (
    <section
      id="spices"
      style={{ backgroundColor: "var(--cream-dark)", padding: "clamp(60px,8vw,100px) 0" }}
    >
      <style>{`
        .spice-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
        .spice-card:hover .spice-img { transform: scale(1.06); }
      `}</style>

      <div className="container">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "clamp(40px, 5vw, 60px)" }}>
          <span className="section-tag">Hand-Picked &amp; Pure</span>
          <h2 className="section-title">Our Signature Spices</h2>
          <div className="divider" style={{ margin: "0 auto 16px" }} />
          <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
            Every spice we carry is sourced from its origin, dried naturally, and sealed to preserve
            maximum flavour and aroma.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(16px, 2.5vw, 28px)",
          }}
        >
          {spices.map((s, i) => (
            <article
              key={s.name}
              className={`card spice-card fade-up fade-up-delay-${i}`}
              style={{
                position: "relative",
                transition: "transform var(--transition), box-shadow var(--transition)",
              }}
            >
              {/* Tag badge */}
              <span
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  zIndex: 2,
                  backgroundColor: "var(--brown-dark)",
                  color: "var(--cream)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  borderRadius: "var(--radius-full)",
                }}
              >
                {s.tag}
              </span>

              {/* Image */}
              <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="spice-img"
                  style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "clamp(18px, 2vw, 28px)" }}>
                <p
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "6px",
                    fontWeight: 600,
                  }}
                >
                  {s.origin}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "var(--brown-dark)",
                    marginBottom: "10px",
                  }}
                >
                  {s.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                  }}
                >
                  {s.desc}
                </p>
                <Link
                  href={`/spices/${s.name.toLowerCase()}`}
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--brown-dark)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    borderBottom: "2px solid var(--accent)",
                    paddingBottom: "2px",
                    transition: "color var(--transition)",
                  }}
                >
                  Explore Spice →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View all */}
        <div style={{ textAlign: "center", marginTop: "clamp(32px, 4vw, 48px)" }}>
          <Link href="/spices" className="btn-outline">
            View All Spices
          </Link>
        </div>
      </div>
    </section>
  );
}
