import { Sun, Moon } from "lucide-react";

// Apple's button-icon-circular: 44x44 (36 for the "sm" nav variant),
// translucent chip background, no border, active state scales to 0.95.
function ThemeToggle({ dark, setDark, size = "md", t }) {
  const dim = size === "sm" ? 32 : 40;
  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
      style={{
        width: dim,
        height: dim,
        borderRadius: 9999,
        border: "none",
        background: t ? t.tagBg : "rgba(210,210,215,0.64)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "transform 0.15s",
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {dark ? (
        <Sun size={size === "sm" ? 14 : 16} style={{ color: t ? t.heading : "#1d1d1f" }} />
      ) : (
        <Moon size={size === "sm" ? 14 : 16} style={{ color: t ? t.heading : "#1d1d1f" }} />
      )}
    </button>
  );
}
export default ThemeToggle;
