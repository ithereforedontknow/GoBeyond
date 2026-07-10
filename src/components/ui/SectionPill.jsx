// Kept for compatibility with any leftover callers — restyled to Apple's
// configurator-option-chip shape (pill, hairline border, no shadow).
function SectionPill({ color, icon: Icon, label }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 border border-black/10 ${color || ""}`}
      style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
    >
      {Icon && <Icon size={12} className="opacity-80" />}
      <span className="text-xs font-semibold tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
}
export default SectionPill;
