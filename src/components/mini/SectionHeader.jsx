import SectionLabel from "./SectionLabel";
import AccentLine from "./AccentLine";
import { FONT_DISPLAY, FONT_TEXT } from "../../data/constants";

function SectionHeader({ t, label, labelIcon, heading, subtext }) {
  return (
    <div style={{ marginBottom: 72 }}>
      <SectionLabel t={t} icon={labelIcon}>
        {label}
      </SectionLabel>
      <AccentLine t={t} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        <h2
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: "clamp(2.3rem,4.2vw,3.2rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: t.heading,
            maxWidth: 480,
          }}
        >
          {heading}
        </h2>
        {subtext && (
          <p
            style={{
              fontFamily: FONT_TEXT,
              fontSize: 17,
              lineHeight: 1.55,
              color: t.muted,
              maxWidth: 380,
              fontWeight: 400,
            }}
          >
            {subtext}
          </p>
        )}
      </div>
    </div>
  );
}
export default SectionHeader;
