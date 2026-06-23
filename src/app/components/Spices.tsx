"use client";

import { useState } from "react";
import Image from "next/image";

const signatureSpices = [
  {
    name: "Pure Alleppey Turmeric",
    origin: "Kerala, India",
    desc: "Single-estate golden wonder. Lab-tested at 6.2% curcumin density (nearly double standard retail turmeric). Earthy, warm, and highly anti-inflammatory.",
    price: 11.99,
    image: "/images/spice-turmeric.png",
    tag: "High Curcumin",
  },
  {
    name: "Grade A Green Cardamom",
    origin: "Western Ghats",
    desc: "Hand-picked green pods with intense floral aroma. Hand-sorted by size (8.5mm pods) for premium oil concentration. Sweet, herbal warmth.",
    price: 13.99,
    image: "/images/spice-cardamom.png",
    tag: "Aroma Grade",
  },
  {
    name: "Kashmiri Mogra Saffron",
    origin: "Pampore, Kashmir",
    desc: "The world's most luxurious spice. 100% pure crimson threads, hand-harvested from crocus flowers. Intense floral aroma and golden coloring power.",
    price: 24.99,
    image: "/images/spice-saffron.png",
    tag: "Premium Grade A+",
  },
];

export default function Spices() {
  // Slider states for custom blend builder
  const [heat, setHeat] = useState(40);
  const [aroma, setAroma] = useState(70);
  const [floral, setFloral] = useState(30);
  const [smoky, setSmoky] = useState(50);
  const [toastMessage, setToastMessage] = useState("");

  const getRecommendedBlendName = () => {
    if (heat > 75) {
      if (smoky > 60) return "Fiery Rajasthani Mathania Blend";
      return "Kandhari Red Chili Masala";
    }
    if (aroma > 75) {
      if (floral > 60) return "Royal Mughal Shahi Garam Masala";
      return "Malabar Pepper-Ginger Infusion";
    }
    if (smoky > 70) {
      return "Smoky Cardamom-Black Cumin Rub";
    }
    if (floral > 70) {
      return "Fragrant Kashmiri Saffron Rub";
    }
    return "Classic Indian Eats Everyday Masala";
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  const addToCart = (name: string, type: string, price: number) => {
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    currentCart.push({ name, type, price });
    localStorage.setItem("cart", JSON.stringify(currentCart));
    window.dispatchEvent(new Event("storage"));
    showToast(`Added "${name}" to your Spice Bag!`);
  };

  const handleAddCustomBlend = () => {
    const name = getRecommendedBlendName();
    const specs = `Custom Blend (Heat: ${heat}%, Aroma: ${aroma}%, Floral: ${floral}%, Smoky: ${smoky}%)`;
    addToCart(name, specs, 15.99);
  };

  return (
    <section
      id="spices"
      style={{ backgroundColor: "var(--cream-dark)", padding: "clamp(60px,8vw,110px) 0" }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 72px)" }} className="fade-up">
          <span className="section-tag" style={{ color: "var(--terracotta)", fontWeight: 800 }}>
            Interactive Experience
          </span>
          <h2 className="section-title">The Spice Lab</h2>
          <div className="divider" style={{ margin: "0 auto 16px", backgroundColor: "var(--terracotta)", width: "60px", height: "4px" }} />
          <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
            Adjust the sliders below to calibrate your perfect culinary flavor profile, or browse our raw signature single-origin single estates.
          </p>
        </div>

        {/* ── PART 1: The Interactive Spice Lab ── */}
        <div
          className="fade-up"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "32px",
            backgroundColor: "var(--cream)",
            borderRadius: "var(--radius-lg)",
            border: "2px solid var(--border)",
            padding: "clamp(24px, 4vw, 48px)",
            boxShadow: "var(--shadow-md)",
            marginBottom: "5rem",
            alignItems: "center",
          }}
        >
          {/* Controls Side */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.6rem", fontWeight: 800, color: "var(--brown-dark)" }}>
              Calibrate Flavor Profile
            </h3>
            
            {/* Slider 1: Heat */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div className="flex justify-between items-center">
                <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--brown-dark)", textTransform: "uppercase" }}>
                  🌶️ Heat Index
                </span>
                <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--terracotta)" }}>{heat}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={heat}
                onChange={(e) => setHeat(Number(e.target.value))}
                style={{
                  width: "100%",
                  accentColor: "var(--terracotta)",
                  cursor: "pointer",
                }}
              />
            </div>

            {/* Slider 2: Aroma */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div className="flex justify-between items-center">
                <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--brown-dark)", textTransform: "uppercase" }}>
                  🌿 Aroma Factor
                </span>
                <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--gold)" }}>{aroma}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={aroma}
                onChange={(e) => setAroma(Number(e.target.value))}
                style={{
                  width: "100%",
                  accentColor: "var(--gold)",
                  cursor: "pointer",
                }}
              />
            </div>

            {/* Slider 3: Floral */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div className="flex justify-between items-center">
                <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--brown-dark)", textTransform: "uppercase" }}>
                  🌸 Floral / Sweet Notes
                </span>
                <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--sage-dark)" }}>{floral}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={floral}
                onChange={(e) => setFloral(Number(e.target.value))}
                style={{
                  width: "100%",
                  accentColor: "var(--sage)",
                  cursor: "pointer",
                }}
              />
            </div>

            {/* Slider 4: Smoky */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div className="flex justify-between items-center">
                <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--brown-dark)", textTransform: "uppercase" }}>
                  🍂 Earthy / Smoky Level
                </span>
                <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--brown-light)" }}>{smoky}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={smoky}
                onChange={(e) => setSmoky(Number(e.target.value))}
                style={{
                  width: "100%",
                  accentColor: "var(--brown-light)",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>

          {/* Results Visualizer Side */}
          <div
            style={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "32px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <span style={{ fontSize: "2.5rem" }}>🧪</span>
            <div>
              <p style={{ fontSize: "0.68rem", fontWeight: 800, color: "var(--sage-dark)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Calibrated Blend Recommendation
              </p>
              <h4
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.45rem",
                  fontWeight: 800,
                  color: "var(--terracotta)",
                  marginTop: "8px",
                  lineHeight: 1.25,
                }}
              >
                {getRecommendedBlendName()}
              </h4>
            </div>

            {/* Visual Bar Charts */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", textAlign: "left", marginTop: "10px" }}>
              {[
                { name: "Heat Strength", val: heat, color: "var(--terracotta)" },
                { name: "Aroma Depth", val: aroma, color: "var(--gold)" },
                { name: "Floral Brightness", val: floral, color: "var(--sage)" },
                { name: "Earthy Base", val: smoky, color: "var(--brown-light)" },
              ].map((bar) => (
                <div key={bar.name} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div className="flex justify-between text-[10px] font-bold text-[var(--brown-dark)]">
                    <span>{bar.name}</span>
                    <span>{bar.val}%</span>
                  </div>
                  <div style={{ width: "100%", height: "6px", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "3px", overflow: "hidden" }}>
                    <div style={{ width: `${bar.val}%`, height: "100%", backgroundColor: bar.color, transition: "width 0.3s ease" }} />
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleAddCustomBlend}
              className="btn-primary w-full"
              style={{ marginTop: "12px", justifyContent: "center" }}
            >
              Add Custom Blend to Bag — $15.99
            </button>
          </div>
        </div>

        {/* ── PART 2: Signature Single estates ── */}
        <div className="fade-up">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.8rem", fontWeight: 800, color: "var(--brown-dark)" }}>
              Or Shop Single-Origin Estates
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginTop: "4px" }}>
              Unblended, raw spice elements, sourced directly from single geographic properties.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
            }}
          >
            {signatureSpices.map((s) => (
              <article
                key={s.name}
                className="card spice-card"
                style={{
                  position: "relative",
                  transition: "transform var(--transition), box-shadow var(--transition)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Tag badge */}
                <span
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    zIndex: 2,
                    backgroundColor: "var(--terracotta)",
                    color: "var(--cream)",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "6px 14px",
                    borderRadius: "var(--radius-full)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  {s.tag}
                </span>

                {/* Image */}
                <div style={{ position: "relative", height: "230px", overflow: "hidden" }}>
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="spice-img"
                    style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "28px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--sage-dark)",
                      marginBottom: "6px",
                      fontWeight: 800,
                    }}
                  >
                    {s.origin}
                  </p>
                  <h4
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "var(--brown-dark)",
                      marginBottom: "10px",
                    }}
                  >
                    {s.name}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      marginBottom: "24px",
                      flex: 1,
                    }}
                  >
                    {s.desc}
                  </p>

                  <div className="flex justify-between items-center mt-auto pt-4 border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                    <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--terracotta)" }}>
                      ${s.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => addToCart(s.name, "Single-Estate Spice Jar", s.price)}
                      className="btn-primary"
                      style={{ fontSize: "0.7rem", padding: "10px 22px" }}
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Interactive Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: "fixed",
            bottom: "28px",
            left: "28px",
            zIndex: 300,
            backgroundColor: "var(--brown-dark)",
            color: "var(--cream)",
            padding: "16px 24px",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid var(--gold)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
          className="animate-slide-up"
        >
          <span style={{ fontSize: "1.2rem" }}>🛒</span>
          <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>{toastMessage}</span>
        </div>
      )}

      {/* CSS details */}
      <style>{`
        .spice-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
        }
        .spice-card:hover .spice-img {
          transform: scale(1.05);
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (max-width: 768px) {
          #spices > .container > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
