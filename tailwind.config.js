module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary – Cyan
        primary: {
          DEFAULT: "#00bcd4",
          light: "#62efff",
          dark: "#008ba3",
        },
        // Secondary – Yellow
        secondary: {
          DEFAULT: "#ffeb3b",
          light: "#ffff72",
          dark: "#c8b900",
        },
        // Tertiary – Light Green
        tertiary: {
          DEFAULT: "#8bc34a",
          light: "#bef67a",
          dark: "#5a9216",
        },
        // Neutrals (light mode)
        base: "#f5f7fa",
        raised: "#ffffff",
        card: "#ffffff",
        border: "#e2e8f0",
        muted: "#94a3b8",
        dim: "#64748b",
        body: "#1e293b",
        head: "#0f172a",
      },
      fontFamily: {
        sans: [
          '"Google Sans"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        "2xs": ["10px", { lineHeight: "14px", letterSpacing: "0.06em" }],
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0,0,0,0.05)",
        card: "0 4px 12px rgba(0,0,0,0.08)",
        popup: "0 8px 24px rgba(0,0,0,0.12)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        "fade-up": "fade-up 0.35s ease-out both",
        "fade-in": "fade-in 0.25s ease-out both",
      },
    },
  },
  plugins: [],
};
