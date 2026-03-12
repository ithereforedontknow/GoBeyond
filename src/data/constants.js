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
  { name: "Vercel", color: "#000000" },
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
    cycle: "featureA",
    color: "text-orange-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Zero-trust architecture, SOC 2 compliance, and real-time threat detection.",
    cycle: "featureB",
    color: "text-amber-500",
  },
  {
    icon: Code2,
    title: "Custom SaaS Dev",
    desc: "From MVP to scale — full-stack teams that ship fast and iterate faster.",
    cycle: "featureC",
    color: "text-rose-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    desc: "Turn raw data into decisions with live dashboards and predictive models.",
    cycle: "featureA",
    color: "text-orange-500",
  },
  {
    icon: Cpu,
    title: "AI Automation",
    desc: "LLM-powered workflows that replace repetitive tasks and cut overhead.",
    cycle: "featureB",
    color: "text-amber-500",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Dedicated engineers on call around the clock — no bots, real people.",
    cycle: "featureC",
    color: "text-rose-500",
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

export const TESTIMONIALS = [
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
