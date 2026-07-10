import { Sun, Moon } from "lucide-react";
import { FOOTER_COLS } from "../../data/constants";
import { Link } from "react-router-dom";

const FONT = "'Inter', system-ui, -apple-system, sans-serif";

// Apple's footer: parchment surface, dense-link columns run at 17px body
// size with a relaxed 2.41 line-height — the space between links, not
// smaller type, is what makes a dense list scannable.
function Footer({ t, dark, setDark, scrollTo }) {
  return (
    <footer style={{ background: t.altBg, padding: "64px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
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
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  background: t.accent,
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: FONT,
                  fontWeight: 700,
                  fontSize: 12,
                  color: "#ffffff",
                }}
              >
                G
              </div>
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: t.heading,
                  fontFamily: FONT,
                  letterSpacing: "-0.374px",
                }}
              >
                Go<span style={{ color: t.accent }}>Beyond</span>
              </span>
            </button>
            <p
              style={{
                fontSize: 12,
                lineHeight: 1.43,
                letterSpacing: "-0.224px",
                color: t.faint,
                marginBottom: 6,
                fontFamily: FONT,
              }}
            >
              Go Further. Go Smarter. Go Beyond.
            </p>
            <p
              style={{
                fontSize: 12,
                lineHeight: 1.43,
                letterSpacing: "-0.224px",
                color: t.faint,
                fontFamily: FONT,
              }}
            >
              Innovation · Digital · Systems · Plans
            </p>
          </div>
          {FOOTER_COLS.map((col, i) => (
            <div key={i}>
              <h4
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "-0.224px",
                  color: t.body,
                  marginBottom: 8,
                  fontFamily: FONT,
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
                }}
              >
                {col.links.map((l) => (
                  <li key={l}>
                    {col.title === "Legal" ? (
                      <Link
                        to={l === "Privacy Policy" ? "/privacy-policy" : "/terms"}
                        style={{
                          fontSize: 17,
                          lineHeight: 2.41,
                          color: t.muted,
                          textDecoration: "none",
                          fontFamily: FONT,
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = t.accent)}
                        onMouseLeave={(e) => (e.target.style.color = t.muted)}
                      >
                        {l}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        style={{
                          fontSize: 17,
                          lineHeight: 2.41,
                          color: t.muted,
                          textDecoration: "none",
                          fontFamily: FONT,
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = t.accent)}
                        onMouseLeave={(e) => (e.target.style.color = t.muted)}
                      >
                        {l}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: `1px solid ${t.border}`,
            paddingTop: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 14,
          }}
        >
          <span
            style={{
              fontSize: 12,
              lineHeight: 1,
              letterSpacing: "-0.12px",
              color: t.faint,
              fontFamily: FONT,
            }}
          >
            © 2025 GoBeyond · IT Solutions. All rights reserved.
          </span>
          <button
            onClick={() => setDark(!dark)}
            style={{
              width: 32,
              height: 32,
              borderRadius: 9999,
              border: "none",
              background: t.tagBg,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: t.body,
            }}
          >
            {dark ? <Sun size={13} /> : <Moon size={13} />}
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
