import SectionPill from "../ui/SectionPill";
import { Zap } from "lucide-react";
import { FEATURES } from "../../data/constants";

function Features({ t }) {
  return (
    <section
      id="features"
      className={`py-28 border-t ${t.sectionAlt} ${t.border}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionPill color={t.pillAmber} icon={Zap} label="What We Deliver" />
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${t.heading}`}>
            Everything you need to{" "}
            <span className="text-amber-500">go further</span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${t.muted}`}>
            A complete technology stack — not just tools, but outcomes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className={`border rounded-2xl p-7 card-hover cursor-default ${t[f.cycle]}`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 shadow-sm ${t.iconBg}`}
              >
                <f.icon size={22} className={f.color} />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${t.heading}`}>
                {f.title}
              </h3>
              <p className={`text-sm leading-relaxed ${t.muted}`}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Features;
