import {
  X,
  BarChart3,
  Settings2,
  MessageSquare,
  Rocket,
  Cloud,
  Shield,
  Code2,
  Cpu,
  Headphones,
  Globe,
  Database,
  Lock,
  TrendingUp,
  Package,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

// ─── PALETTE ────────────────────────────────────────────────────────────────
// Accent:  #ccea4a  (acid yellow-green)
// Light:   #f7f7f7  (off-white)
// Dark bg: #0a0a0a  (near-black — never pure #000 on a surface)
// We tint pure black/white slightly everywhere
// Text on dark:  #f7f7f7 / #999
// Text on light: #0a0a0a / #555

// ─── DATA ────────────────────────────────────────────────────────────────────

export const NAV_LINKS = ["Features", "Services", "Pricing", "FAQ", "Contact"];

export const STATS = [
  { value: "200+", label: "Clients Served" },
  { value: "99.98%", label: "Avg. Uptime" },
  { value: "4.2M+", label: "API Calls / Day" },
  { value: "18 min", label: "Avg. Response Time" },
];

export const TECH_LOGOS = [
  { name: "AWS", color: "#FF9900" },
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#68A063" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "Terraform", color: "#7B42BC" },
  { name: "Stripe", color: "#6772E5" },
  { name: "OpenAI", color: "#10A37F" },
  { name: "Google Cloud", color: "#4285F4" },
  { name: "Docker", color: "#2496ED" },
  { name: "Vercel", color: "#888" },
  { name: "Supabase", color: "#3ECF8E" },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Consult",
    icon: MessageSquare,
    desc: "We deep-dive into your goals, stack, and timeline. You get a clear roadmap — no guesswork.",
  },
  {
    step: "02",
    title: "Build",
    icon: Settings2,
    desc: "Our engineers ship iteratively with weekly demos. Full transparency via Slack, Jira, and GitHub.",
  },
  {
    step: "03",
    title: "Scale",
    icon: Rocket,
    desc: "Launch with confidence. We handle DevOps, monitoring, and performance at any scale.",
  },
];

export const FEATURES = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Elastic, auto-scaling cloud environments built for uptime and speed.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Zero-trust architecture, SOC 2 compliance, and real-time threat detection.",
  },
  {
    icon: Code2,
    title: "Custom SaaS Dev",
    desc: "From MVP to scale — full-stack teams that ship fast and iterate faster.",
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    desc: "Turn raw data into decisions with live dashboards and predictive models.",
  },
  {
    icon: Cpu,
    title: "AI Automation",
    desc: "LLM-powered workflows that replace repetitive tasks and cut overhead.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Dedicated engineers on call around the clock — no bots, real people.",
  },
];

export const SERVICES = [
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

export const PLANS = {
  monthly: [
    {
      name: "Starter",
      price: "$299",
      period: "/mo",
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
      period: "/mo",
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
      period: "",
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
      period: "/mo",
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
      period: "/mo billed yearly",
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
      period: "",
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

export const FAQS = [
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

export const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "hello@gobeyond.ph" },
  { icon: Phone, label: "Phone", value: "+63 2 8888 BEYOND" },
  { icon: MapPin, label: "Office", value: "Bonifacio Global City, Taguig" },
  { icon: Clock, label: "Hours", value: "Mon–Fri, 9AM–6PM PHT" },
];

export const FOOTER_COLS = [
  {
    title: "Solutions",
    links: [
      "SaaS Development",
      "Cloud Infrastructure",
      "Cybersecurity",
      "AI & Automation",
    ],
  },
  { title: "Company", links: ["About Us", "Careers", "Blog", "Press Kit"] },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Security", "Compliance"],
  },
];
export const T = {
  light: {
    pageBg: "#f7f7f7",
    altBg: "#ededed",
    cardBg: "#ffffff",
    border: "rgba(0,0,0,0.10)",
    borderStrong: "rgba(0,0,0,0.18)",
    heading: "#0a0a0a",
    body: "#333333",
    muted: "#666666",
    faint: "#999999",
    accent: "#ccea4a",
    accentDark: "#b8d63a", // hover state
    accentText: "#0a0a0a", // text ON accent bg
    tagBg: "rgba(0,0,0,0.05)",
    tagText: "#444",
    navBg: "rgba(247,247,247,0.94)",
    inputBg: "#efefef",
  },
  dark: {
    pageBg: "#0a0a0a",
    altBg: "#111111",
    cardBg: "#141414",
    border: "rgba(255,255,255,0.08)",
    borderStrong: "rgba(255,255,255,0.14)",
    heading: "#f7f7f7",
    body: "#c8c8c8",
    muted: "#888888",
    faint: "#555555",
    accent: "#ccea4a",
    accentDark: "#b8d63a",
    accentText: "#0a0a0a",
    tagBg: "rgba(255,255,255,0.06)",
    tagText: "#aaa",
    navBg: "rgba(10,10,10,0.94)",
    inputBg: "#1c1c1c",
  },
};
