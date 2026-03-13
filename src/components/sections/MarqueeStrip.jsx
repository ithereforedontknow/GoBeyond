import { MARQUEE_ITEMS } from "../../data/constants";
function MarqueeStrip({ t }) {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      style={{
        borderTop: `1px solid ${t.border}`,
        borderBottom: `1px solid ${t.border}`,
        padding: "32px 0",
        overflow: "hidden",
        background: t.altBg,
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          fontWeight: 700,
          color: t.faint,
          marginBottom: 20,
          fontFamily: "Inter, sans-serif",
        }}
      >
        What we work with
      </p>
      <div
        style={{
          display: "flex",
          gap: 14,
          width: "max-content",
          animation: "marquee 35s linear infinite",
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "8px 16px",
              borderRadius: 8,
              border: `1px solid ${t.border}`,
              background: t.cardBg,
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: item.color,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: t.body,
                fontFamily: "Inter, sans-serif",
              }}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MarqueeStrip;
