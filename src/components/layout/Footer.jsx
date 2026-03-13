import { Blocks, Sun, Moon } from "lucide-react";
import { FOOTER_COLS } from "../../data/constants";

function Footer({ t, dark, setDark, scrollTo }) {
  return (
    <footer
      style={{
        borderTop: `1px solid ${t.border}`,
        padding: "60px 0",
        background: t.altBg,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 52,
          }}
          className="footer-grid"
        >
          <div>
            <button
              onClick={() => scrollTo("hero")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "none",
                border: "none",
                cursor: "pointer",
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  background: t.accent,
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Blocks size={13} style={{ color: t.accentText }} />
              </div>
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  color: t.heading,
                  fontFamily: "Epilogue, sans-serif",
                }}
              >
                Go<span style={{ color: t.accent }}>Beyond</span>
              </span>
            </button>
            <p
              style={{
                fontSize: 11,
                lineHeight: 1.7,
                color: t.faint,
                marginBottom: 6,
              }}
            >
              Go Further. Go Smarter. Go Beyond.
            </p>
            <p style={{ fontSize: 11, lineHeight: 1.7, color: t.faint }}>
              Innovation · Digital · Systems · Plans
            </p>
          </div>
          {FOOTER_COLS.map((col, i) => (
            <div key={i}>
              <h4
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: t.muted,
                  marginBottom: 16,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {col.title}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 11,
                }}
              >
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      style={{
                        fontSize: 13,
                        color: t.faint,
                        textDecoration: "none",
                        fontFamily: "Inter, sans-serif",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = t.accent)}
                      onMouseLeave={(e) => (e.target.style.color = t.faint)}
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
          style={{
            borderTop: `1px solid ${t.border}`,
            paddingTop: 26,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 14,
          }}
        >
          <span style={{ fontSize: 12, color: t.faint }}>
            © 2025 GoBeyond · IT Solutions. All rights reserved.
          </span>
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
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = t.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = t.border)}
          >
            {dark ? <Sun size={13} /> : <Moon size={13} />}
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
