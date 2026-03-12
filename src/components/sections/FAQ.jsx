import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../../data/constants";

function FAQ({ t }) {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <section id="faq" className={`py-28 border-t ${t.sectionAlt} ${t.border}`}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className={`text-4xl font-bold mb-3 ${t.heading}`}>
            Got <span className="text-orange-500">questions?</span>
          </h2>
          <p className={t.muted}>We've got answers. Seriously.</p>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all ${openFaq === i ? t.faqOpen : t.faqClosed} ${t.shadow}`}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className={`text-sm font-semibold pr-4 ${t.heading}`}>
                  {f.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 transition-transform ${openFaq === i ? "rotate-180 text-orange-500" : t.label}`}
                />
              </button>
              {openFaq === i && (
                <div
                  className={`px-6 pb-5 text-sm leading-relaxed border-t pt-4 ${t.body} ${t.faqDivider}`}
                >
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default FAQ;
