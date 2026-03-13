import { TECH_LOGOS } from "../../data/constants";

function LogoStrip({ t, dark }) {
  const doubled = [...TECH_LOGOS, ...TECH_LOGOS];
  return (
    <div
      style={{
        borderTop: `1px solid ${t.border}`,
        borderBottom: `1px solid ${t.border}`,
        padding: "36px 0",
        overflow: "hidden",
        background: t.altBg,
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          fontWeight: 700,
          color: t.faint,
          marginBottom: 22,
          fontFamily: "Inter, sans-serif",
        }}
      >
        Battle-tested stack · trusted integrations
      </p>
      <div
        style={{
          display: "flex",
          gap: 16,
          width: "max-content",
          animation: "marquee 32s linear infinite",
        }}
      >
        {doubled.map((logo, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "9px 18px",
              borderRadius: 8,
              border: `1px solid ${t.border}`,
              background: t.cardBg,
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: logo.color,
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
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoStrip;
