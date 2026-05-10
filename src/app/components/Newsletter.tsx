"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="newsletter"
      style={{
        backgroundColor: "var(--cream)",
        padding: "clamp(60px,8vw,100px) 0",
      }}
    >
      <div className="container">
        <div
          style={{
            backgroundColor: "var(--brown-dark)",
            borderRadius: "var(--radius-lg)",
            padding: "clamp(40px, 6vw, 72px)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background spice emojis */}
          {["🌿", "⭐", "🌶️", "🍂"].map((e, i) => (
            <span
              key={i}
              aria-hidden="true"
              style={{
                position: "absolute",
                fontSize: "clamp(3rem, 6vw, 6rem)",
                opacity: 0.05,
                userSelect: "none",
                pointerEvents: "none",
                ...(i === 0 && { top: "10%", left: "2%" }),
                ...(i === 1 && { top: "15%", right: "5%" }),
                ...(i === 2 && { bottom: "10%", left: "8%" }),
                ...(i === 3 && { bottom: "5%", right: "3%" }),
              }}
            >
              {e}
            </span>
          ))}

          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--accent-light)",
              position: "relative",
            }}
          >
            Stay in the Loop
          </span>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--cream)",
              margin: "12px 0 16px",
              position: "relative",
            }}
          >
            Get Weekly Recipes &amp; Spice Tips
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "rgba(245,234,216,0.7)",
              maxWidth: "480px",
              margin: "0 auto 36px",
              lineHeight: 1.75,
              position: "relative",
            }}
          >
            Join 10,000+ food lovers who receive authentic recipes, seasonal
            spice guides, and exclusive offers every week.
          </p>

          {submitted ? (
            <div
              style={{
                backgroundColor: "rgba(245,234,216,0.1)",
                border: "1px solid rgba(245,234,216,0.3)",
                borderRadius: "var(--radius-md)",
                padding: "20px 32px",
                color: "var(--cream)",
                fontSize: "1rem",
                position: "relative",
              }}
            >
              🎉 Thank you! Check your inbox for a welcome spice guide.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                gap: "12px",
                maxWidth: "480px",
                margin: "0 auto",
                flexWrap: "wrap",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                style={{
                  flex: "1 1 280px",
                  padding: "14px 20px",
                  borderRadius: "var(--radius-full)",
                  border: "none",
                  fontSize: "0.9rem",
                  backgroundColor: "rgba(245,234,216,0.12)",
                  color: "var(--cream)",
                  outline: "none",
                }}
              />
              <button type="submit" className="btn-primary" style={{ flexShrink: 0 }}>
                Subscribe
              </button>
            </form>
          )}

          <p
            style={{
              marginTop: "16px",
              fontSize: "0.75rem",
              color: "rgba(245,234,216,0.4)",
              position: "relative",
            }}
          >
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
