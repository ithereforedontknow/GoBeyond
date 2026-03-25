import useInView from "../../hooks/useInView";
import { Quote } from "lucide-react";
import SectionLabel from "../mini/SectionLabel";
import AccentLine from "../mini/AccentLine";

function Founder({ t }) {
  const [ref, inView] = useInView();
  return (
    <section
      id="founder"
      style={{
        borderTop: `1px solid ${t.border}`,
        padding: "80px 0",
        background: t.pageBg,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }}>
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
          {/* Photo column */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: -2,
                borderRadius: 20,
                background: `linear-gradient(135deg, ${t.accent}35, transparent 55%)`,
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: 18,
                overflow: "hidden",
                border: `1px solid ${t.border}`,
                aspectRatio: "4/5",
                background: t.altBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
                borderRadius: 12,
                padding: "12px 16px",
                boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: t.accent,
                  fontFamily: "Epilogue, sans-serif",
                  marginBottom: 2,
                }}
              >
                7+ Years
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: t.muted,
                  fontFamily: "Inter, sans-serif",
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
                fontSize: "clamp(1.8rem,3.2vw,2.6rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: t.heading,
                marginBottom: 4,
                fontFamily: "Epilogue, sans-serif",
              }}
            >
              Princess Dianne Dulay
            </h2>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: t.accent,
                marginBottom: 24,
                fontFamily: "Inter, sans-serif",
              }}
            >
              Founder, GoBeyond IT Solutions
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: t.muted }}>
                GoBeyond was born from a long-held dream of building something
                meaningful and impactful. It took years to find the courage to
                turn this vision into reality — and today, with the world moving
                deeper into the digital era, the time is right.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: t.muted }}>
                With over seven years in accounting, I bring a solid foundation
                in business processes and financial management. Together with a
                team of capable IT professionals and an engineer, we combine
                diverse expertise to deliver solutions that genuinely go beyond
                expectations.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: t.muted }}>
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
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "5px 12px",
                    borderRadius: 6,
                    background: t.tagBg,
                    border: `1px solid ${t.border}`,
                    color: t.muted,
                    fontFamily: "Inter, sans-serif",
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
