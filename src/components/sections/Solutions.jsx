import { Award, ArrowRight } from "lucide-react";
import SectionHeader from "../mini/SectionHeader";
import { SOLUTIONS } from "../../data/constants";
import useInView from "../../hooks/useInView";

const FONT = "'Inter', system-ui, -apple-system, sans-serif";

function SolutionCard({ s, i, inView, t, scrollTo }) {
  return (
    <div
      style={{
        background: t.cardBg,
        border: `1px solid ${t.border}`,
        borderRadius: 14,
        padding: "36px 32px 32px",
        display: "flex",
        flexDirection: "column",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s, transform 0.6s, box-shadow 0.2s",
        transitionDelay: `${i * 0.12}s`,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow =
          "rgba(0, 0, 0, 0.02) 0 0 0 1px, rgba(0, 0, 0, 0.04) 0 2px 6px 0, rgba(0, 0, 0, 0.1) 0 4px 8px 0")
      }
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 11,
          background: t.tagBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 28,
          flexShrink: 0,
        }}
      >
        <s.icon size={20} style={{ color: t.accent }} />
      </div>

      <h3
        style={{
          fontFamily: FONT,
          fontSize: 21,
          fontWeight: 600,
          letterSpacing: "0.231px",
          color: t.heading,
          lineHeight: 1.19,
          marginBottom: 14,
        }}
      >
        {s.name}
      </h3>

      <p
        style={{
          fontFamily: FONT,
          fontSize: 14,
          lineHeight: 1.43,
          letterSpacing: "-0.224px",
          color: t.muted,
          marginBottom: 28,
          flex: 1,
        }}
      >
        {s.desc}
      </p>

      <div style={{ height: 1, background: t.border, marginBottom: 24 }} />

      <p
        style={{
          fontFamily: FONT,
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "-0.224px",
          color: t.faint,
          marginBottom: 14,
        }}
      >
        Services Included
      </p>

      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 11, marginBottom: 28 }}>
        {s.services.map((svc, j) => (
          <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 11 }}>
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: t.accent,
                marginTop: 7,
                flexShrink: 0,
              }}
            />
            <span style={{ fontFamily: FONT, fontSize: 14, color: t.body, lineHeight: 1.43, letterSpacing: "-0.224px" }}>
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
          gap: 7,
          width: "100%",
          padding: "11px 20px",
          background: "transparent",
          color: t.accent,
          border: `1px solid ${t.accent}`,
          borderRadius: 8,
          fontFamily: FONT,
          fontSize: 14,
          fontWeight: 400,
          cursor: "pointer",
          marginTop: "auto",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = t.tagBg)}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
        onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Inquire about this
        <ArrowRight size={13} />
      </button>
    </div>
  );
}

function Solutions({ t, scrollTo }) {
  const [ref, inView] = useInView();

  return (
    <section id="solutions" style={{ padding: "64px 0", background: t.pageBg }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 24px" }}>
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

        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="card-grid">
          {SOLUTIONS.map((s, i) => (
            <SolutionCard key={i} s={s} i={i} inView={inView} t={t} scrollTo={scrollTo} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
