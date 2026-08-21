import useInView from "../../hooks/useInView";
import { Zap } from "lucide-react";
import SectionHeader from "../mini/SectionHeader";
import { APPROACH } from "../../data/constants";
import { FONT_DISPLAY, FONT_TEXT, FONT_MONO, HAIRLINE } from "../../data/constants";

function Approach({ t }) {
  const [ref, inView] = useInView();
  return (
    <section id="approach" style={{ padding: "88px 0", background: t.altBg }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 32px" }}>
        <SectionHeader
          t={t}
          label="Our Approach"
          labelIcon={Zap}
          heading={
            <>
              A structured path
              <br />
              from idea to impact.
            </>
          }
          subtext="Five clear phases that take every project from raw insight to continuous improvement — with full transparency at each step."
        />

        <div ref={ref} className="approach-timeline" style={{ position: "relative", display: "flex", justifyContent: "space-between", gap: 8 }}>
          {/* connecting line — horizontal on desktop/tablet, swaps to vertical below 1024px */}
          <div className="approach-line-h" style={{ position: "absolute", top: 23, left: 0, right: 0, height: 1, background: HAIRLINE, zIndex: 0 }} />
          <div className="approach-line-v" style={{ position: "absolute", top: 4, bottom: 4, left: 23, width: 1, background: HAIRLINE, zIndex: 0, display: "none" }} />

          {APPROACH.map((step, i) => (
            <div
              key={i}
              className="approach-step"
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 18,
                flex: 1,
                paddingRight: i < APPROACH.length - 1 ? 24 : 0,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ${i * 0.1}s, transform 0.6s ${i * 0.1}s`,
              }}
            >
              <div className="approach-step-marker" style={{ width: 46, flexShrink: 0 }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    background: t.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <step.icon size={19} style={{ color: "#fff" }} />
                </div>
              </div>
              <div className="approach-step-body">
                <span
                  style={{
                    display: "block",
                    fontFamily: FONT_MONO,
                    fontSize: 10.5,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: t.faint,
                    marginBottom: 8,
                  }}
                >
                  STEP {step.step}
                </span>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    color: t.heading,
                    marginBottom: 8,
                    fontFamily: FONT_DISPLAY,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: t.muted,
                    fontFamily: FONT_TEXT,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Approach;
