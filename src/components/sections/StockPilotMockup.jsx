import {
  LayoutDashboard,
  Package,
  RefreshCw,
  BarChart3,
  Users,
} from "lucide-react";

export default function StockPilotMockup({ t }) {
  const isDark = t.pageBg === "#272729";
  const bg = isDark ? "#252527" : "#ffffff";
  const panel = isDark ? "#2a2a2c" : "#f5f5f7";
  const border = t.borderStrong;

  return (
    <div
      style={{
        border: `1px solid ${border}`,
        background: bg,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: 320,
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          height: 32,
          background: panel,
          borderBottom: `1px solid ${border}`,
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
        }}
      >
        <div style={{ display: "flex", gap: 5 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#ff5f57",
            }}
          />
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#ffbd2e",
            }}
          />
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#28ca41",
            }}
          />
        </div>
      </div>

      <div style={{ display: "flex", flex: 1 }}>
        {/* Left Nav Strip */}
        <div
          style={{
            width: 44,
            background: panel,
            borderRight: `1px solid ${border}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 12,
            gap: 12,
          }}
        >
          {[LayoutDashboard, Package, RefreshCw, BarChart3, Users].map(
            (Icon, i) => (
              <Icon
                key={i}
                size={14}
                style={{ color: i === 0 ? t.accent : t.muted }}
              />
            ),
          )}
        </div>

        {/* Content Pane */}
        <div
          style={{
            flex: 1,
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {/* Key Metrics */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 8,
            }}
          >
            {[
              { val: "1,284", label: "In Stock" },
              { val: "₱82K", label: "Purchases" },
              { val: "₱134K", label: "Sales" },
            ].map((m, i) => (
              <div
                key={i}
                style={{
                  border: `1px solid ${border}`,
                  padding: 8,
                  borderRadius: 8,
                  background: panel,
                }}
              >
                <div
                  style={{ fontSize: 14, fontWeight: 600, color: t.heading }}
                >
                  {m.val}
                </div>
                <div
                  style={{
                    fontSize: 8,
                    textTransform: "uppercase",
                    color: t.muted,
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Minimal Bar Chart placeholder */}
          <div
            style={{
              flex: 1,
              border: `1px solid ${border}`,
              borderRadius: 8,
              padding: 12,
              display: "flex",
              flexDirection: "column",
              justifyBetween: "true",
            }}
          >
            <span style={{ fontSize: 10, fontWeight: 600, color: t.heading }}>
              Performance Matrix
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 8,
                height: 64,
                marginTop: 8,
              }}
            >
              {[40, 70, 50, 90, 60, 80].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    background: t.accent,
                    borderRadius: 2,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
