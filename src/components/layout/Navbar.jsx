import { Menu, X, Blocks } from "lucide-react";
import { NAV_LINKS, FONT_DISPLAY, FONT_TEXT } from "../../data/constants";
import { useEffect, useState } from "react";

function MobileMenu({ open, onClose, t, scrollTo }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!open) {
      setVisible(false);
      return;
    }

    const id = requestAnimationFrame(() => setVisible(true));

    // Prevent scrollbar layout shift when locking body scroll
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      cancelAnimationFrame(id);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  if (!open) return null;

  const go = (id) => {
    scrollTo(id);
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100vh",
        zIndex: 100,
        background: t.pageBg,
        display: "flex",
        flexDirection: "column",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.25s ease",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          height: 88,
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(10,10,10,0.08)",
          flexShrink: 0,
        }}
      >
        <button
          onClick={() => go("hero")}
          style={{ display: "flex", alignItems: "center", gap: 11, background: "none", border: "none", cursor: "pointer" }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              background: t.accent,
              borderRadius: 7,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: FONT_DISPLAY,
              fontWeight: 700,
              fontSize: 16,
              color: "#ffffff",
            }}
          >
            <Blocks size={22} />
          </div>
          <span style={{ fontSize: 20, fontWeight: 700, color: t.heading, fontFamily: FONT_DISPLAY }}>
            Go<span style={{ color: t.accent }}>Beyond</span>
          </span>
        </button>

        <button
          onClick={onClose}
          aria-label="Close menu"
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            border: "none",
            background: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: t.heading,
          }}
        >
          <X size={22} />
        </button>
      </div>

      {/* Nav Links */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 32px", gap: 4 }}>
        {NAV_LINKS.map((l, i) => (
          <button
            key={l.id}
            onClick={() => go(l.id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              padding: "16px 4px",
              fontSize: "clamp(24px, 5vw, 32px)",
              fontWeight: 700,
              color: t.heading,
              fontFamily: FONT_DISPLAY,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transition: `opacity 0.3s ${0.05 + i * 0.04}s, transform 0.3s ${0.05 + i * 0.04}s`,
            }}
          >
            {l.label}
          </button>
        ))}
      </div>

      {/* Footer CTA */}
      <div style={{ padding: "24px 32px 40px", flexShrink: 0 }}>
        <button
          onClick={() => go("contact")}
          style={{
            width: "100%",
            background: t.accent,
            color: "#ffffff",
            border: "none",
            borderRadius: 999,
            padding: "16px 0",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: FONT_TEXT,
          }}
        >
          Get In Touch
        </button>
      </div>
    </div>
  );
}

function Navbar({ t, scrollTo }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }

        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .navbar-container { padding: 0 20px !important; }
        }
      `}</style>

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          width: "100%",
          background: t.pageBg,
          borderBottom: "1px solid rgba(10,10,10,0.08)",
          boxSizing: "border-box",
        }}
      >
        <div
          className="navbar-container"
          style={{
            maxWidth: 1680,
            margin: "0 auto",
            padding: "0 40px",
            height: 88,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          {/* Brand */}
          <button
            onClick={() => scrollTo("hero")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 11,
              background: "none",
              border: "none",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                background: t.accent,
                borderRadius: 7,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: FONT_DISPLAY,
                fontWeight: 700,
                fontSize: 16,
                color: "#ffffff",
              }}
            >
              <Blocks size={22} />
            </div>
            <span
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: t.heading,
                fontFamily: FONT_DISPLAY,
                letterSpacing: "-0.01em",
              }}
            >
              Go<span style={{ color: t.accent }}>Beyond</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div style={{ alignItems: "center", gap: 8 }} className="hidden-mobile">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "9px 14px",
                  fontSize: 15.5,
                  fontWeight: 500,
                  color: t.body,
                  fontFamily: FONT_TEXT,
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = t.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = t.body)}
              >
                {l.label}
              </button>
            ))}

            <button
              onClick={() => scrollTo("contact")}
              style={{
                background: t.accent,
                color: "#ffffff",
                border: "none",
                borderRadius: 999,
                padding: "11px 24px",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: FONT_TEXT,
                marginLeft: 12,
                transition: "background 0.15s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = t.accentDark;
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = t.accent;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Hamburger Control */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="show-mobile"
            style={{
              background: "none",
              border: "none",
              borderRadius: "50%",
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: t.heading,
            }}
          >
            <Menu size={20} />
          </button>
        </div>

        <MobileMenu open={open} onClose={() => setOpen(false)} t={t} scrollTo={scrollTo} />
      </nav>
    </>
  );
}

export default Navbar;
