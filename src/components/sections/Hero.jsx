import {
  ArrowRight,
  Play,
  Activity,
  Users,
  LayoutDashboard,
  FileText,
  Star,
  BookOpen,
  Monitor,
  Clock,
} from "lucide-react";

import { STATS } from "../../data/constants";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── constants ───────────────────────────────────────────────────────────────

const SLIDE_DURATION = 4200;

const ACC = "#ccea4a";
const ACC_DIM = "rgba(204,234,74,0.10)";
const ACC_BDR = "rgba(204,234,74,0.22)";

// ─── tiny helpers ─────────────────────────────────────────────────────────────

function Pill({ label }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 11px",
        borderRadius: 20,
        alignSelf: "flex-start",
        background: ACC_DIM,
        border: `1px solid ${ACC_BDR}`,
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: "0.13em",
        textTransform: "uppercase",
        color: ACC,
        marginBottom: 18,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: ACC,
          flexShrink: 0,
        }}
      />
      {label}
    </div>
  );
}

function SlideTitle({ children }) {
  return (
    <h3
      style={{
        fontFamily: "Epilogue, sans-serif",
        fontSize: 18,
        fontWeight: 800,
        color: "#f0f0f0",
        lineHeight: 1.2,
        marginBottom: 8,
      }}
    >
      {children}
    </h3>
  );
}

