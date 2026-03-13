import { Award } from "lucide-react";
import useInView from "../../hooks/useInView";
import Label from "../mini/SectionLabel";
import AccentLine from "../mini/AccentLine";
import { COMMITMENTS } from "../../data/constants";
function Commitment({ t, scrollTo }) {
  const [ref, inView] = useInView();
  return (
    <section
      id="pricing"
      style={{
        borderTop: `1px solid ${t.border}`,
        padding: "100px 0",
        background: t.altBg,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 56 }}>
          <Label t={t} icon={Award}>
            Our Commitment
          </Label>
          <AccentLine t={t} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem,3.8vw,2.9rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: t.heading,
                fontFamily: "Epilogue, sans-serif",
                maxWidth: 340,
              }}
            >
              What we stand
              <br />
              behind, always.
            </h2>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: t.muted,
                maxWidth: 340,
              }}
            >
              These aren't just values on a wall. They shape every decision we
              make and every solution we deliver.
            </p>
          </div>
        </div>
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
          }}
          className="card-grid"
        >
          {COMMITMENTS.map((c, i) => (
            <div
              key={i}
              style={{
                padding: "36px 32px",
                border: `1px solid ${t.border}`,
                borderRadius: 12,
                background: t.cardBg,
                transition: `opacity 0.65s ${i * 0.1}s, transform 0.65s ${i * 0.1}s`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = t.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = t.border;
              }}
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
                  fontWeight: 800,
                  color: t.heading,
                  marginBottom: 10,
                  fontFamily: "Epilogue, sans-serif",
                }}
              >
                {c.title}
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: t.muted }}>
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
              padding: "14px 32px",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = t.accentDark)
            }
            onMouseLeave={(e) => (e.currentTarget.style.background = t.accent)}
          >
            Start a conversation <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
export default Commitment;
