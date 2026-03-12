import SectionPill from "../ui/SectionPill";
import { Zap } from "lucide-react";
import { HOW_IT_WORKS } from "../../data/constants";
function HowItWorks({ t }) {
  return (
    <section className={`py-28 border-t ${t.border}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionPill color={t.pillOrange} icon={Zap} label="How It Works" />
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${t.heading}`}>
            From idea to <span className="text-orange-500">production</span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${t.muted}`}>
            Three clear phases. No black-box process, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div
            className="hidden md:block absolute top-14 left-1/3 right-1/3 h-px border-t-2 border-dashed z-0 pointer-events-none"
            style={{ borderColor: "rgba(234,88,12,0.2)" }}
          />
          {HOW_IT_WORKS.map((step, i) => (
            <div
              key={i}
              className={`relative z-10 border rounded-2xl p-8 card-hover ${t.stepCard} ${t.shadow}`}
            >
              <div
                className={`inline-flex items-center border rounded-full px-3 py-1 mb-5 text-xs font-bold ${t.stepNum}`}
              >
                {step.step}
              </div>
              <div
                className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-5 ${t.featureA}`}
              >
                <step.icon size={22} className="text-orange-500" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${t.heading}`}>
                {step.title}
              </h3>
              <p className={`text-sm leading-relaxed ${t.muted}`}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default HowItWorks;
