import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../../data/constants";
import SectionLabel from "../mini/SectionLabel";
import AccentLine from "../mini/AccentLine";
import { FONT_DISPLAY, FONT_TEXT, HAIRLINE, SOFT_SHADOW } from "../../data/constants";

function FAQ({ t }) {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ padding: "88px 0", background: t.pageBg }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.8fr",
            gap: 80,
            alignItems: "start",
          }}
          className="faq-grid"
        >
          <div className="faq-side" style={{ position: "sticky", top: 100, background: t.tagBg, borderRadius: 24, padding: "40px 36px" }}>
            <SectionLabel t={t}>FAQ</SectionLabel>
            <AccentLine t={t} />
            <h2
              style={{
                fontSize: "clamp(2.2rem,3.8vw,2.8rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                color: t.heading,
                marginBottom: 14,
                fontFamily: FONT_DISPLAY,
              }}
            >
              Got
              <br />
              questions?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.5, color: t.muted, fontFamily: FONT_TEXT }}>
              We've got answers. If something's still unclear, just reach out.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQS.map((f, i) => (
              <div
                key={i}
                style={{
                  border: `1px solid ${HAIRLINE}`,
                  borderRadius: 16,
                  overflow: "hidden",
                  background: t.cardBg,
                  boxShadow: open === i ? SOFT_SHADOW : "none",
                  transition: "box-shadow 0.2s",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: t.heading,
                      paddingRight: 24,
                      fontFamily: FONT_TEXT,
                      lineHeight: 1.4,
                    }}
                  >
                    {f.q}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: open === i ? t.accent : t.faint,
                      flexShrink: 0,
                      transform: open === i ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.3s",
                    }}
                  />
                </button>
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: open === i ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.3s ease",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <div
                      style={{
                        padding: "0 24px 20px",
                        paddingTop: 14,
                        fontSize: 14,
                        lineHeight: 1.75,
                        color: t.muted,
                        fontFamily: FONT_TEXT,
                        borderTop: `1px solid ${HAIRLINE}`,
                      }}
                    >
                      {f.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default FAQ;
