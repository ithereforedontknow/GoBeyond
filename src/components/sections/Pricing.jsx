import { useState } from "react";
import { Package } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { PLANS } from "../../data/constants";
import useInView from "../../hooks/useInView";
import Label from "../mini/Label";
import AccentLine from "../mini/AccentLine";

function Pricing({ t, scrollTo }) {
  const [billing, setBilling] = useState("monthly");
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
        <div style={{ marginBottom: 48 }}>
          <Label t={t} icon={Package}>
            Pricing
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
              }}
            >
              Simple, transparent
              <br />
              pricing.
            </h2>
            {/* Toggle */}
            <div
              style={{
                display: "flex",
                border: `1px solid ${t.borderStrong}`,
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              {["monthly", "annual"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setBilling(tab)}
                  style={{
                    padding: "9px 20px",
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                    border: "none",
                    fontFamily: "Inter, sans-serif",
                    textTransform: "capitalize",
                    transition: "background 0.2s, color 0.2s",
                    background: billing === tab ? t.accent : t.cardBg,
                    color: billing === tab ? t.accentText : t.muted,
                  }}
                >
                  {tab}
                  {tab === "annual" && (
                    <span
                      style={{
                        marginLeft: 5,
                        fontSize: 10,
                        color: billing === tab ? "#555" : t.accent,
                        fontWeight: 800,
                      }}
                    >
                      –20%
                    </span>
                  )}
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
          {PLANS[billing].map((p, i) => (
            <div
              key={`${billing}-${i}`}
              style={{
                position: "relative",
                borderRadius: 12,
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                background: p.highlight ? t.accent : t.cardBg,
                border: p.highlight
                  ? `2px solid ${t.accent}`
                  : `1px solid ${t.border}`,
                boxShadow: p.highlight ? `0 20px 60px ${t.accent}25` : "none",
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
                  Most Popular
                </div>
              )}

              <div style={{ marginBottom: 28 }}>
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
                    marginBottom: 18,
                    color: p.highlight ? "#555" : t.faint,
                  }}
                >
                  {p.desc}
                </p>
                <div
                  style={{ display: "flex", alignItems: "flex-end", gap: 6 }}
                >
                  <span
                    style={{
                      fontSize: "clamp(2rem,3vw,2.5rem)",
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
                        color: p.highlight ? "#555" : t.faint,
                      }}
                    >
                      {p.period}
                    </span>
                  )}
                </div>
              </div>

              <ul
                style={{
                  flex: 1,
                  marginBottom: 28,
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {p.features.map((f, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 13,
                    }}
                  >
                    <CheckCircle2
                      size={14}
                      style={{
                        color: p.highlight ? "#555" : t.accent,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{ color: p.highlight ? t.accentText : t.body }}
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
                  transition: "background 0.2s",
                  background: p.highlight ? t.heading : t.accent,
                  color: p.highlight ? t.pageBg : t.accentText,
                  border: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
