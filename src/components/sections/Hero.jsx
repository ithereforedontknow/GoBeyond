import { useEffect, useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import RotatingText from "./RotatingText";
import { T } from "../../data/constants";

const STATS = [
  { value: "3", label: "Solution Divisions" },
  { value: "5", label: "Steps to Delivery" },
  { value: "1", label: "Dedicated Partner" },
  { value: "∞", label: "Room to Grow" },
];

const FONT_DISPLAY = "'IBM Plex Sans', sans-serif";
const FONT_TEXT = "'IBM Plex Sans', sans-serif";

function Hero({ scrollTo = () => {}, t = T }) {
  const [mounted, setMounted] = useState(false);
  const theme = t || T;

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const reveal = (delay) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

  return (
    <section
      id="hero"
      className="gbHero"
      style={{
        background: theme.pageBg,
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(64px, 12vh, 120px) 24px",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        /* ── Architectural CAD Grid Layer ── */
        .gbCadGrid {
          position: absolute;
          inset: 0;
          background-size: 48px 48px;
          background-image:
            linear-gradient(to right, ${theme.heading || "#000"}0d 1px, transparent 1px),
            linear-gradient(to bottom, ${theme.heading || "#000"}0d 1px, transparent 1px);
          mask-image: radial-gradient(ellipse 75% 65% at 50% 42%, black 20%, transparent 85%);
          -webkit-mask-image: radial-gradient(ellipse 75% 65% at 50% 42%, black 20%, transparent 85%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Primary Button ── */
        .gbBtnPrimary {
          background: ${theme.accent};
          color: #ffffff;
          border: none;
          transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), background 0.18s ease;
        }
        .gbBtnPrimary:hover {
          background: ${theme.accentDark || theme.accent};
          transform: translateY(-2px);
        }
        .gbBtnPrimary:active {
          transform: translateY(0) scale(0.98);
        }

        /* ── Secondary Button (No Border) ── */
        .gbBtnSecondary {
          background: ${theme.altBg || "rgba(0, 0, 0, 0.05)"};
          color: ${theme.heading};
          border: none;
          transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), background 0.18s ease;
        }
        .gbBtnSecondary:hover {
          background: ${theme.altBgHover || "rgba(0, 0, 0, 0.08)"};
          transform: translateY(-2px);
        }
        .gbBtnSecondary:active {
          transform: translateY(0) scale(0.98);
        }

        .gbHero button:focus-visible {
          outline: 2px solid ${theme.accent};
          outline-offset: 3px;
        }

        /* ── Responsive Scaling ── */
        @media (max-width: 640px) {
          .gbHero { padding: 64px 20px 48px !important; }
          .gbHero h1 { font-size: clamp(2.4rem, 11vw, 3.4rem) !important; margin-bottom: 18px !important; }
          .gbHero .gbSubtitle { margin-bottom: 32px !important; font-size: 1.1rem !important; }
          .gbHero .gbCtas { margin-bottom: 48px !important; gap: 10px !important; }
          .gbHero .gbCtas button { width: auto !important; padding: 14px 24px !important; font-size: 15px !important; }
          .gbHero .gbStats { gap: 18px !important; grid-template-columns: repeat(2, 1fr) !important; }
          .gbCadGrid { background-size: 32px 32px; }
        }

        @media (max-height: 720px) and (min-width: 641px) {
          .gbHero { padding: 48px 24px !important; }
          .gbHero h1 { margin-bottom: 18px !important; }
          .gbHero .gbSubtitle { margin-bottom: 24px !important; }
          .gbHero .gbCtas { margin-bottom: 36px !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .gbHero * {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* CAD Architectural Grid */}
      <div className="gbCadGrid" aria-hidden="true" />

      {/* Hero Foreground Content */}
      <div
        className="gbHeroInner"
        style={{
          maxWidth: 1080,
          width: "100%",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(3.2rem, 7vw, 6.25rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.035em",
            color: theme.heading,
            fontFamily: FONT_DISPLAY,
            maxWidth: 1050,
            margin: "0 auto 28px",
            ...reveal(0.06),
          }}
        >
          <span style={{ display: "block" }}>Whatever's next,</span>
          <span style={{ display: "block", color: theme.accent, marginTop: 4 }}>
            <RotatingText
              texts={["we design it!", "we automate it!", "we draft it!"]}
              mainClassName="inline-flex items-center justify-center overflow-hidden"
              splitLevelClassName="overflow-hidden"
              elementLevelClassName="inline-block"
              style={{ color: theme.accent, fontWeight: 800 }}
              staggerFrom="first"
              staggerDuration={0.02}
              rotationInterval={2800}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="gbSubtitle"
          style={{
            fontSize: "clamp(1.125rem, 1.8vw, 1.3rem)",
            lineHeight: 1.6,
            color: theme.muted,
            maxWidth: 640,
            margin: "0 auto 40px",
            fontFamily: FONT_TEXT,
            ...reveal(0.14),
          }}
        >
          One partner, one clear scope, and a timeline you agreed to going in — no matter what you're building.
        </p>

        {/* Call to Actions (Shrink-to-fit on mobile) */}
        <div
          className="gbCtas"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 14,
            flexWrap: "wrap",
            margin: "0 auto 60px",
            width: "100%",
            maxWidth: "540px",
            ...reveal(0.2),
          }}
        >
          <button
            type="button"
            className="gbBtnPrimary"
            onClick={() => scrollTo("solutions")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 999,
              padding: "16px 34px",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: FONT_TEXT,
            }}
          >
            Explore Divisions <ArrowRight size={18} />
          </button>

          <button
            type="button"
            className="gbBtnSecondary"
            onClick={() => scrollTo("approach")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              border: "none",
              borderRadius: 999,
              padding: "16px 30px",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: FONT_TEXT,
            }}
          >
            Our Approach <ChevronRight size={18} />
          </button>
        </div>

        {/* Stats Grid */}
        <div
          className="gbStats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
            maxWidth: 880,
            margin: "0 auto",
            ...reveal(0.28),
          }}
        >
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "12px 8px" }}>
              <div
                style={{
                  fontSize: "clamp(2.4rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: theme.heading,
                  fontFamily: FONT_DISPLAY,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 13.5,
                  fontWeight: 500,
                  color: theme.muted,
                  marginTop: 8,
                  fontFamily: FONT_TEXT,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
