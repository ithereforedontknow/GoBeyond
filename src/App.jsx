import { useState, useEffect } from "react";
import { T } from "./data/constants";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import MarqueeStrip from "./components/sections/MarqueeStrip";
import Solutions from "./components/sections/Solutions";
import Approach from "./components/sections/Approach";
import Founder from "./components/sections/Founder";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import CTABand from "./components/sections/CTABand";
import LegalPrivacy from "./pages/LegalPrivacy";
import LegalTerms from "./pages/LegalTerms";
import NotFound from "./pages/NotFound";

import Footer from "./components/layout/Footer";

export default function App() {
  const [dark, setDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  const [scrolled, setScrolled] = useState(false);
  const t = dark ? T.dark : T.light;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <Routes>
      <Route path="/privacy-policy" element={<LegalPrivacy />} />
      <Route path="/terms" element={<LegalTerms />} />
      <Route
        path="/*"
        element={
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

              *::selection { background: #ccea4a2e; }

              .hidden-mobile { display: flex !important; }
              .show-mobile   { display: none  !important; }

              @media (max-width: 768px) {
                .hidden-mobile  { display: none !important; }
                .show-mobile    { display: flex !important; }
                .hero-grid      { grid-template-columns: 1fr !important; gap: 48px !important; }
                .hero-mockup    { display: none !important; }
                .approach-grid  { grid-template-columns: 1fr !important; }
                .approach-grid > div { border-right: none !important; border-bottom: 1px solid rgba(128,128,128,0.12); }
                .card-grid      { grid-template-columns: 1fr !important; }
                .solution-row   { grid-template-columns: 1fr !important; }
                .solution-row > div:first-child { border-right: none !important; border-bottom: 1px solid rgba(128,128,128,0.12); }
                .faq-grid       { grid-template-columns: 1fr !important; }
                .contact-grid   { grid-template-columns: 1fr !important; }
                .footer-grid    { grid-template-columns: 1fr 1fr !important; }
              }

              @media (max-width: 1100px) and (min-width: 769px) {
                .approach-grid { grid-template-columns: repeat(3, 1fr) !important; }
                .card-grid     { grid-template-columns: repeat(2, 1fr) !important; }
                .solution-row  { grid-template-columns: 1fr !important; }
                .solution-row > div:first-child { border-right: none !important; border-bottom: 1px solid rgba(128,128,128,0.12); }
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
            <MarqueeStrip t={t} />
            <Solutions t={t} scrollTo={scrollTo} />
            <Approach t={t} />
            <Founder t={t} />
            <Pricing t={t} scrollTo={scrollTo} />
            <FAQ t={t} />
            <Contact t={t} />
            <CTABand t={t} scrollTo={scrollTo} />
            <Footer t={t} dark={dark} setDark={setDark} scrollTo={scrollTo} />
          </div>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
