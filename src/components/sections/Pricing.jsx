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

  const billingMeta = {
    monthly: {
      label: "monthly",
      bg: `${t.accent}18`,
      color: t.accent,
      border: `${t.accent}40`,
    },
    "one-time": {
      label: "one-time",
      bg: "#60a5fa18",
      color: "#60a5fa",
      border: "#60a5fa40",
    },
    annual: {
      label: "annual",
      bg: "#a78bfa18",
      color: "#a78bfa",
      border: "#a78bfa40",
    },
    "per template": {
      label: "per template",
      bg: t.tagBg,
      color: t.muted,
      border: t.border,
    },
    "per plan": {
      label: "per plan",
      bg: t.tagBg,
      color: t.muted,
      border: t.border,
    },
  };

  const Pill = ({ billing }) => {
    const m = billingMeta[billing] || billingMeta["per template"];
    return (
      <span
        style={{
          display: "inline-block",
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding: "3px 8px",
          borderRadius: 20,
          whiteSpace: "nowrap",
          background: m.bg,
          color: m.color,
          border: `1px solid ${m.border}`,
          fontFamily: "Inter, sans-serif",
        }}
      >
        {m.label}
      </span>
    );
  };

  // Flat row — desktop table, mobile card
  const FlatRow = ({ item, last }) => (
    <>
      {/* Desktop row */}
      <div
        className="pricing-row-desktop"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 140px 140px",
          padding: "15px 28px",
          alignItems: "center",
          borderBottom: last ? "none" : `1px solid ${t.border}`,
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = t.tagBg)}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
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
        <Pill billing={item.billing} />
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

      {/* Mobile card */}
      <div
        className="pricing-row-mobile"
        style={{
          display: "none",
          padding: "16px 20px",
          borderBottom: last ? "none" : `1px solid ${t.border}`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 6,
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: t.heading,
              fontFamily: "Inter, sans-serif",
              flex: 1,
              paddingRight: 12,
            }}
          >
            {item.name}
          </span>
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              color: t.heading,
              fontFamily: "Epilogue, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            {fmt(item.price)}
          </span>
        </div>
        <Pill billing={item.billing} />
      </div>
    </>
  );

  // Tiered row — desktop table, mobile card
  const TierRow = ({ tier, last }) => (
    <>
      {/* Desktop */}
      <div
        className="pricing-row-desktop"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 120px 140px",
          padding: "14px 28px",
          alignItems: "center",
          borderBottom: last ? "none" : `1px solid ${t.border}`,
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = t.tagBg)}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
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
        <Pill billing={tier.billing} />
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

      {/* Mobile card */}
      <div
        className="pricing-row-mobile"
        style={{
          display: "none",
          padding: "16px 20px",
          borderBottom: last ? "none" : `1px solid ${t.border}`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 4,
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: t.heading,
              fontFamily: "Inter, sans-serif",
              flex: 1,
              paddingRight: 12,
            }}
          >
            {tier.name}
          </span>
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              color: t.heading,
              fontFamily: "Epilogue, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            {fmt(tier.price)}
          </span>
        </div>
        <p
          style={{
            fontSize: 12,
            color: t.muted,
            marginBottom: 6,
            fontFamily: "Inter, sans-serif",
          }}
        >
          {tier.sub}
        </p>
        <Pill billing={tier.billing} />
      </div>
    </>
  );

  return (
    <section
      id="pricing"
      style={{
        borderTop: `1px solid ${t.border}`,
        padding: "80px 0",
        background: t.altBg,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }}>
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
          subtext="Every price listed here is final — no hidden fees. Pick a category to explore."
        />

        {/* Category tabs */}
        <div
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

        {/* Panel */}
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
              padding: "24px 28px",
              borderBottom: `1px solid ${t.border}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
              flexWrap: "wrap",
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
            <div style={{ flex: 1, minWidth: 200 }}>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: t.heading,
                  fontFamily: "Epilogue, sans-serif",
                  marginBottom: 2,
                }}
              >
                {cat.label}
              </h3>
              <p style={{ fontSize: 13, color: t.muted }}>{cat.description}</p>
            </div>
          </div>

          {/* Flat items (digital, websites, building) */}
          {cat.items && (
            <div>
              {/* Desktop legend */}
              <div
                className="pricing-row-desktop"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 140px 140px",
                  padding: "10px 28px",
                  borderBottom: `1px solid ${t.border}`,
                  background: t.tagBg,
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
                <FlatRow
                  key={i}
                  item={item}
                  last={i === cat.items.length - 1}
                />
              ))}
            </div>
          )}

          {/* Grouped tiers (systems, apps) */}
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
                {/* Group label */}
                <div
                  style={{
                    padding: "13px 28px",
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
                {/* Desktop legend */}
                <div
                  className="pricing-row-desktop"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 120px 140px",
                    padding: "8px 28px",
                    borderBottom: `1px solid ${t.border}`,
                  }}
                >
                  {["Tier", "Best for", "Billing", "Price"].map((h, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        color: t.faint,
                        fontFamily: "Inter, sans-serif",
                        textAlign: i === 3 ? "right" : "left",
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
                {group.tiers.map((tier, ti) => (
                  <TierRow
                    key={ti}
                    tier={tier}
                    last={ti === group.tiers.length - 1}
                  />
                ))}
              </div>
            ))}

          {/* Panel footer */}
          <div
            style={{
              padding: "18px 28px",
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
              All prices in Philippine Peso (₱). Scope may affect final pricing.
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
                whiteSpace: "nowrap",
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
          style={{
            display: "flex",
            gap: 16,
            marginTop: 20,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: t.faint,
              fontFamily: "Inter, sans-serif",
            }}
          >
            Key:
          </span>
          {Object.entries(billingMeta).map(([key, m]) => (
            <div
              key={key}
              style={{ display: "flex", alignItems: "center", gap: 6 }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "3px 8px",
                  borderRadius: 20,
                  background: m.bg,
                  color: m.color,
                  border: `1px solid ${m.border}`,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {key}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
