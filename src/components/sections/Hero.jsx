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
} from "lucide-react";

import { STATS } from "../../data/constants";

function DashboardMockup({ dark, t }) {
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
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          inset: -40,
          background: `radial-gradient(ellipse at 55% 50%, ${acc}22 0%, transparent 65%)`,
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
            ? "0 40px 80px rgba(0,0,0,0.9), 0 0 0 1px rgba(204,234,74,0.06)"
            : "0 40px 80px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.06)",
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
            {[LayoutDashboard, Activity, BarChart3, Settings2, Users].map(
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
                { label: "Uptime", val: "99.98%", color: acc },
                { label: "Requests", val: "4.2M", color: "#60a5fa" },
                { label: "Alerts", val: "0 open", color: "#4ade80" },
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
                      fontSize: 13,
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
                  Deployments
                </span>
                <span style={{ fontSize: 8, color: muted }}>Last 7 days</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 4,
                  height: 44,
                }}
              >
                {[35, 60, 45, 80, 55, 95, 70].map((h, i) => (
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

            {/* Log */}
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
                    animation: "pulse 2s infinite",
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
                  Live Events
                </span>
              </div>
              {[
                { text: "prod-api-v2.14 deployed successfully", color: acc },
                {
                  text: "SSL certificate renewed · gobeyond.ph",
                  color: "#60a5fa",
                },
                {
                  text: "Daily backup completed · db-primary",
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

      {/* Badges */}
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
            : "0 10px 30px rgba(0,0,0,0.10)",
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
            99.98% Uptime
          </div>
          <div style={{ fontSize: 9, color: "#4ade80", fontWeight: 600 }}>
            ● All systems go
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
          Deployed just now
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
      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(${dark ? "rgba(204,234,74,0.10)" : "rgba(0,0,0,0.07)"} 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      {/* Lime glow blob */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${t.accent}18 0%, transparent 65%)`,
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
            {/* Eyebrow */}
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
                IT Solutions Built for Humans · PH-Based
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.8rem,5.5vw,4.2rem)",
                fontWeight: 800,
                lineHeight: 1.03,
                letterSpacing: "-0.03em",
                color: t.heading,
                marginBottom: 24,
                fontFamily: "Epilogue, sans-serif",
              }}
            >
              The IT partner
              <br />
              that <span style={{ color: t.accent }}>actually cares</span>
            </h1>

            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: t.muted,
                maxWidth: 420,
                marginBottom: 36,
              }}
            >
              GoBeyond builds SaaS products, manages cloud infrastructure,
              automates with AI, and secures your systems — with a team that
              communicates like humans, not ticket numbers.
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
                onClick={() => scrollTo("pricing")}
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
                See Pricing <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo("services")}
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
                <Play size={13} style={{ fill: "currentColor" }} /> Our Services
              </button>
            </div>

            {/* Stats */}
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
            <DashboardMockup dark={dark} t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
