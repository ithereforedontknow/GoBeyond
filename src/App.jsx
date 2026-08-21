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

// Light-mode-only, brutalist-green. T is now a flat object (no more
// T.light / T.dark), so t = T directly — no state, no matchMedia listener,
// no dark/setDark props to pass down.
export default function App() {
  const t = T;

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
            }}
          >
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,600;1,700&family=IBM+Plex+Mono:wght@500;600&display=swap');

              *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
              body { font-family: 'IBM Plex Sans', system-ui, sans-serif; }
              html { scroll-behavior: smooth; }

              @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

              *::selection { background: ${t.accent}33; }

              /* ── breakpoint scale used everywhere below ─────────────────
                 > 1024px  desktop     (base styles, no query needed)
                 641–1024  tablet      (@media max-width: 1024px)
                 ≤ 640     mobile      (@media max-width: 640px)
                 ≤ 480     small phone (@media max-width: 480px, only where content still doesn't fit)
                 A separate 900px line exists only for the nav — link-label
                 width, not layout grid, is what breaks it early.
                 ───────────────────────────────────────────────────────── */

              .hidden-mobile { display: flex !important; }
              .show-mobile   { display: none  !important; }

              .founder-grid { grid-template-columns: 420px 1fr !important; }

              .pricing-row-mobile  { display: none; }
              .pricing-row-desktop { display: grid; }

              /* ── nav: own breakpoint, driven by link-label width ───────── */
              @media (max-width: 900px) {
                .hidden-mobile { display: none !important; }
                .show-mobile   { display: flex !important; }
              }

              /* ── tablet (≤1024px) ────────────────────────────────────── */
              @media (max-width: 1024px) {
                .hero-split-grid { grid-template-columns: 1fr !important; gap: 48px !important; }

                .approach-timeline { flex-direction: column !important; gap: 32px !important; }
                .approach-line-h { display: none !important; }
                .approach-line-v { display: block !important; }
                .approach-step { flex-direction: row !important; gap: 16px !important; padding-right: 0 !important; }

                .card-grid    { grid-template-columns: repeat(2, 1fr) !important; }
                .faq-grid     { grid-template-columns: 1fr !important; gap: 40px !important; }
                .faq-side     { position: static !important; }
                .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
                .founder-grid { grid-template-columns: 320px 1fr !important; gap: 48px !important; }
                .footer-grid  { grid-template-columns: 1fr 1fr !important; row-gap: 32px !important; }
              }

              /* ── mobile (≤640px) ─────────────────────────────────────── */
              @media (max-width: 640px) {
                .hero-diagram-panel { padding: 36px 20px !important; border-radius: 18px !important; }
                .hero-stats { gap: 20px 0 !important; }
                .hero-stats > div { padding-right: 20px !important; margin-right: 0 !important; }

                .card-grid    { grid-template-columns: 1fr !important; }
                .founder-grid { grid-template-columns: 1fr !important; gap: 40px !important; }

                .pricing-row-desktop { display: none !important; }
                .pricing-row-mobile  { display: block !important; }
              }

              /* ── small phone (≤480px) ────────────────────────────────── */
              @media (max-width: 480px) {
                .footer-grid { grid-template-columns: 1fr !important; row-gap: 36px !important; }
              }

              @media (prefers-reduced-motion: reduce) {
                * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
              }
            `}</style>

            <Navbar t={t} scrollTo={scrollTo} />
            <Hero t={t} scrollTo={scrollTo} />
            <MarqueeStrip t={t} />
            <Solutions t={t} scrollTo={scrollTo} />
            <Approach t={t} />
            <Founder t={t} />
            <Pricing t={t} scrollTo={scrollTo} />
            <FAQ t={t} />
            <Contact t={t} />
            <CTABand t={t} scrollTo={scrollTo} />
            <Footer t={t} scrollTo={scrollTo} />
          </div>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
