function SectionLabel({ t, icon: Icon, children }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 12px",
        border: `1px solid ${t.borderStrong}`,
        borderRadius: 4,
        background: t.tagBg,
      }}
    >
      {Icon && <Icon size={10} style={{ color: t.muted }} />}
      <span
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: t.muted,
          fontFamily: "Inter, sans-serif",
        }}
      >
        {children}
      </span>
    </div>
  );
}

export default SectionLabel;
