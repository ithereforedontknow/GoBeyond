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
function DashboardMockup({ dark }) {
  const bg = dark ? "#1c1008" : "#ffffff";
  const panel = dark ? "#231408" : "#faf6f2";
  const card = dark ? "#231408" : "#ffffff";
  const bdr = dark ? "#3d2010" : "#f0e8df";
  const txt = dark ? "#f5f0eb" : "#1c1917";
  const muted = dark ? "#78716c" : "#a8a29e";
  const coral = "#ea580c";
  const amber = "#d97706";

  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      <div
        className="absolute -inset-6 rounded-3xl opacity-40 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 55% 45%, #ea580c44 0%, transparent 70%)",
        }}
      />

      <div
        className="relative rounded-2xl overflow-hidden border"
        style={{
          background: bg,
          borderColor: bdr,
          boxShadow: dark
            ? "0 32px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(234,88,12,0.12)"
            : "0 32px 64px rgba(234,88,12,0.14), 0 0 0 1px rgba(234,88,12,0.07)",
        }}
      >
        {/* Chrome */}
        <div
          className="flex items-center gap-1.5 px-4 py-3 border-b"
          style={{ borderColor: bdr, background: panel }}
        >
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <div
            className="ml-3 flex-1 h-5 rounded-md flex items-center px-3"
            style={{ background: bdr }}
          >
            <span style={{ fontSize: 9, color: muted }}>
              app.gobeyond.ph/dashboard
            </span>
          </div>
        </div>

        <div className="flex" style={{ height: 310 }}>
          {/* Sidebar */}
          <div
            className="flex flex-col gap-1.5 p-2.5 border-r"
            style={{ borderColor: bdr, background: panel, width: 52 }}
          >
            {[LayoutDashboard, Activity, BarChart3, Settings2, Users].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: i === 0 ? coral : "transparent" }}
                >
                  <Icon size={14} style={{ color: i === 0 ? "#fff" : muted }} />
                </div>
              ),
            )}
          </div>

          {/* Body */}
          <div
            className="flex-1 p-4 overflow-hidden"
            style={{ background: bg }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <div
                  className="h-3 w-28 rounded-md mb-1.5"
                  style={{ background: bdr }}
                />
                <div
                  className="h-2 w-20 rounded-md"
                  style={{ background: dark ? "#3d2010" : "#f5ede6" }}
                />
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: bdr }}
                >
                  <Bell size={11} style={{ color: muted }} />
                </div>
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-rose-500" />
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { label: "Uptime", val: "99.98%", color: coral },
                { label: "Requests", val: "4.2M", color: amber },
                { label: "Alerts", val: "0 open", color: "#16a34a" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl p-2.5 border"
                  style={{ background: card, borderColor: bdr }}
                >
                  <div
                    style={{ fontSize: 13, fontWeight: 700, color: s.color }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontSize: 8,
                      color: muted,
                      marginTop: 2,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div
              className="rounded-xl border p-3 mb-3"
              style={{ background: card, borderColor: bdr }}
            >
              <div className="flex items-center justify-between mb-2">
                <span style={{ fontSize: 9, fontWeight: 600, color: txt }}>
                  Deployments
                </span>
                <span style={{ fontSize: 8, color: muted }}>Last 7 days</span>
              </div>
              <div className="flex items-end gap-1" style={{ height: 44 }}>
                {[35, 60, 45, 80, 55, 95, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      background:
                        i === 5
                          ? `linear-gradient(to top, ${coral}, #fb923c)`
                          : dark
                            ? "#3d2010"
                            : "#fde8dc",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Live log */}
            <div
              className="rounded-xl border p-3"
              style={{ background: panel, borderColor: bdr }}
            >
              <div className="flex items-center gap-1.5 mb-2">
                <span
                  className="w-1.5 h-1.5 rounded-full pulse-ring"
                  style={{ background: "#4ade80" }}
                />
                <span
                  style={{
                    fontSize: 8,
                    color: muted,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Live Events
                </span>
              </div>
              {[
                { text: "prod-api-v2.14 deployed successfully", color: coral },
                { text: "SSL certificate renewed · gobeyond.ph", color: amber },
                {
                  text: "Daily backup completed · db-primary",
                  color: "#16a34a",
                },
              ].map((line, i) => (
                <div key={i} className="flex items-center gap-2 mb-1">
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
        className="absolute -bottom-5 -right-5 rounded-2xl border px-4 py-3 flex items-center gap-3"
        style={{
          background: dark ? "#231408" : "#ffffff",
          borderColor: bdr,
          boxShadow: dark
            ? "0 8px 24px rgba(0,0,0,0.5)"
            : "0 8px 24px rgba(234,88,12,0.14)",
        }}
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center shadow-md">
          <Wifi size={14} className="text-white" />
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: txt }}>
            99.98% Uptime
          </div>
          <div style={{ fontSize: 9, color: "#16a34a", fontWeight: 600 }}>
            ● All systems go
          </div>
        </div>
      </div>

      <div
        className="absolute -top-5 -left-5 rounded-2xl border px-3 py-2.5 flex items-center gap-2"
        style={{
          background: dark ? "#231408" : "#ffffff",
          borderColor: bdr,
          boxShadow: dark
            ? "0 8px 24px rgba(0,0,0,0.5)"
            : "0 8px 24px rgba(234,88,12,0.12)",
        }}
      >
        <GitBranch size={13} style={{ color: coral }} />
        <span style={{ fontSize: 10, fontWeight: 600, color: txt }}>
          Deployed just now
        </span>
      </div>
    </div>
  );
}
function Hero({ dark, scrollTo, t }) {
  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden ${dark ? "bg-stone-950 dot-grid-dark" : "bg-[#fffaf7] dot-grid-light"}`}
    >
      <div
        className={`absolute top-1/4 -left-24 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none ${dark ? "bg-orange-600/8" : "bg-orange-200/35"}`}
      />
      <div
        className={`absolute bottom-1/4 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none ${dark ? "bg-rose-600/6" : "bg-rose-200/25"}`}
      />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-7 fade-up ${t.pillOrange}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 pulse-ring" />
              <span className="text-xs font-semibold tracking-wide">
                IT Solutions Built for Humans · PH-Based
              </span>
            </div>

            <h1
              className={`text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6 fade-up s1 ${t.heading}`}
            >
              The IT partner
              <br />
              that <span className="hero-gradient">actually cares</span>
            </h1>

            <p
              className={`text-lg leading-relaxed max-w-lg mb-9 fade-up s2 ${t.muted}`}
            >
              GoBeyond builds SaaS products, manages cloud infrastructure,
              automates with AI, and secures your systems — with a team that
              communicates like humans, not ticket numbers.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12 fade-up s3">
              <button
                onClick={() => scrollTo("pricing")}
                className="group flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-xl transition-all text-base shadow-xl shadow-orange-200/50"
              >
                See Pricing{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => scrollTo("services")}
                className={`flex items-center gap-2 border px-8 py-4 rounded-xl transition-all text-base font-medium ${dark ? "border-stone-700 bg-stone-900 text-stone-300 hover:border-orange-700/50" : "border-stone-200 bg-white text-stone-600 hover:border-orange-300 hover:bg-orange-50"} shadow-sm`}
              >
                <Play size={15} /> Our Services
              </button>
            </div>

            <div className="flex flex-wrap gap-8 fade-up s4">
              {STATS.map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-orange-500">
                    {s.value}
                  </div>
                  <div
                    className={`text-xs uppercase tracking-widest font-medium mt-0.5 ${t.label}`}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block fade-up s2">
            <DashboardMockup dark={dark} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
