import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../data/constants";
import { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";

const FONT = "'Inter', system-ui, -apple-system, sans-serif";

// A floating glass panel with Airbnb's actual button-primary radius (8px —
// {rounded.sm}), not the search-bar's full pill. Liquid-glass blur so page
// content shows through behind it. Apple's own global-nav is a flat
// true-black bar; this floating treatment is a deliberate departure the
// person asked for.
function Navbar({ t, dark, setDark, scrollTo }) {
  const [open, setOpen] = useState(false);
  const glassBg = dark ? "rgba(30,30,32,0.55)" : "rgba(255,255,255,0.6)";
  const glassBorder = dark ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.5)";
  const textColor = t.heading;

  return (
    <div
      style={{
        position: "fixed",
        top: 16,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        padding: "0 16px",
        pointerEvents: "none",
      }}
    >
      <nav
        style={{
          width: "100%",
          maxWidth: 1160,
          background: glassBg,
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: `1px solid ${glassBorder}`,
          borderRadius: 8,
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0 0 0 1px, rgba(0, 0, 0, 0.04) 0 2px 6px 0, rgba(0, 0, 0, 0.1) 0 4px 8px 0",
          pointerEvents: "auto",
        }}
      >
        <div
          style={{
            padding: "0 10px 0 18px",
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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
                width: 26,
                height: 26,
                background: t.accent,
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: FONT,
                fontWeight: 700,
                fontSize: 13,
                color: "#ffffff",
              }}
            >
              G
            </div>
            <span
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: textColor,
                fontFamily: FONT,
                letterSpacing: "-0.374px",
              }}
            >
              Go<span style={{ color: t.accent }}>Beyond</span>
            </span>
          </button>

          <div style={{ display: "flex", gap: 2 }} className="hidden-mobile">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 14px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "-0.224px",
                  color: t.muted,
                  fontFamily: FONT,
                  transition: "color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = textColor;
                  e.currentTarget.style.background = t.tagBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = t.muted;
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {l.label}
              </button>
            ))}
          </div>

          <div
            style={{ display: "flex", gap: 8, alignItems: "center" }}
            className="hidden-mobile"
          >
            <ThemeToggle dark={dark} setDark={setDark} size="sm" t={t} />
            <button
              onClick={() => scrollTo("contact")}
              style={{
                background: t.accent,
                color: t.accentText,
                border: "none",
                borderRadius: 8,
                padding: "10px 20px",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "-0.224px",
                cursor: "pointer",
                fontFamily: FONT,
                transition: "background 0.2s, transform 0.1s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = t.accentDark)}
              onMouseLeave={(e) => (e.currentTarget.style.background = t.accent)}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Get In Touch
            </button>
          </div>

          <div
            style={{ display: "flex", gap: 6, alignItems: "center" }}
            className="show-mobile"
          >
            <ThemeToggle dark={dark} setDark={setDark} size="sm" t={t} />
            <button
              onClick={() => setOpen(!open)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: textColor,
                display: "flex",
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div
            style={{
              borderTop: `1px solid ${glassBorder}`,
              padding: "12px 16px 16px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => {
                    scrollTo(l.id);
                    setOpen(false);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: "12px 14px",
                    borderRadius: 8,
                    fontSize: 15,
                    fontWeight: 500,
                    color: textColor,
                    fontFamily: FONT,
                  }}
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => {
                  scrollTo("contact");
                  setOpen(false);
                }}
                style={{
                  background: t.accent,
                  color: t.accentText,
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 0",
                  fontSize: 15,
                  fontWeight: 500,
                  cursor: "pointer",
                  marginTop: 8,
                  fontFamily: FONT,
                }}
              >
                Get In Touch
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
export default Navbar;
