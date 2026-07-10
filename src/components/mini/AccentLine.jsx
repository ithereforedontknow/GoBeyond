// Apple's actual divider is a surface-color change, not a rule — this stays
// only as a quiet bridge from the old layout, kept thin and low-contrast.
function AccentLine({ t }) {
  return (
    <div
      style={{
        width: 24,
        height: 2,
        background: t.accent,
        margin: "10px 0 20px",
        borderRadius: 0,
      }}
    />
  );
}

export default AccentLine;
