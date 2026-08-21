// One quiet rule instead of a black bar + green tab — the two-tone mark
// read as a brand lockup for a different, harder-edged system than this one.
function AccentLine({ t }) {
  return (
    <div
      style={{
        width: 36,
        height: 3,
        borderRadius: 2,
        background: t.accent,
        margin: "14px 0 22px",
      }}
    />
  );
}

export default AccentLine;
