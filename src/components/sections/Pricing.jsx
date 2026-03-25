import { useState } from "react";
import {
  Package,
  ArrowRight,
  LayoutDashboard,
  RefreshCw,
  Award,
  BarChart3,
  Users,
} from "lucide-react";

import { PRICING_CATEGORIES, PROJECTS } from "../../data/constants";
import useInView from "../../hooks/useInView";
import SectionHeader from "../mini/SectionHeader";

function StockPilotMockup({ t }) {
  const dark = t.pageBg === "#0a0a0a";
  const bg = dark ? "#0e0e0e" : "#ffffff";
  const panel = dark ? "#141414" : "#f3f4f6";
  const card = dark ? "#1a1a1a" : "#ffffff";
  const bdr = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)";
  const txt = dark ? "#f0f0f0" : "#111";
  const muted = dark ? "#555" : "#aaa";
  const acc = "#ccea4a";

  return (
    <div
      style={{
        borderRadius: 14,
        overflow: "hidden",
        border: `1px solid ${bdr}`,
        background: bg,
        userSelect: "none",
        boxShadow: dark
          ? "0 32px 64px rgba(0,0,0,0.8)"
          : "0 32px 64px rgba(0,0,0,0.08)",
      }}
    >
      {/* Chrome bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "9px 14px",
          borderBottom: `1px solid ${bdr}`,
          background: panel,
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#ff5f57",
          }}
        />
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#ffbd2e",
          }}
        />
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#28ca41",
          }}
        />
        <div
          style={{
            marginLeft: 8,
            flex: 1,
            height: 18,
            borderRadius: 4,
            background: bdr,
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
          }}
        >
          <span style={{ fontSize: 9, color: muted }}>
            stockpilot.app / dashboard
          </span>
        </div>
      </div>

      <div style={{ display: "flex", height: 340 }}>
        {/* Sidebar */}
        <div
          style={{
            width: 48,
            background: panel,
            borderRight: `1px solid ${bdr}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "12px 0",
            gap: 6,
          }}
        >
          {[LayoutDashboard, Package, RefreshCw, BarChart3, Users].map(
            (Icon, i) => (
              <div
                key={i}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: i === 0 ? acc : "transparent",
                }}
              >
                <Icon
                  size={13}
                  style={{ color: i === 0 ? "#0a0a0a" : muted }}
                />
              </div>
            ),
          )}
        </div>

        {/* Main */}
        <div
          style={{ flex: 1, padding: 14, overflow: "hidden", background: bg }}
        >
          {/* KPI row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 8,
              marginBottom: 12,
            }}
          >
            {[
              { label: "Total Items", val: "1,284", color: txt },
              { label: "Low Stock", val: "14", color: "#f87171" },
              { label: "Purchases", val: "₱82K", color: "#60a5fa" },
              { label: "Sales", val: "₱134K", color: acc },
            ].map((k, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 8,
                  padding: "9px 10px",
                  border: `1px solid ${bdr}`,
                  background: card,
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    color: k.color,
                    fontFamily: "Epilogue, sans-serif",
                    lineHeight: 1,
                  }}
                >
                  {k.val}
                </div>
                <div
                  style={{
                    fontSize: 8,
                    color: muted,
                    marginTop: 3,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {k.label}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: 8,
              marginBottom: 8,
            }}
          >
            {/* Chart */}
            <div
              style={{
                borderRadius: 8,
                border: `1px solid ${bdr}`,
                padding: 10,
                background: card,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <span style={{ fontSize: 9, fontWeight: 600, color: txt }}>
                  Monthly Overview
                </span>
                <span style={{ fontSize: 8, color: muted }}>Last 6 months</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 4,
                  height: 52,
                }}
              >
                {[
                  { p: 50, s: 70 },
                  { p: 65, s: 55 },
                  { p: 45, s: 80 },
                  { p: 80, s: 60 },
                  { p: 55, s: 90 },
                  { p: 70, s: 75 },
                ].map((bar, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      display: "flex",
                      gap: 2,
                      alignItems: "flex-end",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        borderRadius: 2,
                        height: `${bar.p}%`,
                        background: "#60a5fa88",
                      }}
                    />
                    <div
                      style={{
                        flex: 1,
                        borderRadius: 2,
                        height: `${bar.s}%`,
                        background: acc + "cc",
                      }}
                    />
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: 2,
                      background: "#60a5fa88",
                    }}
                  />
                  <span style={{ fontSize: 7, color: muted }}>Purchases</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: 2,
                      background: acc + "cc",
                    }}
                  />
                  <span style={{ fontSize: 7, color: muted }}>Sales</span>
                </div>
              </div>
            </div>

            {/* Stock distribution */}
            <div
              style={{
                borderRadius: 8,
                border: `1px solid ${bdr}`,
                padding: 10,
                background: card,
              }}
            >
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  color: txt,
                  display: "block",
                  marginBottom: 8,
                }}
              >
                Stock Status
              </span>
              {[
                { label: "In Stock", pct: 72, color: acc },
                { label: "Low Stock", pct: 18, color: "#f87171" },
                { label: "Out", pct: 10, color: muted },
              ].map((s, i) => (
                <div key={i} style={{ marginBottom: 7 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 3,
                    }}
                  >
                    <span style={{ fontSize: 8, color: muted }}>{s.label}</span>
                    <span
                      style={{ fontSize: 8, fontWeight: 700, color: s.color }}
                    >
                      {s.pct}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: 4,
                      borderRadius: 2,
                      background: bdr,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${s.pct}%`,
                        borderRadius: 2,
                        background: s.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent transactions */}
          <div
            style={{
              borderRadius: 8,
              border: `1px solid ${bdr}`,
              padding: 10,
              background: card,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <span style={{ fontSize: 9, fontWeight: 600, color: txt }}>
                Recent Transactions
              </span>
              <span style={{ fontSize: 8, color: acc, fontWeight: 600 }}>
                View all →
              </span>
            </div>
            {[
              {
                name: "Office Chairs",
                type: "purchase",
                qty: "+24",
                inv: "INV-0041",
              },
              {
                name: "Printer Paper A4",
                type: "sale",
                qty: "-10",
                inv: "INV-0042",
              },
              { name: "USB-C Hubs", type: "sale", qty: "-6", inv: "INV-0043" },
            ].map((tx, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: i < 2 ? 7 : 0,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 6,
                      background:
                        tx.type === "purchase" ? "#60a5fa18" : `${acc}18`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 800,
                        color: tx.type === "purchase" ? "#60a5fa" : acc,
                      }}
                    >
                      {tx.qty}
                    </span>
                  </div>
                  <div>
                    <div style={{ fontSize: 9, fontWeight: 600, color: txt }}>
                      {tx.name}
                    </div>
                    <div style={{ fontSize: 7, color: muted }}>{tx.inv}</div>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 8,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: tx.type === "purchase" ? "#60a5fa" : acc,
                  }}
                >
                  {tx.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Work({ t, scrollTo }) {
  const [ref, inView] = useInView();
  const p = PROJECTS[0];

  return (
    <section
      id="work"
      style={{
        borderTop: `1px solid ${t.border}`,
        padding: "80px 0",
        background: t.altBg,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader
          t={t}
          label="Our Work"
          labelIcon={Award}
          heading={
            <>
              Built and
              <br />
              delivered.
            </>
          }
          subtext="Real projects, real outcomes. More on the way."
        />

        <div
          ref={ref}
          className="work-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr", // default desktop
            gap: 0,
            border: `1px solid ${t.border}`,
            borderRadius: 16,
            overflow: "hidden",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s, transform 0.7s",
          }}
        >
          {/* LEFT — Mockup */}
          <div
            style={{
              padding: "40px 36px",
              background: t.altBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 580,
            }}
          >
            <StockPilotMockup t={t} />
          </div>

          {/* RIGHT — Project Info */}
          <div
            style={{
              padding: "44px 40px",
              background: t.cardBg,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              {/* Tags */}
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
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: 20,
                    background: `${t.accent}18`,
                    border: `1px solid ${t.accent}40`,
                    color: t.accent,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {p.division}
                </span>
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: 20,
                    background: t.tagBg,
                    border: `1px solid ${t.border}`,
                    color: t.muted,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {p.client}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                  fontWeight: 800,
                  color: t.heading,
                  fontFamily: "Epilogue, sans-serif",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  marginBottom: 6,
                }}
              >
                {p.name}
              </h3>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: t.faint,
                  marginBottom: 20,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {p.type}
              </p>

              {/* Problem & Outcome */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  marginBottom: 28,
                }}
              >
                <div
                  style={{
                    padding: "14px 16px",
                    borderRadius: 8,
                    border: `1px solid ${t.border}`,
                    background: t.altBg,
                  }}
                >
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: t.faint,
                      marginBottom: 5,
                    }}
                  >
                    The Problem
                  </p>
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: t.muted }}>
                    {p.problem}
                  </p>
                </div>

                <div
                  style={{
                    padding: "14px 16px",
                    borderRadius: 8,
                    border: `1px solid ${t.accent}30`,
                    background: `${t.accent}08`,
                  }}
                >
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: t.accent,
                      marginBottom: 5,
                    }}
                  >
                    What We Delivered
                  </p>
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: t.muted }}>
                    {p.outcome}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div style={{ marginBottom: 28 }}>
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: t.faint,
                    marginBottom: 12,
                  }}
                >
                  Key Features
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 8,
                  }}
                  className="features-mini-grid"
                >
                  {p.features.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                      }}
                    >
                      <div
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: t.accent,
                          marginTop: 6,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{ fontSize: 12, color: t.body, lineHeight: 1.5 }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: t.faint,
                    marginBottom: 10,
                  }}
                >
                  Tech Stack
                </p>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {p.stack.map((s, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        padding: "4px 10px",
                        borderRadius: 6,
                        background: t.tagBg,
                        border: `1px solid ${t.border}`,
                        color: t.muted,
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollTo("contact")}
              style={{
                marginTop: 32,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: t.accent,
                color: t.accentText,
                border: "none",
                borderRadius: 8,
                padding: "12px 24px",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                alignSelf: "flex-start",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = t.accentDark)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = t.accent)
              }
            >
              Build something similar <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* More projects note */}
        <div
          style={{
            marginTop: 20,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div style={{ flex: 1, height: 1, background: t.border }} />
          <span
            style={{
              fontSize: 12,
              color: t.faint,
              fontFamily: "Inter, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            More projects coming soon
          </span>
          <div style={{ flex: 1, height: 1, background: t.border }} />
        </div>
      </div>
    </section>
  );
}
function Pricing({ t, scrollTo }) {
  const [active, setActive] = useState("digital");
  const [ref, inView] = useInView();
  const cat = PRICING_CATEGORIES.find((c) => c.id === active);

  const fmt = (n) => "₱" + n.toLocaleString("en-PH");

  const billingMeta = {
    monthly: {
      label: "monthly",
      bg: `${t.accent}18`,
      color: t.accent,
      border: `${t.accent}40`,
    },
    "one-time": {
      label: "one-time",
      bg: "#60a5fa18",
      color: "#60a5fa",
      border: "#60a5fa40",
    },
    annual: {
      label: "annual",
      bg: "#a78bfa18",
      color: "#a78bfa",
      border: "#a78bfa40",
    },
    "per template": {
      label: "per template",
      bg: t.tagBg,
      color: t.muted,
      border: t.border,
    },
    "per plan": {
      label: "per plan",
      bg: t.tagBg,
      color: t.muted,
      border: t.border,
    },
  };

  const Pill = ({ billing }) => {
    const m = billingMeta[billing] || billingMeta["per template"];
    return (
      <span
        style={{
          display: "inline-block",
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding: "3px 8px",
          borderRadius: 20,
          whiteSpace: "nowrap",
          background: m.bg,
          color: m.color,
          border: `1px solid ${m.border}`,
          fontFamily: "Inter, sans-serif",
        }}
      >
        {m.label}
      </span>
    );
  };

  // Flat row — desktop table, mobile card
  const FlatRow = ({ item, last }) => (
    <>
      {/* Desktop row */}
      <div
        className="pricing-row-desktop"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 140px 140px",
          padding: "15px 28px",
          alignItems: "center",
          borderBottom: last ? "none" : `1px solid ${t.border}`,
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = t.tagBg)}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: t.heading,
            fontFamily: "Inter, sans-serif",
          }}
        >
          {item.name}
        </span>
        <Pill billing={item.billing} />
        <span
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: t.heading,
            fontFamily: "Epilogue, sans-serif",
            textAlign: "right",
          }}
        >
          {fmt(item.price)}
        </span>
      </div>

      {/* Mobile card */}
      <div
        className="pricing-row-mobile"
        style={{
          display: "none",
          padding: "16px 20px",
          borderBottom: last ? "none" : `1px solid ${t.border}`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 6,
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: t.heading,
              fontFamily: "Inter, sans-serif",
              flex: 1,
              paddingRight: 12,
            }}
          >
            {item.name}
          </span>
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              color: t.heading,
              fontFamily: "Epilogue, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            {fmt(item.price)}
          </span>
        </div>
        <Pill billing={item.billing} />
      </div>
    </>
  );

  // Tiered row — desktop table, mobile card
  const TierRow = ({ tier, last }) => (
    <>
      {/* Desktop */}
      <div
        className="pricing-row-desktop"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 120px 140px",
          padding: "14px 28px",
          alignItems: "center",
          borderBottom: last ? "none" : `1px solid ${t.border}`,
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = t.tagBg)}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: t.heading,
            fontFamily: "Inter, sans-serif",
          }}
        >
          {tier.name}
        </span>
        <span
          style={{
            fontSize: 12,
            color: t.muted,
            fontFamily: "Inter, sans-serif",
          }}
        >
          {tier.sub}
        </span>
        <Pill billing={tier.billing} />
        <span
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: t.heading,
            fontFamily: "Epilogue, sans-serif",
            textAlign: "right",
          }}
        >
          {fmt(tier.price)}
        </span>
      </div>

      {/* Mobile card */}
      <div
        className="pricing-row-mobile"
        style={{
          display: "none",
          padding: "16px 20px",
          borderBottom: last ? "none" : `1px solid ${t.border}`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 4,
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: t.heading,
              fontFamily: "Inter, sans-serif",
              flex: 1,
              paddingRight: 12,
            }}
          >
            {tier.name}
          </span>
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              color: t.heading,
              fontFamily: "Epilogue, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            {fmt(tier.price)}
          </span>
        </div>
        <p
          style={{
            fontSize: 12,
            color: t.muted,
            marginBottom: 6,
            fontFamily: "Inter, sans-serif",
          }}
        >
          {tier.sub}
        </p>
        <Pill billing={tier.billing} />
      </div>
    </>
  );

  return (
    <>
      <Work t={t} />
      <section
        id="pricing"
        style={{
          borderTop: `1px solid ${t.border}`,
          padding: "80px 0",
          background: t.altBg,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }}>
          <SectionHeader
            t={t}
            label="Pricing"
            labelIcon={Package}
            heading={
              <>
                Transparent pricing
                <br />
                for every need.
              </>
            }
            subtext="Every price listed here is final — no hidden fees. Pick a category to explore."
          />

          {/* Category tabs */}
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              marginBottom: 40,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s, transform 0.6s",
            }}
          >
            {PRICING_CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "9px 18px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  border:
                    active === c.id
                      ? `1.5px solid ${t.accent}`
                      : `1px solid ${t.border}`,
                  background: active === c.id ? `${t.accent}14` : t.cardBg,
                  color: active === c.id ? t.accent : t.muted,
                  transition: "all 0.2s",
                }}
              >
                <c.icon size={13} />
                {c.label}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div
            style={{
              border: `1px solid ${t.border}`,
              borderRadius: 14,
              background: t.cardBg,
              overflow: "hidden",
            }}
          >
            {/* Panel header */}
            <div
              style={{
                padding: "24px 28px",
                borderBottom: `1px solid ${t.border}`,
                display: "flex",
                alignItems: "center",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: `${t.accent}18`,
                  border: `1px solid ${t.accent}38`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <cat.icon size={19} style={{ color: t.accent }} />
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: t.heading,
                    fontFamily: "Epilogue, sans-serif",
                    marginBottom: 2,
                  }}
                >
                  {cat.label}
                </h3>
                <p style={{ fontSize: 13, color: t.muted }}>
                  {cat.description}
                </p>
              </div>
            </div>

            {/* Flat items (digital, websites, building) */}
            {cat.items && (
              <div>
                {/* Desktop legend */}
                <div
                  className="pricing-row-desktop"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 140px 140px",
                    padding: "10px 28px",
                    borderBottom: `1px solid ${t.border}`,
                    background: t.tagBg,
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: t.faint,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Item
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: t.faint,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Billing
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: t.faint,
                      fontFamily: "Inter, sans-serif",
                      textAlign: "right",
                    }}
                  >
                    Price
                  </span>
                </div>
                {cat.items.map((item, i) => (
                  <FlatRow
                    key={i}
                    item={item}
                    last={i === cat.items.length - 1}
                  />
                ))}
              </div>
            )}

            {/* Grouped tiers (systems, apps) */}
            {cat.groups &&
              cat.groups.map((group, gi) => (
                <div
                  key={gi}
                  style={{
                    borderBottom:
                      gi < cat.groups.length - 1
                        ? `1px solid ${t.border}`
                        : "none",
                  }}
                >
                  {/* Group label */}
                  <div
                    style={{
                      padding: "13px 28px",
                      background: t.tagBg,
                      borderBottom: `1px solid ${t.border}`,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        color: t.muted,
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {group.name}
                    </span>
                  </div>
                  {/* Desktop legend */}
                  <div
                    className="pricing-row-desktop"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 120px 140px",
                      padding: "8px 28px",
                      borderBottom: `1px solid ${t.border}`,
                    }}
                  >
                    {["Tier", "Best for", "Billing", "Price"].map((h, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.14em",
                          color: t.faint,
                          fontFamily: "Inter, sans-serif",
                          textAlign: i === 3 ? "right" : "left",
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  {group.tiers.map((tier, ti) => (
                    <TierRow
                      key={ti}
                      tier={tier}
                      last={ti === group.tiers.length - 1}
                    />
                  ))}
                </div>
              ))}

            {/* Panel footer */}
            <div
              style={{
                padding: "18px 28px",
                borderTop: `1px solid ${t.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  color: t.faint,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                All prices in Philippine Peso (₱). Scope may affect final
                pricing.
              </p>
              <button
                onClick={() => scrollTo("contact")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: t.accent,
                  color: t.accentText,
                  border: "none",
                  borderRadius: 7,
                  padding: "10px 20px",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  transition: "background 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = t.accentDark)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = t.accent)
                }
              >
                Get a quote <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Billing legend */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 20,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: t.faint,
                fontFamily: "Inter, sans-serif",
              }}
            >
              Key:
            </span>
            {Object.entries(billingMeta).map(([key, m]) => (
              <div
                key={key}
                style={{ display: "flex", alignItems: "center", gap: 6 }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "3px 8px",
                    borderRadius: 20,
                    background: m.bg,
                    color: m.color,
                    border: `1px solid ${m.border}`,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {key}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
