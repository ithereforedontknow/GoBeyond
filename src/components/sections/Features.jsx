import { Zap } from "lucide-react";
import { FEATURES } from "../../data/constants";
import SectionHeader from "../mini/SectionHeader";
import useInView from "../../hooks/useInView";

// Apple tiles carry the section break via a surface-color change alone —
// no border rule needed between this and the section above/below.
function Features({ t }) {
  const [ref, inView] = useInView();
  return (
    <section id="features" style={{ padding: "64px 0", background: t.altBg }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader
          t={t}
          label="What We Deliver"
          labelIcon={Zap}
          heading={
            <>
              Why businesses
              <br />
              choose GoBeyond.
            </>
          }
          subtext="We don't simply deliver services — we create solutions that go beyond expectations."
        />

        <div
          ref={ref}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
          className="card-grid"
        >
          {FEATURES.map((f, i) => (
            <div
              key={i}
              style={{
                padding: "32px 28px",
                border: `1px solid ${t.border}`,
                borderRadius: 14,
                background: t.cardBg,
                transition: `opacity 0.65s ${i * 0.08}s, transform 0.65s ${i * 0.08}s, box-shadow 0.2s`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "rgba(0, 0, 0, 0.02) 0 0 0 1px, rgba(0, 0, 0, 0.04) 0 2px 6px 0, rgba(0, 0, 0, 0.1) 0 4px 8px 0")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  background: t.tagBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <f.icon size={18} style={{ color: t.accent }} />
              </div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  letterSpacing: "-0.374px",
                  color: t.heading,
                  marginBottom: 8,
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.43,
                  letterSpacing: "-0.224px",
                  color: t.muted,
                }}
              >
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
