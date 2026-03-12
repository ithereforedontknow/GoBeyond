import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import SectionPill from "../ui/SectionPill";
import { CONTACT_INFO } from "../../data/constants";
function ContactForm({ t }) {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.msg.trim()) e.msg = "Message is required.";
    else if (form.msg.trim().length < 10)
      e.msg = "Message must be at least 10 characters.";
    return e;
  };

  const handleChange = (key, val) => {
    setForm((p) => ({ ...p, [key]: val }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setSubmitted(true);
  };

  const inputCls = (key) =>
    `w-full border rounded-xl px-4 py-3 text-sm outline-none transition-colors ${t.inputBg} ${
      errors[key]
        ? "border-red-400 focus:border-red-400"
        : `${t.inputBorder} focus:border-orange-400`
    } ${t.body}`;

  if (submitted)
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div
          className={`w-16 h-16 rounded-full border flex items-center justify-center mb-5 ${t.featureA}`}
        >
          <CheckCircle2 size={28} className="text-orange-500" />
        </div>
        <h3 className={`text-xl font-bold mb-2 ${t.heading}`}>Message sent!</h3>
        <p className={`text-sm ${t.muted}`}>
          We'll be in touch within one business day.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", msg: "" });
            setErrors({});
          }}
          className="mt-6 text-xs text-orange-500 hover:text-orange-400 transition-colors font-medium"
        >
          Send another message
        </button>
      </div>
    );

  return (
    <div className="space-y-5">
      <div>
        <h3 className={`text-lg font-bold mb-1 ${t.heading}`}>
          Send us a message
        </h3>
        <p className={`text-xs ${t.muted}`}>All fields are required.</p>
      </div>
      {[
        { label: "Full Name", key: "name", type: "text", ph: "Jane Smith" },
        {
          label: "Email Address",
          key: "email",
          type: "email",
          ph: "jane@company.com",
        },
      ].map((field) => (
        <div key={field.key}>
          <label
            className={`block text-xs uppercase tracking-widest mb-2 font-semibold ${t.label}`}
          >
            {field.label}
          </label>
          <input
            type={field.type}
            value={form[field.key]}
            onChange={(e) => handleChange(field.key, e.target.value)}
            placeholder={field.ph}
            className={inputCls(field.key)}
          />
          {errors[field.key] && (
            <div className="flex items-center gap-1.5 mt-1.5 field-error">
              <AlertCircle size={12} className="text-red-400 shrink-0" />
              <span className="text-xs text-red-400">{errors[field.key]}</span>
            </div>
          )}
        </div>
      ))}
      <div>
        <label
          className={`block text-xs uppercase tracking-widest mb-2 font-semibold ${t.label}`}
        >
          Message
        </label>
        <textarea
          rows={4}
          value={form.msg}
          onChange={(e) => handleChange("msg", e.target.value)}
          placeholder="Tell us about your project..."
          className={`${inputCls("msg")} resize-none`}
        />
        {errors.msg && (
          <div className="flex items-center gap-1.5 mt-1.5 field-error">
            <AlertCircle size={12} className="text-red-400 shrink-0" />
            <span className="text-xs text-red-400">{errors.msg}</span>
          </div>
        )}
      </div>
      <button
        onClick={handleSubmit}
        className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-orange-200/40"
      >
        <Send size={15} /> Send Message
      </button>
      <p className={`text-xs text-center ${t.label}`}>
        We respect your privacy. No spam, ever.
      </p>
    </div>
  );
}

function Contact({ t }) {
  return (
    <section id="contact" className={`py-28 border-t ${t.border}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionPill
              color={t.pillOrange}
              icon={Mail}
              label="Get In Touch"
            />
            <h2 className={`text-4xl md:text-5xl font-bold mb-5 ${t.heading}`}>
              Let's build
              <br />
              <span className="text-orange-500">something great</span>
            </h2>
            <p className={`leading-relaxed mb-10 ${t.muted}`}>
              Whether you're ready to start a project, want a product demo, or
              just have questions — our team responds within a business day.
            </p>
            <div className="space-y-5">
              {CONTACT_INFO.map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${t.contactIcon}`}
                  >
                    <c.icon size={16} className="text-orange-500" />
                  </div>
                  <div>
                    <div
                      className={`text-xs uppercase tracking-wider mb-0.5 font-medium ${t.label}`}
                    >
                      {c.label}
                    </div>
                    <div className={`text-sm font-medium ${t.heading}`}>
                      {c.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`border rounded-2xl p-8 ${t.cardBg} ${t.border} ${t.shadow}`}
          >
            <ContactForm t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
