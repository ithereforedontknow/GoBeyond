import { Award, ArrowRight } from "lucide-react";
import SectionHeader from "../mini/SectionHeader";
import { SOLUTIONS } from "../../data/constants";
import { FONT_DISPLAY, FONT_TEXT, FONT_MONO, HAIRLINE, ACC_DIM, SOFT_SHADOW, SOFT_SHADOW_LIFT } from "../../data/constants";
import useInView from "../../hooks/useInView";

function SolutionCard({ s, i, inView, t, scrollTo }) {
  return (
    <div
      style={{
        background: t.cardBg,
        border: `1px solid ${HAIRLINE}`,
        borderRadius: 20,
        padding: "36px 32px 32px",
        display: "flex",
        flexDirection: "column",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        boxShadow: SOFT_SHADOW,
        transition: `opacity 0.6s ${i * 0.12}s, transform 0.6s ${i * 0.12}s, box-shadow 0.2s`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = SOFT_SHADOW_LIFT;
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = SOFT_SHADOW;
        e.currentTarget.style.transform = inView ? "translateY(0)" : "translateY(20px)";
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 12,
          background: ACC_DIM,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 28,
          flexShrink: 0,
        }}
      >
        <s.icon size={22} style={{ color: t.accent }} />
      </div>

      <h3
        style={{
          fontFamily: FONT_DISPLAY,
          fontSize: 21,
          fontWeight: 700,
          letterSpacing: "-0.01em",
          color: t.heading,
          lineHeight: 1.22,
          marginBottom: 14,
        }}
      >
        {s.name}
      </h3>

      <p
        style={{
          fontFamily: FONT_TEXT,
          fontSize: 15,
          lineHeight: 1.55,
          color: t.muted,
          marginBottom: 26,
          flex: 1,
        }}
      >
        {s.desc}
      </p>

      <div style={{ height: 1, background: HAIRLINE, marginBottom: 22 }} />

      <p
        style={{
          fontFamily: FONT_MONO,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: t.faint,
          marginBottom: 14,
        }}
      >
        Services Included
      </p>

      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 11, marginBottom: 28 }}>
        {s.services.map((svc, j) => (
          <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 11 }}>
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: t.accent,
                marginTop: 8,
                flexShrink: 0,
              }}
            />
            <span style={{ fontFamily: FONT_TEXT, fontSize: 14.5, color: t.body, lineHeight: 1.5 }}>
              {svc}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => scrollTo("contact")}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          width: "100%",
          padding: "13px 20px",
          background: "transparent",
          color: t.heading,
          border: `1.5px solid ${HAIRLINE}`,
          borderRadius: 999,
          fontFamily: FONT_TEXT,
          fontSize: 15,
          fontWeight: 600,
          cursor: "pointer",
          marginTop: "auto",
          transition: "background 0.15s, border-color 0.15s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = t.altBg; e.currentTarget.style.borderColor = "rgba(10,10,10,0.22)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = HAIRLINE; }}
      >
        Inquire about this
        <ArrowRight size={14} />
      </button>
    </div>
  );
}

function Solutions({ t, scrollTo }) {
  const [ref, inView] = useInView();

  return (
    <section id="solutions" style={{ padding: "88px 0", background: t.pageBg }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 32px" }}>
        <SectionHeader
          t={t}
          label="Our Solutions"
          labelIcon={Award}
          heading={
            <>
              Three divisions.
              <br />
              One partner.
            </>
          }
          subtext="From intelligent digital tools to custom systems and building plans — GoBeyond covers the full spectrum of innovation, under one roof."
        />

        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="card-grid">
          {SOLUTIONS.map((s, i) => (
            <SolutionCard key={i} s={s} i={i} inView={inView} t={t} scrollTo={scrollTo} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
