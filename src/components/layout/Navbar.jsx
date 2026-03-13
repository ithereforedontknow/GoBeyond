import { Blocks, Menu, X, Sun, Moon } from "lucide-react";
import { NAV_LINKS } from "../../data/constants";
import { useState } from "react";
function Navbar({ t, dark, setDark, scrolled, scrollTo }) {
  const [open, setOpen] = useState(false);
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? t.navBg : "transparent",
        borderBottom: scrolled
          ? `1px solid ${t.border}`
          : "1px solid transparent",
        backdropFilter: "blur(12px)",
        transition: "background 0.4s, border-color 0.4s",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              background: t.accent,
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Blocks size={15} style={{ color: t.accentText }} />
          </div>
          <span
            style={{
              fontSize: 17,
              fontWeight: 800,
              color: t.heading,
              fontFamily: "Epilogue, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            Go<span style={{ color: t.accent }}>Beyond</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 2 }} className="hidden-mobile">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase())}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 14px",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 500,
                color: t.muted,
                fontFamily: "Inter, sans-serif",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = t.heading;
                e.currentTarget.style.background = t.tagBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = t.muted;
                e.currentTarget.style.background = "transparent";
              }}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div
          style={{ display: "flex", gap: 10, alignItems: "center" }}
          className="hidden-mobile"
        >
          <button
            onClick={() => setDark(!dark)}
            style={{
              width: 34,
              height: 34,
              borderRadius: 6,
              border: `1px solid ${t.border}`,
              background: t.cardBg,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: t.muted,
              transition: "border-color 0.2s",
            }}
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            onClick={() => scrollTo("pricing")}
            style={{
              background: t.accent,
              color: t.accentText,
              border: "none",
              borderRadius: 6,
              padding: "9px 18px",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = t.accentDark)
            }
            onMouseLeave={(e) => (e.currentTarget.style.background = t.accent)}
          >
            Get Started
          </button>
        </div>

        {/* Mobile */}
        <div
          style={{ display: "flex", gap: 8, alignItems: "center" }}
          className="show-mobile"
        >
          <button
            onClick={() => setDark(!dark)}
            style={{
              width: 32,
              height: 32,
              borderRadius: 6,
              border: `1px solid ${t.border}`,
              background: t.cardBg,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: t.muted,
            }}
          >
            {dark ? <Sun size={13} /> : <Moon size={13} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: t.body,
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          style={{
            background: t.pageBg,
            borderTop: `1px solid ${t.border}`,
            padding: "16px 24px 20px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => {
                  scrollTo(l.toLowerCase());
                  setOpen(false);
                }}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  padding: "10px 12px",
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 500,
                  color: t.body,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {l}
              </button>
            ))}
            <button
              onClick={() => {
                scrollTo("pricing");
                setOpen(false);
              }}
              style={{
                background: t.accent,
                color: t.accentText,
                border: "none",
                borderRadius: 6,
                padding: "11px 0",
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                marginTop: 10,
                fontFamily: "Inter, sans-serif",
              }}
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
