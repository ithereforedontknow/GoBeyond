import { useState } from "react";
import { Package, ArrowRight } from "lucide-react";
import { PRICING_CATEGORIES } from "../../data/constants";
import useInView from "../../hooks/useInView";
import SectionHeader from "../mini/SectionHeader";
import { FONT_DISPLAY, FONT_TEXT, FONT_MONO, HAIRLINE, ACC_DIM, SOFT_SHADOW } from "../../data/constants";

function Pricing({ t, scrollTo }) {
  const [active, setActive] = useState("digital");
  const [ref, inView] = useInView();
  const cat = PRICING_CATEGORIES.find((c) => c.id === active);

  const billingMeta = {
    monthly: { label: "monthly", bg: ACC_DIM, color: t.accent },
    "one-time": { label: "one-time", bg: "#eef4fe", color: "#2563eb" },
    annual: { label: "annual", bg: "#f6eefe", color: "#7c3aed" },
    "per template": { label: "per template", bg: t.altBg, color: t.muted },
    "per plan": { label: "per plan", bg: t.altBg, color: t.muted },
  };

  const Pill = ({ billing }) => {
    const m = billingMeta[billing] || billingMeta["per template"];
    return (
      <span
        style={{
          display: "inline-block",
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "3px 10px",
          borderRadius: 999,
          whiteSpace: "nowrap",
          background: m.bg,
          color: m.color,
          fontFamily: FONT_MONO,
        }}
      >
        {m.label}
      </span>
    );
  };

  const FlatRow = ({ item, last }) => (
    <>
      <div
        className="pricing-row-desktop"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 140px 140px",
          padding: "17px 28px",
          alignItems: "center",
          borderBottom: last ? "none" : `1px solid ${HAIRLINE}`,
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = t.altBg)}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <span style={{ fontSize: 15, fontWeight: 500, color: t.heading, fontFamily: FONT_TEXT }}>{item.name}</span>
        <Pill billing={item.billing} />
      </div>

      <div className="pricing-row-mobile" style={{ display: "none", padding: "16px 20px", borderBottom: last ? "none" : `1px solid ${HAIRLINE}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
          <span style={{ fontSize: 15, fontWeight: 500, color: t.heading, fontFamily: FONT_TEXT, flex: 1, paddingRight: 12 }}>{item.name}</span>
        </div>
        <Pill billing={item.billing} />
      </div>
    </>
  );

  return (
    <section id="pricing" style={{ padding: "88px 0", background: t.altBg }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 32px" }}>
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

        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            marginBottom: 40,
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
                gap: 8,
                padding: "11px 20px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: FONT_TEXT,
                border: active === c.id ? "none" : `1px solid ${HAIRLINE}`,
                background: active === c.id ? t.accent : t.cardBg,
                color: active === c.id ? "#fff" : t.body,
                transition: "all 0.15s",
              }}
            >
              <c.icon size={14} />
              {c.label}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          style={{
            border: `1px solid ${HAIRLINE}`,
            borderRadius: 20,
            background: t.cardBg,
            overflow: "hidden",
            boxShadow: SOFT_SHADOW,
          }}
        >
          <div style={{ padding: "28px 28px", borderBottom: `1px solid ${HAIRLINE}`, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: ACC_DIM,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <cat.icon size={20} style={{ color: t.accent }} />
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: t.heading, fontFamily: FONT_DISPLAY, marginBottom: 2 }}>{cat.label}</h3>
              <p style={{ fontSize: 13, color: t.muted, fontFamily: FONT_TEXT }}>{cat.description}</p>
            </div>
          </div>

          {cat.items && (
            <div>
              <div
                className="pricing-row-desktop"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 140px 140px",
                  padding: "11px 28px",
                  borderBottom: `1px solid ${HAIRLINE}`,
                  background: t.altBg,
                }}
              >
                <span style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: t.faint, fontFamily: FONT_MONO }}>Item</span>
                <span style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: t.faint, fontFamily: FONT_MONO }}>Billing</span>
              </div>
              {cat.items.map((item, i) => (
                <FlatRow key={i} item={item} last={i === cat.items.length - 1} />
              ))}
            </div>
          )}

          <div style={{ padding: "22px 28px", borderTop: `1px solid ${HAIRLINE}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontSize: 12, color: t.faint, fontFamily: FONT_TEXT }}>
              All prices in Philippine Peso (₱). Scope may affect final pricing.
            </p>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: t.accent,
                color: "#fff",
                border: "none",
                borderRadius: 999,
                padding: "11px 22px",
                fontSize: 13.5,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: FONT_TEXT,
                transition: "background 0.15s, transform 0.15s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = t.accentDark; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = t.accent; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Get a quote <ArrowRight size={13} />
            </button>
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 24, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: t.faint, fontFamily: FONT_MONO }}>
            Key:
          </span>
          {Object.entries(billingMeta).map(([key, m]) => (
            <span
              key={key}
              style={{
                display: "inline-block",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "3px 10px",
                borderRadius: 999,
                background: m.bg,
                color: m.color,
                fontFamily: FONT_MONO,
              }}
            >
              {key}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
