import SectionLabel from "./SectionLabel";
import AccentLine from "./AccentLine";

function SectionHeader({ t, label, labelIcon, heading, subtext }) {
  return (
    <div style={{ marginBottom: 64 }}>
      <SectionLabel t={t} icon={labelIcon}>
        {label}
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
        <h2
          style={{
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
            fontSize: "clamp(1.9rem,3.4vw,2.5rem)",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: t.heading,
            maxWidth: 380,
          }}
        >
          {heading}
        </h2>
        {subtext && (
          <p
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
              fontSize: 17,
              lineHeight: 1.47,
              letterSpacing: "-0.374px",
              color: t.muted,
              maxWidth: 360,
              fontWeight: 400,
            }}
          >
            {subtext}
          </p>
        )}
      </div>
    </div>
  );
}
export default SectionHeader;
