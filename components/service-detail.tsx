import Link from "next/link";
import Footer from "@/components/footer";
import RevealEffect from "@/components/reveal-effect";

export interface ServiceDetailProps {
  accent: string;
  tint: string;
  glow: string;
  kicker: string;
  title: string;
  intro: string;
  icon: string;
  duration: string;
  complexity: string;
  stats: { n: string; l: string }[];
  process: { title: string; desc: string }[];
  sections: { title: string; items: string[] }[];
  related: { name: string; href: string }[];
}

const gridBg = {
  position: "absolute" as const,
  inset: 0,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Cpath d='M0 .5H43.5V44' fill='none' stroke='%230d2248' stroke-opacity='.05'/%3E%3C/svg%3E")`,
};

export default function ServiceDetail({
  accent,
  tint,
  glow,
  kicker,
  title,
  intro,
  icon,
  duration,
  complexity,
  stats,
  process,
  sections,
  related,
}: ServiceDetailProps) {
  const process_ = process.map((p, i) => ({ ...p, n: i + 1 }));
  return (
    <>
      <RevealEffect />
      <section style={{ position: "relative", overflow: "hidden", padding: "150px 24px 70px" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", width: "64vw", height: "64vw", right: "-22vw", top: "-26vw", borderRadius: "50%", background: `radial-gradient(circle,${glow},transparent 62%)`, filter: "blur(60px)", animation: "auroraA 26s ease-in-out infinite" }} />
          <div style={gridBg} />
        </div>
        <div className="grid-collapse" style={{ position: "relative", maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 40, alignItems: "center" }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22, flexWrap: "wrap" }}>
              <Link href="/services" style={{ fontSize: 12, fontWeight: 700, color: "#5d6c8a" }}>
                Services
              </Link>
              <span style={{ color: "#b3bccd", fontSize: 12 }}>/</span>
              <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: accent }}>{kicker}</span>
            </div>
            <h1 style={{ margin: 0, fontSize: "clamp(36px,4.8vw,66px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.06 }}>{title}</h1>
            <p style={{ margin: "24px 0 0", fontSize: 16, lineHeight: 1.75, color: "#5d6c8a", maxWidth: 560 }}>{intro}</p>
            <div style={{ display: "flex", gap: 12, marginTop: 34, flexWrap: "wrap" }}>
              <span style={{ padding: "9px 18px", borderRadius: 999, fontSize: 12, fontWeight: 700, color: accent, background: tint, border: `1px solid ${tint}` }}>{complexity}</span>
              <span style={{ padding: "9px 18px", borderRadius: 999, fontSize: 12, fontWeight: 700, color: "#33456b", background: "rgba(13,34,72,0.045)", border: "1px solid rgba(13,34,72,0.10)" }}>Duration · {duration}</span>
            </div>
            <div style={{ display: "flex", gap: 14, marginTop: 38, flexWrap: "wrap" }}>
              <Link href="/#contact" style={{ display: "inline-block", padding: "15px 32px", borderRadius: 14, fontSize: 15, fontWeight: 700, color: "#ffffff", background: accent, boxShadow: `0 8px 30px ${glow}` }}>
                Start a project
              </Link>
              <Link href="/services" className="ghostbtn" style={{ display: "inline-block", padding: "15px 32px", borderRadius: 14, fontSize: 15, fontWeight: 700, color: "#0e1a2e", background: "rgba(13,34,72,0.045)", border: "1px solid rgba(13,34,72,0.12)" }}>
                All services
              </Link>
            </div>
          </div>
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 300 }}>
            <div style={{ position: "absolute", width: "min(320px,80%)", aspectRatio: "1", borderRadius: "50%", border: `1px dashed ${accent}`, opacity: 0.22, animation: "spinSlow 44s linear infinite" }} />
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 132, height: 132, borderRadius: 36, background: tint, color: accent, border: "1px solid rgba(13,34,72,0.10)", backdropFilter: "blur(10px)", boxShadow: `0 0 70px ${glow}`, animation: "floaty 6s ease-in-out infinite" }}>
              <svg width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d={icon} />
              </svg>
            </span>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 60px", maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 14 }}>
          {stats.map((st) => (
            <div key={st.l} style={{ padding: "28px 22px", borderRadius: 20, textAlign: "center", background: "rgba(255,255,255,0.85)", border: "1px solid rgba(13,34,72,0.08)" }}>
              <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.02em", color: accent }}>{st.n}</div>
              <div style={{ marginTop: 7, fontSize: 11.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#5d6c8a" }}>{st.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "40px 24px 70px", maxWidth: 1180, margin: "0 auto" }}>
        <h2 style={{ margin: "0 0 44px", fontSize: "clamp(24px,3vw,40px)", fontWeight: 800, letterSpacing: "-0.02em" }}>How it&apos;s delivered</h2>
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 }}>
          {process_.map((p) => (
            <div key={p.title} data-reveal className="hov-raise" style={{ "--hc": accent, position: "relative", padding: "26px 22px", borderRadius: 20, background: "linear-gradient(155deg,#ffffff,#f3f6fc)", border: "1px solid rgba(13,34,72,0.08)", transition: "transform .35s,border-color .35s" } as React.CSSProperties}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: "50%", background: tint, color: accent, fontSize: 13, fontWeight: 800, marginBottom: 16 }}>{p.n}</span>
              <h3 style={{ margin: "0 0 8px", fontSize: 16.5, fontWeight: 800 }}>{p.title}</h3>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: "#5d6c8a" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 24px 80px", maxWidth: 1180, margin: "0 auto" }}>
        <h2 style={{ margin: "0 0 44px", fontSize: "clamp(24px,3vw,40px)", fontWeight: 800, letterSpacing: "-0.02em" }}>Scope of work</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 }}>
          {sections.map((sec) => (
            <div key={sec.title} data-reveal style={{ padding: "30px 26px", borderRadius: 22, background: "rgba(255,255,255,0.85)", border: "1px solid rgba(13,34,72,0.08)" }}>
              <h3 style={{ margin: "0 0 18px", fontSize: 16, fontWeight: 800, color: accent }}>{sec.title}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {sec.items.map((it) => (
                  <div key={it} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: 3 }}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span style={{ fontSize: 13.5, lineHeight: 1.55, color: "#33456b" }}>{it}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 24px 12vh" }}>
        <div style={{ position: "relative", overflow: "hidden", maxWidth: 1100, margin: "0 auto", borderRadius: 28, padding: "clamp(36px,5vw,64px)", background: `linear-gradient(150deg,${tint},#f3f6fc)`, border: "1px solid rgba(13,34,72,0.10)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 28, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ margin: "0 0 10px", fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, letterSpacing: "-0.02em" }}>Ready to scope it?</h2>
            <p style={{ margin: 0, fontSize: 14.5, color: "#4a5a7a" }}>Tell us your constraints — we&apos;ll bring the blueprint.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/#contact" style={{ display: "inline-block", padding: "15px 32px", borderRadius: 14, fontSize: 15, fontWeight: 700, color: "#ffffff", background: accent, boxShadow: `0 8px 30px ${glow}` }}>
              Contact us
            </Link>
            {related.map((r) => (
              <Link key={r.name} href={r.href} style={{ fontSize: 13.5, fontWeight: 700, color: "#4a5a7a", padding: "10px 6px" }}>
                {r.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
