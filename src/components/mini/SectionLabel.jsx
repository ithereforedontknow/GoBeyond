import { FONT_MONO } from "../../data/constants";

// Same eyebrow language as the hero: a small accent dot, an optional icon,
// uppercase mono text. No border, no chip background — just a quiet label.
function SectionLabel({ t, icon: Icon, children }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: FONT_MONO,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.11em",
        textTransform: "uppercase",
        color: "#4a4a4a",
      }}
    >
      {/* <span style={{ width: 6, height: 6, borderRadius: "50%", background: t.accent, flexShrink: 0 }} />*/}
      {Icon && <Icon size={13} style={{ color: t.accent }} />}
      {children}
    </div>
  );
}

export default SectionLabel;
