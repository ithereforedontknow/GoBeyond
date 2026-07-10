import { Award, ArrowRight } from "lucide-react";
import { PROJECTS } from "../../data/constants";
import useInView from "../../hooks/useInView";
import SectionHeader from "../mini/SectionHeader";
import StockPilotMockup from "./StockPilotMockup"; // Kept internal helper component

function Work({ t, scrollTo }) {
  const [ref, inView] = useInView();
  const p = PROJECTS[0];

  return (
    <section id="work" style={{ padding: "100px 0", background: t.altBg }}>
      <div style={{ maxWidth: 1024, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader
          t={t}
          label="Our Work"
          labelIcon={Award}
          heading="Built and delivered."
          subtext="Real projects, real outcomes. More on the way."
        />

        <div
          ref={ref}
          className="work-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            border: `1px solid ${t.borderStrong}`,
            borderRadius: 18, // rounded.lg
            overflow: "hidden",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s, transform 0.7s",
          }}
        >
          {/* LEFT — Mockup Column with solitary product shadow */}
          <div
            style={{
              padding: "48px 32px",
              background: t.altBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="product-shadow"
              style={{ borderRadius: 14, overflow: "hidden", width: "100%" }}
            >
              <StockPilotMockup t={t} />
            </div>
          </div>

          {/* RIGHT — Technical Project Info */}
          <div
            style={{
              padding: "48px 40px",
              background: t.pageBg,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              {/* Division tags */}
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: 9999, // pill
                    background: `${t.accent}12`,
                    color: t.accent,
                    border: `1px solid ${t.border}`,
                    fontFamily: "SF Pro Text, sans-serif",
                  }}
                >
                  {p.division}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: 9999, // pill
                    background: t.altBg,
                    color: t.muted,
                    border: `1px solid ${t.borderStrong}`,
                    fontFamily: "SF Pro Text, sans-serif",
                  }}
                >
                  {p.client}
                </span>
              </div>

              <h3
                style={{
                  fontSize: 28, // lead specs
                  fontWeight: 600,
                  color: t.heading,
                  letterSpacing: "0.196px",
                  lineHeight: 1.14,
                  marginBottom: 6,
                }}
              >
                {p.name}
              </h3>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: t.muted,
                  marginBottom: 24,
                  fontFamily: "SF Pro Text, sans-serif",
                }}
              >
                {p.type}
              </p>

              {/* Problem/Solution Blocks */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    padding: "16px",
                    borderRadius: 11,
                    border: `1px solid ${t.borderStrong}`,
                    background: t.altBg,
                  }}
                >
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: t.muted,
                      marginBottom: 6,
                    }}
                  >
                    The Problem
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.43, color: t.body }}>
                    {p.problem}
                  </p>
                </div>

                <div
                  style={{
                    padding: "16px",
                    borderRadius: 11,
                    border: `1px solid ${t.accent}33`,
                    background: `${t.accent}08`,
                  }}
                >
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: t.accent,
                      marginBottom: 6,
                    }}
                  >
                    What We Delivered
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.43, color: t.body }}>
                    {p.outcome}
                  </p>
                </div>
              </div>

              {/* Technical Stack Pills */}
              <div>
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: t.muted,
                    marginBottom: 10,
                  }}
                >
                  Tech Stack
                </p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {p.stack.map((s, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        padding: "4px 10px",
                        borderRadius: 9999, // pill
                        background: t.altBg,
                        border: `1px solid ${t.borderStrong}`,
                        color: t.body,
                        fontFamily: "SF Pro Text, sans-serif",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="btn-pill"
              style={{
                marginTop: 32,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: t.accent,
                color: t.accentText,
                border: "none",
                borderRadius: 9999, // rounded.pill
                padding: "11px 22px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "SF Pro Text, sans-serif",
                alignSelf: "flex-start",
              }}
            >
              Build something similar <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
