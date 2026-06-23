"use client";

import { useState } from "react";
import Image from "next/image";

interface Recipe {
  name: string;
  category: string; // "Quick" | "Regional Classics" | "Vegetarian Crowds"
  time: string;
  timeMinutes: number;
  difficulty: "Easy" | "Medium" | "Advanced";
  image: string;
  desc: string;
  ingredients: { name: string; baseQty: number; unit: string }[];
  steps: string[];
  spiceKitPrice: number;
}

const recipesData: Recipe[] = [
  {
    name: "Classic Punjabi Butter Chicken",
    category: "Regional Classics",
    time: "45 min",
    timeMinutes: 45,
    difficulty: "Medium",
    image: "/images/dish-butter-chicken.png",
    desc: "Creamy, velvet-smooth tomato-based curry with tender tandoori chicken — a Punjab masterpiece.",
    ingredients: [
      { name: "Chicken Thighs (g)", baseQty: 500, unit: "g" },
      { name: "Kashmiri Chili Powder (tbsp)", baseQty: 1.5, unit: "tbsp" },
      { name: "Garam Masala Blend (tbsp)", baseQty: 1.2, unit: "tbsp" },
      { name: "Heavy Cream (ml)", baseQty: 100, unit: "ml" },
      { name: "Kasuri Methi / Fenugreek (tbsp)", baseQty: 1, unit: "tbsp" },
      { name: "Butter (g)", baseQty: 50, unit: "g" },
    ],
    steps: [
      "Marinate chicken in Greek yoghurt, Kashmiri chili, ginger-garlic paste, and lemon juice for 4 hours.",
      "Sear chicken pieces on high heat until lightly charred, then set aside.",
      "Simmer canned tomatoes, cashews, and butter, then blend into a silky sauce.",
      "Add chicken back into the gravy with cream, honey, and crushed Kasuri Methi.",
    ],
    spiceKitPrice: 349,
  },
  {
    name: "Hyderabadi Dum Biryani",
    category: "Regional Classics",
    time: "90 min",
    timeMinutes: 90,
    difficulty: "Advanced",
    image: "/images/dish-biryani.png",
    desc: "Fragrant, long-grain basmati rice layered with spiced marinated meat and Kashmiri Saffron, slow-cooked under seal.",
    ingredients: [
      { name: "Basmati Rice (g)", baseQty: 400, unit: "g" },
      { name: "Lamb or Chicken (g)", baseQty: 500, unit: "g" },
      { name: "Shahi Biryani Masala (tbsp)", baseQty: 2.5, unit: "tbsp" },
      { name: "Saffron Threads (pinch)", baseQty: 1, unit: "pinch" },
      { name: "Fried Onions (cups)", baseQty: 1.5, unit: "cups" },
      { name: "Ghee (tbsp)", baseQty: 3, unit: "tbsp" },
    ],
    steps: [
      "Parboil Basmati rice with whole green cardamom, cloves, and bay leaves until 70% cooked.",
      "Marinate meat in thick curd, biryani masala, green chilies, and mint leaves.",
      "Layer the marinated meat at the bottom of a heavy pot, then cover with parboiled rice.",
      "Drizzle saffron-infused milk and ghee, seal the lid with wheat dough, and slow-cook (Dum) for 40 minutes.",
    ],
    spiceKitPrice: 449,
  },
  {
    name: "Smoky Tandoori Paneer Tikka",
    category: "Vegetarian Crowds",
    time: "25 min",
    timeMinutes: 25,
    difficulty: "Easy",
    image: "/images/dish-paneer-tikka.png",
    desc: "Grilled, smoky cottage cheese chunks marinated in spiced Greek yoghurt, bell peppers, and onion petals.",
    ingredients: [
      { name: "Paneer / Cottage Cheese (g)", baseQty: 400, unit: "g" },
      { name: "Greek Yoghurt (ml)", baseQty: 150, unit: "ml" },
      { name: "Tikkan Masala Rub (tbsp)", baseQty: 2, unit: "tbsp" },
      { name: "Chaat Masala (tsp)", baseQty: 1, unit: "tsp" },
      { name: "Mustard Oil (tbsp)", baseQty: 1.5, unit: "tbsp" },
      { name: "Bell Peppers & Onions (g)", baseQty: 200, unit: "g" },
    ],
    steps: [
      "Whisk Greek yoghurt with mustard oil, tandoori masala, salt, and ginger-garlic paste.",
      "Toss cubed paneer, peppers, and onions in the marinade; chill for 45 minutes.",
      "Skew and grill at 220°C (425°F) for 15 minutes until edges are charred.",
      "Sprinkle Chaat Masala and fresh coriander; serve immediately with mint chutney.",
    ],
    spiceKitPrice: 299,
  },
  {
    name: "Kerala Black Pepper Prawn Roast",
    category: "Quick",
    time: "25 min",
    timeMinutes: 25,
    difficulty: "Easy",
    image: "/images/dish-paneer-tikka.png", // fallback or reuse
    desc: "A hot, dry curry of wild prawns tossed with cracked black pepper, curry leaves, and toasted coconut flakes.",
    ingredients: [
      { name: "Prawns, cleaned (g)", baseQty: 400, unit: "g" },
      { name: "Crushed Black Pepper (tsp)", baseQty: 2, unit: "tsp" },
      { name: "Mustard Seeds (tsp)", baseQty: 1, unit: "tsp" },
      { name: "Fennel Seeds (tsp)", baseQty: 0.5, unit: "tsp" },
      { name: "Fresh Curry Leaves (pcs)", baseQty: 15, unit: "pcs" },
      { name: "Coconut Slices (tbsp)", baseQty: 2, unit: "tbsp" },
    ],
    steps: [
      "Temperate mustard seeds, fennel seeds, and curry leaves in hot coconut oil.",
      "Add sliced shallots and ginger-garlic paste; saute until caramel brown.",
      "Toss prawns with turmeric and chili powder; saute for 4 minutes.",
      "Finish with freshly cracked black pepper and toasted coconut flakes.",
    ],
    spiceKitPrice: 349,
  },
];

