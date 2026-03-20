import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Blocks, ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
            Terms of Service
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
              title: "Agreement",
              body: `By accessing go-beyond.net or engaging GoBeyond IT Solutions for services, you agree to these Terms of Service. If you do not agree, please do not use our website or services.\n\nGoBeyond IT Solutions is a sole proprietorship registered in the Philippines, owned and operated from San Fabian, Pangasinan.`,
            },
            {
              title: "Our Services",
              body: `GoBeyond provides digital solutions and products, systems and web development, and building plan solutions. The specific scope, deliverables, timeline, and pricing of any engagement are agreed upon in writing before work begins — either through a formal proposal, contract, or written confirmation via email.\n\nNothing on this website constitutes a binding offer or guarantee of availability.`,
            },
            {
              title: "Project Engagements",
              body: `All projects begin with a discovery session. Work starts only after both parties have agreed on scope and terms in writing.\n\n• Revisions are limited to the number specified in your project agreement\n• Significant changes to scope after work has begun may affect timeline and price\n• We reserve the right to decline projects that conflict with our values or capacity`,
            },
            {
              title: "Payment",
              body: `Payment terms are specified per project. Generally:\n\n• A deposit is required before work begins\n• Remaining balance is due upon delivery or at milestones defined in your agreement\n• Late payments may pause active work until the account is settled\n\nPricing displayed on this website is indicative only. Final pricing is confirmed in your project proposal.`,
            },
            {
              title: "Intellectual Property",
              body: `Upon full payment, you own the final deliverables — websites, systems, plans, or digital tools — created specifically for your project.\n\nGoBeyond retains the right to:\n\n• Display completed work in our portfolio (unless you request otherwise in writing)\n• Reuse general methodologies, code patterns, and non-client-specific components in future projects\n\nAny third-party assets, fonts, or software used in your project remain subject to their respective licenses.`,
            },
            {
              title: "Client Responsibilities",
              body: `You are responsible for:\n\n• Providing accurate information, content, and feedback in a timely manner\n• Ensuring you have rights to any materials you provide to us\n• Reviewing and approving deliverables within the timeframes agreed upon\n\nDelays caused by late feedback or missing materials may affect your project timeline and are not the responsibility of GoBeyond.`,
            },
            {
              title: "Limitation of Liability",
              body: `GoBeyond IT Solutions shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or deliverables. Our total liability for any claim shall not exceed the amount paid by you for the specific service in question.\n\nWe make no guarantees regarding business outcomes, revenue, or performance resulting from our work.`,
            },
            {
              title: "Termination",
              body: `Either party may terminate a project engagement with written notice. In the event of termination:\n\n• Work completed to date is billable at the agreed rate\n• Any deposit paid is non-refundable unless otherwise stated in your project agreement\n• Deliverables are handed over only upon settlement of outstanding payments`,
            },
            {
              title: "Governing Law",
              body: `These Terms are governed by the laws of the Republic of the Philippines. Any disputes shall be resolved in the appropriate courts of Pangasinan, Philippines.`,
            },
            {
              title: "Changes to These Terms",
              body: `We may update these Terms as our services evolve. The current version is always available at go-beyond.net/terms. Continued use of our services after changes are posted constitutes acceptance.`,
            },
            {
              title: "Contact",
              body: `For questions about these Terms:\n\nGoBeyond IT Solutions\n2433 Mabilao, San Fabian, Pangasinan, Philippines\nitsolutionsgobeyond@gmail.com\n+639207982695`,
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
