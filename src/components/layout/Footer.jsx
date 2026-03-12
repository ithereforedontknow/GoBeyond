import { Flame } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { FOOTER_COLS } from "../../data/constants";
import ThemeToggle from "../ui/ThemeToggle";

function Footer({ dark, setDark, t }) {
  return (
    <footer className={`border-t py-16 ${t.border} ${t.footerBg}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center shadow-md">
                <Flame size={13} className="text-white" />
              </div>
              <span className={`font-bold ${t.heading}`}>
                Go<span className="text-orange-500">Beyond</span>
              </span>
            </div>
            <p className={`text-xs leading-relaxed ${t.footerText}`}>
              IT solutions built for humans. SaaS, cloud, security, and AI — for
              startups and enterprises alike.
            </p>
          </div>
          {FOOTER_COLS.map((col, i) => (
            <div key={i}>
              <h4
                className={`text-xs font-bold uppercase tracking-widest mb-4 ${t.footerHeading}`}
              >
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className={`text-xs transition-colors ${t.footerLink}`}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className={`border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 ${t.border}`}
        >
          <span className={`text-xs ${t.footerText}`}>
            © 2025 GoBeyond IT Solutions. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 pulse-ring" />
              <span className={`text-xs ${t.footerText}`}>
                All systems operational
              </span>
            </div>
            <ThemeToggle dark={dark} setDark={setDark} size="sm" t={t} />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
