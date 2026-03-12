import { useState, useEffect, useMemo } from "react";
import Hero from "./components/sections/Hero";
import LogoStrip from "./components/sections/LogoStrip";
import HowItWorks from "./components/sections/HowItWorks";
import Features from "./components/sections/Features";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import CTABand from "./components/sections/CTABand";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

function buildTheme(dark, scrolled) {
  return {
    pageBg: dark ? "bg-stone-950" : "bg-[#fffaf7]",
    sectionAlt: dark ? "bg-stone-900/50" : "bg-[#faf6f2]",
    cardBg: dark ? "bg-stone-900" : "bg-white",
    inputBg: dark ? "bg-stone-800" : "bg-stone-50",
    navBg: dark
      ? scrolled
        ? "bg-stone-950/95 backdrop-blur-md border-b border-stone-800"
        : "bg-stone-950/80 backdrop-blur-sm border-transparent"
      : scrolled
        ? "bg-[#fffaf7]/95 backdrop-blur-md shadow-sm border-b border-orange-100"
        : "bg-[#fffaf7]/80 backdrop-blur-sm border-transparent",
    mobileMenu: dark
      ? "bg-stone-950 border-stone-800"
      : "bg-[#fffaf7] border-stone-100",
    border: dark ? "border-stone-800" : "border-stone-200/70",
    inputBorder: dark ? "border-stone-700" : "border-stone-200",
    heading: dark ? "text-stone-50" : "text-stone-900",
    body: dark ? "text-stone-300" : "text-stone-600",
    muted: dark ? "text-stone-400" : "text-stone-500",
    label: dark ? "text-stone-500" : "text-stone-400",
    featureA: dark
      ? "bg-orange-950/40 border-orange-900/50"
      : "bg-orange-50/80 border-orange-200",
    featureB: dark
      ? "bg-amber-950/40 border-amber-900/50"
      : "bg-amber-50/80  border-amber-200",
    featureC: dark
      ? "bg-rose-950/40 border-rose-900/50"
      : "bg-rose-50/80   border-rose-200",
    stepCard: dark
      ? "bg-stone-900 border-stone-800"
      : "bg-white border-stone-200/70",
    stepNum: dark
      ? "bg-orange-900/50 text-orange-300 border-orange-800/50"
      : "bg-orange-100 text-orange-700 border-orange-200",
    serviceCard: dark
      ? "bg-stone-900 border-stone-800 hover:border-orange-700/50"
      : "bg-white border-stone-100 hover:border-orange-300",
    badgePop: dark
      ? "bg-orange-900/60 text-orange-300 border-orange-800/50"
      : "bg-orange-100 text-orange-700 border-orange-200",
    badgeNew: dark
      ? "bg-amber-900/60 text-amber-300 border-amber-800/50"
      : "bg-amber-100  text-amber-700  border-amber-200",
    badgeHot: dark
      ? "bg-rose-900/60 text-rose-300 border-rose-800/50"
      : "bg-rose-100   text-rose-600   border-rose-200",
    tag: dark
      ? "text-stone-400 border-stone-700 bg-stone-800"
      : "text-stone-500 border-stone-200 bg-stone-50",
    faqOpen: dark
      ? "border-orange-800/60 bg-orange-950/30"
      : "border-orange-300 bg-orange-50",
    faqClosed: dark
      ? "border-stone-800 bg-stone-900"
      : "border-stone-100 bg-white",
    faqDivider: dark ? "border-orange-900/60" : "border-orange-100",
    pillOrange: dark
      ? "bg-orange-900/50 border-orange-800/40 text-orange-300"
      : "bg-orange-100 border-orange-200 text-orange-700",
    pillAmber: dark
      ? "bg-amber-900/50 border-amber-800/40 text-amber-300"
      : "bg-amber-100  border-amber-200  text-amber-700",
    pillRose: dark
      ? "bg-rose-900/50 border-rose-800/40 text-rose-300"
      : "bg-rose-100   border-rose-200   text-rose-600",
    pricingCard: dark
      ? "bg-stone-900 border-stone-800"
      : "bg-white border-stone-200/70",
    statCard: dark
      ? "bg-stone-900 border-stone-800"
      : "bg-white border-stone-200/70",
    testCard: dark
      ? "bg-stone-900 border-stone-800"
      : "bg-white border-stone-200/70",
    contactIcon: dark
      ? "bg-orange-900/40 border-orange-800/50"
      : "bg-orange-100 border-orange-200",
    footerBg: dark ? "bg-stone-950" : "bg-[#faf6f2]",
    footerHeading: dark ? "text-stone-300" : "text-stone-700",
    footerLink: dark
      ? "text-stone-500 hover:text-orange-400"
      : "text-stone-400 hover:text-orange-600",
    footerText: dark ? "text-stone-600" : "text-stone-400",
    shadow: dark ? "" : "shadow-sm",
    toggleBg: dark
      ? "bg-stone-800 border-stone-700"
      : "bg-white border-stone-200",
    iconBg: dark ? "bg-stone-800" : "bg-white",
  };
}
export default function GoBeyond() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const t = useMemo(() => buildTheme(dark, scrolled), [dark, scrolled]);

  return (
    <div
      style={{ fontFamily: "'Google Sans','Product Sans',sans-serif" }}
      className={`${t.pageBg} ${t.heading} min-h-screen overflow-x-hidden transition-colors duration-300`}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@300;400;500;700&display=swap');
        * { font-family: 'Google Sans','Product Sans',sans-serif !important; }
        html { scroll-behavior: smooth; }

        /* Animations */
        @keyframes fadeUp       { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse-ring   { 0%,100%{transform:scale(1);opacity:.7} 50%{transform:scale(1.25);opacity:.2} }
        @keyframes marquee      { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        .fade-up  { animation: fadeUp 0.55s ease-out both; }
        .s1{animation-delay:.06s}.s2{animation-delay:.13s}.s3{animation-delay:.2s}.s4{animation-delay:.27s}
        .pulse-ring   { animation: pulse-ring 2.5s ease-in-out infinite; }
        .marquee-track{ animation: marquee 30s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
        .field-error  { animation: fadeUp 0.2s ease-out both; }

        /* Gradient text */
        .hero-gradient {
          background: linear-gradient(125deg, #ea580c 0%, #f97316 40%, #fb923c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Dot grids */
        .dot-grid-light { background-image: radial-gradient(rgba(234,88,12,0.10) 1px, transparent 1px); background-size: 26px 26px; }
        .dot-grid-dark  { background-image: radial-gradient(rgba(234,88,12,0.14) 1px, transparent 1px); background-size: 26px 26px; }

        /* Card hover */
        .card-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .card-hover:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(234,88,12,0.1); }
      `}</style>

      <Navbar
        dark={dark}
        setDark={setDark}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrolled={scrolled}
        scrollTo={scrollTo}
        t={t}
      />
      <Hero dark={dark} scrollTo={scrollTo} t={t} />
      <LogoStrip dark={dark} t={t} />
      <HowItWorks t={t} />
      <Features t={t} />
      <Services t={t} scrollTo={scrollTo} />
      {/* <Testimonials t={t} />*/}
      <Pricing t={t} scrollTo={scrollTo} />
      <FAQ t={t} />
      <Contact t={t} />
      <CTABand dark={dark} t={t} scrollTo={scrollTo} />
      <Footer dark={dark} setDark={setDark} t={t} />
    </div>
  );
}
