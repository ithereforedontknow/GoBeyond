import { HeroMockup } from "./Hero";

const FONT = "'Inter', system-ui, -apple-system, sans-serif";

// Airbnb's layout instinct: a quiet hero, then the real visual weight lands
// immediately below it — here, the product mockup itself, blown up and
// given its own breathing room instead of being squeezed into a hero column.
function HeroShowcase({ t, dark }) {
  return (
    <section style={{ padding: "0 24px 96px", background: t.pageBg }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontFamily: FONT,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "-0.224px",
            color: t.accent,
            marginBottom: 12,
          }}
        >
          See it in action
        </p>
        <h2
          style={{
            fontFamily: FONT,
            fontSize: "clamp(1.6rem,3vw,2.1rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: t.heading,
            marginBottom: 44,
          }}
        >
          One partner, three divisions — see the work.
        </h2>
        <HeroMockup dark={dark} maxWidth={880} />
      </div>
    </section>
  );
}

export default HeroShowcase;
