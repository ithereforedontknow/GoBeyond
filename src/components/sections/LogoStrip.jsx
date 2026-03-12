import { TECH_LOGOS } from "../../data/constants";

function LogoStrip({ dark, t }) {
  const doubled = [...TECH_LOGOS, ...TECH_LOGOS];
  return (
    <div
      className={`py-10 border-y overflow-hidden ${dark ? "border-stone-800 bg-stone-900/40" : "border-stone-200/60 bg-[#faf6f2]"}`}
    >
      <p
        className={`text-center text-xs uppercase tracking-widest font-semibold mb-6 ${t.label}`}
      >
        Battle-tested stack · trusted integrations
      </p>
      <div className="relative">
        <div
          className="flex gap-6 marquee-track"
          style={{ width: "max-content" }}
        >
          {doubled.map((logo, i) => (
            <div
              key={i}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl border select-none ${dark ? "bg-stone-900 border-stone-800" : "bg-white border-stone-100 shadow-sm"}`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: logo.color }}
              />
              <span
                className={`text-sm font-semibold whitespace-nowrap ${dark ? "text-stone-300" : "text-stone-600"}`}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default LogoStrip;
