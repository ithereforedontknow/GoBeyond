import { MARQUEE_ITEMS } from "../../data/constants";

const FONT = "'Inter', system-ui, -apple-system, sans-serif";

function MarqueeStrip({ t }) {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div style={{ padding: "32px 0", overflow: "hidden", background: t.altBg }}>
      <p
        style={{
          textAlign: "center",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "-0.224px",
          color: t.faint,
          marginBottom: 20,
          fontFamily: FONT,
        }}
      >
        What we work with
      </p>
      <div style={{ display: "flex", gap: 14, width: "max-content", animation: "marquee 35s linear infinite" }}>
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "8px 16px",
              borderRadius: 9999,
              border: `1px solid ${t.border}`,
              background: t.cardBg,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
            <span style={{ fontSize: 14, fontWeight: 400, letterSpacing: "-0.224px", color: t.body, fontFamily: FONT }}>
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MarqueeStrip;
