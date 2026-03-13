import { Flame } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { ExternalLink } from "lucide-react";
import Label from "../mini/Label";
function CTABand({ t, scrollTo }) {
  return (
    <section
      style={{
        borderTop: `1px solid ${t.border}`,
        padding: "100px 0",
        background: t.pageBg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(${t.accent}12 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 700,
          height: 350,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${t.accent}10 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Label t={t} icon={Flame}>
          Ready When You Are
        </Label>
        <h2
          style={{
            fontSize: "clamp(2.4rem,5.5vw,3.8rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: t.heading,
            margin: "24px 0 16px",
            fontFamily: "Epilogue, sans-serif",
          }}
        >
          Ready to go <span style={{ color: t.accent }}>beyond</span>?
        </h2>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.7,
            color: t.muted,
            maxWidth: 380,
            margin: "0 auto 36px",
          }}
        >
          Start your free trial today. No credit card required.
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
            onClick={() => scrollTo("pricing")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: t.accent,
              color: t.accentText,
              border: "none",
              borderRadius: 8,
              padding: "14px 32px",
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = t.accentDark;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = t.accent;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get Started Free <ArrowRight size={16} />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "transparent",
              color: t.muted,
              border: "none",
              padding: "14px 20px",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = t.heading)}
            onMouseLeave={(e) => (e.currentTarget.style.color = t.muted)}
          >
            Talk to Sales <ExternalLink size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}
export default CTABand;
