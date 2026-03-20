import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Blocks, ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        background: "#f7f7f7",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@700;800&family=Inter:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      {/* Nav */}
      <nav
        style={{
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#f7f7f7",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              background: "#ccea4a",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Blocks size={15} color="#0a0a0a" />
          </div>
          <span
            style={{
              fontSize: 17,
              fontWeight: 800,
              color: "#0a0a0a",
              fontFamily: "Epilogue, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            Go<span style={{ color: "#ccea4a" }}>Beyond</span>
          </span>
        </Link>
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            fontWeight: 600,
            color: "#666",
            textDecoration: "none",
          }}
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>
      </nav>

      {/* Content */}
      <div
        style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px 100px" }}
      >
        <div style={{ marginBottom: 48 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#999",
              marginBottom: 12,
            }}
          >
            Legal
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem,4vw,2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: "#0a0a0a",
              fontFamily: "Epilogue, sans-serif",
              marginBottom: 16,
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ fontSize: 14, color: "#888" }}>
            Last updated: March 2025 · GoBeyond IT Solutions · San Fabian,
            Pangasinan, Philippines
          </p>
          <div
            style={{
              width: 32,
              height: 3,
              background: "#ccea4a",
              borderRadius: 2,
              marginTop: 24,
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {[
            {
              title: "Overview",
              body: `GoBeyond IT Solutions ("GoBeyond", "we", "us") is a sole proprietorship based in San Fabian, Pangasinan, Philippines. This Privacy Policy explains what information we collect when you visit go-beyond.net or contact us, how we use it, and what rights you have over it.\n\nWe do not sell your data. We do not share it with third parties for advertising. We collect only what we need to respond to your inquiry and deliver our services.`,
            },
            {
              title: "Information We Collect",
              body: `When you submit the contact form on our website, we collect:\n\n• Your name\n• Your email address\n• The message you send us\n\nWe do not collect payment information through this website. We do not use tracking cookies or analytics tools that identify you personally. We may collect basic, anonymous usage data (pages visited, browser type) through our hosting provider's standard logs.`,
            },
            {
              title: "How We Use Your Information",
              body: `We use the information you provide solely to:\n\n• Respond to your inquiry\n• Discuss and deliver the services you request\n• Send follow-up communication related to your project\n\nWe will not add you to a mailing list, send you unsolicited messages, or use your contact details for any purpose unrelated to your inquiry without your explicit consent.`,
            },
            {
              title: "Data Storage",
              body: `Messages sent through our contact form are received via email and stored in our business email account (hosted by Google). We retain this information for as long as it is relevant to an active or potential project, or as required by applicable law.\n\nWe take reasonable precautions to protect your information but no method of electronic transmission is 100% secure. We encourage you not to send sensitive personal or financial information through our contact form.`,
            },
            {
              title: "Your Rights",
              body: `Under the Philippine Data Privacy Act of 2012 (Republic Act 10173), you have the right to:\n\n• Know what personal data we hold about you\n• Request correction of inaccurate data\n• Request deletion of your data\n• Withdraw consent at any time\n\nTo exercise any of these rights, email us at itsolutionsgobeyond@gmail.com and we will respond within 15 business days.`,
            },
            {
              title: "Third-Party Services",
              body: `Our website is hosted on a third-party platform. Their privacy practices apply to data processed at the infrastructure level. We do not currently use third-party analytics, advertising networks, or social media tracking pixels on this website.`,
            },
            {
              title: "Changes to This Policy",
              body: `We may update this policy as our services evolve. When we do, we will update the "Last updated" date at the top of this page. Continued use of our website after changes are posted constitutes acceptance of the updated policy.`,
            },
            {
              title: "Contact",
              body: `If you have questions about this policy or how we handle your data:\n\nGoBeyond IT Solutions\n2433 Mabilao, San Fabian, Pangasinan, Philippines\nitsolutionsgobeyond@gmail.com\n+639207982695`,
            },
          ].map((section, i) => (
            <div key={i}>
              <h2
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#0a0a0a",
                  fontFamily: "Epilogue, sans-serif",
                  marginBottom: 12,
                }}
              >
                {section.title}
              </h2>
              {section.body.split("\n").map((line, j) =>
                line.trim() === "" ? (
                  <div key={j} style={{ height: 8 }} />
                ) : (
                  <p
                    key={j}
                    style={{ fontSize: 14, lineHeight: 1.8, color: "#444" }}
                  >
                    {line}
                  </p>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
