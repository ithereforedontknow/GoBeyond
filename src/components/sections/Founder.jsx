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
        padding: "100px 0",
        background: t.pageBg,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "420px 1fr",
            gap: 80,
            alignItems: "center",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s, transform 0.8s",
          }}
          className="founder-grid"
        >
          {/* Photo */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: -2,
                borderRadius: 20,
                background: `linear-gradient(135deg, ${t.accent}40, transparent 60%)`,
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
              {/* Replace src below with your actual photo path e.g. "/princess.jpg" */}
              <img
                src="/founder.jpg"
                alt="Princess Dianne Dulay — Founder, GoBeyond"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>

            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: 24,
                right: -20,
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
                  fontSize: 11,
                  fontWeight: 700,
                  color: t.accent,
                  fontFamily: "Inter, sans-serif",
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
                in Accounting & Business
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <SectionLabel t={t} icon={Quote}>
              The Founder
            </SectionLabel>
            <AccentLine t={t} />

            <h2
              style={{
                fontSize: "clamp(2rem,3.5vw,2.8rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: t.heading,
                marginBottom: 6,
                fontFamily: "Epilogue, sans-serif",
              }}
            >
              Princess Dianne Dulay
            </h2>
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: t.accent,
                marginBottom: 28,
                fontFamily: "Inter, sans-serif",
              }}
            >
              Founder, GoBeyond IT Solutions
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: t.muted }}>
                I am Princess Dianne Dulay, the founder of Go Beyond, a company
                born from a long-held dream of building something meaningful and
                impactful. It took me years to find the courage to turn this
                vision into reality, and today, I strongly believe that this is
                the right time to move forward—especially as we enter an
                increasingly digital era.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: t.muted }}>
                With over seven years of experience in accounting, I bring a
                solid foundation in business processes and financial management.
                Together with my team of highly capable IT professionals and an
                engineer, we combine diverse expertise to deliver solutions that
                go beyond expectations.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: t.muted }}>
                At Go Beyond, our mission is not simply to sell, but to guide
                and support businesses as they take bold steps toward
                transformation—helping them go further, work smarter, and truly
                go beyond.
              </p>
            </div>

            {/* Credentials */}
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginTop: 32,
              }}
            >
              {[
                "7+ yrs Accounting",
                "Business Process Management",
                "Digital Transformation",
                "Team of IT & Engineering Professionals",
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
