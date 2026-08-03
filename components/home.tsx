"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import Footer from "@/components/footer";
import { useReveal } from "@/lib/use-reveal";

/* ── data ── */

const PILLARS = [
  {
    num: "01",
    kicker: "Rail Engineering",
    title: "Rail Signalling & Consultancy",
    color: "#1d59c2",
    tint: "rgba(29,89,194,0.13)",
    glow: "rgba(29,89,194,0.3)",
    desc: "End-to-end safety-critical rail infrastructure: signalling design, interlocking logic, independent verification, testing and commissioning — delivered to SIL-4 and IRSE standards.",
    chips: ["Interlocking Design", "Testing & Commissioning", "SIL-4 Compliance", "OLE & Electrification"],
    icon: "M8 3.1 V7 M16 3.1 V7 M4 11 H20 M4.5 19 L2 22 M19.5 19 L22 22 M12 2 C8 2 4 2.5 4 6 V15.5 A3.5 3.5 0 0 0 7.5 19 H16.5 A3.5 3.5 0 0 0 20 15.5 V6 C20 2.5 16 2 12 2 M7.7 15 h.1 M16.3 15 h.1",
    sats: [
      { x: "-14%", y: "12%", d: "5s", label: "SIL-4 Certified" },
      { x: "62%", y: "74%", d: "6.4s", label: "IRSE Accredited" },
    ],
    href: "/services/rail",
    cta: "Rail engineering",
  },
  {
    num: "02",
    kicker: "Workforce & Staffing",
    title: "Hire. Train. Deploy.",
    color: "#14a8a2",
    tint: "rgba(20,168,162,0.12)",
    glow: "rgba(20,168,162,0.25)",
    desc: "Full-lifecycle workforce services — contract staffing, permanent recruitment, payroll and compliance. Job-ready IT and non-IT professionals who contribute from day one.",
    chips: ["Contract Staffing", "Recruitment", "Payroll", "Labor Compliance"],
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11 a4 4 0 1 0 0-8 a4 4 0 0 0 0 8 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
    sats: [
      { x: "-12%", y: "70%", d: "5.6s", label: "Hire · Train · Deploy" },
      { x: "66%", y: "8%", d: "6s", label: "IT & Non-IT" },
    ],
    href: "/services/staffing",
    cta: "Workforce solutions",
  },
  {
    num: "03",
    kicker: "IT Solutions",
    title: "Digital ecosystems, built to scale",
    color: "#3fa03c",
    tint: "rgba(63,160,60,0.13)",
    glow: "rgba(63,160,60,0.28)",
    desc: "High-performance web platforms, mobile apps, ERP integrations and cloud-native architecture. Aesthetic front-ends on top of serious engineering.",
    chips: ["React & Next.js", "Cloud / AWS", "ERP Integration", "Mobile Apps"],
    icon: "M16 18 L22 12 L16 6 M8 6 L2 12 L8 18",
    sats: [
      { x: "-16%", y: "18%", d: "5.2s", label: "React · Node · .NET" },
      { x: "64%", y: "78%", d: "6.8s", label: "Cloud-native" },
    ],
    href: "/services/digital",
    cta: "Digital solutions",
  },
  {
    num: "04",
    kicker: "Digital Growth",
    title: "Strategy that compounds",
    color: "#6da41c",
    tint: "rgba(122,178,36,0.12)",
    glow: "rgba(122,178,36,0.22)",
    desc: "Data-driven SEO, PPC and brand positioning. We amplify your voice and turn visibility into measurable, durable growth.",
    chips: ["Technical SEO", "PPC", "Brand Strategy", "Analytics"],
    icon: "M23 6 L13.5 15.5 L8.5 10.5 L1 18 M17 6 H23 V12",
    sats: [
      { x: "-10%", y: "76%", d: "5.4s", label: "SEO & PPC" },
      { x: "68%", y: "14%", d: "6.2s", label: "Measurable growth" },
    ],
    href: "/services",
    cta: "Growth services",
  },
];

