import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../../data/constants";
import Label from "../mini/Label";
import AccentLine from "../mini/AccentLine";
function FAQ({ t }) {
  const [open, setOpen] = useState(null);
  return (
    <section
      id="faq"
      style={{
        borderTop: `1px solid ${t.border}`,
        padding: "100px 0",
        background: t.pageBg,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.8fr",
            gap: 80,
            alignItems: "start",
          }}
          className="faq-grid"
        >
          {/* Sticky left */}
          <div style={{ position: "sticky", top: 100 }}>
            <Label t={t}>FAQ</Label>
            <AccentLine t={t} />
            <h2
              style={{
                fontSize: "clamp(2rem,3.5vw,2.8rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: t.heading,
                marginBottom: 14,
                fontFamily: "Epilogue, sans-serif",
              }}
            >
              Got
              <br />
              questions?
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: t.muted }}>
              We've got answers. If something's missing, just reach out.
            </p>
          </div>

          {/* Accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {FAQS.map((f, i) => (
              <div
                key={i}
                style={{
                  border: `1px solid ${open === i ? t.accent : t.border}`,
                  borderRadius: 10,
                  overflow: "hidden",
                  background: open === i ? `${t.accent}0a` : t.cardBg,
                  transition: "border-color 0.25s, background 0.25s",
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
                      fontFamily: "Inter, sans-serif",
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
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: t.muted,
                        borderTop: `1px solid ${t.border}`,
                        paddingTop: 14,
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
