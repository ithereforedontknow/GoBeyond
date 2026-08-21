import useInView from "../../hooks/useInView";
import { Quote } from "lucide-react";
import SectionLabel from "../mini/SectionLabel";
import AccentLine from "../mini/AccentLine";
import { FONT_DISPLAY, FONT_TEXT, HAIRLINE, SOFT_SHADOW_LIFT } from "../../data/constants";

function Founder({ t }) {
  const [ref, inView] = useInView();
  return (
    <section id="founder" style={{ padding: "88px 0", background: t.pageBg }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 32px" }}>
        <div
          ref={ref}
          className="founder-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "420px 1fr",
            gap: 72,
            alignItems: "center",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s, transform 0.8s",
          }}
        >
          {/* Photo column */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                border: `1px solid ${HAIRLINE}`,
                borderRadius: 20,
                overflow: "hidden",
                aspectRatio: "4/5",
                background: t.altBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: SOFT_SHADOW_LIFT,
              }}
            >
              <img
                src="/founder.jpg"
                alt="Princess Dianne Dulay — Founder, GoBeyond"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>

            <div
              className="founder-badge"
              style={{
                position: "absolute",
                bottom: 24,
                right: -18,
                background: t.cardBg,
                border: `1px solid ${HAIRLINE}`,
                borderRadius: 14,
                padding: "13px 17px",
                boxShadow: SOFT_SHADOW_LIFT,
                zIndex: 2,
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 700, color: t.accent, fontFamily: FONT_DISPLAY, marginBottom: 2 }}>
                7+ Years
              </div>
              <div style={{ fontSize: 12, color: t.muted, fontFamily: FONT_TEXT }}>
                Accounting & Business
              </div>
            </div>
          </div>

          {/* Text column */}
          <div>
            <SectionLabel t={t} icon={Quote}>
              The Founder
            </SectionLabel>
            <AccentLine t={t} />
            <h2
              style={{
                fontSize: "clamp(2rem,3.4vw,2.8rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                color: t.heading,
                marginBottom: 4,
                fontFamily: FONT_DISPLAY,
              }}
            >
              Princess Dianne Dulay
            </h2>
            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: t.accent,
                marginBottom: 24,
                fontFamily: FONT_TEXT,
              }}
            >
              Founder, GoBeyond IT Solutions
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: t.muted, fontFamily: FONT_TEXT }}>
                GoBeyond was born from a long-held dream of building something
                meaningful and impactful. It took years to find the courage to
                turn this vision into reality — and today, with the world moving
                deeper into the digital era, the time is right.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: t.muted, fontFamily: FONT_TEXT }}>
                With over seven years in accounting, I bring a solid foundation
                in business processes and financial management. Together with a
                team of capable IT professionals and an engineer, we combine
                diverse expertise to deliver solutions that genuinely go beyond
                expectations.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: t.muted, fontFamily: FONT_TEXT }}>
                At GoBeyond, we're not here just to sell. We're here to guide
                businesses as they take bold steps toward transformation —
                helping them go further, work smarter, and truly go beyond.
              </p>
            </div>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 28 }}>
              {[
                "7+ yrs Accounting",
                "Business Process Management",
                "Digital Transformation",
                "IT & Engineering Team",
              ].map((tag, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    padding: "7px 15px",
                    borderRadius: 999,
                    border: `1px solid ${HAIRLINE}`,
                    background: t.cardBg,
                    color: t.body,
                    fontFamily: FONT_TEXT,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
