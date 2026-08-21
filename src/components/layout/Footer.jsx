import { FOOTER_COLS } from "../../data/constants";
import { Link } from "react-router-dom";
import { FONT_DISPLAY, FONT_TEXT, HAIRLINE } from "../../data/constants";

function Footer({ t, scrollTo }) {
  return (
    <footer style={{ background: t.altBg, borderTop: `1px solid ${HAIRLINE}`, padding: "64px 0 40px" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 32px" }}>
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
                gap: 9,
                background: "none",
                border: "none",
                cursor: "pointer",
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  width: 26,
                  height: 26,
                  background: t.accent,
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 700,
                  fontSize: 12,
                  color: "#ffffff",
                }}
              >
                G
              </div>
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: t.heading,
                  fontFamily: FONT_DISPLAY,
                  letterSpacing: "-0.01em",
                }}
              >
                Go<span style={{ color: t.accent }}>Beyond</span>
              </span>
            </button>
            <p style={{ fontSize: 12, lineHeight: 1.5, color: t.faint, marginBottom: 6, fontFamily: FONT_TEXT }}>
              Go Further. Go Smarter. Go Beyond.
            </p>
            <p style={{ fontSize: 12, lineHeight: 1.5, color: t.faint, fontFamily: FONT_TEXT }}>
              Innovation · Digital · Systems · Plans
            </p>
          </div>

          {FOOTER_COLS.map((col, i) => (
            <div key={i}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: t.body, marginBottom: 8, fontFamily: FONT_TEXT, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column" }}>
                {col.links.map((l) => (
                  <li key={l}>
                    {col.title === "Legal" ? (
                      <Link
                        to={l === "Privacy Policy" ? "/privacy-policy" : "/terms"}
                        style={{ fontSize: 15, lineHeight: 2.3, color: t.muted, textDecoration: "none", fontFamily: FONT_TEXT, transition: "color 0.15s" }}
                        onMouseEnter={(e) => (e.target.style.color = t.accent)}
                        onMouseLeave={(e) => (e.target.style.color = t.muted)}
                      >
                        {l}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        style={{ fontSize: 15, lineHeight: 2.3, color: t.muted, textDecoration: "none", fontFamily: FONT_TEXT, transition: "color 0.15s" }}
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
            borderTop: `1px solid ${HAIRLINE}`,
            paddingTop: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 14,
          }}
        >
          <span style={{ fontSize: 12, color: t.faint, fontFamily: FONT_TEXT }}>
            © 2025 GoBeyond · IT Solutions. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
