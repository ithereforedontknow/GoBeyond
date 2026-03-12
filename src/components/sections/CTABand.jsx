import { Flame } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { ExternalLink } from "lucide-react";

function CTABand({ dark, t, scrollTo }) {
  return (
    <section
      className={`py-28 border-t relative overflow-hidden ${t.border} ${dark ? "bg-stone-900/50 dot-grid-dark" : "bg-gradient-to-br from-orange-50 via-[#fffaf7] to-amber-50 dot-grid-light"}`}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: dark ? "rgba(234,88,12,0.06)" : "rgba(234,88,12,0.09)",
        }}
      />
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div
          className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-7 ${t.pillOrange}`}
        >
          <Flame size={12} className="text-orange-500" />
          <span className="text-xs font-semibold tracking-wide">
            Ready when you are
          </span>
        </div>
        <h2
          className={`text-4xl md:text-6xl font-bold mb-5 leading-tight ${t.heading}`}
        >
          Ready to go <span className="hero-gradient">beyond</span>?
        </h2>
        <p className={`text-lg mb-10 max-w-xl mx-auto ${t.muted}`}>
          Start your free trial today. No credit card required. Cancel anytime.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("pricing")}
            className="group flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-10 py-4 rounded-xl transition-all text-base shadow-xl shadow-orange-200/50"
          >
            Get Started Free{" "}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className={`flex items-center gap-2 px-6 py-4 transition-colors text-sm font-medium hover:text-orange-500 ${t.muted}`}
          >
            Talk to Sales <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
export default CTABand;
