import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { CONTACT_INFO } from "../../data/constants";
import SectionLabel from "../mini/SectionLabel";
import AccentLine from "../mini/AccentLine";

function ContactForm({ t }) {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.msg.trim()) e.msg = "Message is required.";
    else if (form.msg.trim().length < 10) e.msg = "At least 10 characters.";
    return e;
  };

  const handleChange = (key, val) => {
    setForm((p) => ({ ...p, [key]: val }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
  };

  const inputStyle = (key) => ({
    width: "100%",
    border: `1px solid ${errors[key] ? "#f87171" : t.borderStrong}`,
    borderRadius: 8,
    padding: "11px 14px",
    fontSize: 14,
    outline: "none",
    background: t.inputBg,
    color: t.body,
    fontFamily: "Inter, sans-serif",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  });

  if (submitted)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "56px 0",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: 12,
            background: `${t.accent}1a`,
            border: `1px solid ${t.accent}45`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 18,
          }}
        >
          <CheckCircle2 size={26} style={{ color: t.accent }} />
        </div>
        <h3
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: t.heading,
            marginBottom: 6,
            fontFamily: "Epilogue, sans-serif",
          }}
        >
          Message sent!
        </h3>
        <p style={{ fontSize: 13, color: t.muted, lineHeight: 1.6 }}>
          We'll be in touch within one business day.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", msg: "" });
            setErrors({});
          }}
          style={{
            marginTop: 22,
            fontSize: 12,
            color: t.accent,
            background: "none",
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
          }}
        >
          Send another message
        </button>
      </div>
    );

  const lbl = {
    display: "block",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontWeight: 700,
    color: t.faint,
    marginBottom: 7,
    fontFamily: "Inter, sans-serif",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      {[
        { label: "Full Name", key: "name", type: "text", ph: "Your full name" },
        {
          label: "Email Address",
          key: "email",
          type: "email",
          ph: "Your email address",
        },
      ].map((field) => (
        <div key={field.key}>
          <label style={lbl}>{field.label}</label>
          <input
            type={field.type}
            value={form[field.key]}
            onChange={(e) => handleChange(field.key, e.target.value)}
            placeholder={field.ph}
            style={inputStyle(field.key)}
            onFocus={(e) =>
              (e.target.style.borderColor = errors[field.key]
                ? "#f87171"
                : t.accent)
            }
            onBlur={(e) =>
              (e.target.style.borderColor = errors[field.key]
                ? "#f87171"
                : t.borderStrong)
            }
          />
          {errors[field.key] && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                marginTop: 6,
              }}
            >
              <AlertCircle size={11} style={{ color: "#f87171" }} />
              <span style={{ fontSize: 11, color: "#f87171" }}>
                {errors[field.key]}
              </span>
            </div>
          )}
        </div>
      ))}
      <div>
        <label style={lbl}>Message</label>
        <textarea
          rows={4}
          value={form.msg}
          onChange={(e) => handleChange("msg", e.target.value)}
          placeholder="Tell us about your project or inquiry..."
          style={{ ...inputStyle("msg"), resize: "none" }}
          onFocus={(e) =>
            (e.target.style.borderColor = errors.msg ? "#f87171" : t.accent)
          }
          onBlur={(e) =>
            (e.target.style.borderColor = errors.msg
              ? "#f87171"
              : t.borderStrong)
          }
        />
        {errors.msg && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              marginTop: 6,
            }}
          >
            <AlertCircle size={11} style={{ color: "#f87171" }} />
            <span style={{ fontSize: 11, color: "#f87171" }}>{errors.msg}</span>
          </div>
        )}
      </div>
      <button
        onClick={() => {
          const e = validate();
          if (Object.keys(e).length) {
            setErrors(e);
            return;
          }
          setSubmitted(true);
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          background: t.accent,
          color: t.accentText,
          border: "none",
          borderRadius: 8,
          padding: "13px 0",
          fontSize: 14,
          fontWeight: 700,
          cursor: "pointer",
          fontFamily: "Inter, sans-serif",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = t.accentDark)}
        onMouseLeave={(e) => (e.currentTarget.style.background = t.accent)}
      >
        <Send size={14} /> Send Message
      </button>
      <p
        style={{
          fontSize: 10,
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          fontWeight: 600,
          color: t.faint,
          fontFamily: "Inter, sans-serif",
        }}
      >
        No spam, ever.
      </p>
    </div>
  );
}

function Contact({ t }) {
  return (
    <section
      id="contact"
      style={{
        borderTop: `1px solid ${t.border}`,
        padding: "100px 0",
        background: t.altBg,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          <div>
            <SectionLabel t={t} icon={Mail}>
              Get In Touch
            </SectionLabel>
            <AccentLine t={t} />
            <h2
              style={{
                fontSize: "clamp(2rem,3.8vw,2.9rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: t.heading,
                marginBottom: 10,
                fontFamily: "Epilogue, sans-serif",
              }}
            >
              Let's build
              <br />
              <span style={{ color: t.accent }}>something great.</span>
            </h2>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.75,
                color: t.muted,
                maxWidth: 380,
                marginBottom: 44,
              }}
            >
              Whether you have a project in mind, want to understand our
              services better, or simply want to explore what's possible — we'd
              love to hear from you.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {CONTACT_INFO.map((c, i) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "center", gap: 14 }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      border: `1px solid ${t.border}`,
                      background: `${t.accent}14`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <c.icon size={16} style={{ color: t.accent }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 10,
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        fontWeight: 700,
                        color: t.faint,
                        marginBottom: 2,
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: t.heading,
                      }}
                    >
                      {c.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              border: `1px solid ${t.border}`,
              borderRadius: 12,
              padding: "36px 32px",
              background: t.cardBg,
            }}
          >
            <h3
              style={{
                fontSize: 17,
                fontWeight: 800,
                color: t.heading,
                marginBottom: 4,
                fontFamily: "Epilogue, sans-serif",
              }}
            >
              Send us a message
            </h3>
            <p style={{ fontSize: 12, color: t.faint, marginBottom: 28 }}>
              All fields required. We respond within one business day.
            </p>
            <ContactForm t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
