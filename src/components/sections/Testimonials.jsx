import { TESTIMONIALS } from "../../data/constants";
import { Star } from "lucide-react";
function Testimonials({ t }) {
  return (
    <section className={`py-28 border-t ${t.sectionAlt} ${t.border}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className={`text-4xl font-bold mb-3 ${t.heading}`}>
            Trusted by <span className="text-orange-500">teams that ship</span>
          </h2>
          <p className={t.muted}>Real results from real clients.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((tv, i) => (
            <div
              key={i}
              className={`border rounded-2xl p-7 ${t.testCard} ${t.shadow}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(tv.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className={`text-sm leading-relaxed mb-5 italic ${t.body}`}>
                "{tv.quote}"
              </p>
              <div>
                <div className={`text-sm font-semibold ${t.heading}`}>
                  {tv.name}
                </div>
                <div className={`text-xs ${t.label}`}>{tv.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
