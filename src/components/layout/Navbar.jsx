import { Blocks, Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import { NAV_LINKS } from "../../data/constants";

function Navbar({ dark, setDark, menuOpen, setMenuOpen, scrollTo, t }) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${t.navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center shadow-md">
            <Blocks size={16} className="text-white" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${t.heading}`}>
            Go<span className="text-orange-500">Beyond</span>
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase())}
              className={`text-sm font-medium transition-colors hover:text-orange-500 ${t.muted}`}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle dark={dark} setDark={setDark} t={t} />
          <button
            onClick={() => scrollTo("pricing")}
            className="text-sm font-semibold bg-orange-500 hover:bg-orange-400 text-white px-5 py-2.5 rounded-xl transition-all shadow-md shadow-orange-200/40"
          >
            Get Started
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle dark={dark} setDark={setDark} size="sm" t={t} />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${t.muted} hover:text-orange-500`}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`md:hidden border-t px-6 py-6 shadow-lg ${t.mobileMenu}`}
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l.toLowerCase())}
                className={`text-left py-1 font-medium transition-colors hover:text-orange-500 ${t.body}`}
              >
                {l}
              </button>
            ))}
            <button
              onClick={() => {
                scrollTo("pricing");
                setMenuOpen(false);
              }}
              className="mt-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3 rounded-xl shadow-md"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
