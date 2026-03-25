import { useState } from "react";
import { Package, ArrowRight } from "lucide-react";
import { PRICING_CATEGORIES } from "../../data/constants";
import useInView from "../../hooks/useInView";
import SectionHeader from "../mini/SectionHeader";

function Pricing({ t, scrollTo }) {
  const [active, setActive] = useState("digital");
  const [ref, inView] = useInView();
  const cat = PRICING_CATEGORIES.find((c) => c.id === active);

  const fmt = (n) => "₱" + n.toLocaleString("en-PH");

  const billingColor = (billing) => {
    if (billing === "monthly")
      return { bg: `${t.accent}18`, color: t.accent, border: `${t.accent}40` };
    if (billing === "one-time")
      return { bg: "#60a5fa18", color: "#60a5fa", border: "#60a5fa40" };
    if (billing === "annual")
      return { bg: "#a78bfa18", color: "#a78bfa", border: "#a78bfa40" };
    return { bg: t.tagBg, color: t.muted, border: t.border };
  };

  const pillStyle = (billing) => {
    const c = billingColor(billing);
    return {
      display: "inline-block",
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      padding: "3px 8px",
      borderRadius: 20,
      background: c.bg,
      color: c.color,
      border: `1px solid ${c.border}`,
      fontFamily: "Inter, sans-serif",
      whiteSpace: "nowrap",
    };
  };

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
        <SectionHeader
          t={t}
          label="Pricing"
          labelIcon={Package}
          heading={
            <>
              Transparent pricing
              <br />
              for every need.
            </>
          }
          subtext="Every price listed here is final — no hidden fees. Choose a category to explore what fits your project."
        />

        {/* Category tabs */}
        <div
          ref={ref}
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 40,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s, transform 0.6s",
          }}
        >
          {PRICING_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "9px 18px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                border:
                  active === c.id
                    ? `1.5px solid ${t.accent}`
                    : `1px solid ${t.border}`,
                background: active === c.id ? `${t.accent}14` : t.cardBg,
                color: active === c.id ? t.accent : t.muted,
                transition: "all 0.2s",
              }}
            >
              <c.icon size={13} />
              {c.label}
            </button>
          ))}
        </div>

        {/* Active category panel */}
        <div
          style={{
            border: `1px solid ${t.border}`,
            borderRadius: 14,
            background: t.cardBg,
            overflow: "hidden",
          }}
        >
          {/* Panel header */}
          <div
            style={{
              padding: "28px 32px",
              borderBottom: `1px solid ${t.border}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
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
                flexShrink: 0,
              }}
            >
              <cat.icon size={19} style={{ color: t.accent }} />
            </div>
            <div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 800,
                  color: t.heading,
                  fontFamily: "Epilogue, sans-serif",
                  marginBottom: 3,
                }}
              >
                {cat.label}
              </h3>
              <p style={{ fontSize: 13, color: t.muted }}>{cat.description}</p>
            </div>
          </div>

          {/* Items — flat list (digital, websites, building) */}
          {cat.items && (
            <div>
              {/* Legend */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 140px 140px",
                  padding: "10px 32px",
                  borderBottom: `1px solid ${t.border}`,
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: t.faint,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Item
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: t.faint,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Billing
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: t.faint,
                    fontFamily: "Inter, sans-serif",
                    textAlign: "right",
                  }}
                >
                  Price
                </span>
              </div>
              {cat.items.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 140px 140px",
                    padding: "16px 32px",
                    alignItems: "center",
                    borderBottom:
                      i < cat.items.length - 1
                        ? `1px solid ${t.border}`
                        : "none",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = t.tagBg)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: t.heading,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {item.name}
                  </span>
                  <span style={pillStyle(item.billing)}>{item.billing}</span>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 800,
                      color: t.heading,
                      fontFamily: "Epilogue, sans-serif",
                      textAlign: "right",
                    }}
                  >
                    {fmt(item.price)}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Groups — tiered (systems, apps) */}
          {cat.groups &&
            cat.groups.map((group, gi) => (
              <div
                key={gi}
                style={{
                  borderBottom:
                    gi < cat.groups.length - 1
                      ? `1px solid ${t.border}`
                      : "none",
                }}
              >
                {/* Group header */}
                <div
                  style={{
                    padding: "16px 32px 10px",
                    background: t.tagBg,
                    borderBottom: `1px solid ${t.border}`,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: t.muted,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {group.name}
                  </span>
                </div>
                {/* Legend */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 180px 140px 140px",
                    padding: "8px 32px",
                    borderBottom: `1px solid ${t.border}`,
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: t.faint,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Tier
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: t.faint,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Best for
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: t.faint,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Billing
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: t.faint,
                      fontFamily: "Inter, sans-serif",
                      textAlign: "right",
                    }}
                  >
                    Price
                  </span>
                </div>
                {group.tiers.map((tier, ti) => (
                  <div
                    key={ti}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 180px 140px 140px",
                      padding: "15px 32px",
                      alignItems: "center",
                      borderBottom:
                        ti < group.tiers.length - 1
                          ? `1px solid ${t.border}`
                          : "none",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = t.tagBg)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: t.heading,
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {tier.name}
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        color: t.muted,
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {tier.sub}
                    </span>
                    <span style={pillStyle(tier.billing)}>{tier.billing}</span>
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 800,
                        color: t.heading,
                        fontFamily: "Epilogue, sans-serif",
                        textAlign: "right",
                      }}
                    >
                      {fmt(tier.price)}
                    </span>
                  </div>
                ))}
              </div>
            ))}

          {/* Footer */}
          <div
            style={{
              padding: "20px 32px",
              borderTop: `1px solid ${t.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <p
              style={{
                fontSize: 12,
                color: t.faint,
                fontFamily: "Inter, sans-serif",
              }}
            >
              All prices in Philippine Peso (₱). Scope may affect final pricing
              — contact us to confirm.
            </p>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: t.accent,
                color: t.accentText,
                border: "none",
                borderRadius: 7,
                padding: "10px 20px",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = t.accentDark)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = t.accent)
              }
            >
              Get a quote <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Billing legend */}
        <div
          style={{ display: "flex", gap: 20, marginTop: 20, flexWrap: "wrap" }}
        >
          {[
            ["monthly", "Recurring monthly"],
            ["one-time", "One-time payment"],
            ["annual", "Billed annually"],
            ["per template", "Per item"],
            ["per plan", "Per plan"],
          ].map(([key, label]) => {
            const c = billingColor(key);
            return (
              <div
                key={key}
                style={{ display: "flex", alignItems: "center", gap: 6 }}
              >
                <span style={{ ...pillStyle(key) }}>{key}</span>
                <span
                  style={{
                    fontSize: 11,
                    color: t.faint,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
