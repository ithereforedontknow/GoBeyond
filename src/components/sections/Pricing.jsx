import { useState } from "react";
import { Package } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import SectionPill from "../ui/SectionPill";
import { PLANS } from "../../data/constants";
function Pricing({ t, scrollTo }) {
  const [activeTab, setActiveTab] = useState("monthly");
  return (
    <section
      id="pricing"
      className={`py-28 border-t ${t.sectionAlt} ${t.border}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionPill color={t.pillOrange} icon={Package} label="Pricing" />
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${t.heading}`}>
            Simple, <span className="text-orange-500">transparent</span> pricing
          </h2>
          <p className={`mb-8 ${t.muted}`}>No hidden fees. Cancel anytime.</p>
          <div
            className={`inline-flex items-center border rounded-xl p-1 gap-1 shadow-sm ${t.toggleBg}`}
          >
            {["monthly", "annual"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all capitalize ${activeTab === tab ? "bg-orange-500 text-white shadow-sm" : t.muted}`}
              >
                {tab}
                {tab === "annual" && (
                  <span className="ml-1.5 text-xs text-amber-500">-20%</span>
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {PLANS[activeTab].map((p, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 flex flex-col transition-all ${
                p.highlight
                  ? "bg-gradient-to-b from-orange-500 to-orange-600 border-2 border-orange-400 shadow-2xl shadow-orange-300/30"
                  : `border ${t.pricingCard} ${t.shadow}`
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-stone-900 text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6">
                <h3
                  className={`text-lg font-bold mb-1 ${p.highlight ? "text-white" : t.heading}`}
                >
                  {p.name}
                </h3>
                <p
                  className={`text-xs mb-4 ${p.highlight ? "text-orange-200" : t.label}`}
                >
                  {p.desc}
                </p>
                <div className="flex items-end gap-1">
                  <span
                    className={`text-4xl font-bold ${p.highlight ? "text-white" : t.heading}`}
                  >
                    {p.price}
                  </span>
                  {p.price !== "Custom" && (
                    <span
                      className={`text-sm mb-1 ${p.highlight ? "text-orange-200" : t.label}`}
                    >
                      /{activeTab === "monthly" ? "mo" : "mo billed yearly"}
                    </span>
                  )}
                </div>
              </div>
              <ul className="flex-1 space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <CheckCircle2
                      size={15}
                      className={
                        p.highlight
                          ? "text-orange-200 shrink-0"
                          : "text-orange-500 shrink-0"
                      }
                    />
                    <span className={p.highlight ? "text-orange-50" : t.body}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollTo("contact")}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  p.highlight
                    ? "bg-white text-orange-600 hover:bg-orange-50"
                    : "bg-orange-500 hover:bg-orange-400 text-white shadow-md shadow-orange-100/50"
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Pricing;
