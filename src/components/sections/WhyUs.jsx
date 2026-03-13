import useInView from "../../hooks/useInView";
import { Award } from "lucide-react";
import SectionHeader from "../mini/SectionHeader";
import { WHY_US } from "../../data/constants";

function WhyUs({ t }) {
  const [ref, inView] = useInView();
  return (
    <section
      id="whyus"
      style={{
        borderTop: `1px solid ${t.border}`,
        padding: "100px 0",
        background: t.pageBg,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader
          t={t}
          label="Why Choose Us"
          labelIcon={Award}
          heading={
            <>
              Why businesses
              <br />
              choose GoBeyond.
            </>
          }
          subtext="We don't simply deliver services — we create solutions that go beyond expectations. Here's what makes us different."
        />

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
          }}
          className="card-grid"
        >
          {WHY_US.map((w, i) => (
            <div
              key={i}
              style={{
                padding: "30px 26px",
                border: `1px solid ${t.border}`,
                borderRadius: 12,
                background: t.cardBg,
                transition: `opacity 0.65s ${i * 0.08}s, transform 0.65s ${i * 0.08}s, border-color 0.2s`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(22px)",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = t.accent)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = t.border)
              }
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: `${t.accent}18`,
                  border: `1px solid ${t.accent}35`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <w.icon size={18} style={{ color: t.accent }} />
              </div>
              <h3
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: t.heading,
                  marginBottom: 8,
                  fontFamily: "Epilogue, sans-serif",
                }}
              >
                {w.title}
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.65, color: t.muted }}>
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default WhyUs;
