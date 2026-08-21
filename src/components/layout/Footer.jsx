import { Link, useNavigate, useLocation } from "react-router-dom";
import { Blocks } from "lucide-react";
import { FOOTER_COLS, FONT_DISPLAY, FONT_TEXT, HAIRLINE } from "../../data/constants";

export default function Footer({ t, scrollTo }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to map link labels to their section IDs
  const getSectionId = (label) => {
    switch (label.toLowerCase()) {
      case "digital solutions & products":
      case "solutions":
        return "solutions";
      case "our approach":
      case "approach":
        return "approach";
      case "why gobeyond":
      case "founder":
        return "founder"; // Adjust if your founder/why-us section has a different id
      case "contact":
      case "pricing":
      case "faq":
        return label.toLowerCase();
      default:
        return "solutions";
    }
  };

  const handleNavClick = (e, label) => {
    e.preventDefault();
    const sectionId = getSectionId(label);

    // If we aren't on the home page (e.g. on /privacy-policy), navigate home first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollTo(sectionId);
      }, 100);
    } else {
      scrollTo(sectionId);
    }
  };

  return (
    <footer
      style={{
        background: t.altBg,
        borderTop: `1px solid ${HAIRLINE}`,
        padding: "64px 0 20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 32px" }}>
        {/* Navigation & Info Columns */}
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
              onClick={() => {
                if (location.pathname !== "/") {
                  navigate("/");
                  setTimeout(() => scrollTo("hero"), 100);
                } else {
                  scrollTo("hero");
                }
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                background: "none",
                border: "none",
                cursor: "pointer",
                marginBottom: 14,
                padding: 0,
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
                }}
              >
                <Blocks size={16} color="#ffffff" />
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
            <span style={{ fontSize: 12, color: t.faint, fontFamily: FONT_TEXT }}>
              Innovation · Digital · Systems · Plans
            </span>
          </div>

          {FOOTER_COLS.map((col, i) => (
            <div key={i}>
              <h4
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: t.body,
                  marginBottom: 8,
                  fontFamily: FONT_TEXT,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column" }}>
                {col.links.map((l) => (
                  <li key={l}>
                    {col.title === "Legal" ? (
                      <Link
                        to={l === "Privacy Policy" ? "/privacy-policy" : "/terms"}
                        style={{
                          fontSize: 15,
                          lineHeight: 2.3,
                          color: t.muted,
                          textDecoration: "none",
                          fontFamily: FONT_TEXT,
                          transition: "color 0.15s",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = t.accent)}
                        onMouseLeave={(e) => (e.target.style.color = t.muted)}
                      >
                        {l}
                      </Link>
                    ) : (
                      <a
                        href={`#${getSectionId(l)}`}
                        onClick={(e) => handleNavClick(e, l)}
                        style={{
                          fontSize: 15,
                          lineHeight: 2.3,
                          color: t.muted,
                          textDecoration: "none",
                          fontFamily: FONT_TEXT,
                          transition: "color 0.15s",
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

        {/* ── Giant Decorative GoBeyond Wordmark ── */}
        <div
          aria-hidden="true"
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "clamp(4.8rem, 16.5vw, 18rem)",
            fontWeight: 800,
            lineHeight: 0.85,
            fontFamily: FONT_DISPLAY,
            color: t.heading,
            opacity: 0.06,
            userSelect: "none",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            pointerEvents: "none",
            marginBottom: 46,
          }}
        >
          GoBeyond
        </div>

        <div
          style={{
            paddingTop: 24,
            paddingBottom: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 14,
            // marginTop: 38,
          }}
        >
          <span style={{ fontSize: 12, color: t.faint, fontFamily: FONT_TEXT }}>
            © 2026 GoBeyond. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