const difficultyColor: Record<string, string> = {
  Easy: "#4A7C59",
  Medium: "#D97706",
  Advanced: "#C2410C",
};

export default function Recipes() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [servings, setServings] = useState<number>(4);
  const [checkedSteps, setCheckedSteps] = useState<boolean[]>([]);
  const [toastMessage, setToastMessage] = useState("");

  const tabs = ["All", "Quick", "Regional Classics", "Vegetarian Crowds"];

  const filteredRecipes = recipesData.filter((r) => {
    if (activeTab === "All") return true;
    if (activeTab === "Quick") return r.timeMinutes <= 30;
    return r.category === activeTab;
  });

  const openRecipeModal = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setServings(4); // Reset default servings to 4
    setCheckedSteps(new Array(recipe.steps.length).fill(false));
  };

  const closeRecipeModal = () => {
    setSelectedRecipe(null);
  };

  const handleStepToggle = (index: number) => {
    const updated = [...checkedSteps];
    updated[index] = !updated[index];
    setCheckedSteps(updated);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  const addSpiceKitToCart = (recipeName: string, price: number) => {
    const name = `${recipeName} Custom Spice Pack`;
    const type = "Specialty Recipe Spice Kit";
    
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    currentCart.push({ name, type, price });
    localStorage.setItem("cart", JSON.stringify(currentCart));
    window.dispatchEvent(new Event("storage"));
    
    showToast(`Added "${name}" to your Spice Bag!`);
  };

  return (
    <section id="recipes" style={{ backgroundColor: "var(--cream)", padding: "clamp(60px,8vw,110px) 0" }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: "center", marginBottom: "40px" }} className="fade-up">
          <span className="section-tag" style={{ color: "var(--sage-dark)", fontWeight: 800 }}>
            Cook Like a Chef
          </span>
          <h2 className="section-title">Interactive Recipes</h2>
          <div className="divider" style={{ margin: "0 auto 16px", backgroundColor: "var(--gold)", width: "60px", height: "4px" }} />
          <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
            Explore step-by-step guides developed by regional home chefs, with scaling measurements and add-to-bag spice bundles.
          </p>
        </div>

        {/* Tab Selector */}
        <div
          className="fade-up"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="cursor-pointer"
              style={{
                padding: "10px 24px",
                borderRadius: "var(--radius-full)",
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "all 0.25s ease",
                border: activeTab === tab ? "2px solid var(--terracotta)" : "1px solid var(--border)",
                backgroundColor: activeTab === tab ? "var(--terracotta)" : "var(--card-bg)",
                color: activeTab === tab ? "var(--cream)" : "var(--brown-dark)",
                boxShadow: activeTab === tab ? "var(--shadow-sm)" : "none",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Recipe Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "28px",
          }}
        >
          {filteredRecipes.map((r) => (
            <article key={r.name} className="card" style={{ display: "flex", flexDirection: "column" }}>
              {/* Image */}
              <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                <Image src={r.image} alt={r.name} fill style={{ objectFit: "cover" }} />
                {/* Category badge */}
                <span
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    backgroundColor: "var(--cream)",
                    color: "var(--terracotta)",
                    border: "1px solid var(--border)",
                    fontSize: "0.62rem",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "6px 12px",
                    borderRadius: "var(--radius-full)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  {r.category}
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                {/* Meta details */}
                <div style={{ display: "flex", gap: "14px", marginBottom: "12px", alignItems: "center" }}>
                  <span style={{ fontSize: "0.78rem", color: "var(--text-secondary)", fontWeight: 700 }}>
                    ⏱ {r.time}
                  </span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      color: difficultyColor[r.difficulty],
                      backgroundColor: `${difficultyColor[r.difficulty]}12`,
                      padding: "3px 10px",
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
                    lineHeight: 1.25,
                  }}
                >
                  {r.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "24px",
                    flex: 1,
                  }}
                >
                  {r.desc}
                </p>

                <button
                  onClick={() => openRecipeModal(r)}
                  className="btn-primary w-full"
                  style={{ fontSize: "0.72rem", padding: "12px 24px", justifyContent: "center" }}
                >
                  Cook Now (Step-by-step)
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── HIGH-FIDELITY GLASSMORPHIC RECIPE MODAL OVERLAY ── */}
      {selectedRecipe && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(44, 20, 5, 0.5)",
            backdropFilter: "blur(6px)",
            zIndex: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={closeRecipeModal}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "800px",
              maxHeight: "90vh",
              backgroundColor: "var(--cream)",
              borderRadius: "var(--radius-lg)",
              border: "2px solid var(--border)",
              boxShadow: "var(--shadow-lg)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
            className="animate-zoom-in"
          >
            {/* Modal Image Header */}
            <div style={{ position: "relative", height: "240px", flexShrink: 0 }}>
              <Image src={selectedRecipe.image} alt={selectedRecipe.name} fill style={{ objectFit: "cover" }} />
              {/* Close Button */}
              <button
                onClick={closeRecipeModal}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  backgroundColor: "rgba(254, 244, 185, 0.9)",
                  color: "var(--brown-dark)",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  boxShadow: "var(--shadow-sm)",
                }}
                className="hover:scale-105 transition-transform"
              >
                ✕
              </button>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(44, 20, 5, 0.9) 0%, rgba(44, 20, 5, 0) 100%)",
                  padding: "24px",
                }}
              >
                <p style={{ fontSize: "0.68rem", fontWeight: 800, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {selectedRecipe.category}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.8rem",
                    fontWeight: 800,
                    color: "var(--cream)",
                    marginTop: "4px",
                  }}
                >
                  {selectedRecipe.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ flex: 1, overflowY: "auto", padding: "32px", display: "grid", gridTemplateColumns: "1.1fr 1.3fr", gap: "32px" }}>
              {/* Left Side: Scalable Ingredients */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <h4 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 800, color: "var(--brown-dark)" }}>
                    Ingredients
                  </h4>
                  {/* Servings Adjuster */}
                  <div className="flex items-center gap-3 mt-2">
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase" }}>
                      Servings:
                    </span>
                    <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--border)", borderRadius: "var(--radius-full)", overflow: "hidden" }}>
                      <button
                        onClick={() => servings > 1 && setServings(servings - 1)}
                        style={{ padding: "4px 12px", border: "none", backgroundColor: "rgba(0,0,0,0.03)", fontWeight: "bold" }}
                        className="cursor-pointer hover:bg-[rgba(0,0,0,0.06)]"
                      >
                        -
                      </button>
                      <span style={{ padding: "4px 16px", fontSize: "0.85rem", fontWeight: 800, color: "var(--brown-dark)" }}>
                        {servings}
                      </span>
                      <button
                        onClick={() => setServings(servings + 1)}
                        style={{ padding: "4px 12px", border: "none", backgroundColor: "rgba(0,0,0,0.03)", fontWeight: "bold" }}
                        className="cursor-pointer hover:bg-[rgba(0,0,0,0.06)]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Scaled list */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {selectedRecipe.ingredients.map((ing) => {
                    // Base quantity is calibrated for 4 servings
                    const scaledQty = (ing.baseQty / 4) * servings;
                    return (
                      <div
                        key={ing.name}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "0.85rem",
                          borderBottom: "1px dashed rgba(0,0,0,0.05)",
                          paddingBottom: "6px",
                        }}
                      >
                        <span style={{ color: "var(--text-secondary)", fontWeight: 600 }}>{ing.name}</span>
                        <span style={{ fontWeight: 800, color: "var(--terracotta)" }}>
                          {scaledQty % 1 === 0 ? scaledQty : scaledQty.toFixed(1)} {ing.unit}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Side: Step-by-Step Checklist */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h4 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 800, color: "var(--brown-dark)", borderBottom: "1px solid var(--border)", paddingBottom: "12px" }}>
                  Steps Checklist
                </h4>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {selectedRecipe.steps.map((step, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleStepToggle(idx)}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        cursor: "pointer",
                        opacity: checkedSteps[idx] ? 0.5 : 1,
                        textDecoration: checkedSteps[idx] ? "line-through" : "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={checkedSteps[idx] || false}
                        onChange={() => {}} // handled by parent div click
                        style={{
                          marginTop: "4px",
                          accentColor: "var(--terracotta)",
                          cursor: "pointer",
                        }}
                      />
                      <p style={{ fontSize: "0.82rem", lineHeight: 1.5, color: "var(--text-primary)" }}>
                        <span style={{ fontWeight: 800, color: "var(--terracotta)", marginRight: "4px" }}>Step {idx + 1}:</span>
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div
              style={{
                padding: "20px 32px",
                backgroundColor: "var(--card-bg)",
                borderTop: "1px solid var(--border)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <div>
                <p style={{ fontSize: "0.68rem", fontWeight: 800, color: "var(--sage-dark)", textTransform: "uppercase" }}>
                  Specialty Recipe Masala Pack
                </p>
                <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                  All required raw spices, calibrated for your servings
                </p>
              </div>

              <button
                onClick={() => {
                  addSpiceKitToCart(selectedRecipe.name, selectedRecipe.spiceKitPrice);
                  closeRecipeModal();
                }}
                className="btn-primary"
                style={{ fontSize: "0.75rem" }}
              >
                Add Spice Kit — ₹{selectedRecipe.spiceKitPrice}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Interactive Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: "fixed",
            bottom: "28px",
            left: "28px",
            zIndex: 500,
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
          <span style={{ fontSize: "1.2rem" }}>🍛</span>
          <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>{toastMessage}</span>
        </div>
      )}

      <style>{`
        @keyframes zoomIn {
          from { transform: scale(0.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-zoom-in {
          animation: zoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}
