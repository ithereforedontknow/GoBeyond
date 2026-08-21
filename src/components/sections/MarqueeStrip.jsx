import { MARQUEE_ITEMS } from "../../data/constants";
import { FONT_MONO, FONT_TEXT, HAIRLINE } from "../../data/constants";

function MarqueeStrip({ t }) {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div style={{ padding: "40px 0", overflow: "hidden", background: t.altBg, borderTop: `1px solid ${HAIRLINE}`, borderBottom: `1px solid ${HAIRLINE}` }}>
      <p
        style={{
          textAlign: "center",
          fontSize: 11.5,
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: t.faint,
          marginBottom: 24,
          fontFamily: FONT_MONO,
        }}
      >
        What we work with
      </p>
      <div style={{ display: "flex", gap: 12, width: "max-content", animation: "marquee 35s linear infinite" }}>
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "10px 18px",
              borderRadius: 999,
              border: `1px solid ${HAIRLINE}`,
              background: t.cardBg,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
            <span style={{ fontSize: 14, fontWeight: 500, color: t.body, fontFamily: FONT_TEXT }}>
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MarqueeStrip;
