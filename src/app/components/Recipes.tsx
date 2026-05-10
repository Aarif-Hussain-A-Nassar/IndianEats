import Image from "next/image";
import Link from "next/link";

const recipes = [
  {
    name: "Butter Chicken",
    category: "Main Course",
    time: "45 min",
    difficulty: "Medium",
    image: "/images/dish-butter-chicken.png",
    desc: "Creamy tomato-based curry with tender chicken — a timeless Punjabi classic.",
  },
  {
    name: "Hyderabadi Biryani",
    category: "Rice Dish",
    time: "90 min",
    difficulty: "Advanced",
    image: "/images/dish-biryani.png",
    desc: "Fragrant basmati rice layered with spiced meat and saffron, slow-cooked to perfection.",
  },
  {
    name: "Paneer Tikka",
    category: "Appetizer",
    time: "30 min",
    difficulty: "Easy",
    image: "/images/dish-paneer-tikka.png",
    desc: "Smoky grilled cottage cheese marinated in spiced yoghurt — a vegetarian crowd-pleaser.",
  },
];

const difficultyColor: Record<string, string> = {
  Easy: "#4caf50",
  Medium: "#ff9800",
  Advanced: "#e53935",
};

export default function Recipes() {
  return (
    <section id="recipes" style={{ backgroundColor: "var(--cream)", padding: "clamp(60px,8vw,100px) 0" }}>
      <div className="container">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "clamp(40px, 5vw, 60px)" }}>
          <span className="section-tag">Straight from the Kitchen</span>
          <h2 className="section-title">Featured Recipes</h2>
          <div className="divider" style={{ margin: "0 auto 16px" }} />
          <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
            Step-by-step guides to India's most-loved dishes, with authentic spice measurements and technique.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(16px, 2.5vw, 28px)",
          }}
        >
          {recipes.map((r, i) => (
            <article key={r.name} className={`card fade-up fade-up-delay-${i}`}>
              {/* Image */}
              <div style={{ position: "relative", height: "230px", overflow: "hidden" }}>
                <Image src={r.image} alt={r.name} fill style={{ objectFit: "cover" }} />
                {/* Category chip */}
                <span
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    backgroundColor: "rgba(245,234,216,0.92)",
                    color: "var(--brown-dark)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "4px 12px",
                    borderRadius: "var(--radius-full)",
                  }}
                >
                  {r.category}
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: "clamp(18px, 2vw, 28px)" }}>
                {/* Meta row */}
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    marginBottom: "12px",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                    ⏱ {r.time}
                  </span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: difficultyColor[r.difficulty],
                      backgroundColor: `${difficultyColor[r.difficulty]}18`,
                      padding: "2px 10px",
                      borderRadius: "var(--radius-full)",
                    }}
                  >
                    {r.difficulty}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--brown-dark)",
                    marginBottom: "8px",
                  }}
                >
                  {r.name}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "20px" }}>
                  {r.desc}
                </p>
                <Link
                  href={`/recipes/${r.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="btn-primary"
                  style={{ fontSize: "0.72rem", padding: "10px 22px" }}
                >
                  View Recipe
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "clamp(32px, 4vw, 48px)" }}>
          <Link href="/recipes" className="btn-outline">
            Browse All Recipes
          </Link>
        </div>
      </div>
    </section>
  );
}