const ORBIT_HREFS = ["/services/rail", "/services/rail", "/services/staffing", "/services/staffing", "/services/digital", "/services/digital", "/services/digital", "/services/staffing"];
const ORBIT = [
  { name: "Rail Signalling", color: "#1d59c2", tint: "rgba(29,89,194,0.16)", icon: "M4 11 H20 M4.5 19 L2 22 M19.5 19 L22 22 M12 2 C8 2 4 2.5 4 6 V15.5 A3.5 3.5 0 0 0 7.5 19 H16.5 A3.5 3.5 0 0 0 20 15.5 V6 C20 2.5 16 2 12 2", stat: "SIL-4", statLabel: "Safety standard" },
  { name: "Rail Consultancy", color: "#1d59c2", tint: "rgba(29,89,194,0.16)", icon: "M9 21 H15 M12 17 V21 M5 3 H19 A2 2 0 0 1 21 5 V15 A2 2 0 0 1 19 17 H5 A2 2 0 0 1 3 15 V5 A2 2 0 0 1 5 3 M7 12 L10 9 L13 12 L17 7", stat: "BIM", statLabel: "3D modelling" },
  { name: "Contract Staffing", color: "#14a8a2", tint: "rgba(20,168,162,0.15)", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11 a4 4 0 1 0 0-8 a4 4 0 0 0 0 8", stat: "48h", statLabel: "Deployment" },
  { name: "Recruitment", color: "#14a8a2", tint: "rgba(20,168,162,0.15)", icon: "M11 19 a8 8 0 1 0 0-16 a8 8 0 0 0 0 16 M21 21 L16.65 16.65", stat: "7+", statLabel: "Industries" },
  { name: "Web Development", color: "#3fa03c", tint: "rgba(63,160,60,0.16)", icon: "M16 18 L22 12 L16 6 M8 6 L2 12 L8 18", stat: "60fps", statLabel: "Performance" },
  { name: "App Development", color: "#3fa03c", tint: "rgba(63,160,60,0.16)", icon: "M7 2 H17 A2 2 0 0 1 19 4 V20 A2 2 0 0 1 17 22 H7 A2 2 0 0 1 5 20 V4 A2 2 0 0 1 7 2 M12 18 h.01", stat: "iOS+A", statLabel: "Cross-platform" },
  { name: "SEO & Growth", color: "#6da41c", tint: "rgba(122,178,36,0.15)", icon: "M23 6 L13.5 15.5 L8.5 10.5 L1 18 M17 6 H23 V12", stat: "3.4x", statLabel: "Avg. traffic lift" },
  { name: "Payroll & Compliance", color: "#6da41c", tint: "rgba(122,178,36,0.15)", icon: "M14 2 H6 A2 2 0 0 0 4 4 V20 A2 2 0 0 0 6 22 H18 A2 2 0 0 0 20 20 V8 Z M14 2 V8 H20 M9 15 L11 17 L15 13", stat: "100%", statLabel: "Statutory filings" },
].map((c, i) => ({ ...c, href: ORBIT_HREFS[i] }));

type OrbitCard = (typeof ORBIT)[number];

// Seeded RNG so the particle field is identical on server and client (no hydration mismatch).
const rng = (seed: number) => {
  let s = seed;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
};
const rnd = rng(42);
const PARTICLES = Array.from({ length: 26 }, () => ({
  x: (rnd() * 100).toFixed(1) + "%",
  y: (rnd() * 100).toFixed(1) + "%",
  s: (2 + rnd() * 3).toFixed(1) + "px",
  d: (4 + rnd() * 5).toFixed(1) + "s",
  dl: (-rnd() * 6).toFixed(1) + "s",
}));

const STATS = [
  { n: 100, suffix: "+", label: "Projects delivered" },
  { n: 40, suffix: "+", label: "Enterprise clients" },
  { n: 6, suffix: "+", label: "Countries" },
  { n: 98, suffix: "%", label: "Client retention" },
  { n: 150, suffix: "+", label: "Experts" },
];

const STEPS = [
  { n: "1", title: "Discover", desc: "Deep-diving into technical requirements, constraints and organizational culture before a single line is drawn.", color: "#1d59c2", tint: "rgba(29,89,194,0.13)", glow: "rgba(29,89,194,0.3)", icon: "M11 19 a8 8 0 1 0 0-16 a8 8 0 0 0 0 16 M21 21 L16.65 16.65" },
  { n: "2", title: "Design", desc: "Robust blueprints — whether rail signalling logic or software architecture — reviewed and independently verified.", color: "#14a8a2", tint: "rgba(20,168,162,0.12)", glow: "rgba(20,168,162,0.25)", icon: "M12 19 L19 12 L22 15 L15 22 L12 19 M18 13 L16.5 5.5 L2 2 L5.5 16.5 L13 18 L18 13 M2 2 L9.586 9.586 M11 13 a2 2 0 1 0 0-4 a2 2 0 0 0 0 4" },
  { n: "3", title: "Develop", desc: "Precision engineering and meticulous development in agile sprints, led by domain experts.", color: "#3fa03c", tint: "rgba(63,160,60,0.13)", glow: "rgba(63,160,60,0.28)", icon: "M16 18 L22 12 L16 6 M8 6 L2 12 L8 18" },
  { n: "4", title: "Deploy", desc: "Exhaustive trials and validation for zero-error delivery — then a clean, controlled handover.", color: "#6da41c", tint: "rgba(122,178,36,0.12)", glow: "rgba(122,178,36,0.22)", icon: "M4.5 16.5 c-1.5 1.26 -2 5 -2 5 s3.74 -.5 5 -2 c.71 -.84 .7 -2.13 -.09 -2.91 a2.18 2.18 0 0 0 -2.91 -.09 M12 15 l-3 -3 a22 22 0 0 1 2 -3.95 A12.88 12.88 0 0 1 22 2 c0 2.72 -.78 7.5 -6 11 a22.35 22.35 0 0 1 -4 2 M9 12 H4 s.55 -3.03 2 -4 c1.62 -1.08 5 0 5 0 M12 15 v5 s3.03 -.55 4 -2 c1.08 -1.62 0 -5 0 -5" },
  { n: "5", title: "Support", desc: "Ongoing optimization and agile iteration to keep systems scalable, safe and fast — for the long run.", color: "#1d59c2", tint: "rgba(29,89,194,0.13)", glow: "rgba(29,89,194,0.3)", icon: "M12 22 c5.5 -1.5 9 -5.5 9 -11 V5 L12 2 L3 5 v6 c0 5.5 3.5 9.5 9 11 M9 12 l2 2 l4 -4" },
];

const QUOTES = [
  { text: "Onmog's signalling team delivered interlocking design and commissioning support with zero non-conformities. Their rigour on safety-critical work is rare.", who: "Director of Operations", role: "Rail Infrastructure Partner", img: "/testimonials/client_portrait_1_1777673511028.png" },
  { text: "The Hire-Train-Deploy model gave us engineers who were productive in week one. It changed how we think about scaling teams.", who: "VP, Talent Acquisition", role: "Global IT Services Partner", img: "/testimonials/client_portrait_2_1777673531773.png" },
  { text: "They rebuilt our enterprise portal and the ERP integration behind it. Fast, secure, and the team genuinely owned the outcome end to end.", who: "Chief Technology Officer", role: "Life Sciences Partner", img: "/testimonials/client_portrait_3_1777673555495.png" },
];

const CLIENTS = [
  ["Nippon Signal India", "Rail & Infrastructure"], ["Medha Servo Drives", "Rail & Infrastructure"], ["Tranway Technologies", "Rail & Infrastructure"], ["Infosys", "IT & Digital"], ["Wipro", "IT & Digital"], ["Deloitte", "IT & Digital"], ["Lancesoft", "Workforce"], ["Bloom Consulting", "Workforce"],
  ["Dharani Life Sciences", "Life Sciences"], ["Brigidlife", "Life Sciences"], ["GHSL Technologies", "IT & Digital"], ["Bellfast", "Workforce"], ["Incrivelsoft", "IT & Digital"], ["Pragota", "Infrastructure"], ["Lotus Constructions", "Infrastructure"], ["Fidrox", "IT & Digital"],
].map((c) => ({ name: c[0], industry: c[1] }));
const HALF = Math.ceil(CLIENTS.length / 2);
const ROW_A = CLIENTS.slice(0, HALF);
const ROW_B = CLIENTS.slice(HALF);

/* ── shared styles ── */

const kicker: CSSProperties = { fontSize: 11, fontWeight: 800, letterSpacing: "0.26em", textTransform: "uppercase", color: "#1d59c2", marginBottom: 14 };
const h2: CSSProperties = { margin: 0, fontSize: "clamp(28px,3.6vw,48px)", fontWeight: 800, letterSpacing: "-0.025em" };
const gridBg: CSSProperties = {
  position: "absolute",
  inset: 0,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Cpath d='M0 .5H43.5V44' fill='none' stroke='%230d2248' stroke-opacity='.05'/%3E%3C/svg%3E")`,
};
const contactLabel: CSSProperties = { display: "flex", flexDirection: "column", gap: 8, fontSize: 11.5, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5d6c8a" };
const contactInput: CSSProperties = {
  padding: "13px 15px",
  borderRadius: 12,
  background: "rgba(13,34,72,0.04)",
  border: "1px solid rgba(13,34,72,0.10)",
  color: "#0e1a2e",
  fontFamily: "inherit",
  fontSize: 14,
  outline: "none",
};
const chipStyle: CSSProperties = { padding: "7px 14px", borderRadius: 999, fontSize: 12, fontWeight: 600, color: "#33456b", background: "rgba(13,34,72,0.045)", border: "1px solid rgba(13,34,72,0.10)" };

function MarqueeChip({ name, industry, hoverColor }: { name: string; industry: string; hoverColor: "blue" | "teal" }) {
  const vars = hoverColor === "blue"
    ? { "--hb": "rgba(29,89,194,0.5)", "--hs": "rgba(29,89,194,0.25)" }
    : { "--hb": "rgba(20,168,162,0.5)", "--hs": "rgba(20,168,162,0.2)" };
  return (
    <span
      className="mchip"
      style={{
        ...(vars as CSSProperties),
        flex: "none",
        display: "inline-flex",
        flexDirection: "column",
        gap: 4,
        padding: "16px 26px",
        borderRadius: 15,
        background: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(13,34,72,0.08)",
        backdropFilter: "blur(10px)",
        transition: "border-color .3s,box-shadow .3s,transform .3s",
        cursor: "default",
      }}
    >
      <span style={{ fontSize: 15, fontWeight: 800, color: "#1e2f4f", whiteSpace: "nowrap" }}>{name}</span>
      <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a94ab", whiteSpace: "nowrap" }}>{industry}</span>
    </span>
  );
}

/* ── page ── */

export default function Home() {
  const router = useRouter();
  const [formSent, setFormSent] = useState(false);
  const [qIndex, setQIndex] = useState(0);
  const [zoom, setZoom] = useState<OrbitCard | null>(null);

  const heroRef = useRef<HTMLElement>(null);
  const heroCenterRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const orbitTiltRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const processTrackRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const zoomCardRef = useRef<HTMLDivElement>(null);
  const zoomDelta = useRef({ dx: 0, dy: 0 });
  const qIndexRef = useRef(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const dragging = useRef(false);

  useReveal();

  const layoutQuotes = (cur: number) => {
    const wrap = carouselRef.current;
    if (!wrap) return;
    wrap.querySelectorAll<HTMLElement>("[data-quote-card]").forEach((card, i) => {
      let d = i - cur;
      if (d > 1) d -= 3;
      if (d < -1) d += 3;
      const x = d * Math.min(400, window.innerWidth * 0.32);
      card.style.transform = `translate(${x}px,-50%) rotateY(${-d * 24}deg) scale(${d === 0 ? 1 : 0.82})`;
      card.style.opacity = d === 0 ? "1" : "0.45";
      card.style.filter = d === 0 ? "none" : "blur(1.5px)";
      card.style.zIndex = d === 0 ? "3" : "1";
      card.style.pointerEvents = d === 0 ? "auto" : "none";
    });
  };

  const goQuote = (i: number) => {
    const next = (i + 3) % 3;
    qIndexRef.current = next;
    setQIndex(next);
    layoutQuotes(next);
    resetAuto();
  };

  const resetAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      if (!dragging.current) goQuote(qIndexRef.current + 1);
    }, 5500);
  };

  const onDragStart = (e: React.PointerEvent) => {
    dragging.current = true;
    const startX = e.clientX;
    let dx = 0;
    const move = (ev: PointerEvent) => {
      dx = ev.clientX - startX;
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      dragging.current = false;
      if (dx < -60) goQuote(qIndexRef.current + 1);
      else if (dx > 60) goQuote(qIndexRef.current + 2);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  const openOrbitCard = (card: OrbitCard) => (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.dataset.zooming = "1";
    el.style.opacity = "0";
    const r = el.getBoundingClientRect();
    zoomDelta.current = {
      dx: r.left + r.width / 2 - window.innerWidth / 2,
      dy: r.top + r.height / 2 - window.innerHeight / 2,
    };
    setZoom(card);
    setTimeout(() => router.push(card.href), 950);
  };

  // Fly the zoom overlay out from the clicked card's position.
  useEffect(() => {
    if (!zoom || !zoomCardRef.current) return;
    const { dx, dy } = zoomDelta.current;
    zoomCardRef.current.animate(
      [
        { transform: `translate(${dx}px,${dy}px) scale(0.24)`, opacity: 0.3 },
        { transform: "none", opacity: 1 },
      ],
      { duration: 600, easing: "cubic-bezier(.22,1,.36,1)" }
    );
  }, [zoom]);

  useEffect(() => {
    layoutQuotes(0);
    resetAuto();

    // stat counters
    const ioCount = new IntersectionObserver(
      (es) =>
        es.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target as HTMLElement;
          const target = +el.dataset.count!;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / 1600);
            const e = 1 - Math.pow(1 - p, 3);
            el.textContent = String(Math.round(target * e));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          ioCount.unobserve(el);
        }),
      { threshold: 0.6 }
    );
    document.querySelectorAll("[data-count]").forEach((el) => ioCount.observe(el));

    // mouse: cursor glow target + orbit tilt input
    let mx = 0, my = 0, tx = -999, ty = -999, gx = -999, gy = -999;
    const onMouse = (e: MouseEvent) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
      tx = e.clientX;
      ty = e.clientY;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    // magnetic buttons
    const magnets = document.querySelectorAll<HTMLElement>("[data-magnet]");
    const magnetCleanups: (() => void)[] = [];
    magnets.forEach((btn) => {
      const onMove = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px,${(e.clientY - r.top - r.height / 2) * 0.28}px)`;
      };
      const onLeave = () => {
        btn.style.transform = "translate(0,0)";
        btn.style.transition = "transform .5s cubic-bezier(.22,1,.36,1)";
        setTimeout(() => (btn.style.transition = ""), 500);
      };
      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);
      magnetCleanups.push(() => {
        btn.removeEventListener("mousemove", onMove);
        btn.removeEventListener("mouseleave", onLeave);
      });
    });

    // main rAF loop: cursor glow, orbiting hero cards, hero morph, stack morph, pinned process scroll
    let raf = 0;
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      const vh = window.innerHeight;
      const y = window.scrollY;
      gx += (tx - gx) * 0.08;
      gy += (ty - gy) * 0.08;
      if (glowRef.current) glowRef.current.style.transform = `translate(${gx - 260}px,${gy - 260}px)`;

      const hero = heroRef.current;
      if (hero) {
        const hp = Math.min(1, Math.max(0, y / (hero.offsetHeight - vh)));
        const orbit = orbitRef.current;
        if (orbit) {
          const cards = orbit.querySelectorAll<HTMLElement>("[data-orbit-card]");
          const base = t * 0.000085;
          const grow = 1 + hp * 3.2;
          const Rx = Math.min(620, window.innerWidth * 0.42) * grow;
          const Ry = Math.min(250, window.innerHeight * 0.3) * grow;
          cards.forEach((c, i) => {
            if (c.dataset.zooming || c.dataset.hover) return;
            const a = base + (i / cards.length) * Math.PI * 2;
            const x = Math.cos(a) * Rx;
            const z = Math.sin(a);
            const yy = Math.sin(a) * Ry;
            const s = 0.82 + (z + 1) * 0.14;
            const centerFade = 0.35 + 0.65 * Math.abs(Math.cos(a));
            c.style.transform = `translate3d(${x}px,${yy}px,0) scale(${s * (1 + hp * 0.6)}) rotate(${hp * (i % 2 ? 28 : -28)}deg)`;
            c.style.opacity = String(Math.max(0, (0.6 + (z + 1) * 0.2) * centerFade - hp * 1.5));
            c.style.zIndex = z > 0 ? "7" : "4";
          });
          if (orbitTiltRef.current) orbitTiltRef.current.style.transform = `rotateX(${-my * 7}deg) rotateY(${mx * 9}deg)`;
        }
        const center = heroCenterRef.current;
        if (center) {
          center.style.transform = `translateY(${-hp * 220}px) scale(${1 + hp * 0.28})`;
          center.style.opacity = String(Math.max(0, 1 - hp * 1.9));
        }
        if (scrollHintRef.current) scrollHintRef.current.style.opacity = String(Math.max(0, 1 - hp * 4));
      }

      const stack = stackRef.current;
      if (stack) {
        const cards = stack.querySelectorAll<HTMLElement>("[data-stack-card]");
        cards.forEach((card, i) => {
          if (i === cards.length - 1) return;
          const next = cards[i + 1].parentElement!;
          const r = next.getBoundingClientRect();
          const prog = Math.min(1, Math.max(0, 1 - r.top / vh));
          card.style.transform = `scale(${1 - prog * 0.07}) translateY(${-prog * 26}px)`;
          card.style.filter = `brightness(${1 - prog * 0.05})`;
          card.style.opacity = String(1 - prog * 0.25);
        });
      }

      const proc = processRef.current;
      const track = processTrackRef.current;
      if (proc && track) {
        const start = proc.offsetTop;
        const end = start + proc.offsetHeight - vh;
        const pp = Math.min(1, Math.max(0, (y - start) / (end - start)));
        const max = Math.max(0, track.scrollWidth - window.innerWidth);
        track.style.transform = `translateX(${-pp * max}px)`;
      }
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(autoRef.current);
      window.removeEventListener("mousemove", onMouse);
      ioCount.disconnect();
      magnetCleanups.forEach((fn) => fn());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 520,
          height: 520,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 1,
          background: "radial-gradient(circle,rgba(29,89,194,0.10),transparent 65%)",
          transform: "translate(-999px,-999px)",
        }}
      />

      {/* ══ HERO · orbit of flipping service cards, collapses on scroll ══ */}
      <section id="hero" ref={heroRef} style={{ position: "relative", height: "280vh" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
            <div style={{ position: "absolute", width: "70vw", height: "70vw", left: "-10vw", top: "-25vw", borderRadius: "50%", background: "radial-gradient(circle,rgba(29,89,194,0.13),transparent 62%)", filter: "blur(60px)", animation: "auroraA 22s ease-in-out infinite" }} />
            <div style={{ position: "absolute", width: "60vw", height: "60vw", right: "-15vw", bottom: "-20vw", borderRadius: "50%", background: "radial-gradient(circle,rgba(20,168,162,0.07),rgba(63,160,60,0.10) 45%,transparent 65%)", filter: "blur(70px)", animation: "auroraB 27s ease-in-out infinite" }} />
            <div style={gridBg} />
            {PARTICLES.map((pt, i) => (
              <span
                key={i}
                style={{
                  position: "absolute",
                  left: pt.x,
                  top: pt.y,
                  width: pt.s,
                  height: pt.s,
                  borderRadius: "50%",
                  background: "rgba(29,89,194,0.3)",
                  animation: `floaty ${pt.d} ease-in-out infinite`,
                  animationDelay: pt.dl,
                }}
              />
            ))}
          </div>
          <div ref={orbitTiltRef} style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", perspective: 1400 }}>
            <div ref={heroCenterRef} style={{ position: "relative", zIndex: 5, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 24px", maxWidth: 900 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "8px 18px", borderRadius: 999, background: "rgba(255,255,255,0.75)", border: "1px solid rgba(13,34,72,0.10)", backdropFilter: "blur(14px)", marginBottom: 30 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#86bc25", animation: "dotpulse 2s infinite" }} />
                <span style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#33456b" }}>Multidisciplinary Technology Firm</span>
              </div>
              <div style={{ position: "relative", marginBottom: 34 }}>
                <div style={{ position: "absolute", inset: -40, borderRadius: "50%", background: "radial-gradient(circle,rgba(29,89,194,0.35),transparent 70%)", filter: "blur(20px)", animation: "pulse 5s ease-in-out infinite" }} />
                {/* eslint-disable-next-line @next/next/no-img-element -- fluid-height hero logo, exact replica of prototype */}
                <img src="/logo.png" alt="ONMOG" style={{ position: "relative", height: "clamp(56px,7vw,92px)", width: "auto", filter: "drop-shadow(0 12px 34px rgba(29,89,194,0.28))" }} />
              </div>
              <h1 style={{ margin: 0, fontSize: "clamp(38px,5.6vw,76px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.06, textWrap: "balance" }}>
                Driving progress
                <br />
                across{" "}
                <span style={{ background: "linear-gradient(100deg,#1d59c2,#14a8a2 45%,#5cb84a)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>industries</span>.
              </h1>
              <p style={{ margin: "26px 0 0", fontSize: "clamp(15px,1.4vw,19px)", lineHeight: 1.65, color: "#5d6c8a", maxWidth: 560, fontWeight: 500 }}>
                Precision engineering. Digital innovation. Human excellence. We bridge traditional infrastructure and modern digital ecosystems.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 38, justifyContent: "center" }}>
                <Link href="/services" data-magnet style={{ display: "inline-block", padding: "15px 34px", borderRadius: 14, fontSize: 15, fontWeight: 700, color: "#fff", background: "linear-gradient(135deg,#1d59c2,#14a8a2)", boxShadow: "0 8px 30px rgba(29,89,194,0.4)" }}>
                  Explore Services
                </Link>
                <a href="#contact" data-magnet className="ghostbtn" style={{ display: "inline-block", padding: "15px 34px", borderRadius: 14, fontSize: 15, fontWeight: 700, color: "#0e1a2e", background: "rgba(13,34,72,0.045)", border: "1px solid rgba(13,34,72,0.12)", backdropFilter: "blur(10px)" }}>
                  Contact Us
                </a>
              </div>
            </div>
            <div ref={orbitRef} data-mq="desktop" style={{ position: "absolute", inset: 0, zIndex: 6, pointerEvents: "none" }}>
              {ORBIT.map((oc) => (
                <div
                  key={oc.name}
                  className="orbit-card"
                  data-orbit-card
                  onClick={openOrbitCard(oc)}
                  onMouseEnter={(e) => (e.currentTarget.dataset.hover = "1")}
                  onMouseLeave={(e) => delete e.currentTarget.dataset.hover}
                  style={{ position: "absolute", left: "50%", top: "50%", width: 128, height: 148, margin: "-74px 0 0 -64px", transformStyle: "preserve-3d", opacity: 0, pointerEvents: "auto", cursor: "pointer" }}
                >
                  <div className="orbit-flip" style={{ width: "100%", height: "100%", transformStyle: "preserve-3d", WebkitTransformStyle: "preserve-3d", transition: "transform .8s cubic-bezier(.22,1,.36,1)" }}>
                    <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 11, borderRadius: 18, background: "linear-gradient(160deg,rgba(255,255,255,0.94),rgba(248,250,253,0.96))", border: "1px solid rgba(13,34,72,0.09)", backdropFilter: "blur(16px)", boxShadow: "0 18px 50px rgba(16,34,72,0.12)" }}>
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: 13, background: oc.tint, color: oc.color, boxShadow: `0 0 24px ${oc.tint}` }}>
                        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d={oc.icon} />
                        </svg>
                      </span>
                      <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "0.03em", color: "#1e2f4f", textAlign: "center", padding: "0 10px", lineHeight: 1.35 }}>{oc.name}</span>
                    </div>
                    <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, borderRadius: 18, background: `linear-gradient(160deg,${oc.tint},rgba(255,255,255,0.95))`, border: `1px solid ${oc.tint}`, backdropFilter: "blur(16px)" }}>
                      <span style={{ fontSize: 20, fontWeight: 800, color: oc.color }}>{oc.stat}</span>
                      <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#5d6c8a", textAlign: "center", padding: "0 8px" }}>{oc.statLabel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div ref={scrollHintRef} style={{ position: "absolute", bottom: 34, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, zIndex: 7 }}>
            <span style={{ width: 22, height: 36, borderRadius: 12, border: "2px solid rgba(13,34,72,0.15)", display: "flex", justifyContent: "center", paddingTop: 6 }}>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#1d59c2", animation: "scrollwheel 1.6s infinite" }} />
            </span>
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8a94ab" }}>Scroll</span>
          </div>
        </div>
      </section>

      {zoom && (
        <div style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(245,247,251,0.72)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", animation: "fadein .3s" }}>
          <div ref={zoomCardRef} style={{ width: "min(520px,86vw)", borderRadius: 30, padding: "56px 44px", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, textAlign: "center", background: "#ffffff", border: "1px solid rgba(13,34,72,0.10)", boxShadow: "0 40px 120px rgba(16,34,72,0.18)" }}>
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 76, height: 76, borderRadius: 22, background: zoom.tint, color: zoom.color, boxShadow: `0 0 40px ${zoom.tint}` }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={zoom.icon} />
              </svg>
            </span>
            <h3 style={{ margin: "6px 0 0", fontSize: 26, fontWeight: 800, letterSpacing: "-0.015em", color: "#0e1a2e" }}>{zoom.name}</h3>
            <span style={{ fontSize: 13, fontWeight: 700, color: zoom.color }}>
              {zoom.stat} · {zoom.statLabel}
            </span>
            <span style={{ marginTop: 10, fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#8a94ab" }}>Opening service page…</span>
          </div>
        </div>
      )}

      {/* ══ SERVICES · sticky morph stack ══ */}
      <section id="services" style={{ position: "relative", padding: "0 0 8vh" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px 60px" }}>
          <div data-reveal style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div>
              <div style={kicker}>What we do</div>
              <h2 style={{ margin: 0, fontSize: "clamp(30px,4vw,54px)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.08 }}>
                Four disciplines.
                <br />
                One standard of precision.
              </h2>
            </div>
            <Link href="/services" style={{ fontSize: 14, fontWeight: 700, color: "#1d59c2", display: "inline-flex", alignItems: "center", gap: 8, paddingBottom: 6 }}>
              All services{" "}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
        <div ref={stackRef}>
          {PILLARS.map((p) => (
            <div key={p.num} style={{ height: "100vh", position: "relative" }}>
              <div data-stack-card style={{ position: "sticky", top: "11vh", height: "auto", maxWidth: 1180, margin: "0 auto", padding: "0 24px", transformOrigin: "top center" }}>
                <div className="grid-collapse" style={{ position: "relative", minHeight: "min(76vh,700px)", borderRadius: 28, overflow: "hidden", background: "linear-gradient(150deg,#ffffff,#f3f6fc)", border: "1px solid rgba(13,34,72,0.10)", boxShadow: "0 40px 90px rgba(16,34,72,0.12)", display: "grid", gridTemplateColumns: "1.15fr 1fr" }}>
                  <div style={{ position: "absolute", width: "60%", height: "120%", right: "-18%", top: "-15%", borderRadius: "50%", background: `radial-gradient(circle,${p.glow},transparent 65%)`, filter: "blur(50px)", pointerEvents: "none" }} />
                  <div style={{ position: "relative", padding: "clamp(28px,4.5vw,60px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: 0, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
                      <span style={{ fontSize: 13, fontWeight: 800, color: p.color, letterSpacing: "0.08em" }}>{p.num}</span>
                      <span style={{ height: 1, width: 44, background: p.color, opacity: 0.5 }} />
                      <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#5d6c8a" }}>{p.kicker}</span>
                    </div>
                    <h3 style={{ margin: "0 0 18px", fontSize: "clamp(26px,3vw,44px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{p.title}</h3>
                    <p style={{ margin: "0 0 26px", fontSize: 15.5, lineHeight: 1.7, color: "#5d6c8a", maxWidth: 480 }}>{p.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginBottom: 30 }}>
                      {p.chips.map((c) => (
                        <span key={c} style={chipStyle}>
                          {c}
                        </span>
                      ))}
                    </div>
                    <Link href={p.href} data-magnet style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 10, padding: "13px 26px", borderRadius: 13, fontSize: 14, fontWeight: 700, color: "#ffffff", background: p.color, boxShadow: `0 8px 26px ${p.glow}` }}>
                      {p.cta}{" "}
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </div>
                  <div data-mq="desktop" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ position: "relative", width: "min(300px,80%)", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: `1px dashed ${p.color}`, opacity: 0.25, animation: "spinSlow 40s linear infinite" }} />
                      <div style={{ position: "absolute", inset: "13%", borderRadius: "50%", border: "1px solid rgba(13,34,72,0.08)" }} />
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 118, height: 118, borderRadius: 32, background: p.tint, color: p.color, border: "1px solid rgba(13,34,72,0.10)", backdropFilter: "blur(10px)", boxShadow: `0 0 60px ${p.glow}`, animation: "floaty 6s ease-in-out infinite" }}>
                        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d={p.icon} />
                        </svg>
                      </span>
                      {p.sats.map((s) => (
                        <span key={s.label} style={{ position: "absolute", left: s.x, top: s.y, padding: "8px 14px", borderRadius: 11, fontSize: 11, fontWeight: 700, color: "#1e2f4f", background: "rgba(255,255,255,0.9)", border: "1px solid rgba(13,34,72,0.10)", backdropFilter: "blur(10px)", animation: `floaty ${s.d} ease-in-out infinite`, whiteSpace: "nowrap" }}>
                          {s.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section style={{ position: "relative", padding: "12vh 24px" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", width: "80vw", height: "40vw", left: "10vw", top: "20%", borderRadius: "50%", background: "radial-gradient(ellipse,rgba(29,89,194,0.06),transparent 65%)", filter: "blur(60px)" }} />
        </div>
        <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto" }}>
          <div data-reveal style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={kicker}>By the numbers</div>
            <h2 style={h2}>Proven at enterprise scale</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 14 }}>
            {STATS.map((st) => (
              <div key={st.label} data-reveal className="hov-raise" style={{ padding: "34px 20px", borderRadius: 20, textAlign: "center", background: "rgba(255,255,255,0.85)", border: "1px solid rgba(13,34,72,0.08)", backdropFilter: "blur(12px)", transition: "transform .35s,border-color .35s" }}>
                <div style={{ fontSize: "clamp(34px,3.4vw,52px)", fontWeight: 800, letterSpacing: "-0.03em", background: "linear-gradient(120deg,#0e1a2e,#1d59c2)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  <span data-count={st.n}>0</span>
                  {st.suffix}
                </div>
                <div style={{ marginTop: 8, fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#5d6c8a" }}>{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS · horizontal pinned scroll ══ */}
      <section ref={processRef} style={{ position: "relative", height: "320vh" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px", width: "100%" }}>
            <div style={kicker}>How we work</div>
            <h2 style={{ ...h2, marginBottom: 8 }}>From discovery to delivery.</h2>
          </div>
          <div style={{ position: "relative", marginTop: 54 }}>
            <div style={{ position: "absolute", left: 0, right: 0, top: 37, height: 1, background: "linear-gradient(90deg,transparent,rgba(13,34,72,0.10) 10%,rgba(13,34,72,0.10) 90%,transparent)" }} />
            <div ref={processTrackRef} style={{ display: "flex", gap: 26, padding: "0 max(24px,calc((100vw - 1180px)/2 + 24px))", width: "max-content", willChange: "transform" }}>
              {STEPS.map((sp) => (
                <div key={sp.n} style={{ width: "min(400px,78vw)", flex: "none", position: "relative", paddingTop: 76 }}>
                  <span style={{ position: "absolute", top: 22, left: 0, display: "flex", alignItems: "center", justifyContent: "center", width: 31, height: 31, borderRadius: "50%", background: "#ffffff", border: `1.5px solid ${sp.color}`, color: sp.color, fontSize: 12, fontWeight: 800, boxShadow: `0 0 18px ${sp.glow}` }}>
                    {sp.n}
                  </span>
                  <div className="hov-raise8" style={{ "--hc": sp.color, borderRadius: 22, padding: 30, background: "linear-gradient(155deg,#ffffff,#f3f6fc)", border: "1px solid rgba(13,34,72,0.08)", backdropFilter: "blur(12px)", minHeight: 230, transition: "transform .4s,border-color .4s" } as CSSProperties}>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 46, height: 46, borderRadius: 13, background: sp.tint, color: sp.color, marginBottom: 20 }}>
                      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={sp.icon} />
                      </svg>
                    </span>
                    <h3 style={{ margin: "0 0 10px", fontSize: 21, fontWeight: 800, letterSpacing: "-0.01em" }}>{sp.title}</h3>
                    <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: "#5d6c8a" }}>{sp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PARTNERS ══ */}
      <section style={{ position: "relative", padding: "10vh 0" }}>
        <div data-reveal style={{ textAlign: "center", marginBottom: 50, padding: "0 24px" }}>
          <div style={kicker}>Partners & clients</div>
          <h2 style={h2}>Trusted by category leaders</h2>
        </div>
        <div style={{ position: "relative", overflow: "hidden", padding: "6px 0", maskImage: "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)", WebkitMaskImage: "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)" }}>
          <div style={{ display: "flex", width: "max-content", gap: 16, animation: "marquee 42s linear infinite" }}>
            {[...ROW_A, ...ROW_A].map((cl, i) => (
              <MarqueeChip key={i} name={cl.name} industry={cl.industry} hoverColor="blue" />
            ))}
          </div>
          <div style={{ display: "flex", width: "max-content", gap: 16, marginTop: 16, animation: "marqueeR 48s linear infinite" }}>
            {[...ROW_B, ...ROW_B].map((cl, i) => (
              <MarqueeChip key={i} name={cl.name} industry={cl.industry} hoverColor="teal" />
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS · 3D drag carousel ══ */}
      <section style={{ position: "relative", padding: "10vh 24px 12vh" }}>
        <div data-reveal style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={kicker}>Testimonials</div>
          <h2 style={h2}>What partners say</h2>
        </div>
        <div ref={carouselRef} onPointerDown={onDragStart} style={{ position: "relative", height: 400, maxWidth: 1100, margin: "0 auto", perspective: 1500, cursor: "grab", touchAction: "pan-y", userSelect: "none" }}>
          {QUOTES.map((q) => (
            <div
              key={q.who}
              data-quote-card
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "min(520px,86vw)",
                marginLeft: "max(-260px,-43vw)",
                transform: "translate(0,-50%)",
                transition: "transform .7s cubic-bezier(.22,1,.36,1),opacity .7s,filter .7s",
                borderRadius: 24,
                padding: 38,
                background: "linear-gradient(155deg,#ffffff,#f3f6fc)",
                border: "1px solid rgba(13,34,72,0.10)",
                backdropFilter: "blur(14px)",
                boxShadow: "0 30px 70px rgba(16,34,72,0.12)",
              }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="rgba(29,89,194,0.55)" style={{ marginBottom: 18 }}>
                <path d="M4.6 4C2.9 6.1 2 8.6 2 11.5 2 16 4.6 19 8 19c2.2 0 4-1.8 4-4s-1.8-4-4-4c-.4 0-.8.1-1.2.2C7.3 9 8.4 6.9 10 5.4L7.6 3.3 4.6 4zm11 0c-1.7 2.1-2.6 4.6-2.6 7.5 0 4.5 2.6 7.5 6 7.5 2.2 0 4-1.8 4-4s-1.8-4-4-4c-.4 0-.8.1-1.2.2.5-2.2 1.6-4.3 3.2-5.8L18.6 3.3 15.6 4z" />
              </svg>
              <p style={{ margin: "0 0 26px", fontSize: 17, lineHeight: 1.7, color: "#1e2f4f", fontWeight: 500 }}>{q.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  role="img"
                  aria-label={q.who}
                  style={{ width: 48, height: 48, borderRadius: "50%", border: "2px solid rgba(29,89,194,0.5)", backgroundImage: `url('${q.img}')`, backgroundSize: "cover", backgroundPosition: "center", flex: "none" }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <span style={{ fontSize: 14, fontWeight: 800, color: "#0e1a2e" }}>{q.who}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#5d6c8a" }}>{q.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 9, marginTop: 34 }}>
          {QUOTES.map((q, i) => (
            <button
              key={q.who}
              onClick={() => goQuote(i)}
              aria-label="Go to testimonial"
              style={{
                width: i === qIndex ? 26 : 8,
                height: 8,
                borderRadius: 99,
                border: "none",
                cursor: "pointer",
                background: i === qIndex ? "#1d59c2" : "rgba(13,34,72,0.15)",
                transition: "width .35s,background .35s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" style={{ position: "relative", padding: "6vh 24px 14vh" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", width: "66vw", height: "44vw", left: "17vw", bottom: "-12vw", borderRadius: "50%", background: "radial-gradient(ellipse,rgba(29,89,194,0.09),transparent 65%)", filter: "blur(70px)" }} />
        </div>
        <div data-reveal className="grid-collapse" style={{ position: "relative", maxWidth: 1100, margin: "0 auto", borderRadius: 30, overflow: "hidden", background: "linear-gradient(150deg,#ffffff,#f3f6fc)", border: "1px solid rgba(13,34,72,0.10)", backdropFilter: "blur(18px)", boxShadow: "0 40px 100px rgba(16,34,72,0.14)", display: "grid", gridTemplateColumns: "1fr 1.1fr" }}>
          <div style={{ position: "relative", padding: "clamp(30px,4.5vw,56px)", background: "linear-gradient(160deg,rgba(29,89,194,0.14),transparent 60%)", display: "flex", flexDirection: "column", gap: 0, minWidth: 280 }}>
            <div style={{ ...kicker, marginBottom: 16 }}>Contact</div>
            <h2 style={{ margin: "0 0 16px", fontSize: "clamp(26px,3vw,40px)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.12 }}>Let&apos;s build what&apos;s next.</h2>
            <p style={{ margin: "0 0 34px", fontSize: 14.5, lineHeight: 1.7, color: "#5d6c8a" }}>Tell us about your project — rail, workforce, software or growth. We reply within one business day.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: "auto" }}>
              <div style={{ display: "flex", gap: 13, alignItems: "flex-start" }}>
                <span style={{ flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 10, background: "rgba(29,89,194,0.14)", color: "#1d59c2" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z M12 13 a3 3 0 1 0 0-6 a3 3 0 0 0 0 6" />
                  </svg>
                </span>
                <span style={{ fontSize: 13, lineHeight: 1.6, color: "#33456b" }}>The Business Park – by Pranava Group, 9th Floor, Kondapur, Hyderabad, Telangana – 500084</span>
              </div>
              <div style={{ display: "flex", gap: 13, alignItems: "center" }}>
                <span style={{ flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 10, background: "rgba(20,168,162,0.12)", color: "#14a8a2" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href="tel:+919000161826" style={{ fontSize: 13.5, fontWeight: 600, color: "#33456b" }}>
                  +91 9000161826
                </a>
              </div>
              <div style={{ display: "flex", gap: 13, alignItems: "center" }}>
                <span style={{ flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 10, background: "rgba(63,160,60,0.14)", color: "#3fa03c" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />
                  </svg>
                </span>
                <a href="mailto:hello@onmogsoftsol.com" style={{ fontSize: 13.5, fontWeight: 600, color: "#33456b" }}>
                  hello@onmogsoftsol.com
                </a>
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setFormSent(true);
            }}
            style={{ padding: "clamp(30px,4.5vw,56px)", display: "flex", flexDirection: "column", gap: 16, borderLeft: "1px solid rgba(13,34,72,0.07)" }}
          >
            {formSent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, height: "100%", textAlign: "center", padding: "40px 0" }}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, borderRadius: "50%", background: "rgba(20,168,162,0.15)", color: "#14a8a2" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>Message sent</h3>
                <p style={{ margin: 0, fontSize: 14, color: "#5d6c8a" }}>Thanks — we&apos;ll get back to you within one business day.</p>
              </div>
            ) : (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <label style={contactLabel}>
                    Name
                    <input required name="name" placeholder="Your name" className="cinput" style={contactInput} />
                  </label>
                  <label style={contactLabel}>
                    Email
                    <input required type="email" name="email" placeholder="you@company.com" className="cinput" style={contactInput} />
                  </label>
                </div>
                <label style={contactLabel}>
                  Interested in
                  <select name="topic" className="cinput" style={contactInput}>
                    <option style={{ background: "#ffffff" }}>Rail Engineering</option>
                    <option style={{ background: "#ffffff" }}>Workforce & Staffing</option>
                    <option style={{ background: "#ffffff" }}>IT Solutions</option>
                    <option style={{ background: "#ffffff" }}>Digital Growth</option>
                  </select>
                </label>
                <label style={contactLabel}>
                  Message
                  <textarea required name="message" rows={4} placeholder="Tell us about your project…" className="cinput" style={{ ...contactInput, resize: "vertical" }} />
                </label>
                <button
                  type="submit"
                  data-magnet
                  className="hovlift"
                  style={{ marginTop: 6, padding: 15, borderRadius: 13, border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: 15, fontWeight: 800, color: "#fff", background: "linear-gradient(135deg,#1d59c2,#14a8a2)", boxShadow: "0 10px 30px rgba(29,89,194,0.35)", transition: "transform .25s" }}
                >
                  Send message
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      <Footer full />
    </>
  );
}
