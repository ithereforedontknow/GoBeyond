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

function Hero({ scrollTo }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const reveal = (delay) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

  return (
    <section
      id="hero"
      className="gbHero"
      style={{
        background: T.pageBg,
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(64px, 12vh, 120px) 24px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <style>{`
        @media (max-width: 640px) {
          .gbHero { padding: 56px 20px !important; }
          .gbHero h1 { font-size: clamp(2.3rem, 10.5vw, 3.4rem) !important; margin-bottom: 20px !important; }
          .gbHero .gbSubtitle { margin-bottom: 32px !important; }
          .gbHero .gbCtas { margin-bottom: 44px !important; gap: 10px !important; flex-direction: column !important; }
          .gbHero .gbCtas button { width: 100% !important; justify-content: center !important; padding: 16px 24px !important; }
          .gbHero .gbStats { gap: 18px !important; grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-height: 700px) and (min-width: 641px) {
          .gbHero { padding: 40px 24px !important; }
          .gbHero h1 { margin-bottom: 18px !important; }
          .gbHero .gbSubtitle { margin-bottom: 28px !important; }
          .gbHero .gbCtas { margin-bottom: 32px !important; }
        }
      `}</style>
      <div className="gbHeroInner" style={{ maxWidth: 1080, width: "100%", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

        {/* Main Headline — split into two independently-centered lines so the
            rotating word never pushes the static text sideways. Sized larger
            per the latest pass; the mobile media query above scales it down
            faster (steeper vw) than clamp alone would, to limit wrapping on
            narrow phones. */}
        <h1
          style={{
            fontSize: "clamp(3.4rem, 7vw, 6.75rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: T.heading,
            fontFamily: FONT_DISPLAY,
            maxWidth: 1100,
            margin: "0 auto 32px",
            ...reveal(0.08),
          }}
        >
          <span style={{ display: "block" }}>Whatever's next,</span>
          <span
            style={{
              display: "block",
              color: T.accent,
            }}
          >
            <RotatingText
              texts={["we design it.", "we automate it.", "we draft it."]}
              mainClassName="inline-flex items-center justify-center overflow-hidden"
              splitLevelClassName="overflow-hidden"
              elementLevelClassName="inline-block"
              style={{
                color: T.accent,
                fontWeight: 800,
              }}
              staggerFrom="first"
              staggerDuration={0.02}
              rotationInterval={2800}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(1.15rem, 1.8vw, 1.35rem)",
            lineHeight: 1.6,
            color: T.muted,
            maxWidth: 680,
            margin: "0 auto 44px",
            fontFamily: FONT_TEXT,
            ...reveal(0.16),
          }}
        >
          One partner, one clear scope, and a timeline you agreed to going in — no matter what you're building.
        </p>

        {/* Call-to-Action Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 14,
            flexWrap: "wrap",
            margin: "0 auto 68px",
            width: "100%",
            maxWidth: "540px",
            ...reveal(0.22),
          }}
        >
          <button
            onClick={() => scrollTo("solutions")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: T.accent,
              color: "#fff",
              border: "none",
              borderRadius: 999,
              padding: "18px 36px",
              fontSize: 17,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: FONT_TEXT,
              transition: "transform 0.15s, background 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = T.accentDark || T.accent;
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = T.accent;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Explore Divisions <ArrowRight size={18} />
          </button>

          <button
            onClick={() => scrollTo("approach")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: T.altBg,
              color: T.heading,
              border: "none",
              borderRadius: 999,
              padding: "18px 30px",
              fontSize: 17,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: FONT_TEXT,
              transition: "background 0.15s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Our Approach <ChevronRight size={18} />
          </button>
        </div>

        {/* Stats Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 28,
            maxWidth: 920,
            margin: "0 auto",
            ...reveal(0.34),
          }}
        >
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: 800,
                  color: T.heading,
                  fontFamily: FONT_DISPLAY,
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: T.muted,
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
