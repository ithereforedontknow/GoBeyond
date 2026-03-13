import SectionPill from "../ui/SectionPill";
import { Award } from "lucide-react";
import { SERVICES } from "../../data/constants";
import useInView from "../../hooks/useInView";
import Label from "../mini/SectionLabel";
import AccentLine from "../mini/AccentLine";

const BADGE_CLR = {
  "Most Popular": { bg: "#ccea4a22", border: "#ccea4a55", text: "#ccea4a" },
  New: { bg: "#60a5fa18", border: "#60a5fa44", text: "#60a5fa" },
  Hot: { bg: "#f87171 18", border: "#f8717144", text: "#f87171" },
};

function Services({ t }) {
  const [ref, inView] = useInView();
  return (
    <section
      id="services"
      style={{
        borderTop: `1px solid ${t.border}`,
        padding: "100px 0",
        background: t.pageBg,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 56 }}>
          <Label t={t} icon={Award}>
            Our Services
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
              Three divisions.
              <br />
              One partner.
            </h2>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: t.muted,
                maxWidth: 360,
              }}
            >
              From intelligent digital tools to custom systems and building
              plans — GoBeyond covers the full spectrum of innovation.
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
          {SERVICES.map((s, i) => {
            const bc = s.badge ? BADGE_CLR[s.badge] : null;
            return (
              <div
                key={i}
                style={{
                  position: "relative",
                  padding: "32px 28px",
                  border: `1px solid ${t.border}`,
                  borderRadius: 12,
                  background: t.cardBg,
                  transition: `opacity 0.65s ${i * 0.08}s, transform 0.65s ${i * 0.08}s, border-color 0.2s`,
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
                {bc && (
                  <span
                    style={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: 20,
                      background: bc.bg,
                      border: `1px solid ${bc.border}`,
                      color: bc.text,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {s.badge}
                  </span>
                )}

                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: `${t.accent}18`,
                    border: `1px solid ${t.accent}38`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <s.icon size={19} style={{ color: t.accent }} />
                </div>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: t.heading,
                    marginBottom: 8,
                    paddingRight: s.badge ? 64 : 0,
                    fontFamily: "Epilogue, sans-serif",
                  }}
                >
                  {s.name}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.65,
                    color: t.muted,
                    marginBottom: 20,
                  }}
                >
                  {s.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "4px 8px",
                        borderRadius: 4,
                        background: t.tagBg,
                        color: t.tagText,
                        border: `1px solid ${t.border}`,
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
