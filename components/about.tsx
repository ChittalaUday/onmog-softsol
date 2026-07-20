"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Footer from "@/components/footer";
import { useReveal } from "@/lib/use-reveal";

const MILESTONES = [
  { year: "2018", title: "The startup years", tag: "Foundation", color: "#1d59c2", tint: "rgba(29,89,194,0.14)", glow: "rgba(29,89,194,0.16)", icon: "M4.5 16.5 c-1.5 1.26 -2 5 -2 5 s3.74 -.5 5 -2 c.71 -.84 .7 -2.13 -.09 -2.91 a2.18 2.18 0 0 0 -2.91 -.09 M12 15 l-3 -3 a22 22 0 0 1 2 -3.95 A12.88 12.88 0 0 1 22 2 c0 2.72 -.78 7.5 -6 11 a22.35 22.35 0 0 1 -4 2", headline: "Founded in Hyderabad", body: "Onmog Softsol starts as a small multidisciplinary team with an unusual bet: heavy-engineering rigour and digital craft belong in one firm.", chips: ["Hyderabad HQ", "First team of 8"] },
  { year: "2020", title: "First enterprise client", tag: "Breakthrough", color: "#14a8a2", tint: "rgba(20,168,162,0.13)", glow: "rgba(20,168,162,0.14)", icon: "M20 7 H4 A2 2 0 0 0 2 9 V19 A2 2 0 0 0 4 21 H20 A2 2 0 0 0 22 19 V9 A2 2 0 0 0 20 7 M16 21 V5 A2 2 0 0 0 14 3 H10 A2 2 0 0 0 8 5 V21", headline: "Rail signalling at scale", body: "Our first safety-critical rail signalling contract — interlocking design, testing and commissioning delivered with zero non-conformities.", chips: ["SIL-4 delivery", "IRSE-accredited team"] },
  { year: "2022", title: "Global expansion", tag: "Growth", color: "#3fa03c", tint: "rgba(63,160,60,0.14)", glow: "rgba(63,160,60,0.15)", icon: "M12 21 a9 9 0 1 0 0-18 a9 9 0 0 0 0 18 M3.6 9 H20.4 M3.6 15 H20.4 M12 3 a15 15 0 0 1 0 18 M12 3 a15 15 0 0 0 0 18", headline: "Six countries, four sectors", body: "The Hire-Train-Deploy model goes international. Workforce, IT and rail practices now serve government, transport, IT and manufacturing clients.", chips: ["6+ countries", "150+ experts"] },
  { year: "2024", title: "Digital acceleration", tag: "Innovation", color: "#6da41c", tint: "rgba(122,178,36,0.13)", glow: "rgba(122,178,36,0.13)", icon: "M13 2 L3 14 H12 L11 22 L21 10 H12 L13 2", headline: "Prodigy HRM launches", body: "Our own product line arrives: workforce management software built from a decade of staffing operations experience.", chips: ["Prodigy HRM", "ERP integrations"] },
  { year: "Today", title: "Innovation, compounding", tag: "Now", color: "#1d59c2", tint: "rgba(29,89,194,0.14)", glow: "rgba(29,89,194,0.16)", icon: "M12 22 c5.5 -1.5 9 -5.5 9 -11 V5 L12 2 L3 5 v6 c0 5.5 3.5 9.5 9 11 M9 12 l2 2 l4 -4", headline: "One standard of precision", body: "100+ projects delivered, 98% retention. The gap between physical infrastructure and digital innovation keeps closing — we build in it.", chips: ["100+ projects", "98% retention"] },
];

