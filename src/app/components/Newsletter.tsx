"use client";

import { useState } from "react";
import { LogoMark } from "./BrandLogos";

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
            backgroundColor: "var(--terracotta)",
            borderRadius: "var(--radius-lg)",
            padding: "clamp(40px, 6vw, 72px)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "var(--shadow-lg)",
            border: "4px solid var(--cream-dark)",
          }}
        >
          {/* Background spice emojis & logo marks */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "10%",
              left: "2%",
              opacity: 0.08,
              transform: "rotate(-15deg)",
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            <LogoMark size={90} color="var(--cream)" bgColor="transparent" />
          </span>
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "5%",
              right: "3%",
              opacity: 0.08,
              transform: "rotate(20deg)",
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            <LogoMark size={110} color="var(--cream)" bgColor="transparent" />
          </span>

          {["🌿", "🌶️"].map((e, i) => (
            <span
              key={i}
              aria-hidden="true"
              style={{
                position: "absolute",
                fontSize: "clamp(3rem, 6vw, 6rem)",
                opacity: 0.06,
                userSelect: "none",
                pointerEvents: "none",
                ...(i === 0 && { top: "15%", right: "5%" }),
                ...(i === 1 && { bottom: "10%", left: "8%" }),
              }}
            >
              {e}
            </span>
          ))}

          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--cream)",
              position: "relative",
              opacity: 0.95,
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
              color: "rgba(254,244,185,0.85)",
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
                backgroundColor: "rgba(254,244,185,0.1)",
                border: "1px solid rgba(254,244,185,0.3)",
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
                  border: "1px solid rgba(254,244,185,0.25)",
                  fontSize: "0.9rem",
                  backgroundColor: "rgba(254,244,185,0.12)",
                  color: "var(--cream)",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                className="btn-primary"
                style={{
                  flexShrink: 0,
                  backgroundColor: "var(--brown-dark)",
                  color: "var(--cream)",
                }}
              >
                Subscribe
              </button>
            </form>
          )}

          <p
            style={{
              marginTop: "16px",
              fontSize: "0.75rem",
              color: "rgba(254,244,185,0.5)",
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
