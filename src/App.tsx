import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Users,
  Sparkles,
  MapPin,
  Calendar,
  Quote,
  Award,
  Building2,
  ShieldCheck,
  Mic2,
  Handshake,
  Gift,
  Mail,
  Phone,
} from "lucide-react";
import {
  Navbar,
  Footer,
  ScrollProgress,
  Reveal,
  Counter,
} from "@/components/site/shell";

import heroImg from "@/assets/hero.jpg";
import communityImg from "@/assets/community.jpg";
import trainImg from "@/assets/train.jpg";
import strengthenImg from "@/assets/strengthen.jpg";
import connectImg from "@/assets/connect.jpg";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";

export default function App() { return <Home />; }

function Home() {
  return (
    <div id="top" className="relative min-h-dvh overflow-x-hidden bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Pillars />
        <About />
        <Programs />
        <Impact />
        <Testimonials />
        <Gallery />
        <GetInvolved />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] w-full overflow-hidden">
      {/* Background image with parallax */}
      <motion.div style={{ scale, y }} className="absolute inset-0 -z-20">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_40%,transparent_0%,color-mix(in_oklab,var(--navy-deep)_55%,transparent)_100%)]" />

      {/* Decorative floaters */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[22%] h-72 w-72 rounded-full bg-red-brand/25 blur-3xl animate-float-slow" />
        <div className="absolute right-[6%] top-[35%] h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-float-slow [animation-delay:-3s]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-28 pb-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex w-fit items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/85"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-brand shadow-[0_0_12px] shadow-red-brand" />
          80 Years of Service · Est. 1946
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-5xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[5.25rem]"
        >
          Leadership that{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
              moves nations.
            </span>
            <span className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-red opacity-90" />
          </span>
          <br />
          <span className="text-white/80">Built for those who serve.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
        >
          Americans Working Around the Globe empowers, trains, and connects
          volunteer leaders across the U.S. military community in Europe and
          beyond — equipping people like you to lead with confidence,
          purpose, and impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#programs"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-navy-deep shadow-[0_20px_50px_-15px_rgba(255,255,255,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_60px_-15px_rgba(255,255,255,0.55)]"
          >
            Explore Our Programs
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#involved"
            className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/10"
          >
            Join the Movement
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Floating stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            { value: "10K+", label: "Leaders trained" },
            { value: "80", label: "Years of service" },
            { value: "15+", label: "Areas represented" },
            { value: "70", label: "Annual seminars" },
          ].map((s) => (
            <div
              key={s.label}
              className="glass-dark rounded-2xl px-4 py-3 text-white"
            >
              <div className="font-display text-2xl font-semibold leading-none">
                {s.value}
              </div>
              <div className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-white/70">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex flex-col items-center text-white/70">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="mt-1 h-4 w-4 animate-scroll-hint" />
      </div>
    </section>
  );
}

/* ---------------- MARQUEE / TRUSTED ---------------- */
function Marquee() {
  const items = [
    "U.S. Army Garrison Communities",
    "USAFE-AFAFRICA",
    "Edelweiss Lodge & Resort",
    "Military Spouse Networks",
    "Department of Defense Civilians",
    "Veteran Leadership Alliances",
  ];
  return (
    <section className="relative border-y border-border bg-gradient-muted py-6">
      <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-hidden px-6 lg:px-10">
        <span className="hidden shrink-0 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:block">
          Trusted across the community
        </span>
        <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <motion.div
            className="flex shrink-0 items-center gap-12 pr-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {[...items, ...items].map((t, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-sm font-medium text-navy-deep/70"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PILLARS ---------------- */
function Pillars() {
  const pillars = [
    {
      title: "Train",
      image: trainImg,
      icon: GraduationCap,
      body:
        "Comprehensive professional and personal development seminars designed to build strong, effective leaders. We believe that strong training transforms potential into purpose-driven leadership.",
    },
    {
      title: "Strengthen",
      image: strengthenImg,
      icon: ShieldCheck,
      body:
        "Initiatives focused on resilience — empowering leaders to adapt, innovate, and thrive in an ever-changing world. AWAG equips you to stand strong for yourself, your team, and your community.",
    },
    {
      title: "Connect",
      image: connectImg,
      icon: HeartHandshake,
      body:
        "Networking, mentorship, and events that bring leaders together to inspire, challenge, and support one another. We create spaces where lasting relationships are forged.",
    },
  ];

  return (
    <section id="pillars" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            eyebrow="Our Mission"
            title="Three pillars. One purpose."
            description="For 80 years, AWAG has trained, strengthened, and connected leaders across the U.S. military community worldwide."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant">
                <div className="relative aspect-[5/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-navy-deep shadow-card">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="absolute bottom-5 left-5 font-display text-3xl font-semibold text-white">
                    {p.title}
                  </h3>
                </div>
                <div className="p-7">
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                  <a
                    href="#programs"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-deep transition-colors hover:text-red-brand"
                  >
                    <span className="relative">
                      Learn more
                      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-red-brand transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden bg-gradient-muted py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <Reveal>
          <div>
            <Eyebrow>About AWAG</Eyebrow>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-navy-deep sm:text-5xl">
              A nonprofit forged from service —
              <span className="text-red-brand"> dedicated to those who serve.</span>
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-muted-foreground">
              <p>
                Americans Working Around the Globe (AWAG) is a 501(c)(3)
                nonprofit organization that trains, strengthens, and connects
                leaders in military communities around the globe.
              </p>
              <p>
                We achieve this through leadership and professional development
                seminars for Americans living and working overseas. Founded in
                1946, AWAG has spread throughout Germany and across Europe —
                growing and changing as our community changes.
              </p>
              <p>
                Our Area Seminars and our four-day Annual Seminar provide a
                forum where spouses, service members, civilians, and retirees
                share ideas, develop skills, and lead with purpose wherever
                they’re stationed.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { Icon: Award, label: "501(c)(3) Nonprofit" },
                { Icon: Globe2, label: "Europe & Beyond" },
                { Icon: Building2, label: "Founded 1946" },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border bg-card p-4 text-center shadow-card"
                >
                  <Icon className="mx-auto h-5 w-5 text-red-brand" />
                  <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-navy-deep">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-navy opacity-10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-elegant">
              <img
                src={communityImg}
                alt="AWAG community"
                loading="lazy"
                className="h-[560px] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent p-7 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                  <Sparkles className="h-3.5 w-3.5" />
                  Train. Strengthen. Connect.
                </div>
                <p className="mt-2 max-w-md font-display text-xl font-semibold leading-snug">
                  “We believe leadership is about making a difference —
                  wherever you serve.”
                </p>
              </div>
            </div>

            <div className="absolute -left-4 -top-4 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-elegant sm:block">
              <div className="font-display text-3xl font-semibold text-navy-deep">
                <Counter to={80} />+
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Years of service
              </div>
            </div>
            <div className="absolute -right-4 bottom-16 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-elegant sm:block">
              <div className="font-display text-3xl font-semibold text-red-brand">
                <Counter to={10000} />+
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Leaders trained
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- PROGRAMS ---------------- */
function Programs() {
  return (
    <section id="programs" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            eyebrow="Our Programs"
            title="Where leaders gather, grow, and lead."
            description="From one-day regional events to our flagship four-day seminar, AWAG creates the forums where the next generation of military-community leaders is built."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <ProgramCard
            tag="Regional"
            title="Area Seminars"
            when="September – December"
            location="Across Europe"
            description="One-day leadership and professional development events held each fall across our regional communities. Each Area Seminar is unique to its region — speakers and topics curated to benefit the local community."
            cta={{ label: "RSVP for an Area Seminar", href: "#contact" }}
            image={gallery1}
          />
          <ProgramCard
            tag="Flagship"
            title="Annual Seminar"
            when="April 25–29, 2027"
            location="Edelweiss Lodge & Resort, Garmisch"
            description="Open to U.S.-affiliated military, contractors, civilians, and spouses, AWAG’s four-day seminar in Garmisch brings together leaders from across Europe for an unforgettable, transformational experience."
            cta={{ label: "RSVP for Annual Seminar", href: "#contact" }}
            image={gallery3}
            accent
          />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 rounded-3xl border border-border bg-gradient-muted p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <Eyebrow>Expanding Our Footprint</Eyebrow>
                <h3 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-navy-deep sm:text-3xl">
                  Don’t see your area represented? Let’s build it together.
                </h3>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  We are always looking to expand our service footprint to new
                  communities, garrisons, and bases worldwide.
                </p>
              </div>
              <a
                href="#contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-deep px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProgramCard({
  tag,
  title,
  when,
  location,
  description,
  cta,
  image,
  accent,
}: {
  tag: string;
  title: string;
  when: string;
  location: string;
  description: string;
  cta: { label: string; href: string };
  image: string;
  accent?: boolean;
}) {
  return (
    <Reveal>
      <article
        className={`group relative h-full overflow-hidden rounded-3xl border border-border shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant ${
          accent ? "bg-gradient-navy text-white" : "bg-card"
        }`}
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
          <div
            className={`absolute inset-0 ${
              accent
                ? "bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent"
                : "bg-gradient-to-t from-black/55 via-black/10 to-transparent"
            }`}
          />
          <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy-deep backdrop-blur">
            {tag}
          </span>
        </div>
        <div className="p-8">
          <h3 className={`font-display text-3xl font-semibold ${accent ? "text-white" : "text-navy-deep"}`}>
            {title}
          </h3>
          <div className={`mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm ${accent ? "text-white/75" : "text-muted-foreground"}`}>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {when}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {location}
            </span>
          </div>
          <p className={`mt-5 leading-relaxed ${accent ? "text-white/80" : "text-muted-foreground"}`}>
            {description}
          </p>
          <a
            href={cta.href}
            className={`mt-7 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
              accent
                ? "bg-white text-navy-deep hover:bg-white/95"
                : "bg-navy-deep text-white hover:bg-navy"
            }`}
          >
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

/* ---------------- IMPACT ---------------- */
function Impact() {
  const stats = [
    { value: 10000, suffix: "+", label: "Leaders trained" },
    { value: 80, suffix: "", label: "Years of service" },
    { value: 70, suffix: "+", label: "Annual seminars" },
    { value: 15, suffix: "+", label: "Areas represented" },
    { value: 25, suffix: "+", label: "Partners & contributors" },
    { value: 200, suffix: "+", label: "Scholarships awarded" },
  ];
  return (
    <section
      id="impact"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-navy py-28 text-white sm:py-36"
    >
      <div className="absolute inset-0 opacity-30 [mask-image:radial-gradient(70%_50%_at_50%_50%,#000_50%,transparent)]">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-brand/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow light>Our Impact</Eyebrow>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Eight decades of impact —
              <span className="text-white/60"> measured in lives changed.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
              See the difference we’re making in military communities around
              the world.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="group h-full bg-navy-deep px-8 py-10 transition-colors hover:bg-navy">
                <div className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm uppercase tracking-[0.18em] text-white/60">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const items = [
    {
      quote:
        "AWAG gave me the confidence and the community I needed to lead well in an unfamiliar place. The connections I made still shape how I serve today.",
      name: "Military Spouse",
      role: "Annual Seminar Alumna",
    },
    {
      quote:
        "The training is world-class — practical, transformative, and grounded in service. AWAG’s impact on our garrison is impossible to overstate.",
      name: "Garrison Volunteer Leader",
      role: "Germany",
    },
    {
      quote:
        "Walking into AWAG, I expected a seminar. I left with mentors, a network across Europe, and a clearer sense of purpose.",
      name: "Department of Defense Civilian",
      role: "Area Seminar Participant",
    },
  ];
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            eyebrow="Voices from the Community"
            title="What leaders say about AWAG."
            description="Stories from spouses, service members, civilians, and retirees whose leadership journeys were shaped by AWAG."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant">
                <Quote className="absolute right-7 top-7 h-12 w-12 text-red-brand/15 transition-transform group-hover:scale-110" />
                <blockquote className="relative font-display text-[19px] leading-snug text-navy-deep">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-red text-sm font-semibold text-white">
                    {t.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy-deep">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const imgs = [
    { src: gallery1, h: "row-span-2" },
    { src: gallery2, h: "" },
    { src: gallery4, h: "" },
    { src: gallery3, h: "row-span-2" },
    { src: communityImg, h: "" },
    { src: trainImg, h: "" },
  ];
  return (
    <section className="relative bg-gradient-muted py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            eyebrow="Gallery"
            title="Moments from the movement."
            description="Glimpses from seminars, gatherings, and the people who make AWAG what it is."
          />
        </Reveal>
        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:auto-rows-[200px]">
          {imgs.map((it, i) => (
            <Reveal key={i} delay={i * 0.05} className={it.h}>
              <div className={`group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card`}>
                <img
                  src={it.src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GET INVOLVED ---------------- */
function GetInvolved() {
  const ways = [
    {
      Icon: Users,
      title: "Volunteer with AWAG",
      body: "Become a key part of our programs at the local, annual, or board level.",
      cta: "Learn more",
    },
    {
      Icon: Mic2,
      title: "Speak or Facilitate",
      body: "Share your knowledge at our Annual Seminar or a regional Area Seminar.",
      cta: "Become a speaker",
    },
    {
      Icon: Handshake,
      title: "Sponsor or Partner",
      body: "Support AWAG through financial contributions or strategic collaboration.",
      cta: "Work with us",
    },
    {
      Icon: Gift,
      title: "Ways to Contribute",
      body: "Every gift helps us reach more volunteers and expand our impact.",
      cta: "Give today",
    },
  ];
  return (
    <section id="involved" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            eyebrow="Get Involved"
            title="AWAG thrives because of people like you."
            description="Explore the many ways you can be part of our mission — from volunteering to sponsoring."
          />
        </Reveal>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06}>
              <a
                href="#contact"
                className="group relative flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-navy-deep/30 hover:shadow-elegant"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-deep to-navy text-white shadow-card transition-transform group-hover:scale-110">
                  <w.Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-navy-deep">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {w.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-red-brand">
                  {w.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DONATE CTA ---------------- */
function Donate() {
  return (
    <section id="donate" className="relative scroll-mt-24 px-6 pb-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-navy p-10 sm:p-16">
            <div className="absolute inset-0 opacity-50">
              <div className="absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-red-brand/40 blur-3xl" />
              <div className="absolute -left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-3xl" />
            </div>
            <div className="relative grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <Eyebrow light>Support our cause</Eyebrow>
                <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  Help us train the next generation of leaders abroad.
                </h2>
                <p className="mt-5 max-w-xl text-white/75">
                  Your gift directly supports scholarships, seminars, and the
                  volunteer leaders who build stronger communities for those
                  who serve.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-red px-7 py-4 text-base font-semibold text-white shadow-[0_20px_50px_-15px_color-mix(in_oklab,var(--red-brand)_70%,transparent)] transition-all hover:-translate-y-0.5"
                >
                  Donate Now
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#involved"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10"
                >
                  Other ways to give
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 bg-gradient-muted py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight text-navy-deep sm:text-5xl">
              Let’s build leaders, together.
            </h2>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Whether you want to volunteer, speak at a seminar, partner with
              us, or bring AWAG to your community — we’d love to hear from you.
            </p>
            <div className="mt-10 space-y-4">
              {[
                { Icon: Mail, label: "info@awagleadership.org", href: "mailto:info@awagleadership.org" },
                { Icon: Globe2, label: "awagleadership.org", href: "https://www.awagleadership.org" },
                { Icon: MapPin, label: "Serving U.S. military communities across Europe & beyond" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href || "#"}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-deep text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-navy-deep">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href =
                "mailto:info@awagleadership.org?subject=AWAG%20Leadership%20Inquiry";
            }}
            className="rounded-3xl border border-border bg-card p-8 shadow-elegant sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="First name" name="first" required />
              <Field label="Last name" name="last" required />
              <Field label="Email" name="email" type="email" required full />
              <Field label="Organization or unit" name="org" full />
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  I’m interested in
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Area Seminars", "Annual Seminar", "Volunteering", "Speaking", "Sponsorship", "Donating"].map((t) => (
                    <label
                      key={t}
                      className="cursor-pointer rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-navy-deep transition-colors has-[:checked]:border-navy-deep has-[:checked]:bg-navy-deep has-[:checked]:text-white"
                    >
                      <input type="checkbox" name="interest" value={t} className="sr-only" />
                      {t}
                    </label>
                  ))}
                </div>
              </div>
              <Field label="Message" name="message" textarea full required />
            </div>
            <button
              type="submit"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-deep px-7 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy sm:w-auto"
            >
              Send message
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-4 text-xs text-muted-foreground">
              By submitting, you agree to be contacted by AWAG Leadership about your inquiry.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  full,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  full?: boolean;
  textarea?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
      >
        {label}
        {required && <span className="ml-0.5 text-red-brand">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={5}
          className="mt-2 w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm text-navy-deep outline-none transition-all placeholder:text-muted-foreground focus:border-navy-deep focus:ring-4 focus:ring-navy-deep/10"
          placeholder="Tell us a bit about how you’d like to get involved…"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-navy-deep outline-none transition-all placeholder:text-muted-foreground focus:border-navy-deep focus:ring-4 focus:ring-navy-deep/10"
        />
      )}
    </div>
  );
}

/* ---------------- Shared ---------------- */
function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-navy-deep sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${
        light
          ? "border-white/20 bg-white/5 text-white/80"
          : "border-red-brand/20 bg-red-brand/5 text-red-brand"
      }`}
    >
      <span className={`inline-block h-1 w-1 rounded-full ${light ? "bg-white/70" : "bg-red-brand"}`} />
      {children}
    </span>
  );
}
