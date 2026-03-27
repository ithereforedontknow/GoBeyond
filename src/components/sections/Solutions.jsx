import { useState } from "react";
import { Award, ArrowRight } from "lucide-react";
import SectionHeader from "../mini/SectionHeader";

import { SOLUTIONS } from "../../data/constants";
import useInView from "../../hooks/useInView";

function SolutionCard({ s, i, inView, t, scrollTo }) {
  const [hovered, setHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? t.cardBgHover : t.cardBg,
        border: `1px solid ${hovered ? t.accentBorderHover : t.border}`,
        borderRadius: 18,
        padding: "36px 32px 32px",
        display: "flex",
        flexDirection: "column",
        transition: "background 0.25s, border-color 0.25s, transform 0.25s",
        opacity: inView ? 1 : 0,
        transitionDelay: `${i * 0.12}s`,
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          background: `${t.accent}25`,
          border: `1px solid ${t.accent}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: s.badge ? 16 : 28,
          flexShrink: 0,
        }}
      >
        <s.icon size={22} style={{ color: t.accent }} />
      </div>

      {/* Name */}
      <h3
        style={{
          fontFamily: "Epilogue, sans-serif",
          fontSize: 22,
          fontWeight: 800,
          color: t.heading,
          lineHeight: 1.15,
          marginBottom: 14,
        }}
      >
        {s.name}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 13.5,
          lineHeight: 1.8,
          color: t.muted,
          marginBottom: 32,
          flex: 1,
        }}
      >
        {s.desc}
      </p>

      {/* Divider */}
      <div style={{ height: 1, background: t.border, marginBottom: 24 }} />

      {/* Services */}
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          fontWeight: 700,
          color: t.faint,
          marginBottom: 14,
        }}
      >
        Services Included
      </p>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: 11,
          marginBottom: 28,
        }}
      >
        {s.services.map((svc, j) => (
          <li
            key={j}
            style={{ display: "flex", alignItems: "flex-start", gap: 11 }}
          >
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: t.accent,
                marginTop: 7,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                color: t.body,
                lineHeight: 1.55,
              }}
            >
              {svc}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => scrollTo("contact")}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 7,
          width: "100%",
          padding: "12px 20px",
          background: "none",
          border: `1px solid ${btnHovered ? t.accent : t.faint}`,
          borderRadius: 10,
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: btnHovered ? t.accent : t.body,
          cursor: "pointer",
          transition: "border-color 0.2s, color 0.2s",
          marginTop: "auto",
        }}
      >
        Inquire about this
        <ArrowRight
          size={13}
          style={{
            transition: "transform 0.2s",
            transform: btnHovered ? "translateX(3px)" : "translateX(0)",
          }}
        />
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Solutions section
// ---------------------------------------------------------------------------
function Solutions({ t, scrollTo }) {
  const [ref, inView] = useInView();

  // Extend your existing theme object with the two extra tokens this component needs.
  // If t.cardBgHover / t.accentBorderHover are already defined, remove the fallbacks.
  const theme = {
    ...t,
    cardBgHover:
      t.cardBgHover ?? (t.cardBg === "#141414" ? "#181818" : "#fafaf8"),
    accentBorderHover: t.accentBorderHover ?? `${t.accent}80`,
  };

  return (
    <section
      id="solutions"
      style={{
        borderTop: `1px solid ${t.border}`,
        padding: "100px 0",
        background: t.pageBg,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader
          t={t}
          label="Our Solutions"
          labelIcon={Award}
          heading={
            <>
              Three divisions.
              <br />
              One partner.
            </>
          }
          subtext="From intelligent digital tools to custom systems and building plans — GoBeyond covers the full spectrum of innovation, under one roof."
        />

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
          className="card-grid"
        >
          {SOLUTIONS.map((s, i) => (
            <SolutionCard
              key={i}
              s={s}
              i={i}
              inView={inView}
              t={theme}
              scrollTo={scrollTo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
