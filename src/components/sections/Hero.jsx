import {
  ArrowRight,
  Play,
  GitBranch,
  Wifi,
  Activity,
  BarChart3,
  Settings2,
  Bell,
  Users,
  LayoutDashboard,
  Award,
} from "lucide-react";

import { STATS } from "../../data/constants";

function HeroMockup({ dark }) {
  const bg = dark ? "#0e0e0e" : "#ffffff";
  const panel = dark ? "#141414" : "#f7f7f7";
  const card = dark ? "#1a1a1a" : "#ffffff";
  const bdr = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)";
  const txt = dark ? "#f0f0f0" : "#111";
  const muted = dark ? "#555" : "#aaa";
  const acc = "#ccea4a";

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 480,
        margin: "0 auto",
        userSelect: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: -40,
          background: `radial-gradient(ellipse at 55% 50%, ${acc}1e 0%, transparent 65%)`,
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          borderRadius: 16,
          overflow: "hidden",
          border: `1px solid ${bdr}`,
          boxShadow: dark
            ? "0 40px 80px rgba(0,0,0,0.88), 0 0 0 1px rgba(204,234,74,0.05)"
            : "0 40px 80px rgba(0,0,0,0.09), 0 0 0 1px rgba(0,0,0,0.05)",
          background: bg,
        }}
      >
        {/* Chrome */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "10px 14px",
            borderBottom: `1px solid ${bdr}`,
            background: panel,
          }}
        >
          <span
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: "#ff5f57",
            }}
          />
          <span
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: "#ffbd2e",
            }}
          />
          <span
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: "#28ca41",
            }}
          />
          <div
            style={{
              marginLeft: 10,
              flex: 1,
              height: 20,
              borderRadius: 4,
              background: bdr,
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
            }}
          >
            <span style={{ fontSize: 9, color: muted }}>
              app.gobeyond.ph/dashboard
            </span>
          </div>
        </div>

        <div style={{ display: "flex", height: 310 }}>
          {/* Sidebar */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: 10,
              borderRight: `1px solid ${bdr}`,
              background: panel,
              width: 52,
            }}
          >
            {[LayoutDashboard, Activity, BarChart3, Award, Users].map(
              (Icon, i) => (
                <div
                  key={i}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: i === 0 ? acc : "transparent",
                  }}
                >
                  <Icon
                    size={14}
                    style={{ color: i === 0 ? "#0a0a0a" : muted }}
                  />
                </div>
              ),
            )}
          </div>

          {/* Body */}
          <div
            style={{ flex: 1, padding: 16, overflow: "hidden", background: bg }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 14,
              }}
            >
              <div>
                <div
                  style={{
                    height: 11,
                    width: 110,
                    borderRadius: 4,
                    background: bdr,
                    marginBottom: 6,
                  }}
                />
                <div
                  style={{
                    height: 8,
                    width: 80,
                    borderRadius: 4,
                    background: bdr,
                  }}
                />
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: bdr,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Bell size={11} style={{ color: muted }} />
                </div>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${acc}, #a8c430)`,
                  }}
                />
              </div>
            </div>

            {/* KPIs */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 8,
                marginBottom: 14,
              }}
            >
              {[
                { label: "Projects", val: "12 Active", color: acc },
                { label: "On Track", val: "100%", color: "#4ade80" },
                { label: "Clients", val: "8 Live", color: "#60a5fa" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: 10,
                    padding: 10,
                    border: `1px solid ${bdr}`,
                    background: card,
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: s.color,
                      fontFamily: "Epilogue, sans-serif",
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontSize: 8,
                      color: muted,
                      marginTop: 2,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div
              style={{
                borderRadius: 10,
                border: `1px solid ${bdr}`,
                padding: 12,
                marginBottom: 10,
                background: card,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <span style={{ fontSize: 9, fontWeight: 600, color: txt }}>
                  Deliverables This Month
                </span>
                <span style={{ fontSize: 8, color: muted }}>Last 7 weeks</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 4,
                  height: 44,
                }}
              >
                {[30, 55, 40, 75, 50, 90, 65].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      borderRadius: 3,
                      height: `${h}%`,
                      background: i === 5 ? acc : dark ? "#282828" : "#e8e8e8",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Live log */}
            <div
              style={{
                borderRadius: 10,
                border: `1px solid ${bdr}`,
                padding: 10,
                background: panel,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#4ade80",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    fontSize: 8,
                    color: muted,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Recent Activity
                </span>
              </div>
              {[
                {
                  text: "Digital tool prototype — Phase 2 approved",
                  color: acc,
                },
                {
                  text: "Client website launched · gobeyond.ph/work",
                  color: "#60a5fa",
                },
                {
                  text: "Building plan revision · Lot 4 Block 3 completed",
                  color: "#4ade80",
                },
              ].map((line, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 5,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: line.color,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 8,
                      color: muted,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {line.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div
        style={{
          position: "absolute",
          bottom: -16,
          right: -16,
          borderRadius: 12,
          border: `1px solid ${bdr}`,
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: dark ? "#141414" : "#fff",
          boxShadow: dark
            ? "0 10px 30px rgba(0,0,0,0.7)"
            : "0 10px 30px rgba(0,0,0,0.09)",
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            background: acc,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Wifi size={14} style={{ color: "#0a0a0a" }} />
        </div>
        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: txt,
              fontFamily: "Epilogue, sans-serif",
            }}
          >
            3 Divisions. 1 Partner.
          </div>
          <div style={{ fontSize: 9, color: "#4ade80", fontWeight: 600 }}>
            ● All projects on track
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: -16,
          left: -16,
          borderRadius: 10,
          border: `1px solid ${bdr}`,
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          gap: 7,
          background: dark ? "#141414" : "#fff",
          boxShadow: dark
            ? "0 10px 30px rgba(0,0,0,0.7)"
            : "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <GitBranch size={12} style={{ color: acc }} />
        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            color: txt,
            fontFamily: "Inter, sans-serif",
          }}
        >
          New project kicked off
        </span>
      </div>
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
