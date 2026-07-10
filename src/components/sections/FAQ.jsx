import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../../data/constants";
import SectionLabel from "../mini/SectionLabel";
import AccentLine from "../mini/AccentLine";

function FAQ({ t }) {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ padding: "64px 0", background: t.pageBg }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.8fr",
            gap: 80,
            alignItems: "start",
          }}
          className="faq-grid"
        >
          <div style={{ position: "sticky", top: 96 }}>
            <SectionLabel t={t}>FAQ</SectionLabel>
            <AccentLine t={t} />
            <h2
              style={{
                fontSize: "clamp(1.9rem,3.4vw,2.5rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: t.heading,
                marginBottom: 14,
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
              }}
            >
              Got
              <br />
              questions?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.47, letterSpacing: "-0.374px", color: t.muted }}>
              We've got answers. If something's still unclear, just reach out.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {FAQS.map((f, i) => (
              <div
                key={i}
                style={{
                  border: `1px solid ${open === i ? t.accent : t.border}`,
                  borderRadius: 11,
                  overflow: "hidden",
                  background: t.cardBg,
                  transition: "border-color 0.25s",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "18px 22px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: t.heading,
                      paddingRight: 24,
                      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                      lineHeight: 1.4,
                    }}
                  >
                    {f.q}
                  </span>
                  <ChevronDown
                    size={16}
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
                        padding: "0 22px 18px",
                        paddingTop: 14,
                        fontSize: 13,
                        lineHeight: 1.75,
                        color: t.muted,
                        borderTop: `1px solid ${t.border}`,
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
