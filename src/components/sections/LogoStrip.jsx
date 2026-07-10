import { TECH_LOGOS } from "../../data/constants";

const FONT = "'Inter', system-ui, -apple-system, sans-serif";

function LogoStrip({ t }) {
  const doubled = [...TECH_LOGOS, ...TECH_LOGOS];
  return (
    <div style={{ padding: "36px 0", overflow: "hidden", background: t.altBg }}>
      <p
        style={{
          textAlign: "center",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "-0.224px",
          color: t.faint,
          marginBottom: 22,
          fontFamily: FONT,
        }}
      >
        Battle-tested stack · trusted integrations
      </p>
      <div style={{ display: "flex", gap: 16, width: "max-content", animation: "marquee 32s linear infinite" }}>
        {doubled.map((logo, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "9px 18px",
              borderRadius: 9999,
              border: `1px solid ${t.border}`,
              background: t.cardBg,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: logo.color, flexShrink: 0 }} />
            <span style={{ fontSize: 14, fontWeight: 400, letterSpacing: "-0.224px", color: t.body, fontFamily: FONT }}>
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoStrip;
