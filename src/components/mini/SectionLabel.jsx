// Apple's captions read as plain colored text, never a bordered chip —
// "don't add shadows/borders to non-utility elements" (design doc: Do's/Don'ts).
function SectionLabel({ t, icon: Icon, children }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
      {Icon && <Icon size={12} style={{ color: t.accent }} />}
      <span
        style={{
          fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: "-0.224px",
          color: t.accent,
        }}
      >
        {children}
      </span>
    </div>
  );
}

export default SectionLabel;
