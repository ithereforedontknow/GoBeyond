import { ArrowRight, ExternalLink } from "lucide-react";
import { FONT_DISPLAY, FONT_TEXT, HAIRLINE, SOFT_SHADOW_LIFT } from "../../data/constants";

function CTABand({ t, scrollTo }) {
  return (
    <section style={{ padding: "88px 32px", background: t.pageBg }} className="cta-band">
      <div
        className="cta-band-panel"
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "72px 40px",
          textAlign: "center",
          borderRadius: 28,
          background: t.tagBg,
          boxShadow: SOFT_SHADOW_LIFT,
        }}
      >
        <h2
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: "clamp(2.2rem,5vw,3.4rem)",
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            color: t.heading,
            margin: "0 0 14px",
          }}
        >
          Have a project
          <br />
          <span style={{ color: t.accent }}>in mind?</span>
        </h2>
        <p
          style={{
            fontFamily: FONT_TEXT,
            fontSize: 17,
            lineHeight: 1.5,
            color: t.muted,
            maxWidth: 420,
            margin: "0 auto 36px",
          }}
        >
          Tell us what you're trying to solve. We'll take it from there.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => scrollTo("contact")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: t.accent,
              color: "#fff",
              border: "none",
              borderRadius: 999,
              padding: "15px 28px",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: FONT_TEXT,
              transition: "transform 0.15s, background 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = t.accentDark; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = t.accent; e.currentTarget.style.transform = "translateY(0)"; }}
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
              color: t.heading,
              border: `1.5px solid rgba(10,10,10,0.16)`,
              borderRadius: 999,
              padding: "15px 24px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: FONT_TEXT,
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            View Our Solutions <ExternalLink size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}
export default CTABand;
