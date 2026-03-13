import { Zap } from "lucide-react";
import { HOW_IT_WORKS } from "../../data/constants";
import useInView from "../../hooks/useInView";
import Label from "../mini/SectionLabel";
import AccentLine from "../mini/AccentLine";

function HowItWorks({ t }) {
  const [ref, inView] = useInView();
  return (
    <section
      style={{
        borderTop: `1px solid ${t.border}`,
        padding: "100px 0",
        background: t.pageBg,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 56 }}>
          <Label t={t} icon={Zap}>
            How It Works
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
                maxWidth: 320,
              }}
            >
              Our 5-Step
              <br />
              approach.
            </h2>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: t.muted,
                maxWidth: 300,
              }}
            >
              A structured methodology that takes every project from insight to
              impact — and keeps improving after delivery.
            </p>
          </div>
        </div>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            border: `1px solid ${t.borderStrong}`,
            borderRadius: 12,
            overflow: "hidden",
          }}
          className="steps-grid"
        >
          {HOW_IT_WORKS.map((step, i) => (
            <div
              key={i}
              style={{
                padding: "44px 36px",
                background: t.cardBg,
                borderRight: i < 2 ? `1px solid ${t.borderStrong}` : "none",
                transition: `opacity 0.7s ${i * 0.13}s, transform 0.7s ${i * 0.13}s`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2.8rem,4vw,3.6rem)",
                  fontWeight: 800,
                  marginBottom: 28,
                  lineHeight: 1,
                  fontFamily: "Epilogue, sans-serif",
                  letterSpacing: "-0.04em",
                  opacity: 0.12,
                  userSelect: "none",
                  color: t.heading,
                }}
              >
                {step.step}
              </div>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  border: `1px solid ${t.border}`,
                  background: `${t.accent}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <step.icon size={20} style={{ color: t.accent }} />
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: t.heading,
                  marginBottom: 10,
                  fontFamily: "Epilogue, sans-serif",
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: t.muted }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
