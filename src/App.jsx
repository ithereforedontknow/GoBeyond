import { useState, useEffect } from "react";
import {
  Zap,
  Blocks,
  Cloud,
  Shield,
  Code2,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Star,
  Globe,
  Cpu,
  Lock,
  Headphones,
  TrendingUp,
  Package,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Send,
  ExternalLink,
  Play,
  Award,
  Clock,
  Database,
  Sun,
  Moon,
} from "lucide-react";

export default function GoBeyond() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = ["Features", "Services", "Pricing", "FAQ", "Contact"];

  // ── Theme tokens ──────────────────────────────────────────────────────────
  const t = {
    // backgrounds
    pageBg: dark ? "bg-gray-950" : "bg-white",
    sectionAlt: dark ? "bg-gray-900/50" : "bg-gray-50/60",
    cardBg: dark ? "bg-gray-900" : "bg-white",
    inputBg: dark ? "bg-gray-800" : "bg-gray-50",
    navBg: dark
      ? scrolled
        ? "bg-gray-950/95 backdrop-blur-md border-b border-gray-800"
        : "bg-gray-950/80 backdrop-blur-sm border-transparent"
      : scrolled
        ? "bg-white/96 backdrop-blur-md shadow-sm border-b border-cyan-100"
        : "bg-white/80 backdrop-blur-sm border-transparent",
    mobileMenu: dark
      ? "bg-gray-950 border-gray-800"
      : "bg-white border-gray-100",
    // borders
    border: dark ? "border-gray-800" : "border-gray-100",
    inputBorder: dark ? "border-gray-700" : "border-gray-200",
    // text
    heading: dark ? "text-white" : "text-gray-900",
    body: dark ? "text-gray-300" : "text-gray-600",
    muted: dark ? "text-gray-400" : "text-gray-500",
    label: dark ? "text-gray-400" : "text-gray-400",
    // feature card bg variants
    featureCyan: dark
      ? "bg-cyan-950/40 border-cyan-800/50"
      : "bg-cyan-50 border-cyan-200",
    featureGreen: dark
      ? "bg-green-950/40 border-green-800/50"
      : "bg-green-50 border-green-200",
    featureYellow: dark
      ? "bg-yellow-950/40 border-yellow-800/50"
      : "bg-yellow-50 border-yellow-200",
    // icon bg
    iconWhite: dark ? "bg-gray-800" : "bg-white",
    iconYellow: dark
      ? "bg-yellow-900/40 border-yellow-800/50"
      : "bg-yellow-50 border-yellow-200",
    // service card
    serviceCard: dark
      ? "bg-gray-900 border-gray-800 hover:border-yellow-700/60"
      : "bg-white border-gray-100 hover:border-yellow-300",
    // faq
    faqOpen: dark
      ? "border-green-700/60 bg-green-950/30"
      : "border-green-300 bg-green-50",
    faqClosed: dark
      ? "border-gray-800 bg-gray-900"
      : "border-gray-100 bg-white",
    faqBorderTop: dark ? "border-green-900" : "border-green-100",
    // tags
    tag: dark
      ? "text-gray-400 border-gray-700 bg-gray-800"
      : "text-gray-500 border-gray-200 bg-gray-50",
    // pill badges
    badgeCyan: dark
      ? "bg-cyan-900/60 text-cyan-300 border-cyan-700/50"
      : "bg-cyan-100 text-cyan-700 border-cyan-200",
    badgeGreen: dark
      ? "bg-green-900/60 text-green-300 border-green-700/50"
      : "bg-green-100 text-green-700 border-green-200",
    badgeYellow: dark
      ? "bg-yellow-900/60 text-yellow-300 border-yellow-700/50"
      : "bg-yellow-100 text-yellow-700 border-yellow-200",
    // pricing non-highlight
    pricingCard: dark
      ? "bg-gray-900 border-gray-800"
      : "bg-white border-gray-100",
    // stat card
    statCard: dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100",
    // testimonial card
    testCard: dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100",
    // contact info icon bg
    contactIcon: dark
      ? "bg-yellow-900/40 border-yellow-800/50"
      : "bg-yellow-100 border-yellow-200",
    // section pills
    pillGreen: dark
      ? "bg-green-900/50 border-green-800/40 text-green-300"
      : "bg-green-100 border-green-200 text-green-700",
    pillYellow: dark
      ? "bg-yellow-900/50 border-yellow-800/40 text-yellow-300"
      : "bg-yellow-100 border-yellow-200 text-yellow-700",
    pillCyan: dark
      ? "bg-cyan-900/50 border-cyan-800/40 text-cyan-300"
      : "bg-cyan-100 border-cyan-200 text-cyan-700",
    pillMail: dark
      ? "bg-yellow-900/50 border-yellow-800/40 text-yellow-300"
      : "bg-yellow-100 border-yellow-200 text-yellow-700",
    // cta section
    ctaBg: dark
      ? "bg-gray-900/60"
      : "bg-gradient-to-br from-cyan-50 via-white to-green-50",
    // footer
    footerBg: dark ? "bg-gray-950" : "bg-white",
    footerHeading: dark ? "text-gray-300" : "text-gray-700",
    footerLink: dark
      ? "text-gray-500 hover:text-cyan-400"
      : "text-gray-400 hover:text-cyan-600",
    footerText: dark ? "text-gray-600" : "text-gray-400",
    // misc
    shadow: dark ? "" : "shadow-sm",
    toggleBg: dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200",
  };

  const features = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      desc: "Elastic, auto-scaling cloud environments built for uptime and speed.",
      color: "text-cyan-500",
      bg: t.featureCyan,
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      desc: "Zero-trust architecture, SOC 2 compliance, and real-time threat detection.",
      color: "text-green-500",
      bg: t.featureGreen,
    },
    {
      icon: Code2,
      title: "Custom SaaS Dev",
      desc: "From MVP to scale — full-stack teams that ship fast and iterate faster.",
      color: "text-yellow-500",
      bg: t.featureYellow,
    },
    {
      icon: BarChart3,
      title: "Analytics & BI",
      desc: "Turn raw data into decisions with live dashboards and predictive models.",
      color: "text-cyan-500",
      bg: t.featureCyan,
    },
    {
      icon: Cpu,
      title: "AI Automation",
      desc: "LLM-powered workflows that replace repetitive tasks and cut overhead.",
      color: "text-green-500",
      bg: t.featureGreen,
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Dedicated engineers on call around the clock — no bots, real people.",
      color: "text-yellow-500",
      bg: t.featureYellow,
    },
  ];

  const services = [
    {
      icon: Globe,
      name: "SaaS Platform Development",
      desc: "End-to-end design, build, and launch of multi-tenant SaaS products.",
      tags: ["React", "Node.js", "PostgreSQL", "AWS"],
      badge: "Most Popular",
    },
    {
      icon: Database,
      name: "Managed Cloud Ops",
      desc: "We handle DevOps, infrastructure, monitoring, and deployments so your team doesn't have to.",
      tags: ["Kubernetes", "Terraform", "CI/CD"],
      badge: null,
    },
    {
      icon: Lock,
      name: "Cybersecurity Suite",
      desc: "Penetration testing, vulnerability assessments, and ongoing compliance auditing.",
      tags: ["SOC 2", "ISO 27001", "VAPT"],
      badge: "New",
    },
    {
      icon: TrendingUp,
      name: "Growth Engineering",
      desc: "A/B testing, conversion optimization, and data pipelines tuned for retention.",
      tags: ["Analytics", "ML", "Growth"],
      badge: null,
    },
    {
      icon: Package,
      name: "Legacy Modernization",
      desc: "Lift-and-shift or full rewrites — we migrate legacy systems without downtime.",
      tags: ["Migration", "API", "Refactor"],
      badge: null,
    },
    {
      icon: Sparkles,
      name: "AI Integration",
      desc: "Embed GPT, Claude, or fine-tuned models directly into your existing product.",
      tags: ["LLM", "RAG", "Agents"],
      badge: "Hot",
    },
  ];

  const plans = {
    monthly: [
      {
        name: "Starter",
        price: "$299",
        desc: "Perfect for early-stage startups.",
        features: [
          "1 SaaS project",
          "10 GB cloud storage",
          "Basic analytics",
          "Email support",
          "99.5% uptime SLA",
        ],
        cta: "Get Started",
        highlight: false,
      },
      {
        name: "Growth",
        price: "$899",
        desc: "Built for scaling teams.",
        features: [
          "3 SaaS projects",
          "100 GB cloud storage",
          "Advanced analytics",
          "Priority support",
          "99.9% uptime SLA",
          "AI automation module",
          "Custom integrations",
        ],
        cta: "Start Free Trial",
        highlight: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        desc: "For large orgs and complex needs.",
        features: [
          "Unlimited projects",
          "Unlimited storage",
          "Full BI suite",
          "Dedicated engineer",
          "99.99% uptime SLA",
          "On-site onboarding",
          "White-label options",
        ],
        cta: "Contact Sales",
        highlight: false,
      },
    ],
    annual: [
      {
        name: "Starter",
        price: "$239",
        desc: "Perfect for early-stage startups.",
        features: [
          "1 SaaS project",
          "10 GB cloud storage",
          "Basic analytics",
          "Email support",
          "99.5% uptime SLA",
        ],
        cta: "Get Started",
        highlight: false,
      },
      {
        name: "Growth",
        price: "$719",
        desc: "Built for scaling teams.",
        features: [
          "3 SaaS projects",
          "100 GB cloud storage",
          "Advanced analytics",
          "Priority support",
          "99.9% uptime SLA",
          "AI automation module",
          "Custom integrations",
        ],
        cta: "Start Free Trial",
        highlight: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        desc: "For large orgs and complex needs.",
        features: [
          "Unlimited projects",
          "Unlimited storage",
          "Full BI suite",
          "Dedicated engineer",
          "99.99% uptime SLA",
          "On-site onboarding",
          "White-label options",
        ],
        cta: "Contact Sales",
        highlight: false,
      },
    ],
  };

  const faqs = [
    {
      q: "What exactly is GoBeyond?",
      a: "GoBeyond is an IT solutions company offering SaaS development, managed cloud infrastructure, cybersecurity, and AI-powered automation. We act as a full-stack technology partner for startups and enterprises.",
    },
    {
      q: "How long does it take to build a SaaS product?",
      a: "A focused MVP typically takes 6–10 weeks. Full products with integrations, billing, and onboarding flows range from 3–6 months, depending on scope and complexity.",
    },
    {
      q: "Do you offer white-label solutions?",
      a: "Yes. Enterprise clients can white-label our platform modules, dashboards, and mobile apps under their own branding with custom domain support.",
    },
    {
      q: "What cloud providers do you support?",
      a: "We're cloud-agnostic and work with AWS, Google Cloud, Azure, and bare-metal setups. Most clients start on AWS and we optimize from there.",
    },
    {
      q: "Is there a free trial?",
      a: "The Growth plan includes a 14-day free trial with full access — no credit card required. Starter plans can be cancelled anytime in the first 30 days for a full refund.",
    },
    {
      q: "How does support work?",
      a: "All plans include email support. Growth adds a Slack channel with 4-hour response times. Enterprise clients get a named account engineer and direct phone line.",
    },
  ];

  const stats = [
    { value: "200+", label: "Clients Served" },
    { value: "99.98%", label: "Avg. Uptime" },
    { value: "4.2M+", label: "API Calls / Day" },
    { value: "18 min", label: "Avg. Response Time" },
  ];

  const testimonials = [
    {
      name: "Sarah K.",
      role: "CTO, Lumen Labs",
      quote:
        "GoBeyond shipped our entire SaaS MVP in 8 weeks. The team feels like in-house engineers, not outsourced contractors.",
      rating: 5,
    },
    {
      name: "Marco R.",
      role: "Founder, Nexstep",
      quote:
        "Their AI automation module cut our manual processing time by 70%. ROI was immediate and measurable.",
      rating: 5,
    },
    {
      name: "Diana T.",
      role: "VP Engineering, Arcflow",
      quote:
        "Best DevOps team we've worked with. Zero downtime migration from legacy AWS setup to full Kubernetes.",
      rating: 5,
    },
  ];

  const badgeClass = (badge) =>
    badge === "Most Popular"
      ? t.badgeCyan
      : badge === "New"
        ? t.badgeGreen
        : t.badgeYellow;

  return (
    <div
      style={{ fontFamily: "'Google Sans', 'Product Sans', sans-serif" }}
      className={`${t.pageBg} ${t.heading} min-h-screen overflow-x-hidden transition-colors duration-300`}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@300;400;500;700&display=swap');
        * { font-family: 'Google Sans', 'Product Sans', sans-serif !important; }
        html { scroll-behavior: smooth; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse-ring { 0%,100%{transform:scale(1);opacity:.7} 50%{transform:scale(1.2);opacity:.2} }
        .fade-up { animation: fadeUp 0.55s ease-out both; }
        .s1{animation-delay:.05s}.s2{animation-delay:.12s}.s3{animation-delay:.18s}.s4{animation-delay:.24s}
        .pulse-ring { animation: pulse-ring 2.5s ease-in-out infinite; }
        .gradient-text {
          background: linear-gradient(130deg, #0891b2 0%, #16a34a 50%, #ca8a04 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .dot-grid-light { background-image: radial-gradient(rgba(8,145,178,0.10) 1px, transparent 1px); background-size: 26px 26px; }
        .dot-grid-dark  { background-image: radial-gradient(rgba(8,145,178,0.18) 1px, transparent 1px); background-size: 26px 26px; }
        .card-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .card-hover:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(8,145,178,0.12); }
        .glow-cyan { box-shadow: 0 4px 20px rgba(8,145,178,0.28); }
        .theme-transition { transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease; }
      `}</style>

      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${t.navBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center shadow-sm">
              <Blocks size={16} className="text-white" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${t.heading}`}>
              Go<span className="text-cyan-500">Beyond</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-cyan-500 ${t.muted}`}
              >
                {l}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={() => setDark(!dark)}
              className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${t.toggleBg}`}
              aria-label="Toggle theme"
            >
              {dark ? (
                <Sun size={16} className="text-yellow-400" />
              ) : (
                <Moon size={16} className="text-gray-500" />
              )}
            </button>
            <button
              onClick={() => scrollTo("pricing")}
              className="text-sm font-semibold bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2.5 rounded-xl transition-all shadow-sm glow-cyan"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${t.toggleBg}`}
              aria-label="Toggle theme"
            >
              {dark ? (
                <Sun size={15} className="text-yellow-400" />
              ) : (
                <Moon size={15} className="text-gray-500" />
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${t.muted} hover:text-cyan-500`}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className={`md:hidden border-t px-6 py-6 shadow-lg ${t.mobileMenu}`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l.toLowerCase())}
                  className={`text-left py-1 font-medium transition-colors hover:text-cyan-500 ${t.body}`}
                >
                  {l}
                </button>
              ))}
              <button
                onClick={() => {
                  scrollTo("pricing");
                  setMenuOpen(false);
                }}
                className="mt-2 bg-cyan-600 text-white font-semibold py-3 rounded-xl shadow-sm"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        className={`relative min-h-screen flex items-center overflow-hidden ${dark ? "dot-grid-dark bg-gradient-to-b from-gray-950 via-gray-950 to-gray-950" : "dot-grid-light bg-gradient-to-b from-cyan-50/60 via-white to-white"}`}
      >
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${dark ? "bg-cyan-500/8" : "bg-cyan-200/25"}`}
        />
        <div
          className={`absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none ${dark ? "bg-green-500/8" : "bg-green-200/25"}`}
        />
        <div
          className={`absolute top-1/2 right-1/3 w-48 h-48 rounded-full blur-2xl pointer-events-none ${dark ? "bg-yellow-500/6" : "bg-yellow-200/20"}`}
        />

        <div className="max-w-7xl mx-auto px-6 pt-28 pb-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className={`text-6xl md:text-8xl font-bold leading-none tracking-tight mb-6 fade-up s1 ${t.heading}`}
            >
              Build <span className="gradient-text">Beyond</span>
              <br />
              <span
                className={`font-light ${dark ? "text-gray-500" : "text-gray-400"}`}
              >
                the Limit
              </span>
            </h1>
            <p
              className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 fade-up s2 ${t.muted}`}
            >
              GoBeyond delivers SaaS development, cloud infrastructure, AI
              automation, and enterprise security — everything your business
              needs to scale without friction.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-up s3">
              <button
                onClick={() => scrollTo("pricing")}
                className="group flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-8 py-4 rounded-xl transition-all glow-cyan text-base shadow-md"
              >
                View Pricing{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => scrollTo("services")}
                className={`flex items-center gap-2 border px-8 py-4 rounded-xl transition-all text-base ${dark ? "border-gray-700 hover:border-cyan-700 bg-gray-900 hover:bg-gray-800 text-gray-300" : "border-gray-200 hover:border-cyan-300 bg-white hover:bg-cyan-50 text-gray-600 hover:text-cyan-700"} shadow-sm`}
              >
                <Play size={16} /> See Our Services
              </button>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 fade-up s4">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`border rounded-2xl p-6 text-center ${t.statCard} ${t.shadow}`}
              >
                <div className="text-3xl font-bold text-cyan-500 mb-1">
                  {s.value}
                </div>
                <div
                  className={`text-xs uppercase tracking-wider font-medium ${t.label}`}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className={`py-28 border-t ${t.border}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-5 ${t.pillGreen}`}
            >
              <Zap size={12} className="text-green-500" />
              <span className="text-xs font-semibold tracking-wide uppercase">
                What We Deliver
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${t.heading}`}>
              Everything you need to{" "}
              <span className="text-green-500">go further</span>
            </h2>
            <p className={`text-lg max-w-xl mx-auto ${t.muted}`}>
              A complete technology stack — not just tools, but outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className={`border rounded-2xl p-7 card-hover cursor-default ${f.bg}`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 shadow-sm ${t.iconWhite}`}
                >
                  <f.icon size={22} className={f.color} />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${t.heading}`}>
                  {f.title}
                </h3>
                <p className={`text-sm leading-relaxed ${t.muted}`}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        id="services"
        className={`py-28 border-t ${t.sectionAlt} ${t.border}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div
                className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-5 ${t.pillYellow}`}
              >
                <Award size={12} className="text-yellow-500" />
                <span className="text-xs font-semibold tracking-wide uppercase">
                  Our Services
                </span>
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold ${t.heading}`}>
                End-to-end IT
                <br />
                <span className="text-yellow-500">solutions</span>
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                className={`group relative border rounded-2xl p-7 card-hover cursor-default ${t.serviceCard} ${t.shadow}`}
              >
                {s.badge && (
                  <span
                    className={`absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeClass(s.badge)}`}
                  >
                    {s.badge}
                  </span>
                )}
                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${t.iconYellow}`}
                >
                  <s.icon size={20} className="text-yellow-500" />
                </div>
                <h3 className={`text-base font-semibold mb-2 ${t.heading}`}>
                  {s.name}
                </h3>
                <p className={`text-sm mb-5 leading-relaxed ${t.muted}`}>
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tg, j) => (
                    <span
                      key={j}
                      className={`text-xs border rounded-md px-2.5 py-0.5 ${t.tag}`}
                    >
                      {tg}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={`py-28 border-t ${t.border}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className={`text-4xl font-bold mb-3 ${t.heading}`}>
              Trusted by <span className="text-cyan-500">teams that ship</span>
            </h2>
            <p className={t.muted}>Real results from real clients.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((tv, i) => (
              <div
                key={i}
                className={`border rounded-2xl p-7 ${t.testCard} ${t.shadow}`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(tv.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className={`text-sm leading-relaxed mb-5 italic ${t.body}`}>
                  "{tv.quote}"
                </p>
                <div>
                  <div className={`text-sm font-semibold ${t.heading}`}>
                    {tv.name}
                  </div>
                  <div className={`text-xs ${t.label}`}>{tv.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section
        id="pricing"
        className={`py-28 border-t ${t.sectionAlt} ${t.border}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div
              className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-5 ${t.pillCyan}`}
            >
              <Package size={12} className="text-cyan-500" />
              <span className="text-xs font-semibold tracking-wide uppercase">
                Pricing
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${t.heading}`}>
              Simple, <span className="text-cyan-500">transparent</span> pricing
            </h2>
            <p className={`mb-8 ${t.muted}`}>No hidden fees. Cancel anytime.</p>
            <div
              className={`inline-flex items-center border rounded-xl p-1 gap-1 ${t.toggleBg} shadow-sm`}
            >
              {["monthly", "annual"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all capitalize ${activeTab === tab ? "bg-cyan-600 text-white shadow-sm" : t.muted}`}
                >
                  {tab}
                  {tab === "annual" && (
                    <span className="ml-1 text-xs text-green-500">-20%</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {plans[activeTab].map((p, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 flex flex-col transition-all ${p.highlight ? "bg-cyan-600 border-2 border-cyan-500 shadow-xl" : `border ${t.pricingCard} ${t.shadow}`}`}
              >
                {p.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <h3
                    className={`text-lg font-bold mb-1 ${p.highlight ? "text-white" : t.heading}`}
                  >
                    {p.name}
                  </h3>
                  <p
                    className={`text-xs mb-4 ${p.highlight ? "text-cyan-200" : t.label}`}
                  >
                    {p.desc}
                  </p>
                  <div className="flex items-end gap-1">
                    <span
                      className={`text-4xl font-bold ${p.highlight ? "text-white" : t.heading}`}
                    >
                      {p.price}
                    </span>
                    {p.price !== "Custom" && (
                      <span
                        className={`text-sm mb-1 ${p.highlight ? "text-cyan-200" : t.label}`}
                      >
                        /{activeTab === "monthly" ? "mo" : "mo billed yearly"}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="flex-1 space-y-3 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <CheckCircle2
                        size={15}
                        className={
                          p.highlight
                            ? "text-cyan-200 shrink-0"
                            : "text-green-500 shrink-0"
                        }
                      />
                      <span className={p.highlight ? "text-cyan-50" : t.body}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollTo("contact")}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${p.highlight ? "bg-white text-cyan-700 hover:bg-cyan-50" : "bg-cyan-600 hover:bg-cyan-500 text-white shadow-sm"}`}
                >
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className={`py-28 border-t ${t.border}`}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className={`text-4xl font-bold mb-3 ${t.heading}`}>
              Got <span className="text-green-500">questions?</span>
            </h2>
            <p className={t.muted}>We've got answers. Seriously.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-all ${openFaq === i ? t.faqOpen : t.faqClosed} ${t.shadow}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className={`text-sm font-semibold pr-4 ${t.heading}`}>
                    {f.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 transition-transform ${openFaq === i ? "rotate-180 text-green-500" : t.label}`}
                  />
                </button>
                {openFaq === i && (
                  <div
                    className={`px-6 pb-5 text-sm leading-relaxed border-t pt-4 ${t.body} ${t.faqBorderTop}`}
                  >
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className={`py-28 border-t ${t.sectionAlt} ${t.border}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div
                className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-6 ${t.pillMail}`}
              >
                <Mail size={12} className="text-yellow-500" />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Get In Touch
                </span>
              </div>
              <h2
                className={`text-4xl md:text-5xl font-bold mb-5 ${t.heading}`}
              >
                Let's build
                <br />
                <span className="text-yellow-500">something great</span>
              </h2>
              <p className={`leading-relaxed mb-10 ${t.muted}`}>
                Whether you're ready to start a project, want a product demo, or
                just have questions — our team responds within a business day.
              </p>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "hello@gobeyond.ph" },
                  { icon: Phone, label: "Phone", value: "+63 2 8888 BEYOND" },
                  {
                    icon: MapPin,
                    label: "Office",
                    value: "Bonifacio Global City, Taguig",
                  },
                  {
                    icon: Clock,
                    label: "Hours",
                    value: "Mon–Fri, 9AM–6PM PHT",
                  },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 ${t.contactIcon}`}
                    >
                      <c.icon size={16} className="text-yellow-500" />
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
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div
                    className={`w-16 h-16 rounded-full border flex items-center justify-center mb-5 ${dark ? "bg-green-900/40 border-green-700/50" : "bg-green-100 border-green-200"}`}
                  >
                    <CheckCircle2 size={28} className="text-green-500" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${t.heading}`}>
                    Message sent!
                  </h3>
                  <p className={`text-sm ${t.muted}`}>
                    We'll be in touch within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setContactForm({ name: "", email: "", msg: "" });
                    }}
                    className="mt-6 text-xs text-cyan-500 hover:text-cyan-400 transition-colors font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  <h3 className={`text-lg font-bold mb-6 ${t.heading}`}>
                    Send us a message
                  </h3>
                  {[
                    {
                      label: "Full Name",
                      key: "name",
                      type: "text",
                      placeholder: "Jane Smith",
                    },
                    {
                      label: "Email Address",
                      key: "email",
                      type: "email",
                      placeholder: "jane@company.com",
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
                        value={contactForm[field.key]}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            [field.key]: e.target.value,
                          })
                        }
                        placeholder={field.placeholder}
                        className={`w-full border focus:border-cyan-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors ${t.inputBg} ${t.inputBorder} ${dark ? "text-gray-200 placeholder-gray-600" : "text-gray-800 placeholder-gray-300"}`}
                      />
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
                      value={contactForm.msg}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, msg: e.target.value })
                      }
                      placeholder="Tell us about your project..."
                      className={`w-full border focus:border-cyan-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none ${t.inputBg} ${t.inputBorder} ${dark ? "text-gray-200 placeholder-gray-600" : "text-gray-800 placeholder-gray-300"}`}
                    />
                  </div>
                  <button
                    onClick={() => {
                      if (
                        contactForm.name &&
                        contactForm.email &&
                        contactForm.msg
                      )
                        setSubmitted(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3.5 rounded-xl transition-all shadow-sm glow-cyan"
                  >
                    <Send size={15} /> Send Message
                  </button>
                  <p className={`text-xs text-center ${t.label}`}>
                    We respect your privacy. No spam, ever.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section
        className={`py-24 border-t relative overflow-hidden ${t.border} ${dark ? "dot-grid-dark bg-gray-900/40" : "dot-grid-light bg-gradient-to-br from-cyan-50 via-white to-green-50"}`}
      >
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none ${dark ? "bg-cyan-500/6" : "bg-cyan-200/20"}`}
        />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-5 leading-tight ${t.heading}`}
          >
            Ready to go <span className="gradient-text">beyond</span>?
          </h2>
          <p className={`text-lg mb-10 ${t.muted}`}>
            Start your free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo("pricing")}
              className="group flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-10 py-4 rounded-xl transition-all glow-cyan text-base shadow-md"
            >
              Get Started{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className={`flex items-center gap-2 px-6 py-4 transition-colors text-sm font-medium ${t.muted} hover:text-cyan-500`}
            >
              Talk to Sales <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={`border-t py-16 ${t.border} ${t.footerBg}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-14">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center shadow-sm">
                  <Zap size={14} className="text-white" />
                </div>
                <span className={`font-bold ${t.heading}`}>
                  Go<span className="text-cyan-500">Beyond</span>
                </span>
              </div>
              <p className={`text-xs leading-relaxed ${t.footerText}`}>
                IT solutions that scale. SaaS, cloud, security, and AI — for
                startups and enterprises.
              </p>
            </div>
            {[
              {
                title: "Solutions",
                links: [
                  "SaaS Development",
                  "Cloud Infrastructure",
                  "Cybersecurity",
                  "AI & Automation",
                ],
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Blog", "Press Kit"],
              },
              {
                title: "Legal",
                links: [
                  "Privacy Policy",
                  "Terms of Service",
                  "Security",
                  "Compliance",
                ],
              },
            ].map((col, i) => (
              <div key={i}>
                <h4
                  className={`text-xs font-bold uppercase tracking-widest mb-4 ${t.footerHeading}`}
                >
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className={`text-xs transition-colors ${t.footerLink}`}
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className={`border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 ${t.border}`}
          >
            <span className={`text-xs ${t.footerText}`}>
              © 2025 GoBeyond IT Solutions. All rights reserved.
            </span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full pulse-ring" />
                <span className={`text-xs ${t.footerText}`}>
                  All systems operational
                </span>
              </div>
              <button
                onClick={() => setDark(!dark)}
                className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${t.toggleBg}`}
                aria-label="Toggle theme"
              >
                {dark ? (
                  <Sun size={13} className="text-yellow-400" />
                ) : (
                  <Moon size={13} className="text-gray-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
