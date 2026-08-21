import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { CONTACT_INFO } from "../../data/constants";
import SectionLabel from "../mini/SectionLabel";
import AccentLine from "../mini/AccentLine";
import { FONT_DISPLAY, FONT_TEXT, HAIRLINE, ACC_DIM, SOFT_SHADOW } from "../../data/constants";
import emailjs from "@emailjs/browser";

function ContactForm({ t }) {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sendError, setSendError] = useState(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.msg.trim()) e.msg = "Message is required.";
    else if (form.msg.trim().length < 10) e.msg = "At least 10 characters.";
    return e;
  };

  const handleChange = (key, val) => {
    setForm((p) => ({ ...p, [key]: val }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
    if (sendError) setSendError(null);
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setSendError(null);

    const now = new Date();
    const formattedTime = now.toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" });

    const templateParams = {
      title: `Let's build something great: ${form.name} wants to connect`,
      name: form.name,
      email: form.email,
      message: form.msg,
      time: formattedTime,
      accentColor: t.accent || "#0a8a3f",
      accentDark: t.accentDark || "#066a30",
      portfolioUrl: window.location.origin,
      currentYear: new Date().getFullYear().toString(),
    };

    try {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!publicKey || !serviceId || !templateId) {
        throw new Error("Email service configuration missing");
      }

      emailjs.init(publicKey);
      await emailjs.send(serviceId, templateId, templateParams);

      setShowSuccessToast(true);
      setTimeout(() => setShowSuccessToast(false), 3000);

      setForm({ name: "", email: "", msg: "" });
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      setSendError(error.message || "Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle = (key) => ({
    width: "100%",
    border: `1.5px solid ${errors[key] ? "#dc2626" : HAIRLINE}`,
    borderRadius: 10,
    padding: "12px 14px",
    fontSize: 14,
    outline: "none",
    background: t.inputBg,
    color: t.body,
    fontFamily: FONT_TEXT,
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  });

  if (submitted) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "56px 0", textAlign: "center" }}>
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: 14,
            background: ACC_DIM,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 18,
          }}
        >
          <CheckCircle2 size={26} style={{ color: t.accent }} />
        </div>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: t.heading, marginBottom: 6, fontFamily: FONT_DISPLAY }}>
          Message sent!
        </h3>
        <p style={{ fontSize: 13, color: t.muted, lineHeight: 1.6, fontFamily: FONT_TEXT }}>
          We'll be in touch within one business day.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", msg: "" });
            setErrors({});
            setSendError(null);
          }}
          style={{
            marginTop: 22,
            fontSize: 12,
            color: t.accent,
            background: "none",
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
            fontFamily: FONT_TEXT,
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  const lbl = {
    display: "block",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: "0.13em",
    fontWeight: 600,
    color: t.faint,
    marginBottom: 7,
    fontFamily: FONT_TEXT,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      {showSuccessToast && (
        <div
          style={{
            position: "fixed",
            top: "24px",
            right: "24px",
            background: t.accent,
            color: "#fff",
            padding: "13px 20px",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 13,
            fontWeight: 600,
            fontFamily: FONT_TEXT,
            boxShadow: SOFT_SHADOW,
            zIndex: 1000,
            animation: "slideIn 0.3s ease-out",
          }}
        >
          <CheckCircle2 size={16} />
          Message sent successfully!
        </div>
      )}

      {[
        { label: "Full Name", key: "name", type: "text", ph: "Your full name" },
        { label: "Email Address", key: "email", type: "email", ph: "Your email address" },
      ].map((field) => (
        <div key={field.key}>
          <label style={lbl}>{field.label}</label>
          <input
            type={field.type}
            value={form[field.key]}
            onChange={(e) => handleChange(field.key, e.target.value)}
            placeholder={field.ph}
            style={inputStyle(field.key)}
            onFocus={(e) => (e.target.style.borderColor = errors[field.key] ? "#dc2626" : t.accent)}
            onBlur={(e) => (e.target.style.borderColor = errors[field.key] ? "#dc2626" : HAIRLINE)}
          />
          {errors[field.key] && (
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 6 }}>
              <AlertCircle size={11} style={{ color: "#dc2626" }} />
              <span style={{ fontSize: 11, color: "#dc2626", fontFamily: FONT_TEXT }}>{errors[field.key]}</span>
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
          onFocus={(e) => (e.target.style.borderColor = errors.msg ? "#dc2626" : t.accent)}
          onBlur={(e) => (e.target.style.borderColor = errors.msg ? "#dc2626" : HAIRLINE)}
        />
        {errors.msg && (
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 6 }}>
            <AlertCircle size={11} style={{ color: "#dc2626" }} />
            <span style={{ fontSize: 11, color: "#dc2626", fontFamily: FONT_TEXT }}>{errors.msg}</span>
          </div>
        )}
      </div>
      {sendError && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            backgroundColor: "#fef2f2",
            border: "1px solid #fca5a5",
            borderRadius: 10,
            padding: "9px 13px",
            fontSize: 12,
            color: "#991b1b",
            fontFamily: FONT_TEXT,
          }}
        >
          <AlertCircle size={12} />
          {sendError}
        </div>
      )}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          background: t.accent,
          color: "#fff",
          border: "none",
          borderRadius: 999,
          padding: "15px 0",
          fontSize: 15,
          fontWeight: 600,
          cursor: isLoading ? "not-allowed" : "pointer",
          fontFamily: FONT_TEXT,
          transition: "background 0.2s, transform 0.12s",
          opacity: isLoading ? 0.7 : 1,
        }}
        onMouseEnter={(e) => {
          if (isLoading) return;
          e.currentTarget.style.background = t.accentDark;
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          if (isLoading) return;
          e.currentTarget.style.background = t.accent;
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {isLoading ? (
          <>
            <div
              style={{
                width: 14,
                height: 14,
                border: "2px solid currentColor",
                borderTopColor: "transparent",
                borderRadius: "50%",
                animation: "spin 0.6s linear infinite",
              }}
            />
            Sending...
          </>
        ) : (
          <>
            <Send size={14} /> Send Message
          </>
        )}
      </button>
      <p style={{ fontSize: 10, textAlign: "center", textTransform: "uppercase", letterSpacing: "0.13em", fontWeight: 600, color: t.faint, fontFamily: FONT_TEXT }}>
        No spam, ever.
      </p>

      <style>{`
        @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

function Contact({ t }) {
  return (
    <section id="contact" style={{ padding: "88px 0", background: t.altBg }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="contact-grid">
          <div>
            <SectionLabel t={t} icon={Mail}>
              Get In Touch
            </SectionLabel>
            <AccentLine t={t} />
            <h2
              style={{
                fontSize: "clamp(2.2rem,4vw,3.2rem)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: t.heading,
                marginBottom: 10,
                fontFamily: FONT_DISPLAY,
              }}
            >
              Let's build
              <br />
              <span style={{ color: t.accent }}>something great.</span>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: t.muted, maxWidth: 380, marginBottom: 44, fontFamily: FONT_TEXT }}>
              Whether you have a project in mind, want to understand our
              services better, or simply want to explore what's possible — we'd
              love to hear from you.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {CONTACT_INFO.map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: ACC_DIM,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <c.icon size={18} style={{ color: t.accent }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.13em", fontWeight: 600, color: t.faint, marginBottom: 2, fontFamily: FONT_TEXT }}>
                      {c.label}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: t.heading, fontFamily: FONT_TEXT }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              border: `1px solid ${HAIRLINE}`,
              borderRadius: 20,
              padding: "40px 36px",
              background: t.cardBg,
              boxShadow: SOFT_SHADOW,
            }}
          >
            <h3 style={{ fontSize: 17, fontWeight: 700, color: t.heading, marginBottom: 4, fontFamily: FONT_DISPLAY }}>
              Send us a message
            </h3>
            <p style={{ fontSize: 12, color: t.faint, marginBottom: 28, fontFamily: FONT_TEXT }}>
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
