"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { LogoFull, LogoMark } from "./BrandLogos";

interface CartItem {
  name: string;
  type: string;
  price: number;
}

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Manifesto", href: "#features" },
  { label: "Spice Lab", href: "#spices" },
  { label: "Recipes", href: "#recipes" },
  { label: "Our Story", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll state to adjust background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simple listener for cart updates from our Spice Lab / Recipe sections
  useEffect(() => {
    const checkCart = () => {
      const items = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(items.length);
    };
    checkCart();
    // Check every 1s or on storage event
    window.addEventListener("storage", checkCart);
    const interval = setInterval(checkCart, 1000);
    return () => {
      window.removeEventListener("storage", checkCart);
      clearInterval(interval);
    };
  }, []);

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
    // Dispatch storage event to trigger update
    window.dispatchEvent(new Event("storage"));
  };

  const clearCart = () => {
    localStorage.setItem("cart", "[]");
    window.dispatchEvent(new Event("storage"));
  };

  const cartItems = getCartItems();
  const cartTotal = cartItems.reduce((acc: number, item: CartItem) => acc + (item.price || 12.99), 0);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: scrolled ? "12px" : "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "calc(100% - 32px)",
          maxWidth: "1200px",
          zIndex: 100,
          borderRadius: scrolled ? "var(--radius-full)" : "20px",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          backgroundColor: scrolled ? "rgba(254, 244, 185, 0.88)" : "rgba(254, 244, 185, 0.72)",
          backdropFilter: "blur(16px) saturate(120%)",
          border: scrolled ? "1px solid var(--border)" : "1px solid rgba(233, 222, 157, 0.4)",
          boxShadow: scrolled ? "var(--shadow-md)" : "var(--shadow-sm)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Indian Eats Home" className="hover:scale-102 transition-transform">
            <LogoFull logoSize={30} color="var(--terracotta)" />
          </Link>

          {/* Desktop Nav links with smooth scrolling */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{ color: "var(--brown-dark)", fontSize: "0.75rem", letterSpacing: "0.15em" }}
                className="font-bold uppercase relative py-1 hover:text-[var(--terracotta)] transition-colors group"
              >
                {link.label}
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%) scaleX(0)",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    backgroundColor: "var(--terracotta)",
                    transition: "transform 0.25s ease",
                  }}
                  className="group-hover:transform group-hover:translateX(-50%) group-hover:scaleX(1)"
                />
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-4">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search Spices"
              style={{ color: "var(--brown-dark)" }}
              className="hover:text-[var(--terracotta)] transition-colors cursor-pointer p-1.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-4.5 h-4.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Cart Trigger */}
            <button
              onClick={() => setCartOpen(true)}
              aria-label="Open Cart"
              style={{ color: "var(--brown-dark)", position: "relative" }}
              className="hover:text-[var(--terracotta)] transition-colors cursor-pointer p-1.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-4.5 h-4.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              {cartCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-2px",
                    right: "-2px",
                    backgroundColor: "var(--terracotta)",
                    color: "var(--cream)",
                    fontSize: "0.62rem",
                    fontWeight: 800,
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "var(--shadow-sm)",
                  }}
                  className="animate-pulse"
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger menu */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1.5 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Navigation"
              aria-expanded={menuOpen}
              style={{ color: "var(--terracotta)" }}
            >
              <span
                className={`block w-5 h-0.5 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                style={{ backgroundColor: "var(--terracotta)" }}
              />
              <span
                className={`block w-5 h-0.5 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
                style={{ backgroundColor: "var(--terracotta)" }}
              />
              <span
                className={`block w-5 h-0.5 transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                style={{ backgroundColor: "var(--terracotta)" }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {menuOpen && (
          <nav
            style={{
              borderTop: "1px solid var(--border)",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              backgroundColor: "rgba(254, 244, 185, 0.96)",
              overflow: "hidden",
            }}
            className="md:hidden flex flex-col items-center gap-5 py-6 px-4 animate-fade-in"
            aria-label="Mobile Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{ color: "var(--brown-dark)", fontSize: "0.78rem", letterSpacing: "0.15em" }}
                className="font-bold uppercase hover:text-[var(--terracotta)] transition-colors py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* ── Slide-Out Cart Drawer ── */}
      {cartOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(44, 20, 5, 0.4)",
            backdropFilter: "blur(4px)",
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
              backgroundColor: "var(--cream)",
              boxShadow: "var(--shadow-lg)",
              borderLeft: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              padding: "24px",
            }}
            onClick={(e) => e.stopPropagation()}
            className="animate-slide-in"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b pb-4 mb-4" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-2">
                <LogoMark size={28} color="var(--terracotta)" />
                <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.45rem", fontWeight: 800, color: "var(--brown-dark)" }}>
                  Your Spice Bag
                </h2>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                style={{ color: "var(--brown-dark)" }}
                className="text-xl font-bold cursor-pointer hover:text-[var(--terracotta)] p-1"
              >
                ✕
              </button>
            </div>

            {/* Drawer Body (Items) */}
            <div className="flex-1 overflow-y-auto py-2" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {cartItems.length === 0 ? (
                <div className="text-center py-12 flex flex-col items-center gap-4">
                  <span style={{ fontSize: "3rem" }}>🫙</span>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 600 }}>
                    Your spice bag is empty.<br />Head to the Spice Lab to create your blend!
                  </p>
                  <button
                    onClick={() => {
                      setCartOpen(false);
                      window.location.hash = "#spices";
                    }}
                    className="btn-primary"
                    style={{ fontSize: "0.7rem", padding: "10px 20px" }}
                  >
                    Open Spice Lab
                  </button>
                </div>
              ) : (
                cartItems.map((item: CartItem, idx: number) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: "var(--card-bg)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-md)",
                      padding: "12px 16px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "12px",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 800, color: "var(--brown-dark)", fontSize: "0.88rem" }}>{item.name}</p>
                      <p style={{ fontSize: "0.72rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                        {item.type || "Custom Craft Blend"}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span style={{ fontWeight: 700, color: "var(--terracotta)", fontSize: "0.85rem" }}>
                        ${(item.price || 12.99).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(idx)}
                        style={{ color: "var(--text-muted)" }}
                        className="hover:text-[var(--terracotta)] cursor-pointer text-sm font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer */}
            {cartItems.length > 0 && (
              <div className="border-t pt-4 mt-4" style={{ borderColor: "var(--border)" }}>
                <div className="flex items-center justify-between mb-4">
                  <span style={{ fontWeight: 700, color: "var(--text-secondary)" }}>Est. Total</span>
                  <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--terracotta)" }}>
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => {
                      alert("Connecting to checkout gateway...");
                      clearCart();
                      setCartOpen(false);
                    }}
                    className="btn-primary w-full text-center"
                    style={{ justifyContent: "center", paddingTop: "14px", paddingBottom: "14px" }}
                  >
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={clearCart}
                    style={{ color: "var(--text-secondary)", fontSize: "0.75rem", fontWeight: 700 }}
                    className="text-center hover:text-[var(--terracotta)] py-2 uppercase tracking-widest cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Slide-In Search Modal Overlay ── */}
      {searchOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(44, 20, 5, 0.8)",
            backdropFilter: "blur(8px)",
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
              maxWidth: "600px",
              backgroundColor: "var(--cream)",
              borderRadius: "var(--radius-lg)",
              border: "2px solid var(--border)",
              boxShadow: "var(--shadow-lg)",
              padding: "32px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 700, color: "var(--brown-dark)" }}>
                Search Spice Collections
              </h3>
              <button
                onClick={() => setSearchOpen(false)}
                style={{ color: "var(--text-secondary)" }}
                className="font-bold text-xl cursor-pointer hover:text-[var(--terracotta)]"
              >
                ✕
              </button>
            </div>
            <div className="flex gap-3">
              <input
                autoFocus
                placeholder="e.g. Saffron, Cardamom, Biryani blend..."
                style={{
                  flex: 1,
                  padding: "12px 20px",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid var(--border)",
                  outline: "none",
                  fontSize: "1rem",
                  backgroundColor: "var(--card-bg)",
                  color: "var(--text-primary)",
                }}
              />
              <button
                onClick={() => {
                  alert("Search results loading...");
                  setSearchOpen(false);
                }}
                className="btn-primary"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inject slide-in animation styles directly */}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
}
