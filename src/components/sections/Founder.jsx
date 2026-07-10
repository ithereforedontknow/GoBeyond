import useInView from "../../hooks/useInView";
import { Quote } from "lucide-react";
import SectionLabel from "../mini/SectionLabel";
import AccentLine from "../mini/AccentLine";

function Founder({ t }) {
  const [ref, inView] = useInView();
  return (
    <section id="founder" style={{ padding: "64px 0", background: t.pageBg }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 24px" }}>
        <div
          ref={ref}
          className="founder-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "400px 1fr",
            gap: 72,
            alignItems: "center",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s, transform 0.8s",
          }}
        >
          {/* Photo column — the one place the system's single reserved
              shadow applies: real photography resting on a surface. */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                borderRadius: 14,
                overflow: "hidden",
                aspectRatio: "4/5",
                background: t.altBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "rgba(0, 0, 0, 0.22) 3px 5px 30px 0",
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

            {/* Floating badge — hidden on small mobile via class */}
            <div
              className="founder-badge"
              style={{
                position: "absolute",
                bottom: 24,
                right: -18,
                background: t.cardBg,
                border: `1px solid ${t.border}`,
                borderRadius: 11,
                padding: "12px 16px",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: t.accent,
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  marginBottom: 2,
                }}
              >
                7+ Years
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: t.muted,
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                }}
              >
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
                fontSize: "clamp(1.8rem,3.2vw,2.5rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: t.heading,
                marginBottom: 4,
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
              }}
            >
              Princess Dianne Dulay
            </h2>
            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "-0.224px",
                color: t.accent,
                marginBottom: 24,
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
              }}
            >
              Founder, GoBeyond IT Solutions
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ fontSize: 17, lineHeight: 1.47, letterSpacing: "-0.374px", color: t.muted }}>
                GoBeyond was born from a long-held dream of building something
                meaningful and impactful. It took years to find the courage to
                turn this vision into reality — and today, with the world moving
                deeper into the digital era, the time is right.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.47, letterSpacing: "-0.374px", color: t.muted }}>
                With over seven years in accounting, I bring a solid foundation
                in business processes and financial management. Together with a
                team of capable IT professionals and an engineer, we combine
                diverse expertise to deliver solutions that genuinely go beyond
                expectations.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.47, letterSpacing: "-0.374px", color: t.muted }}>
                At GoBeyond, we're not here just to sell. We're here to guide
                businesses as they take bold steps toward transformation —
                helping them go further, work smarter, and truly go beyond.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginTop: 28,
              }}
            >
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
                    fontWeight: 400,
                    letterSpacing: "-0.12px",
                    padding: "6px 14px",
                    borderRadius: 9999,
                    background: t.tagBg,
                    color: t.tagText,
                    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
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
