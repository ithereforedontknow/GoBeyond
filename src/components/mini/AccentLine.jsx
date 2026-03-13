function AccentLine({ t }) {
  return (
    <div
      style={{
        width: 32,
        height: 3,
        background: t.accent,
        margin: "20px 0",
        borderRadius: 2,
      }}
    />
  );
}
export default AccentLine;
