"use client";

import Image from "next/image";

export default function About() {
  const steps = [
    { title: "Direct Sourcing", desc: "We pay 40%+ above fair-trade market rates to purchase directly from single-estate family farms in Kerala, Rajasthan, and Pampore." },
    { title: "Natural Sun-Drying", desc: "Spices are dehydrated naturally under direct sunlight. No sulphur fumigation or synthetic ripening agents are ever utilized." },
    { title: "Lab Certification", desc: "Every batch is chromatography-tested to qualify volatile oil content indices and ensure 100% purity before processing." },
    { title: "Cold Stone-Milling", desc: "Ground slowly at low temperatures using traditional stone mills to prevent thermal oil degradation and flavor loss." },
    { title: "Oxygen-Lock Seal", desc: "Pouched in air-tight, triple-layer aluminum composite packs to lock out ambient light, humidity, and oxygen." },
  ];

  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--cream-dark)",
        padding: "clamp(60px,8vw,110px) 0",
      }}
    >
      <div className="container">
        {/* Editorial Story Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "center",
            marginBottom: "5rem",
          }}
        >
          {/* Image Collage Frame */}
          <div className="fade-up" style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                aspectRatio: "4/5",
                position: "relative",
                border: "4px solid var(--cream)",
              }}
            >
              <Image
                src="/images/about-kitchen.png"
                alt="Traditional Indian kitchen with terracotta pots and spice jars"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Float Badge */}
            <div
              className="animate-float"
              style={{
                position: "absolute",
                bottom: "28px",
                right: "-20px",
                backgroundColor: "var(--terracotta)",
                color: "var(--cream)",
                borderRadius: "var(--radius-md)",
                border: "3px solid var(--gold)",
                padding: "20px 24px",
                textAlign: "center",
                boxShadow: "var(--shadow-md)",
                zIndex: 10,
              }}
            >
              <p style={{ fontSize: "2.2rem", fontWeight: 800, fontFamily: "var(--font-playfair)", lineHeight: 1 }}>
                100%
              </p>
              <p style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.9, marginTop: "4px", fontWeight: 800 }}>
                Single-Origin<br />Traceability
              </p>
            </div>
          </div>

          {/* Story Text */}
          <div className="fade-up fade-up-delay-2">
            <span className="section-tag" style={{ color: "var(--sage-dark)", fontWeight: 800 }}>Our Story</span>
            <h2 className="section-title">
              Dismantling a Broken<br />Spice Industry
            </h2>
            <div className="divider" style={{ backgroundColor: "var(--terracotta)", width: "60px", height: "4px" }} />
            
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.2rem", fontSize: "0.98rem" }}>
              Most grocery store spices are blends of crop yields from hundreds of farms, sitting in hot warehouses for months. By the time they reach your plate, their therapeutic oils have evaporated, leaving chalky, color-dyed powder.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.98rem" }}>
              We started Indian Eats to rebuild the connection between kitchen tables and single-estate farming plots. Sourced directly from growers like Priya Nair in Kerala and Kashmir family plots, our spices are ground in micro-batches and shipped straight to you.
            </p>

            {/* Value Indicators */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              {[
                { label: "Fair Sourcing Premium", val: "40%+" },
                { label: "Volatile Oil Density", val: "High Index" },
              ].map((val) => (
                <div
                  key={val.label}
                  style={{
                    backgroundColor: "var(--cream)",
                    padding: "16px",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <p style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--terracotta)", fontFamily: "var(--font-playfair)" }}>
                    {val.val}
                  </p>
                  <p style={{ fontSize: "0.72rem", color: "var(--sage-dark)", fontWeight: 700, marginTop: "4px" }}>
                    {val.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PART 2: Supply Chain Timeline Trace ── */}
        <div className="fade-up">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.8rem", fontWeight: 800, color: "var(--brown-dark)" }}>
              The Supply-Chain Blueprint
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginTop: "4px" }}>
              Every milligram is tracked from the soil to your spice shaker.
            </p>
          </div>

          <div
            className="timeline-row"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "20px",
              position: "relative",
            }}
          >
            {steps.map((st, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--cream)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: "24px 20px",
                  position: "relative",
                  boxShadow: "var(--shadow-sm)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {/* Steps Counter */}
                <span
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "var(--terracotta)",
                    color: "var(--cream)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.78rem",
                    fontWeight: 800,
                  }}
                >
                  0{idx + 1}
                </span>

                <h4 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.05rem", fontWeight: 800, color: "var(--brown-dark)" }}>
                  {st.title}
                </h4>
                
                <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
          #about .container > div:first-of-type > div:first-of-type > div:last-of-type {
            right: 10px !important;
            bottom: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