const VALUES = [
  { title: "Zero-error delivery", desc: "The most stringent international standards — because our work runs railways.", color: "#1d59c2", tint: "rgba(29,89,194,0.13)", icon: "M12 22 c5.5 -1.5 9 -5.5 9 -11 V5 L12 2 L3 5 v6 c0 5.5 3.5 9.5 9 11 M9 12 l2 2 l4 -4" },
  { title: "End-to-end ownership", desc: "A true extension of your team, from first design review to long-run support.", color: "#14a8a2", tint: "rgba(20,168,162,0.12)", icon: "M20 6 9 17l-5-5" },
  { title: "Domain versatility", desc: "Heavy-engineering expertise and modern digital proficiency in one synergy.", color: "#3fa03c", tint: "rgba(63,160,60,0.13)", icon: "M2 12 h4 l3 -9 l4 18 l3 -9 h6" },
  { title: "Human excellence", desc: "Talent, trained and trusted — people who contribute from day one.", color: "#6da41c", tint: "rgba(122,178,36,0.12)", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11 a4 4 0 1 0 0-8 a4 4 0 0 0 0 8" },
];

const gridBg = {
  position: "absolute" as const,
  inset: 0,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Cpath d='M0 .5H43.5V44' fill='none' stroke='%230d2248' stroke-opacity='.05'/%3E%3C/svg%3E")`,
};

export default function About() {
  useReveal();
  const tlRef = useRef<HTMLElement>(null);
  const tlYearRef = useRef<HTMLDivElement>(null);
  const tlTitleRef = useRef<HTMLDivElement>(null);
  const tlGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cur = -1;
    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const tl = tlRef.current;
      if (!tl) return;
      const vh = window.innerHeight;
      const y = window.scrollY;
      const start = tl.offsetTop;
      const span = tl.offsetHeight - vh;
      const p = Math.min(0.9999, Math.max(0, (y - start) / span));
      const seg = p * MILESTONES.length;
      const idx = Math.floor(seg);
      const cards = tl.querySelectorAll<HTMLElement>("[data-tl-card]");
      cards.forEach((card, i) => {
        const d = i - seg + 0.5;
        let op: number, tf: string;
        if (d > 0) {
          const k = Math.min(1, d);
          op = 1 - k;
          tf = `translateY(${k * 90}px) scale(${1 - k * 0.08}) rotateX(${-k * 10}deg)`;
        } else {
          const k = Math.min(1, -d);
          op = 1 - k;
          tf = `translateY(${-k * 90}px) scale(${1 - k * 0.08}) rotateX(${k * 10}deg)`;
        }
        card.style.opacity = String(Math.max(0, op));
        card.style.transform = `perspective(1200px) ${tf}`;
        card.style.pointerEvents = op > 0.5 ? "auto" : "none";
        card.style.zIndex = String(Math.round(op * 10));
      });
      if (idx !== cur) {
        cur = idx;
        const m = MILESTONES[Math.min(idx, MILESTONES.length - 1)];
        if (tlYearRef.current) tlYearRef.current.textContent = m.year;
        if (tlTitleRef.current) tlTitleRef.current.textContent = m.title;
        if (tlGlowRef.current) tlGlowRef.current.style.background = `radial-gradient(circle, ${m.glow}, transparent 62%)`;
        tl.querySelectorAll<HTMLElement>("[data-tl-dot]").forEach((dot, i) => {
          dot.style.background = i <= idx ? m.color : "rgba(13,34,72,0.10)";
        });
      }
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* ══ HERO ══ */}
      <section style={{ position: "relative", minHeight: "88vh", display: "flex", alignItems: "center", overflow: "hidden", padding: "140px 24px 60px" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", width: "66vw", height: "66vw", left: "-14vw", top: "-24vw", borderRadius: "50%", background: "radial-gradient(circle,rgba(29,89,194,0.12),transparent 62%)", filter: "blur(60px)", animation: "auroraA 24s ease-in-out infinite" }} />
          <div style={gridBg} />
        </div>
        <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", width: "100%" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "8px 18px", borderRadius: 999, background: "rgba(255,255,255,0.75)", border: "1px solid rgba(13,34,72,0.10)", backdropFilter: "blur(14px)", marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#86bc25", animation: "dotpulse 2s infinite" }} />
            <span style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#33456b" }}>About Onmog Softsol</span>
          </div>
          <h1 data-reveal style={{ margin: 0, fontSize: "clamp(38px,5.4vw,74px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: 900, textWrap: "balance" }}>
            Where heavy engineering meets{" "}
            <span style={{ background: "linear-gradient(100deg,#1d59c2,#14a8a2 45%,#5cb84a)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>digital craft</span>.
          </h1>
          <p data-reveal style={{ margin: "28px 0 0", fontSize: "clamp(15px,1.4vw,19px)", lineHeight: 1.7, color: "#5d6c8a", maxWidth: 620, fontWeight: 500 }}>
            A multidisciplinary technology firm bridging the critical gap between traditional infrastructure and digital innovation — for government, transport, IT and manufacturing.
          </p>
          <div data-reveal style={{ display: "flex", gap: 36, flexWrap: "wrap", marginTop: 48 }}>
            {[
              { v: "2018", l: "Founded", c: "#1d59c2" },
              { v: "4", l: "Disciplines", c: "#14a8a2" },
              { v: "150+", l: "Experts", c: "#3fa03c" },
              { v: "Hyderabad", l: "Headquarters", c: "#6da41c" },
            ].map((it) => (
              <div key={it.l}>
                <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.02em", color: it.c }}>{it.v}</div>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8a94ab", marginTop: 4 }}>{it.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MISSION / VISION ══ */}
      <section style={{ padding: "8vh 24px", maxWidth: 1180, margin: "0 auto" }}>
        <div className="grid-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18 }}>
          <div data-reveal style={{ position: "relative", overflow: "hidden", borderRadius: 26, padding: "clamp(28px,3.5vw,48px)", background: "linear-gradient(150deg,#ffffff,#f3f6fc)", border: "1px solid rgba(13,34,72,0.10)" }}>
            <div style={{ position: "absolute", width: "50%", height: "100%", right: "-15%", top: "-30%", borderRadius: "50%", background: "radial-gradient(circle,rgba(29,89,194,0.22),transparent 65%)", filter: "blur(40px)" }} />
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.26em", textTransform: "uppercase", color: "#1d59c2", marginBottom: 16 }}>Mission</div>
            <p style={{ margin: 0, fontSize: "clamp(17px,1.6vw,22px)", lineHeight: 1.6, fontWeight: 600, color: "#1e2f4f" }}>
              Integrate human talent with technical precision — from safety-critical rail infrastructure to agile software and seamless workforce management.
            </p>
          </div>
          <div data-reveal style={{ position: "relative", overflow: "hidden", borderRadius: 26, padding: "clamp(28px,3.5vw,48px)", background: "linear-gradient(150deg,#ffffff,#f3f6fc)", border: "1px solid rgba(13,34,72,0.10)" }}>
            <div style={{ position: "absolute", width: "50%", height: "100%", right: "-15%", top: "-30%", borderRadius: "50%", background: "radial-gradient(circle,rgba(20,168,162,0.18),transparent 65%)", filter: "blur(40px)" }} />
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.26em", textTransform: "uppercase", color: "#14a8a2", marginBottom: 16 }}>Vision</div>
            <p style={{ margin: 0, fontSize: "clamp(17px,1.6vw,22px)", lineHeight: 1.6, fontWeight: 600, color: "#1e2f4f" }}>
              Be a global leader in cross-industry innovation — engineering mastery and digital transformation, working as one.
            </p>
          </div>
        </div>
      </section>

      {/* ══ TIMELINE · sticky year + morphing milestone cards ══ */}
      <section ref={tlRef} style={{ position: "relative", height: "520vh" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <div ref={tlGlowRef} style={{ position: "absolute", width: "70vw", height: "70vw", left: "15vw", top: "15vh", borderRadius: "50%", background: "radial-gradient(circle,rgba(29,89,194,0.16),transparent 62%)", filter: "blur(70px)", transition: "background 1s" }} />
          </div>
          <div className="grid-collapse" style={{ position: "relative", height: "100%", maxWidth: 1180, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 40, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.26em", textTransform: "uppercase", color: "#1d59c2", marginBottom: 18 }}>Our journey</div>
              <div ref={tlYearRef} style={{ fontSize: "clamp(76px,11vw,150px)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1, background: "linear-gradient(120deg,#0e1a2e,#1d59c2)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                2018
              </div>
              <div ref={tlTitleRef} style={{ marginTop: 16, fontSize: "clamp(20px,2.2vw,30px)", fontWeight: 800, letterSpacing: "-0.015em", transition: "opacity .4s" }}>
                The startup years
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 34 }}>
                {MILESTONES.map((m) => (
                  <span key={m.year} data-tl-dot style={{ width: 34, height: 4, borderRadius: 99, background: "rgba(13,34,72,0.10)", transition: "background .4s" }} />
                ))}
              </div>
              <p style={{ margin: "26px 0 0", fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8a94ab" }}>Scroll to travel</p>
            </div>
            <div data-mq="desktop" style={{ position: "relative", height: "70vh" }}>
              {MILESTONES.map((m) => (
                <div key={m.year} data-tl-card style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", willChange: "transform,opacity" }}>
                  <div style={{ width: "100%", borderRadius: 28, padding: "clamp(28px,3vw,46px)", background: "linear-gradient(155deg,#ffffff,#f3f6fc)", border: "1px solid rgba(13,34,72,0.09)", backdropFilter: "blur(14px)", boxShadow: "0 40px 90px rgba(16,34,72,0.12)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: 13, background: m.tint, color: m.color }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d={m.icon} />
                        </svg>
                      </span>
                      <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: m.color }}>{m.tag}</span>
                    </div>
                    <h3 style={{ margin: "0 0 14px", fontSize: "clamp(22px,2.4vw,32px)", fontWeight: 800, letterSpacing: "-0.02em" }}>{m.headline}</h3>
                    <p style={{ margin: "0 0 22px", fontSize: 15, lineHeight: 1.7, color: "#5d6c8a" }}>{m.body}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {m.chips.map((c) => (
                        <span key={c} style={{ padding: "6px 13px", borderRadius: 999, fontSize: 11.5, fontWeight: 700, color: "#33456b", background: "rgba(13,34,72,0.045)", border: "1px solid rgba(13,34,72,0.10)" }}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section style={{ padding: "12vh 24px", maxWidth: 1180, margin: "0 auto" }}>
        <div data-reveal style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.26em", textTransform: "uppercase", color: "#1d59c2", marginBottom: 14 }}>What we stand for</div>
          <h2 style={{ margin: 0, fontSize: "clamp(28px,3.6vw,48px)", fontWeight: 800, letterSpacing: "-0.025em" }}>Precision. Ownership. Versatility.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 16 }}>
          {VALUES.map((v) => (
            <div key={v.title} data-reveal className="hov-raise" style={{ "--hc": v.color, borderRadius: 22, padding: "32px 28px", background: "rgba(255,255,255,0.85)", border: "1px solid rgba(13,34,72,0.08)", backdropFilter: "blur(12px)", transition: "transform .35s,border-color .35s" } as React.CSSProperties}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 46, height: 46, borderRadius: 13, background: v.tint, color: v.color, marginBottom: 20 }}>
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={v.icon} />
                </svg>
              </span>
              <h3 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 800 }}>{v.title}</h3>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: "#5d6c8a" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ padding: "4vh 24px 14vh" }}>
        <div data-reveal style={{ position: "relative", overflow: "hidden", maxWidth: 1100, margin: "0 auto", borderRadius: 30, padding: "clamp(40px,6vw,80px)", textAlign: "center", background: "linear-gradient(150deg,rgba(29,89,194,0.20),#f3f6fc)", border: "1px solid rgba(94,143,255,0.3)" }}>
          <div style={{ position: "absolute", width: "60%", height: "120%", left: "20%", top: "-60%", borderRadius: "50%", background: "radial-gradient(circle,rgba(29,89,194,0.3),transparent 65%)", filter: "blur(50px)", pointerEvents: "none" }} />
          <h2 style={{ position: "relative", margin: "0 0 16px", fontSize: "clamp(28px,3.8vw,50px)", fontWeight: 800, letterSpacing: "-0.025em" }}>Build the next chapter with us.</h2>
          <p style={{ position: "relative", margin: "0 0 34px", fontSize: 16, color: "#4a5a7a", maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
            From rail corridors to cloud platforms — let&apos;s talk about what precision can do for you.
          </p>
          <div style={{ position: "relative", display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/#contact" style={{ display: "inline-block", padding: "15px 34px", borderRadius: 14, fontSize: 15, fontWeight: 700, color: "#fff", background: "linear-gradient(135deg,#1d59c2,#14a8a2)", boxShadow: "0 8px 30px rgba(29,89,194,0.4)" }}>
              Contact us
            </Link>
            <Link href="/careers" className="ghostbtn" style={{ display: "inline-block", padding: "15px 34px", borderRadius: 14, fontSize: 15, fontWeight: 700, color: "#0e1a2e", background: "rgba(13,34,72,0.05)", border: "1px solid rgba(13,34,72,0.13)" }}>
              Join the team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
