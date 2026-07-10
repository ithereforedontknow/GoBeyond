import { Award, ArrowRight } from "lucide-react";
import useInView from "../../hooks/useInView";
import SectionHeader from "../mini/SectionHeader";
import { COMMITMENTS } from "../../data/constants";

function Commitment({ t, scrollTo }) {
  const [ref, inView] = useInView();
  return (
    <section id="pricing" style={{ padding: "64px 0", background: t.altBg }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader
          t={t}
          label="Our Commitment"
          labelIcon={Award}
          heading={
            <>
              What we stand
              <br />
              behind, always.
            </>
          }
          subtext="These aren't just values on a wall. They shape every decision we make and every solution we deliver."
        />
        <div
          ref={ref}
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}
          className="card-grid"
        >
          {COMMITMENTS.map((c, i) => (
            <div
              key={i}
              style={{
                padding: "36px 32px",
                border: `1px solid ${t.border}`,
                borderRadius: 14,
                background: t.cardBg,
                transition: `opacity 0.65s ${i * 0.1}s, transform 0.65s ${i * 0.1}s, box-shadow 0.2s`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "rgba(0, 0, 0, 0.02) 0 0 0 1px, rgba(0, 0, 0, 0.04) 0 2px 6px 0, rgba(0, 0, 0, 0.1) 0 4px 8px 0")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: t.accent,
                  marginBottom: 20,
                }}
              />
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  letterSpacing: "-0.374px",
                  color: t.heading,
                  marginBottom: 10,
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.43,
                  letterSpacing: "-0.224px",
                  color: t.muted,
                }}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, textAlign: "center" }}>
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
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = t.accentDark)}
            onMouseLeave={(e) => (e.currentTarget.style.background = t.accent)}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Start a conversation <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
export default Commitment;