function SlideDesc({ children }) {
  return (
    <p
      style={{
        fontSize: 11.5,
        color: "#555",
        lineHeight: 1.65,
        marginBottom: 24,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {children}
    </p>
  );
}

// ─── Slide 0 — Digital Solutions ─────────────────────────────────────────────

function DigitalSlide() {
  const bdr = "rgba(255,255,255,0.07)";
  const card = "#141414";

  const chips = [
    {
      Icon: Star,
      color: "#60a5fa",
      bg: "rgba(96,165,250,.12)",
      name: "Invitation Kit",
      tag: "Event",
    },
    {
      Icon: BookOpen,
      color: "#f472b6",
      bg: "rgba(244,114,182,.12)",
      name: "Story Book",
      tag: "Kids",
    },
    {
      Icon: FileText,
      color: "#fb923c",
      bg: "rgba(251,146,60,.12)",
      name: "Menu Poster",
      tag: "Food",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Pill label="Digital Solutions" />
      <SlideTitle>Creative assets, ready to use</SlideTitle>
      <SlideDesc>
        Templates and digital products — buy once, deploy instantly.
      </SlideDesc>

      {/* featured */}
      <div
        style={{
          borderRadius: 12,
          border: `1px solid ${bdr}`,
          background: card,
          padding: "16px 18px",
          marginBottom: 10,
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 10,
            background: "#1e1e1e",
            border: `1px solid ${bdr}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <LayoutDashboard size={20} style={{ color: ACC }} />
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#f0f0f0",
              marginBottom: 3,
              fontFamily: "Epilogue, sans-serif",
            }}
          >
            Professional CV Kit
          </div>
          <div
            style={{
              fontSize: 10,
              color: "#555",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Resume · Career Tools
          </div>
        </div>
        <div
          style={{
            fontSize: 9,
            fontWeight: 700,
            padding: "4px 10px",
            borderRadius: 20,
            background: ACC_DIM,
            border: `1px solid ${ACC_BDR}`,
            color: ACC,
            whiteSpace: "nowrap",
            flexShrink: 0,
            fontFamily: "Inter, sans-serif",
            letterSpacing: "0.08em",
          }}
        >
          Most Popular
        </div>
      </div>

      {/* chips row */}
      <div style={{ display: "flex", gap: 8 }}>
        {chips.map(({ Icon, color, bg, name, tag }) => (
          <div
            key={name}
            style={{
              flex: 1,
              borderRadius: 9,
              border: `1px solid ${bdr}`,
              background: card,
              padding: "12px 13px",
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 6,
                background: bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 2,
              }}
            >
              <Icon size={12} style={{ color }} />
            </div>
            <div
              style={{
                fontSize: 10.5,
                fontWeight: 600,
                color: "#c8c8c8",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontSize: 9,
                color: "#444",
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {tag}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Slide 1 — Systems & Web ──────────────────────────────────────────────────

function SystemsSlide() {
  const bdr = "rgba(255,255,255,0.07)";
  const card = "#141414";

  const kpis = [
    { val: "98%", label: "Uptime", color: ACC },
    { val: "12", label: "Active Projects", color: "#4ade80" },
    { val: "4.9", label: "Client Rating", color: "#60a5fa" },
  ];

  const items = [
    {
      Icon: Monitor,
      iconColor: ACC,
      iconBg: ACC_DIM,
      name: "Inventory Management System",
      status: "Live",
      statusColor: "#4ade80",
      statusBg: "rgba(74,222,128,0.10)",
      statusBdr: "rgba(74,222,128,0.20)",
    },
    {
      Icon: Users,
      iconColor: "#60a5fa",
      iconBg: "rgba(96,165,250,0.10)",
      name: "Client Portal — Acme Corp",
      status: "In Dev",
      statusColor: "#60a5fa",
      statusBg: "rgba(96,165,250,0.10)",
      statusBdr: "rgba(96,165,250,0.20)",
    },
    {
      Icon: Clock,
      iconColor: "#fb923c",
      iconBg: "rgba(251,146,60,0.10)",
      name: "Payroll Automation — SME Pack",
      status: "Scoping",
      statusColor: "#fb923c",
      statusBg: "rgba(251,146,60,0.10)",
      statusBdr: "rgba(251,146,60,0.20)",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Pill label="Systems & Web" />
      <SlideTitle>Your workflow, fully digitized</SlideTitle>
      <SlideDesc>
        Custom dashboards, portals, and automations — built around how you work.
      </SlideDesc>

      {/* KPIs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        {kpis.map(({ val, label, color }) => (
          <div
            key={label}
            style={{
              flex: 1,
              borderRadius: 10,
              border: `1px solid ${bdr}`,
              background: card,
              padding: "13px 14px",
            }}
          >
            <div
              style={{
                fontFamily: "Epilogue, sans-serif",
                fontSize: 20,
                fontWeight: 800,
                color,
                lineHeight: 1,
              }}
            >
              {val}
            </div>
            <div
              style={{
                fontSize: 9,
                color: "#444",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginTop: 5,
                fontFamily: "Inter, sans-serif",
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* project list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {items.map(
          ({
            Icon,
            iconColor,
            iconBg,
            name,
            status,
            statusColor,
            statusBg,
            statusBdr,
          }) => (
            <div
              key={name}
              style={{
                borderRadius: 10,
                border: `1px solid ${bdr}`,
                background: card,
                padding: "12px 15px",
                display: "flex",
                alignItems: "center",
                gap: 11,
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  background: iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={14} style={{ color: iconColor }} />
              </div>
              <div
                style={{
                  fontSize: 11.5,
                  fontWeight: 600,
                  color: "#e0e0e0",
                  flex: 1,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {name}
              </div>
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  padding: "3px 9px",
                  borderRadius: 10,
                  background: statusBg,
                  border: `1px solid ${statusBdr}`,
                  color: statusColor,
                  whiteSpace: "nowrap",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {status}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

// ─── Slide 2 — Building Plans ─────────────────────────────────────────────────

function BuildingSlide() {
  const bdr = "rgba(255,255,255,0.07)";
  const card = "#141414";

  const stats = [
    { val: "120", unit: "m²", label: "Floor Area" },
    { val: "2", label: "Bedrooms" },
    { val: "1", label: "Bath" },
    { val: "2-Storey", label: "Type", accent: true },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Pill label="Building Plans" />
      <SlideTitle>From vision to ready-to-build</SlideTitle>
      <SlideDesc>
        Residential & commercial — precise layouts, space planning, consultation
        included.
      </SlideDesc>

      {/* floor plan */}
      <div
        style={{
          borderRadius: 12,
          border: `1px solid ${bdr}`,
          background: card,
          padding: "14px 14px 10px",
          marginBottom: 10,
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <span
            style={{
              fontSize: 9,
              fontWeight: 700,
              color: "#555",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Floor Plan — Lot 4 Block 3
          </span>
          <span
            style={{
              fontSize: 9,
              fontWeight: 700,
              color: ACC,
              background: ACC_DIM,
              border: `1px solid ${ACC_BDR}`,
              padding: "3px 9px",
              borderRadius: 10,
              fontFamily: "Inter, sans-serif",
            }}
          >
            Approved
          </span>
        </div>

        <svg viewBox="0 0 340 130" width="100%" style={{ display: "block" }}>
          <rect
            x="4"
            y="4"
            width="332"
            height="122"
            rx="3"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
          {/* outer walls */}
          <rect
            x="14"
            y="10"
            width="312"
            height="112"
            rx="2"
            fill="none"
            stroke={ACC}
            strokeWidth="1.8"
          />
          {/* dividers */}
          <line
            x1="145"
            y1="10"
            x2="145"
            y2="90"
            stroke={ACC}
            strokeWidth="1.1"
            strokeDasharray="4 3"
            opacity="0.55"
          />
          <line
            x1="14"
            y1="72"
            x2="145"
            y2="72"
            stroke={ACC}
            strokeWidth="1.1"
            strokeDasharray="4 3"
            opacity="0.55"
          />
          <line
            x1="145"
            y1="62"
            x2="326"
            y2="62"
            stroke={ACC}
            strokeWidth="1.1"
            strokeDasharray="4 3"
            opacity="0.55"
          />
          <line
            x1="240"
            y1="62"
            x2="240"
            y2="122"
            stroke={ACC}
            strokeWidth="1.1"
            strokeDasharray="4 3"
            opacity="0.55"
          />
          {/* door arcs */}
          <path
            d="M145 32 Q128 32 128 49"
            fill="none"
            stroke="rgba(204,234,74,0.3)"
            strokeWidth="0.9"
          />
          <path
            d="M14 96 Q30 96 30 80"
            fill="none"
            stroke="rgba(204,234,74,0.3)"
            strokeWidth="0.9"
          />
          {/* room labels */}
          {[
            { x: 76, y: 42, text: "Living Room" },
            { x: 76, y: 84, text: "Bedroom 1" },
            { x: 232, y: 38, text: "Kitchen / Dining" },
            { x: 190, y: 94, text: "Bedroom 2" },
            { x: 285, y: 94, text: "Bathroom" },
          ].map(({ x, y, text }) => (
            <text
              key={text}
              x={x}
              y={y}
              fontSize="7.5"
              fill="#5a5a5a"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontWeight="500"
            >
              {text}
            </text>
          ))}
          {/* compass */}
          <text
            x="312"
            y="22"
            fontSize="8"
            fill={ACC}
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
          >
            N
          </text>
          <line
            x1="312"
            y1="24"
            x2="312"
            y2="34"
            stroke={ACC}
            strokeWidth="1"
          />
          <polygon points="308,34 312,40 316,34" fill={ACC} opacity="0.7" />
        </svg>
      </div>

      {/* stats row */}
      <div style={{ display: "flex", gap: 7 }}>
        {stats.map(({ val, unit, label, accent }) => (
          <div
            key={label}
            style={{
              flex: 1,
              borderRadius: 9,
              border: `1px solid ${bdr}`,
              background: card,
              padding: "11px 12px",
            }}
          >
            <div
              style={{
                fontFamily: "Epilogue, sans-serif",
                fontSize: accent ? 12 : 16,
                fontWeight: 800,
                color: accent ? ACC : "#f0f0f0",
                lineHeight: 1,
              }}
            >
              {val}
              {unit && (
                <span style={{ fontSize: 9, fontWeight: 400, color: "#444" }}>
                  {unit}
                </span>
              )}
            </div>
            <div
              style={{
                fontSize: 8.5,
                color: "#444",
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                marginTop: 4,
                fontFamily: "Inter, sans-serif",
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── HeroMockup ───────────────────────────────────────────────────────────────

const SLIDES = [
  { component: <DigitalSlide /> },
  { component: <SystemsSlide /> },
  { component: <BuildingSlide /> },
];

function HeroMockup() {
  const [cur, setCur] = useState(0);
  const [phase, setPhase] = useState("idle"); // idle | out | in
  const [progKey, setProgKey] = useState(0);
  const timerRef = useRef(null);
  const nextRef = useRef(null);

  const bdr = "rgba(255,255,255,0.07)";

  const goTo = useCallback(
    (idx) => {
      if (idx === cur) return;
      clearInterval(timerRef.current);
      setPhase("out");
      nextRef.current = idx;
      setTimeout(() => {
        setCur(idx);
        setPhase("in");
        setProgKey((k) => k + 1);
        setTimeout(() => setPhase("idle"), 30);
      }, 420);
    },
    [cur],
  );

  const advance = useCallback(() => {
    const next = (cur + 1) % SLIDES.length;
    goTo(next);
  }, [cur, goTo]);

  // auto-cycle
  useEffect(() => {
    timerRef.current = setInterval(advance, SLIDE_DURATION);
    return () => clearInterval(timerRef.current);
  }, [advance]);

  const slideStyle = (active) => ({
    transition:
      "opacity 0.42s cubic-bezier(.4,0,.2,1), transform 0.42s cubic-bezier(.4,0,.2,1)",
    opacity: phase === "out" ? 0 : 1,
    transform:
      phase === "out"
        ? "translateY(-14px)"
        : phase === "in"
          ? "translateY(14px)"
          : "translateY(0)",
  });

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 420,
        margin: "0 auto",
        userSelect: "none",
      }}
    >
      {/* glow */}
      <div
        style={{
          position: "absolute",
          inset: -40,
          background: `radial-gradient(ellipse at 55% 50%, ${ACC}1e 0%, transparent 65%)`,
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      />

      {/* frame */}
      <div
        style={{
          position: "relative",
          borderRadius: 18,
          overflow: "hidden",
          border: `1px solid ${bdr}`,
          background: "#0e0e0e",
          boxShadow:
            "0 48px 96px rgba(0,0,0,0.88), 0 0 0 1px rgba(204,234,74,0.04)",
        }}
      >
        {/* chrome */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            padding: "11px 16px",
            borderBottom: `1px solid ${bdr}`,
            background: "#141414",
          }}
        >
          {[["#ff5f57"], ["#ffbd2e"], ["#28ca41"]].map(([bg], i) => (
            <span
              key={i}
              style={{
                width: 11,
                height: 11,
                borderRadius: "50%",
                background: bg,
              }}
            />
          ))}
          <div
            style={{
              marginLeft: 10,
              flex: 1,
              height: 20,
              borderRadius: 5,
              background: "rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
            }}
          >
            <span
              style={{
                fontSize: 9,
                color: "#444",
                fontFamily: "Inter, sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              app.gobeyond.ph
            </span>
          </div>
        </div>

        {/* progress bar */}
        <div
          style={{
            height: 2,
            background: "rgba(255,255,255,0.05)",
            overflow: "hidden",
          }}
        >
          <div
            key={progKey}
            style={{
              height: "100%",
              background: ACC,
              animation: `progFill ${SLIDE_DURATION}ms linear forwards`,
            }}
          />
        </div>

        {/* slide area */}
        <div
          style={{ padding: "24px 24px 16px", height: 340, overflow: "hidden" }}
        >
          <div style={slideStyle(true)}>{SLIDES[cur].component}</div>
        </div>

        {/* dot nav */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 7,
            padding: "10px 0 14px",
            background: "#0e0e0e",
          }}
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === cur ? 18 : 6,
                height: 6,
                borderRadius: 3,
                border: "none",
                padding: 0,
                background: i === cur ? ACC : "rgba(255,255,255,0.14)",
                cursor: "pointer",
                transition: "width 0.3s, background 0.25s",
              }}
            />
          ))}
        </div>
      </div>

      {/* badge — bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: -18,
          right: -22,
          borderRadius: 13,
          border: "1px solid rgba(255,255,255,0.10)",
          padding: "10px 15px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "#141414",
          boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 9,
            background: ACC,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Activity size={15} style={{ color: "#0a0a0a" }} />
        </div>
        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#f0f0f0",
              fontFamily: "Epilogue, sans-serif",
            }}
          >
            3 Divisions. 1 Partner.
          </div>
          <div
            style={{
              fontSize: 9,
              color: "#4ade80",
              fontWeight: 600,
              marginTop: 2,
              fontFamily: "Inter, sans-serif",
            }}
          >
            ● All projects on track
          </div>
        </div>
      </div>

      {/* badge — top left */}
      <div
        style={{
          position: "absolute",
          top: -16,
          left: -20,
          borderRadius: 10,
          border: "1px solid rgba(255,255,255,0.10)",
          padding: "8px 13px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "#141414",
          boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: ACC,
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: 10.5,
            fontWeight: 600,
            color: "#f0f0f0",
            fontFamily: "Inter, sans-serif",
          }}
        >
          New project kicked off
        </span>
      </div>

      {/* keyframe injection */}
      <style>{`
        @keyframes progFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero({ t, dark, scrollTo }) {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: t.pageBg,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(${dark ? "rgba(204,234,74,0.09)" : "rgba(0,0,0,0.06)"} 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-8%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${t.accent}14 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "112px 24px 80px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 4,
                border: `1px solid ${t.borderStrong}`,
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: t.accent,
                  display: "block",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: t.muted,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Innovation · Digital · Systems · Plans
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.8rem,5.5vw,4.4rem)",
                fontWeight: 800,
                lineHeight: 1.03,
                letterSpacing: "-0.03em",
                color: t.heading,
                marginBottom: 10,
                fontFamily: "Epilogue, sans-serif",
              }}
            >
              Go Further.
              <br />
              Go Smarter.
            </h1>
            <h1
              style={{
                fontSize: "clamp(2.8rem,5.5vw,4.4rem)",
                fontWeight: 800,
                lineHeight: 1.03,
                letterSpacing: "-0.03em",
                color: t.accent,
                marginBottom: 28,
                fontFamily: "Epilogue, sans-serif",
              }}
            >
              Go Beyond.
            </h1>

            <p
              style={{
                fontSize: 17,
                lineHeight: 1.75,
                color: t.muted,
                maxWidth: 440,
                marginBottom: 40,
              }}
            >
              We build digital tools, custom systems, and building plans —
              whatever your problem needs, under one roof.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginBottom: 52,
              }}
            >
              <button
                onClick={() => scrollTo("solutions")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: t.accent,
                  color: t.accentText,
                  border: "none",
                  borderRadius: 8,
                  padding: "14px 28px",
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  transition: "background 0.2s, transform 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = t.accentDark;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = t.accent;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Explore Solutions <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo("approach")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: t.body,
                  border: `1px solid ${t.borderStrong}`,
                  borderRadius: 8,
                  padding: "14px 28px",
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = t.accent;
                  e.currentTarget.style.background = t.tagBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = t.borderStrong;
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <Play size={13} style={{ fill: "currentColor" }} /> Our Approach
              </button>
            </div>

            <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
              {STATS.map((s, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontSize: "clamp(1.5rem,2.5vw,1.9rem)",
                      fontWeight: 800,
                      color: t.heading,
                      fontFamily: "Epilogue, sans-serif",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      fontWeight: 600,
                      color: t.faint,
                      marginTop: 5,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-mockup">
            <HeroMockup dark={dark} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
