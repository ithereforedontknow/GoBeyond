import { Award } from "lucide-react";
import { SERVICES } from "../../data/constants";
import useInView from "../../hooks/useInView";
import SectionHeader from "../mini/SectionHeader";

const BADGE_CLR = {
  "Most Popular": { bg: "#0066cc18", border: "#0066cc40", text: "#0066cc" },
  New: { bg: "#60a5fa18", border: "#60a5fa44", text: "#3b82f6" },
  Hot: { bg: "#f8717118", border: "#f8717144", text: "#ef4444" },
};

function Services({ t }) {
  const [ref, inView] = useInView();
  return (
    <section id="services" style={{ padding: "64px 0", background: t.pageBg }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader
          t={t}
          label="Our Services"
          labelIcon={Award}
          heading={
            <>
              Three divisions.
              <br />
              One partner.
            </>
          }
          subtext="From intelligent digital tools to custom systems and building plans — GoBeyond covers the full spectrum of innovation."
        />

        <div
          ref={ref}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
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
                {bc && (
                  <span
                    style={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "-0.224px",
                      padding: "4px 10px",
                      borderRadius: 9999,
                      background: bc.bg,
                      border: `1px solid ${bc.border}`,
                      color: bc.text,
                      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                    }}
                  >
                    {s.badge}
                  </span>
                )}

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
                  <s.icon size={18} style={{ color: t.accent }} />
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    letterSpacing: "-0.374px",
                    color: t.heading,
                    marginBottom: 8,
                    paddingRight: s.badge ? 64 : 0,
                    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  }}
                >
                  {s.name}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.43,
                    letterSpacing: "-0.224px",
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
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        padding: "4px 8px",
                        borderRadius: 4,
                        background: t.tagBg,
                        color: t.tagText,
                        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
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
