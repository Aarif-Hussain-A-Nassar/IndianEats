"use client";

import Link from "next/link";

const footerLinks = {
  Explore: [
    { label: "Recipes", href: "/recipes" },
    { label: "Spices", href: "/spices" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  "Quick Links": [
    { label: "Contact", href: "/contact" },
    { label: "FAQs", href: "/faqs" },
    { label: "Shipping Policy", href: "/shipping" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

const socials = [
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "WhatsApp",
    href: "#",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z",
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2a1204", color: "var(--cream)" }}>
      {/* Inject CSS-only hover styles */}
      <style>{`
        .footer-link:hover { color: var(--cream) !important; }
        .footer-social:hover {
          background-color: var(--accent) !important;
          color: white !important;
          border-color: var(--accent) !important;
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="container">
        <div
          className="footer-grid"
          style={{
            paddingTop: "clamp(48px, 6vw, 72px)",
            paddingBottom: "clamp(32px, 4vw, 48px)",
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "clamp(32px, 4vw, 60px)",
          }}
        >
          {/* Brand column */}
          <div>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.8rem",
                fontWeight: 800,
                color: "var(--cream)",
                textDecoration: "none",
                display: "inline-block",
                marginBottom: "1.2rem",
              }}
            >
              🍛 Indian Eats
            </Link>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(245,234,216,0.6)",
                lineHeight: 1.8,
                maxWidth: "300px",
                marginBottom: "1.6rem",
              }}
            >
              Bringing the authentic flavours of India to your kitchen — from
              hand-picked spices to time-honoured recipes.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: "14px" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="footer-social"
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    border: "1px solid rgba(245,234,216,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(245,234,216,0.7)",
                    transition: "background var(--transition), color var(--transition), border-color var(--transition)",
                    textDecoration: "none",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--accent-light)",
                  marginBottom: "1.2rem",
                  fontFamily: "inherit",
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-link"
                      style={{
                        fontSize: "0.88rem",
                        color: "rgba(245,234,216,0.6)",
                        textDecoration: "none",
                        transition: "color var(--transition)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(245,234,216,0.08)",
            paddingBlock: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "rgba(245,234,216,0.35)" }}>
            © {new Date().getFullYear()} Indian Eats. All rights reserved.
          </p>
          <p style={{ fontSize: "0.8rem", color: "rgba(245,234,216,0.35)" }}>
            Made with ❤️ for Indian food lovers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
