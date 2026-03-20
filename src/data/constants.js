import {
  ArrowRight,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  AlertCircle,
  Flame,
  Play,
  GitBranch,
  Wifi,
  Activity,
  Bell,
  Users,
  LayoutDashboard,
  Award,
  ExternalLink,
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
  Package,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Solutions", id: "solutions" },
  { label: "Approach", id: "approach" },
  // { label: "Why Us", id: "whyus" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
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
  { name: "E-Commerce", color: "#fb923c" },
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
    name: "Digital Solutions & Products",
    desc: "Custom tools, automation systems, and workflow software that cut manual work and scale with you.",
    services: [
      "Custom digital tools",
      "Automation systems",
      "Workflow optimization",
      "Digital productivity resources",
      "Business process digitization",
    ],
    badge: null,
  },
  {
    icon: LayoutTemplate,
    name: "Systems & Web Development",
    desc: "Business systems, websites, e-commerce platforms, and client portals — built to your exact requirements.",
    services: [
      "Custom business systems",
      "Internal workflow & management systems",
      "Website design & development",
      "E-commerce platforms",
      "Client portals and dashboards",
    ],
    badge: "Most Popular",
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
    badge: null,
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

export const PLANS = {
  "Project-Based": [
    {
      name: "Basic",
      price: "TBD",
      period: "",
      desc: "Ideal for individuals and small-scale projects.",
      features: [
        "Single-scope project delivery",
        "Initial discovery & consultation",
        "One solution division",
        "Email support",
        "Defined revision rounds",
      ],
      cta: "Inquire Now",
      highlight: false,
    },
    {
      name: "Standard",
      price: "TBD",
      period: "",
      desc: "Built for growing businesses with broader needs.",
      features: [
        "Everything in Basic",
        "Multi-feature solution development",
        "Priority communication",
        "Dedicated project handling",
        "Extended revisions & refinements",
        "Post-delivery support",
      ],
      cta: "Inquire Now",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For large, complex, or multi-division engagements.",
      features: [
        "Everything in Standard",
        "Full-scope cross-division delivery",
        "On-site consultation available",
        "Long-term partnership terms",
        "Custom SLA and timelines",
        "Dedicated account handling",
      ],
      cta: "Contact Us",
      highlight: false,
    },
  ],
  Retainer: [
    {
      name: "Essential",
      price: "TBD",
      period: "/mo",
      desc: "Ongoing support for small teams and solo operators.",
      features: [
        "Monthly hours allocation (TBD)",
        "Maintenance & updates",
        "Priority email support",
        "Quarterly review session",
        "One solution division covered",
      ],
      cta: "Inquire Now",
      highlight: false,
    },
    {
      name: "Growth",
      price: "TBD",
      period: "/mo",
      desc: "Continuous partnership for scaling organizations.",
      features: [
        "Everything in Essential",
        "Expanded monthly hours (TBD)",
        "Multi-division coverage",
        "Bi-weekly check-ins",
        "Proactive optimization",
        "Dedicated point of contact",
      ],
      cta: "Inquire Now",
      highlight: true,
    },
    {
      name: "Full Partner",
      price: "Custom",
      period: "/mo",
      desc: "Complete innovation partnership, fully tailored.",
      features: [
        "Everything in Growth",
        "Unlimited scope coverage",
        "All three solution divisions",
        "Weekly strategy sessions",
        "On-site visits available",
        "Custom contract terms",
      ],
      cta: "Contact Us",
      highlight: false,
    },
  ],
};

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
