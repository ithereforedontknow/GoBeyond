import SectionLabel from "./SectionLabel";
import AccentLine from "./AccentLine";

function SectionHeader({ t, label, labelIcon, heading, subtext }) {
  return (
    <div style={{ marginBottom: 56 }}>
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
            fontSize: "clamp(2rem,3.8vw,2.9rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            color: t.heading,
            fontFamily: "Epilogue, sans-serif",
            maxWidth: 360,
          }}
        >
          {heading}
        </h2>
        {subtext && (
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.75,
              color: t.muted,
              maxWidth: 360,
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
