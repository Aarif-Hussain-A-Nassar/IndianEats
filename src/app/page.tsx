import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Spices from "./components/Spices";
import Recipes from "./components/Recipes";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Spices />
        <Recipes />
        <About />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
