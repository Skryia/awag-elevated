import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Users,
  HeartHandshake,
  GraduationCap,
  Sparkles,
  MapPin,
  Calendar,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Quote,
  ChevronDown,
  ShieldCheck,
  Award,
  Building2,
} from "lucide-react";
import logo from "@/assets/logo.png";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#pillars", label: "Mission" },
  { href: "#programs", label: "Programs" },
  { href: "#impact", label: "Impact" },
  { href: "#involved", label: "Get Involved" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_1px_0_0_color-mix(in_oklab,var(--navy-deep)_8%,transparent)]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10"
      >
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="AWAG Leadership"
            className="h-11 w-auto object-contain"
          />
          <div className={`hidden sm:flex flex-col leading-tight transition-colors ${
            scrolled ? "text-navy-deep" : "text-white"
          }`}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] opacity-80">
              AWAG
            </span>
            <span className="text-sm font-semibold">Leadership</span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-navy-deep/80 hover:text-navy-deep"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {l.label}
                <span
                  className={`pointer-events-none absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                    scrolled ? "bg-red-brand" : "bg-white"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href="#involved"
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              scrolled
                ? "text-navy-deep hover:text-red-brand"
                : "text-white/90 hover:text-white"
            }`}
          >
            Join Us
          </a>
          <a
            href="#donate"
            className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-red px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_color-mix(in_oklab,var(--red-brand)_70%,transparent)] transition-all duration-300 hover:shadow-[0_14px_32px_-10px_color-mix(in_oklab,var(--red-brand)_85%,transparent)] hover:-translate-y-0.5"
          >
            Donate
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className={`lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
            scrolled
              ? "bg-secondary text-navy-deep"
              : "bg-white/10 text-white backdrop-blur-md"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-4 rounded-3xl border border-border bg-white/95 p-4 shadow-elegant backdrop-blur-xl">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-navy-deep hover:bg-secondary"
                >
                  {l.label}
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a
              onClick={() => setOpen(false)}
              href="#involved"
              className="inline-flex items-center justify-center rounded-full border border-navy-deep px-4 py-2.5 text-sm font-semibold text-navy-deep"
            >
              Join Us
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#donate"
              className="inline-flex items-center justify-center rounded-full bg-gradient-red px-4 py-2.5 text-sm font-semibold text-white"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.4 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-red"
    />
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-navy text-white">
      <div className="absolute inset-0 opacity-30 [mask-image:radial-gradient(60%_50%_at_50%_0%,#000_40%,transparent_80%)]">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-red-brand/30 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="AWAG" className="h-12 w-auto" />
              <div className="leading-tight">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  AWAG
                </div>
                <div className="text-base font-semibold">Leadership</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Americans Working Around the Globe is a 501(c)(3) nonprofit that
              trains, strengthens, and connects leaders in U.S. military
              communities worldwide. Founded 1946.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Linkedin, href: "https://linkedin.com/company/awagleadership", label: "LinkedIn" },
                { Icon: Facebook, href: "https://www.facebook.com/AWAGLeadership/", label: "Facebook" },
                { Icon: Instagram, href: "https://www.instagram.com/awagleadership/", label: "Instagram" },
                { Icon: Youtube, href: "https://www.youtube.com/@AWAGleadership", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Organization"
            items={[
              { label: "Our Story", href: "#about" },
              { label: "Mission", href: "#pillars" },
              { label: "Impact", href: "#impact" },
              { label: "Leadership", href: "#about" },
            ]}
          />
          <FooterCol
            title="Programs"
            items={[
              { label: "Area Seminars", href: "#programs" },
              { label: "Annual Seminar", href: "#programs" },
              { label: "Scholarships", href: "#impact" },
              { label: "Volunteer", href: "#involved" },
            ]}
          />
          <FooterCol
            title="Get Involved"
            items={[
              { label: "Become a Speaker", href: "#involved" },
              { label: "Sponsor & Partner", href: "#involved" },
              { label: "Donate", href: "#donate" },
              { label: "Contact", href: "#contact" },
            ]}
          />
        </div>

        {/* Attribution */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-[#162b52]/60 p-6 text-center backdrop-blur-sm sm:p-8">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-white/70">
            This website concept was created independently as a demonstration of what a modern AWAG website could look like.
            It is not affiliated with AWAG and was built solely to showcase a possible redesign.
            If the AWAG team would like to discuss adopting this design, I'd be delighted to hear from you.
            For more information, please visit{" "}
            <a
              href="http://skryia.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-white/90 underline underline-offset-2 transition-colors hover:text-white"
            >
              skryia.com
            </a>
            .
          </p>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Americans Working Around the Globe. 501(c)(3) nonprofit. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Train. Strengthen. Connect.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              className="group inline-flex items-center gap-1 text-sm text-white/80 transition-colors hover:text-white"
            >
              <span className="relative">
                {it.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const ICONS = {
  Globe2,
  Users,
  HeartHandshake,
  GraduationCap,
  Sparkles,
  MapPin,
  Calendar,
  Mail,
  Quote,
  ChevronDown,
  Award,
  Building2,
  ArrowRight,
};
