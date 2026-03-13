import useInView from "../../hooks/useInView";
import { Zap } from "lucide-react";
import SectionHeader from "../mini/SectionHeader";
import { APPROACH } from "../../data/constants";

function Approach({ t }) {
  const [ref, inView] = useInView();
  return (
    <section
      id="approach"
      style={{
        borderTop: `1px solid ${t.border}`,
        padding: "100px 0",
        background: t.altBg,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader
          t={t}
          label="Our Approach"
          labelIcon={Zap}
          heading={
            <>
              A structured path
              <br />
              from idea to impact.
            </>
          }
          subtext="Five clear phases that take every project from raw insight to continuous improvement — with full transparency at each step."
        />

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            border: `1px solid ${t.borderStrong}`,
            borderRadius: 14,
            overflow: "hidden",
          }}
          className="approach-grid"
        >
          {APPROACH.map((step, i) => (
            <div
              key={i}
              style={{
                padding: "36px 28px",
                background: t.cardBg,
                borderRight: i < 4 ? `1px solid ${t.borderStrong}` : "none",
                transition: `opacity 0.65s ${i * 0.1}s, transform 0.65s ${i * 0.1}s`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2.4rem,3.5vw,3.2rem)",
                  fontWeight: 800,
                  lineHeight: 1,
                  marginBottom: 24,
                  fontFamily: "Epilogue, sans-serif",
                  letterSpacing: "-0.04em",
                  color: t.heading,
                  opacity: 0.1,
                  userSelect: "none",
                }}
              >
                {step.step}
              </div>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: `${t.accent}18`,
                  border: `1px solid ${t.accent}38`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <step.icon size={18} style={{ color: t.accent }} />
              </div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: t.heading,
                  marginBottom: 10,
                  fontFamily: "Epilogue, sans-serif",
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: 12, lineHeight: 1.7, color: t.muted }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Approach;
