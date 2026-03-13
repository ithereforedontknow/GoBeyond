import useInView from "../../hooks/useInView";
import { Award } from "lucide-react";
import SectionHeader from "../mini/SectionHeader";
import { SOLUTIONS } from "../../data/constants";
import { ArrowRight } from "lucide-react";

function Solutions({ t, scrollTo }) {
  const [ref, inView] = useInView();
  return (
    <section
      id="solutions"
      style={{
        borderTop: `1px solid ${t.border}`,
        padding: "100px 0",
        background: t.pageBg,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
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

        <div
          ref={ref}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          {SOLUTIONS.map((s, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.4fr",
                gap: 0,
                border: `1px solid ${t.border}`,
                borderRadius: 14,
                overflow: "hidden",
                background: t.cardBg,
                transition: `opacity 0.7s ${i * 0.15}s, transform 0.7s ${i * 0.15}s, border-color 0.2s`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
              }}
              className="solution-row"
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = t.accent)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = t.border)
              }
            >
              {/* Left — identity */}
              <div
                style={{
                  padding: "40px 36px",
                  borderRight: `1px solid ${t.border}`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: 24,
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: `${t.accent}1a`,
                        border: `1px solid ${t.accent}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <s.icon size={22} style={{ color: t.accent }} />
                    </div>
                    {s.badge && (
                      <span
                        style={{
                          fontSize: 9,
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          padding: "4px 10px",
                          borderRadius: 20,
                          background: `${t.accent}18`,
                          border: `1px solid ${t.accent}45`,
                          color: t.accent,
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 800,
                      color: t.heading,
                      marginBottom: 14,
                      fontFamily: "Epilogue, sans-serif",
                      lineHeight: 1.2,
                    }}
                  >
                    {s.name}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: t.muted }}>
                    {s.desc}
                  </p>
                </div>
              </div>

              {/* Right — services list */}
              <div style={{ padding: "40px 36px" }}>
                <p
                  style={{
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    fontWeight: 700,
                    color: t.faint,
                    marginBottom: 20,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Services Included
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  {s.services.map((svc, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                      }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: t.accent,
                          marginTop: 6,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{ fontSize: 14, color: t.body, lineHeight: 1.5 }}
                      >
                        {svc}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollTo("contact")}
                  style={{
                    marginTop: 32,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    background: "none",
                    border: `1px solid ${t.borderStrong}`,
                    borderRadius: 7,
                    padding: "10px 18px",
                    fontSize: 13,
                    fontWeight: 600,
                    color: t.body,
                    cursor: "pointer",
                    fontFamily: "Inter, sans-serif",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = t.accent;
                    e.currentTarget.style.color = t.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = t.borderStrong;
                    e.currentTarget.style.color = t.body;
                  }}
                >
                  Inquire about this <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Solutions;
