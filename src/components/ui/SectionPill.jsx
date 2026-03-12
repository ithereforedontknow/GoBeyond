function SectionPill({ color, icon: Icon, label }) {
  return (
    <div
      className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-5 ${color}`}
    >
      {Icon && <Icon size={12} className="opacity-80" />}
      <span className="text-xs font-semibold tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
}
export default SectionPill;
