import { Sun, Moon } from "lucide-react";

function ThemeToggle({ dark, setDark, size = "md", t }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
      className={`${size === "sm" ? "w-8 h-8" : "w-9 h-9"} rounded-xl border flex items-center justify-center transition-all ${t.toggleBg}`}
    >
      {dark ? (
        <Sun size={size === "sm" ? 13 : 15} className="text-amber-400" />
      ) : (
        <Moon size={size === "sm" ? 13 : 15} className="text-stone-500" />
      )}
    </button>
  );
}
export default ThemeToggle;
