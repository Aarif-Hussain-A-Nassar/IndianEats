"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { LogoMark } from "./BrandLogos";

interface CartItem {
  name: string;
  type: string;
  price: number;
}

const navLinks = [
  { label: "Home", href: "#hero", emoji: "🏠" },
  { label: "Manifesto", href: "#features", emoji: "📜" },
  { label: "Spice Lab", href: "#spices", emoji: "🧪" },
  { label: "Products", href: "#products", emoji: "🌶️" },

  { label: "Recipes", href: "#recipes", emoji: "🍲" },
  { label: "Our Story", href: "#about", emoji: "✨" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const checkCart = () => {
      const items = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(items.length);
    };
    checkCart();
    window.addEventListener("storage", checkCart);
    const interval = setInterval(checkCart, 1000);
    return () => {
      window.removeEventListener("storage", checkCart);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      setTimeout(() => searchRef.current?.focus(), 100);
    }
  }, [searchOpen]);

  const getCartItems = (): CartItem[] => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    }
    return [];
  };

  const removeFromCart = (index: number) => {
    const items = getCartItems();
    items.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(items));
    window.dispatchEvent(new Event("storage"));
  };

  const clearCart = () => {
    localStorage.setItem("cart", "[]");
    window.dispatchEvent(new Event("storage"));
  };

  const handleNavClick = (label: string) => {
    setActiveLink(label);
    setMenuOpen(false);
  };

  const cartItems = getCartItems();
  const cartTotal = cartItems.reduce((acc: number, item: CartItem) => acc + (item.price || 299), 0);

  // Group cart items by name + type for quantity display
  const groupedCartItems = cartItems.reduce((acc: { name: string; type: string; price: number; qty: number }[], item) => {
    const existing = acc.find(i => i.name === item.name && i.type === item.type);
    if (existing) {
      existing.qty += 1;
    } else {
      acc.push({ ...item, qty: 1 });
    }
    return acc;
  }, []);

  const handleWhatsAppCheckout = () => {
    const WHATSAPP_NUMBER = "917034980823"; // Indian Eats order line
    const now = new Date();
    const timeStr = now.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });

    const itemLines = groupedCartItems
      .map((item, i) =>
        `  ${i + 1}. ${item.name}\n     Variant: ${item.type || "Standard"}\n     Qty: ${item.qty} × ₹${item.price} = ₹${item.qty * item.price}`
      )
      .join("\n\n");

    const message =
      `🌶️ *New Order — Indian Eats* 🌶️\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `📦 *Order Summary:*\n\n` +
      `${itemLines}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `💰 *Total: ₹${cartTotal}*\n` +
      `🕐 Placed at: ${timeStr}\n\n` +
      `Please confirm my order and share delivery details. Thank you! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(waUrl, "_blank");
    clearCart();
    setCartOpen(false);
  };

  return (
    <>
      {/* ── Main Navbar ── */}
      <header
        className="navbar-root"
        style={{
          position: "fixed",
          top: scrolled ? "10px" : "16px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "calc(100% - 24px)",
          maxWidth: "1180px",
          zIndex: 100,
          transition: "top 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s ease",
        }}
      >
        <div
          style={{
            backgroundColor: scrolled ? "rgba(22, 10, 3, 0.92)" : "rgba(30, 14, 5, 0.82)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(248, 158, 0, 0.18)",
            borderRadius: scrolled ? "50px" : "24px",
            boxShadow: scrolled
              ? "0 8px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(246,99,30,0.08), inset 0 1px 0 rgba(255,255,255,0.06)"
              : "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
            transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px",
              height: "60px",
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              aria-label="Indian Eats Home"
              style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", flexShrink: 0 }}
              className="nav-logo-link"
            >
              {/* Actual brand oval badge mark */}
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "linear-gradient(145deg, var(--terracotta) 0%, #d44a08 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 14px rgba(246,99,30,0.45), inset 0 1px 0 rgba(255,255,255,0.15)",
                  flexShrink: 0,
                  overflow: "hidden",
                  padding: "4px",
                }}
              >
                <LogoMark size={32} color="#FEF4B9" bgColor="transparent" />
              </div>
              <div style={{ lineHeight: 1.1 }}>
                <p
                  style={{
                    fontFamily: "'Playfair Display', var(--font-playfair), serif",
                    fontSize: "1rem",
                    fontWeight: 900,
                    color: "#ffffff",
                    letterSpacing: "0.06em",
                    lineHeight: 1,
                    textTransform: "uppercase",
                  }}
                >
                  INDIAN
                </p>
                <p
                  style={{
                    fontFamily: "'Playfair Display', var(--font-playfair), serif",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "var(--gold)",
                    letterSpacing: "0.22em",
                    lineHeight: 1,
                    textTransform: "uppercase",
                  }}
                >
                  EATS
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="nav-desktop"
              aria-label="Main navigation"
              style={{ display: "flex", alignItems: "center", gap: "4px" }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.label)}
                  style={{
                    position: "relative",
                    padding: "7px 14px",
                    borderRadius: "50px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    color: activeLink === link.label ? "#fff" : "rgba(255,255,255,0.6)",
                    backgroundColor: activeLink === link.label ? "rgba(246,99,30,0.25)" : "transparent",
                    border: activeLink === link.label ? "1px solid rgba(246,99,30,0.4)" : "1px solid transparent",
                    transition: "all 0.2s ease",
                  }}
                  className="nav-link-item"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Icons */}
            <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="nav-icon-btn"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>

              {/* Cart */}
              <button
                onClick={() => setCartOpen(true)}
                aria-label="Cart"
                className="nav-icon-btn"
                style={{
                  position: "relative",
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
                </svg>
                {cartCount > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "4px",
                      right: "4px",
                      backgroundColor: "var(--terracotta)",
                      color: "#fff",
                      fontSize: "0.58rem",
                      fontWeight: 900,
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1.5px solid rgba(22,10,3,0.9)",
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>

              {/* CTA Button (Desktop only) */}
              <a
                href="#spices"
                className="nav-cta-btn"
                style={{
                  marginLeft: "6px",
                  padding: "9px 18px",
                  background: "linear-gradient(135deg, var(--terracotta) 0%, var(--gold) 100%)",
                  color: "#fff",
                  borderRadius: "50px",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  boxShadow: "0 2px 12px rgba(246,99,30,0.4)",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                Order Now
              </a>

              {/* Hamburger (Mobile only) */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                className="nav-hamburger"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backgroundColor: menuOpen ? "rgba(246,99,30,0.2)" : "rgba(255,255,255,0.06)",
                  color: "#fff",
                  cursor: "pointer",
                  display: "none",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4.5px",
                  transition: "all 0.2s ease",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: "16px",
                    height: "1.5px",
                    backgroundColor: "#fff",
                    borderRadius: "2px",
                    transition: "all 0.3s ease",
                    transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: "16px",
                    height: "1.5px",
                    backgroundColor: "#fff",
                    borderRadius: "2px",
                    transition: "all 0.3s ease",
                    opacity: menuOpen ? 0 : 1,
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: "16px",
                    height: "1.5px",
                    backgroundColor: "#fff",
                    borderRadius: "2px",
                    transition: "all 0.3s ease",
                    transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Full-Screen Mobile Menu Overlay ── */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(16, 7, 2, 0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            padding: "100px 32px 48px",
            overflowY: "auto",
          }}
          className="mobile-menu-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setMenuOpen(false); }}
        >
          {/* Background Glow */}
          <div style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(246,99,30,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* Nav Items */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.label)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "18px 20px",
                  borderRadius: "16px",
                  textDecoration: "none",
                  color: activeLink === link.label ? "#fff" : "rgba(255,255,255,0.55)",
                  backgroundColor: activeLink === link.label ? "rgba(246,99,30,0.18)" : "rgba(255,255,255,0.03)",
                  border: activeLink === link.label ? "1px solid rgba(246,99,30,0.3)" : "1px solid rgba(255,255,255,0.06)",
                  transition: "all 0.2s ease",
                  animationDelay: `${i * 0.06}s`,
                }}
                className="mobile-nav-item"
              >
                <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{link.emoji}</span>
                <span style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}>
                  {link.label}
                </span>
                <svg
                  style={{ marginLeft: "auto", opacity: 0.4 }}
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                </svg>
              </a>
            ))}
          </nav>

          {/* Mobile Bottom CTA */}
          <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <a
              href="#spices"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                textAlign: "center",
                padding: "16px",
                background: "linear-gradient(135deg, var(--terracotta), var(--gold))",
                color: "#fff",
                borderRadius: "16px",
                fontWeight: 800,
                fontSize: "0.9rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(246,99,30,0.35)",
              }}
            >
              Build Your Blend →
            </a>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => { setMenuOpen(false); setSearchOpen(true); }}
                style={{
                  flex: 1,
                  padding: "14px",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "14px",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Search
              </button>
              <button
                onClick={() => { setMenuOpen(false); setCartOpen(true); }}
                style={{
                  flex: 1,
                  padding: "14px",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "14px",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  position: "relative",
                }}
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
                </svg>
                Bag {cartCount > 0 && `(${cartCount})`}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Cart Drawer ── */}
      {cartOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(16, 7, 2, 0.6)",
            backdropFilter: "blur(8px)",
            zIndex: 200,
            display: "flex",
            justifyContent: "flex-end",
          }}
          onClick={() => setCartOpen(false)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "420px",
              height: "100%",
              backgroundColor: "#130800",
              border: "1px solid rgba(248,158,0,0.15)",
              borderLeft: "none",
              display: "flex",
              flexDirection: "column",
              padding: "28px 24px",
              boxShadow: "-20px 0 60px rgba(0,0,0,0.4)",
            }}
            onClick={(e) => e.stopPropagation()}
            className="cart-drawer-animate"
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: "linear-gradient(145deg, var(--terracotta) 0%, #d44a08 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 10px rgba(246,99,30,0.4)",
                  padding: "3px",
                  flexShrink: 0,
                }}>
                  <LogoMark size={24} color="#FEF4B9" bgColor="transparent" />
                </div>
                <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "#fff" }}>
                  Your Spice Bag
                </h2>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.6)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.85rem",
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
              {cartItems.length === 0 ? (
                <div style={{ textAlign: "center", padding: "48px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontSize: "3rem" }}>🫙</span>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                    Your spice bag is empty.<br />Visit the Spice Lab to build your blend!
                  </p>
                  <button
                    onClick={() => { setCartOpen(false); window.location.hash = "#spices"; }}
                    style={{
                      padding: "12px 24px",
                      background: "linear-gradient(135deg, var(--terracotta), var(--gold))",
                      color: "#fff",
                      border: "none",
                      borderRadius: "50px",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    Open Spice Lab
                  </button>
                </div>
              ) : (
                groupedCartItems.map((item, idx: number) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "14px",
                      padding: "14px 16px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                        <p style={{ fontWeight: 700, color: "#fff", fontSize: "0.85rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</p>
                        {item.qty > 1 && (
                          <span style={{
                            flexShrink: 0,
                            backgroundColor: "rgba(246,99,30,0.25)",
                            border: "1px solid rgba(246,99,30,0.4)",
                            color: "var(--terracotta)",
                            fontSize: "0.6rem",
                            fontWeight: 900,
                            padding: "2px 7px",
                            borderRadius: "50px",
                          }}>
                            ×{item.qty}
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>{item.type || "Custom Blend"}</p>
                      {item.qty > 1 && (
                        <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", marginTop: "2px" }}>
                          ₹{item.price} × {item.qty}
                        </p>
                      )}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
                      <span style={{ fontWeight: 800, color: "var(--gold)", fontSize: "0.9rem" }}>₹{item.qty * item.price}</span>
                      <button
                        onClick={() => {
                          const raw = getCartItems();
                          const firstMatch = raw.findIndex((i: CartItem) => i.name === item.name && i.type === item.type);
                          if (firstMatch !== -1) raw.splice(firstMatch, 1);
                          localStorage.setItem("cart", JSON.stringify(raw));
                          window.dispatchEvent(new Event("storage"));
                        }}
                        style={{
                          color: "rgba(255,255,255,0.3)",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          cursor: "pointer",
                          border: "none",
                          background: "none",
                          padding: "4px",
                          transition: "color 0.2s",
                        }}
                        className="cart-remove-btn"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px", marginTop: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 600, fontSize: "0.85rem" }}>Est. Total</span>
                  <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--gold)" }}>₹{cartTotal}</span>
                </div>
                <button
                  onClick={handleWhatsAppCheckout}
                  style={{
                    width: "100%",
                    padding: "16px",
                    background: "linear-gradient(135deg, #25D366, #128C7E)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "14px",
                    fontSize: "0.82rem",
                    fontWeight: 800,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Order via WhatsApp
                </button>
                <button
                  onClick={clearCart}
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "rgba(255,255,255,0.3)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  Clear All
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Search Modal ── */}
      {searchOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(16, 7, 2, 0.85)",
            backdropFilter: "blur(12px)",
            zIndex: 250,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setSearchOpen(false)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "560px",
              backgroundColor: "#1a0d04",
              borderRadius: "24px",
              border: "1px solid rgba(248,158,0,0.2)",
              padding: "32px",
              boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
            }}
            onClick={(e) => e.stopPropagation()}
            className="search-modal-animate"
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 700, color: "#fff" }}>
                Search Spice Collections
              </h3>
              <button
                onClick={() => setSearchOpen(false)}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.6)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                }}
              >
                ✕
              </button>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "14px",
                padding: "4px 4px 4px 16px",
              }}
            >
              <svg width="16" height="16" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={searchRef}
                placeholder="e.g. Saffron, Cardamom, Biryani blend..."
                style={{
                  flex: 1,
                  background: "none",
                  border: "none",
                  outline: "none",
                  fontSize: "0.95rem",
                  color: "#fff",
                  padding: "10px 0",
                }}
              />
              <button
                onClick={() => { alert("Search results loading..."); setSearchOpen(false); }}
                style={{
                  padding: "10px 20px",
                  background: "linear-gradient(135deg, var(--terracotta), var(--gold))",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Search
              </button>
            </div>
            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", marginTop: "12px" }}>
              Try: Turmeric, Cardamom, Saffron, Garam Masala, Kashmiri Chili…
            </p>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-cta-btn { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }

        .nav-link-item:hover {
          color: #fff !important;
          background-color: rgba(255,255,255,0.08) !important;
          border-color: rgba(255,255,255,0.1) !important;
        }

        .nav-icon-btn:hover {
          background-color: rgba(255,255,255,0.12) !important;
          color: #fff !important;
        }

        .nav-cta-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(246,99,30,0.5) !important;
        }

        .nav-logo-link:hover > div:first-child {
          box-shadow: 0 4px 20px rgba(246,99,30,0.6) !important;
        }

        @keyframes menuFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mobile-menu-overlay {
          animation: menuFadeIn 0.3s cubic-bezier(0.16,1,0.3,1) forwards;
        }

        @keyframes mobileNavItemIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .mobile-nav-item {
          animation: mobileNavItemIn 0.35s cubic-bezier(0.16,1,0.3,1) both;
        }
        .mobile-nav-item:hover {
          color: #fff !important;
          background-color: rgba(246,99,30,0.12) !important;
          border-color: rgba(246,99,30,0.25) !important;
        }

        @keyframes cartDrawerIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .cart-drawer-animate {
          animation: cartDrawerIn 0.35s cubic-bezier(0.16,1,0.3,1) forwards;
        }

        @keyframes searchModalIn {
          from { opacity: 0; transform: scale(0.95) translateY(-10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .search-modal-animate {
          animation: searchModalIn 0.25s cubic-bezier(0.16,1,0.3,1) forwards;
        }

        .cart-remove-btn:hover {
          color: var(--terracotta) !important;
        }
      `}</style>
    </>
  );
}
