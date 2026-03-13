function AccentLine({ t }) {
  return (
    <div
      style={{
        width: 32,
        height: 3,
        background: t.accent,
        margin: "18px 0 22px",
        borderRadius: 2,
      }}
    />
  );
}

export default AccentLine;
