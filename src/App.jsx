import { useState, useEffect } from "react";
import Hero from "./components/sections/Hero";
import LogoStrip from "./components/sections/LogoStrip";
import HowItWorks from "./components/sections/HowItWorks";
import Features from "./components/sections/Features";
import Services from "./components/sections/Services";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import CTABand from "./components/sections/CTABand";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { T } from "./data/constants";
export default function App() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = dark ? T.dark : T.light;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      style={{
        background: t.pageBg,
        color: t.body,
        minHeight: "100vh",
        overflowX: "hidden",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }

        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

        *::selection { background: #ccea4a33; }

        /* Responsive helpers */
        .hidden-mobile { display: flex !important; }
        .show-mobile   { display: none !important; }

        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
          .hero-grid     { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-mockup   { display: none !important; }
          .steps-grid    { grid-template-columns: 1fr !important; }
          .steps-grid > div { border-right: none !important; border-bottom: 1px solid rgba(128,128,128,0.15); }
          .card-grid     { grid-template-columns: 1fr !important; }
          .faq-grid      { grid-template-columns: 1fr !important; }
          .contact-grid  { grid-template-columns: 1fr !important; }
          .footer-grid   { grid-template-columns: 1fr 1fr !important; }
        }

        @media (max-width: 1024px) and (min-width: 769px) {
          .card-grid  { grid-template-columns: repeat(2, 1fr) !important; }
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <Navbar
        t={t}
        dark={dark}
        setDark={setDark}
        scrolled={scrolled}
        scrollTo={scrollTo}
      />
      <Hero t={t} dark={dark} scrollTo={scrollTo} />
      <LogoStrip t={t} dark={dark} />
      <HowItWorks t={t} />
      <Features t={t} />
      <Services t={t} />
      <Pricing t={t} scrollTo={scrollTo} />
      <FAQ t={t} />
      <Contact t={t} />
      <CTABand t={t} scrollTo={scrollTo} />
      <Footer t={t} dark={dark} setDark={setDark} scrollTo={scrollTo} />
    </div>
  );
}
