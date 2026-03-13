import { useState } from "react";
import { Package } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { PLANS } from "../../data/constants";
import useInView from "../../hooks/useInView";
import SectionLabel from "../mini/SectionLabel";
import AccentLine from "../mini/AccentLine";

function Pricing({ t, scrollTo }) {
  const [tab, setTab] = useState("Project-Based");
  const [ref, inView] = useInView();
  const tabs = ["Project-Based", "Retainer"];

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
        <div style={{ marginBottom: 48 }}>
          <SectionLabel t={t} icon={Package}>
            Pricing
          </SectionLabel>
          <AccentLine t={t} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "clamp(2rem,3.8vw,2.9rem)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  color: t.heading,
                  fontFamily: "Epilogue, sans-serif",
                  marginBottom: 10,
                }}
              >
                Flexible pricing
                <br />
                for every need.
              </h2>
              <p
                style={{
                  fontSize: 13,
                  color: t.faint,
                  maxWidth: 380,
                  lineHeight: 1.7,
                }}
              >
                Pricing is tailored to each project's scope and requirements.
                The tiers below give you a clear sense of what's included —
                reach out for a custom quote.
              </p>
            </div>
            {/* Tab toggle */}
            <div
              style={{
                display: "flex",
                border: `1px solid ${t.borderStrong}`,
                borderRadius: 8,
                overflow: "hidden",
                alignSelf: "flex-start",
              }}
            >
              {tabs.map((tb) => (
                <button
                  key={tb}
                  onClick={() => setTab(tb)}
                  style={{
                    padding: "9px 22px",
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                    border: "none",
                    fontFamily: "Inter, sans-serif",
                    whiteSpace: "nowrap",
                    transition: "background 0.2s, color 0.2s",
                    background: tab === tb ? t.accent : t.cardBg,
                    color: tab === tb ? t.accentText : t.muted,
                  }}
                >
                  {tb}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            alignItems: "stretch",
          }}
          className="card-grid"
        >
          {PLANS[tab].map((p, i) => (
            <div
              key={`${tab}-${i}`}
              style={{
                position: "relative",
                borderRadius: 12,
                padding: "36px 30px",
                display: "flex",
                flexDirection: "column",
                background: p.highlight ? t.accent : t.cardBg,
                border: p.highlight
                  ? `2px solid ${t.accent}`
                  : `1px solid ${t.border}`,
                boxShadow: p.highlight ? `0 20px 60px ${t.accent}22` : "none",
                transition: `opacity 0.7s ${i * 0.13}s, transform 0.7s ${i * 0.13}s`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
              }}
            >
              {p.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: t.heading,
                    color: t.pageBg,
                    fontSize: 9,
                    fontWeight: 800,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "5px 14px",
                    borderRadius: 20,
                    fontFamily: "Inter, sans-serif",
                    whiteSpace: "nowrap",
                  }}
                >
                  Recommended
                </div>
              )}

              <div style={{ marginBottom: 26 }}>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    marginBottom: 4,
                    fontFamily: "Epilogue, sans-serif",
                    color: p.highlight ? t.accentText : t.heading,
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    fontSize: 12,
                    marginBottom: 20,
                    color: p.highlight ? "#4a4a2a" : t.faint,
                    lineHeight: 1.5,
                  }}
                >
                  {p.desc}
                </p>
                <div
                  style={{ display: "flex", alignItems: "flex-end", gap: 6 }}
                >
                  <span
                    style={{
                      fontSize: "clamp(1.8rem,3vw,2.4rem)",
                      fontWeight: 800,
                      lineHeight: 1,
                      fontFamily: "Epilogue, sans-serif",
                      color: p.highlight ? t.accentText : t.heading,
                    }}
                  >
                    {p.price}
                  </span>
                  {p.period && (
                    <span
                      style={{
                        fontSize: 12,
                        marginBottom: 3,
                        color: p.highlight ? "#4a4a2a" : t.faint,
                      }}
                    >
                      {p.period}
                    </span>
                  )}
                  {p.price === "TBD" && (
                    <span
                      style={{
                        fontSize: 11,
                        marginBottom: 3,
                        fontWeight: 600,
                        color: p.highlight ? "#4a4a2a" : t.faint,
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      — quoted per project
                    </span>
                  )}
                </div>
              </div>

              <ul
                style={{
                  flex: 1,
                  marginBottom: 26,
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 11,
                }}
              >
                {p.features.map((f, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontSize: 13,
                    }}
                  >
                    <CheckCircle2
                      size={14}
                      style={{
                        color: p.highlight ? "#4a4a2a" : t.accent,
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    />
                    <span
                      style={{
                        color: p.highlight ? t.accentText : t.body,
                        lineHeight: 1.5,
                      }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollTo("contact")}
                style={{
                  width: "100%",
                  padding: "13px 0",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  transition: "opacity 0.2s",
                  background: p.highlight ? t.heading : t.accent,
                  color: p.highlight ? t.pageBg : t.accentText,
                  border: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.86")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: 12,
            color: t.faint,
            marginTop: 28,
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.7,
          }}
        >
          All pricing is finalized through a discovery session.{" "}
          <button
            onClick={() => scrollTo("contact")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: t.accent,
              fontWeight: 600,
              fontSize: 12,
              fontFamily: "Inter, sans-serif",
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            Get in touch
          </button>{" "}
          and we'll build a quote around your exact needs.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
