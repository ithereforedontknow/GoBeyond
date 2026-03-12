import SectionPill from "../ui/SectionPill";
import { Award } from "lucide-react";
import { SERVICES } from "../../data/constants";

function Services({ t, scrollTo }) {
  const badgeClass = (b) =>
    b === "Most Popular" ? t.badgePop : b === "New" ? t.badgeNew : t.badgeHot;
  return (
    <section id="services" className={`py-28 border-t ${t.border}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionPill
              color={t.pillOrange}
              icon={Award}
              label="Our Services"
            />
            <h2 className={`text-4xl md:text-5xl font-bold ${t.heading}`}>
              End-to-end IT
              <br />
              <span className="text-orange-500">solutions</span>
            </h2>
          </div>
          <p className={`max-w-sm text-sm leading-relaxed ${t.muted}`}>
            From idea to infrastructure — GoBeyond covers every layer of your
            technology stack so your team can focus on what matters.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className={`group relative border rounded-2xl p-7 card-hover cursor-default ${t.serviceCard} ${t.shadow}`}
            >
              {s.badge && (
                <span
                  className={`absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeClass(s.badge)}`}
                >
                  {s.badge}
                </span>
              )}
              <div
                className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${t.featureA}`}
              >
                <s.icon size={20} className="text-orange-500" />
              </div>
              <h3 className={`text-base font-semibold mb-2 ${t.heading}`}>
                {s.name}
              </h3>
              <p className={`text-sm mb-5 leading-relaxed ${t.muted}`}>
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag, j) => (
                  <span
                    key={j}
                    className={`text-xs border rounded-md px-2.5 py-0.5 ${t.tag}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;
