import { Flame, ArrowRight, ExternalLink } from "lucide-react";
import SectionLabel from "../mini/SectionLabel";

const FONT = "'Inter', system-ui, -apple-system, sans-serif";

// Apple's environment-quote-card pattern: a dark full-bleed tile, centered
// copy, single button-primary. No decorative gradients or dot-grids — those
// were a SaaS habit this system explicitly avoids.
function CTABand({ t, scrollTo }) {
  return (
    <section style={{ padding: "64px 0", background: t.pageBg }}>
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: FONT,
            fontSize: "clamp(2.2rem,5vw,3.4rem)",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: t.heading,
            margin: "20px 0 14px",
          }}
        >
          Have a project
          <br />
          <span style={{ color: t.accent }}>in mind?</span>
        </h2>
        <p
          style={{
            fontFamily: FONT,
            fontSize: 17,
            lineHeight: 1.47,
            letterSpacing: "-0.374px",
            color: t.muted,
            maxWidth: 420,
            margin: "0 auto 36px",
          }}
        >
          Tell us what you're trying to solve. We'll take it from there.
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => scrollTo("contact")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: t.accent,
              color: t.accentText,
              border: "none",
              borderRadius: 8,
              padding: "11px 22px",
              fontSize: 17,
              fontWeight: 400,
              letterSpacing: "-0.374px",
              cursor: "pointer",
              fontFamily: FONT,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = t.accentDark)
            }
            onMouseLeave={(e) => (e.currentTarget.style.background = t.accent)}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            }
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Start a Conversation <ArrowRight size={16} />
          </button>
          <button
            onClick={() => scrollTo("solutions")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "transparent",
              color: t.accent,
              border: "none",
              padding: "11px 16px",
              fontSize: 14,
              fontWeight: 400,
              cursor: "pointer",
              fontFamily: FONT,
            }}
          >
            View Our Solutions <ExternalLink size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}
export default CTABand;
