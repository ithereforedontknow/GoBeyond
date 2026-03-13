import SectionPill from "../ui/SectionPill";
import { Zap } from "lucide-react";
import { FEATURES } from "../../data/constants";
import Label from "../mini/Label";
import AccentLine from "../mini/AccentLine";
import useInView from "../../hooks/useInView";

function Features({ t }) {
  const [ref, inView] = useInView();
  return (
    <section
      id="features"
      style={{
        borderTop: `1px solid ${t.border}`,
        padding: "100px 0",
        background: t.altBg,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 56 }}>
          <Label t={t} icon={Zap}>
            What We Deliver
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
              Everything you need
              <br />
              to go further.
            </h2>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: t.muted,
                maxWidth: 300,
              }}
            >
              A complete technology stack — not just tools, but outcomes.
            </p>
          </div>
        </div>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
          className="card-grid"
        >
          {FEATURES.map((f, i) => (
            <div
              key={i}
              style={{
                padding: "32px 28px",
                border: `1px solid ${t.border}`,
                borderRadius: 12,
                background: t.cardBg,
                transition: `opacity 0.65s ${i * 0.08}s, transform 0.65s ${i * 0.08}s`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                cursor: "default",
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
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: `${t.accent}20`,
                  border: `1px solid ${t.accent}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <f.icon size={20} style={{ color: t.accent }} />
              </div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: t.heading,
                  marginBottom: 8,
                  fontFamily: "Epilogue, sans-serif",
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.65, color: t.muted }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Features;
