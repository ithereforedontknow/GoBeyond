import {
  Mail,
  Phone,
  MapPin,
  Users,
  Monitor,
  LayoutTemplate,
  Building2,
  Search,
  PenTool,
  Hammer,
  Truck,
  RefreshCw,
  BarChart3,
  Zap,
  Cpu,
  Globe,
  Smartphone,
  FileText,
  Layers,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Solutions", id: "solutions" },
  { label: "Approach", id: "approach" },
  { label: "Founder", id: "founder" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

export const STATS = [
  { value: "3", label: "Solution Divisions" },
  { value: "5", label: "Steps to Delivery" },
  { value: "1", label: "Dedicated Partner" },
  { value: "∞", label: "Room to Grow" },
];

export const MARQUEE_ITEMS = [
  { name: "Digital Tools", color: "#ccea4a" },
  { name: "Automation Systems", color: "#60a5fa" },
  { name: "Web Development", color: "#f472b6" },
  { name: "Business Systems", color: "#34d399" },
  { name: "Client Portals", color: "#a78bfa" },
  { name: "Building Plans", color: "#fbbf24" },
  { name: "Space Planning", color: "#2dd4bf" },
  { name: "Workflow Design", color: "#f87171" },
  { name: "Process Automation", color: "#818cf8" },
  { name: "Digitization", color: "#4ade80" },
  { name: "Consultation", color: "#e879f9" },
  { name: "Shopify", color: "#fbbf24" },
];

export const APPROACH = [
  {
    step: "01",
    title: "Discover",
    icon: Search,
    desc: "We learn your goals, constraints, and timeline before proposing anything.",
  },
  {
    step: "02",
    title: "Design",
    icon: PenTool,
    desc: "We map out a solution tailored to your context — not a template.",
  },
  {
    step: "03",
    title: "Develop",
    icon: Hammer,
    desc: "We build it. Clean, scalable, and tested.",
  },
  {
    step: "04",
    title: "Deliver",
    icon: Truck,
    desc: "We hand it over with full clarity on how it works.",
  },
  {
    step: "05",
    title: "Evolve",
    icon: RefreshCw,
    desc: "We stay available to improve it as your needs change.",
  },
];

export const SOLUTIONS = [
  {
    icon: Monitor,
    name: "Digital Solutions & Creative Products",
    desc: "High-quality, ready-to-use templates and digital assets designed to simplify your branding, celebrations, and everyday projects.",
    services: [
      "Marketing & Business Assets",
      "Career & Resume Tools",
      "Event & Celebration Kits",
      "Kids’ Educational Resources",
    ],
  },
  {
    icon: LayoutTemplate,
    name: "Systems & Web Development",
    desc: "Business systems, websites, and client portals — built to your exact requirements.",
    services: [
      "Custom Business Systems",
      "Workflow Automation & Integration",
      "Bespoke Client Portals & Dashboards",
      "Legacy Process Digitization",
    ],
  },
  {
    icon: Building2,
    name: "Building Plan Solutions",
    desc: "Residential and commercial plans that translate your vision into precise, ready-to-build layouts.",
    services: [
      "Residential and commercial building plans",
      "Concept development and space planning",
      "Layout optimization",
      "Planning consultation",
    ],
  },
];

export const WHY_US = [
  {
    icon: Zap,
    title: "Boundary-Breaking Innovation",
    desc: "We challenge conventional standards and go beyond what has been done before — never settling for ordinary.",
  },
  {
    icon: Globe,
    title: "Cross-Industry Expertise",
    desc: "From digital tools to building plans, our range gives your project a uniquely broad perspective.",
  },
  {
    icon: Cpu,
    title: "Technology Meets Creativity",
    desc: "We integrate automation and intelligent design to deliver solutions that are both powerful and intuitive.",
  },
  {
    icon: Users,
    title: "Client-Centered Approach",
    desc: "Every solution is shaped around your goals, timeline, and vision — not a pre-built template.",
  },
  {
    icon: BarChart3,
    title: "Scalable & Future-Ready",
    desc: "Built to grow with you. Our solutions anticipate tomorrow's needs, not just today's.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Excellence",
    desc: "We don't simply deliver — we iterate, improve, and stay invested in your long-term success.",
  },
];

export const PRICING_CATEGORIES = [
  {
    id: "digital",
    label: "Digital Products",
    icon: FileText,
    description:
      "Ready-made templates and digital assets — buy once, use immediately.",
    items: [
      { name: "Kids Templates", billing: "per template" },
      { name: "Invitations", billing: "per template" },
      { name: "Food Posters", billing: "per template" },
      { name: "Resume Template", billing: "per template" },
      { name: "Story Books", billing: "per template" },
      { name: "Flyers", billing: "per template" },
      { name: "Menu Poster", billing: "per template" },
    ],
  },
  {
    id: "systems",
    label: "Systems",
    icon: Layers,
    description:
      "Custom-built business systems — choose a subscription or own it outright.",
    items: [
      {
        name: "Inventory Management",
        billing: "monthly",
      },
      {
        name: "Payroll System",
        billing: "monthly",
      },
      {
        name: "Accounting System",
        billing: "monthly",
      },
      {
        name: "Other Systems",
        billing: "monthly",
      },
    ],
  },
  {
    id: "websites",
    label: "Websites",
    icon: Monitor,
    description:
      "Professional websites built for your goals — priced annually.",
    items: [
      { name: "Basic Portfolio", billing: "annual" },
      { name: "Business Website", billing: "annual" },
      { name: "Custom Website", billing: "annual" },
    ],
  },
  {
    id: "building",
    label: "Building Plans",
    icon: Building2,
    description:
      "Professional architectural plans — residential and commercial.",
    items: [
      { name: "Small House (1–2 storey)", billing: "per plan" },
      { name: "Medium House (3–4 storey)", billing: "per plan" },
      { name: "Large House (5+ storey)", billing: "per plan" },
      { name: "Commercial Building", billing: "per plan" },
    ],
  },
];

export const PROJECTS = [
  {
    id: "stockpilot",
    name: "StockPilot",
    type: "Inventory Management System",
    division: "Systems & Web Development",
    client: "Anonymous Client",
    problem:
      "The client was managing inventory manually across spreadsheets — no visibility into low stock, no transaction history, no way to spot trends without digging through files.",
    outcome:
      "A full-stack web application that gives real-time stock visibility, logs every purchase and sale, and surfaces actionable reports — all in one place.",
    stack: ["React 18", "PHP 8.2", "MySQL 8.0", "Docker"],
    features: [
      "Real-time dashboard with stock alerts",
      "Full inventory CRUD with search & pagination",
      "Transaction logging with invoice numbers",
      "Trend charts and stock distribution reports",
      "Audit logs and automated backups",
      "User management",
    ],
  },
];
export const FAQS = [
  {
    q: "What does GoBeyond do?",
    a: "We build digital tools, custom systems, websites, and building plans — three divisions, one partner. You bring the problem; we figure out the right solution.",
  },
  {
    q: "Who do you work with?",
    a: "Both individuals and businesses. Entrepreneurs, SMEs, and established organizations — if you have a project that needs building, we can help.",
  },
  {
    q: "How does a project start?",
    a: "Send us a message. We'll schedule a short discovery session to understand your goals, then propose a scope and quote — no commitment required.",
  },
  {
    q: "How long does a project take?",
    a: "Depends entirely on scope. A simple digital tool or website might take 2–4 weeks. A full custom system or building plan will take longer. We'll give you a clear timeline after the discovery session.",
  },
  {
    q: "Do you handle projects from start to finish?",
    a: "Yes. From initial concept through delivery — and we stay available after launch for improvements and updates.",
  },
  {
    q: "Can you work across more than one division?",
    a: "Absolutely. If your project needs both a website and a building plan, or a digital tool and a management system, we handle it together rather than sending you somewhere else.",
  },
];

export const CONTACT_INFO = [
  { icon: Phone, label: "Phone", value: "+639207982695" },
  { icon: Mail, label: "Email", value: "itsolutionsgobeyond@gmail.com" },
  {
    icon: MapPin,
    label: "Office",
    value: "2433 Mabilao, San Fabian, Pangasinan, Philippines",
  },
];

export const FOOTER_COLS = [
  {
    title: "Solutions",
    links: [
      "Digital Solutions & Products",
      "Systems & Web Development",
      "Building Plan Solutions",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Our Approach", "Why GoBeyond", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

// ─── THEME ───────────────────────────────────────────────────────────────────

export const T = {
  light: {
    pageBg: "#f7f7f7",
    altBg: "#ededed",
    cardBg: "#ffffff",
    border: "rgba(0,0,0,0.09)",
    borderStrong: "rgba(0,0,0,0.16)",
    heading: "#0a0a0a",
    body: "#333333",
    muted: "#666666",
    faint: "#999999",
    accent: "#ccea4a",
    accentDark: "#b8d63a",
    accentText: "#0a0a0a",
    tagBg: "rgba(0,0,0,0.04)",
    tagText: "#555",
    navBg: "rgba(247,247,247,0.94)",
    inputBg: "#efefef",
  },
  dark: {
    pageBg: "#0a0a0a",
    altBg: "#111111",
    cardBg: "#141414",
    border: "rgba(255,255,255,0.07)",
    borderStrong: "rgba(255,255,255,0.13)",
    heading: "#f7f7f7",
    body: "#c8c8c8",
    muted: "#888888",
    faint: "#555555",
    accent: "#ccea4a",
    accentDark: "#b8d63a",
    accentText: "#0a0a0a",
    tagBg: "rgba(255,255,255,0.05)",
    tagText: "#aaa",
    navBg: "rgba(10,10,10,0.94)",
    inputBg: "#1c1c1c",
  },
};
