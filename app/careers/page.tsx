import type { Metadata } from "next";
import Footer from "@/components/footer";
import RevealEffect from "@/components/reveal-effect";

export const metadata: Metadata = {
  title: "Careers — Onmog Softsol",
  description:
    "Join Onmog Softsol. Open roles in rail engineering, workforce & staffing, IT solutions and digital growth.",
  alternates: { canonical: "/careers" },
};

const PERKS = [
  { title: "Real stakes", desc: "Your interlocking logic runs live railways. Your code runs enterprises. Work that matters, verified rigorously.", color: "#1d59c2", tint: "rgba(29,89,194,0.13)", icon: "M12 22 c5.5 -1.5 9 -5.5 9 -11 V5 L12 2 L3 5 v6 c0 5.5 3.5 9.5 9 11 M9 12 l2 2 l4 -4" },
  { title: "Train & grow", desc: "The Hire-Train-Deploy model applies inside too — structured technical training and IRSE-track mentorship.", color: "#14a8a2", tint: "rgba(20,168,162,0.12)", icon: "M22 10 L12 5 L2 10 l10 5 l10 -5 M6 12 v5 c0 1.66 2.69 3 6 3 s6 -1.34 6 -3 v-5" },
  { title: "Two worlds", desc: "Move between heavy engineering and modern software — few firms let you do both in one career.", color: "#3fa03c", tint: "rgba(63,160,60,0.13)", icon: "M16 18 L22 12 L16 6 M8 6 L2 12 L8 18" },
  { title: "Ownership culture", desc: "Small teams, end-to-end responsibility, zero-error standards — and the trust that comes with them.", color: "#6da41c", tint: "rgba(122,178,36,0.12)", icon: "M20 6 9 17l-5-5" },
];

const ROLES = [
  { title: "Senior Signalling Design Engineer", team: "Rail Engineering", loc: "Hyderabad / On-site", type: "Full-time", color: "#1d59c2", tint: "rgba(29,89,194,0.13)", icon: "M4 11 H20 M4.5 19 L2 22 M19.5 19 L22 22 M12 2 C8 2 4 2.5 4 6 V15.5 A3.5 3.5 0 0 0 7.5 19 H16.5 A3.5 3.5 0 0 0 20 15.5 V6 C20 2.5 16 2 12 2" },
  { title: "Testing & Commissioning Engineer", team: "Rail Engineering", loc: "Project sites", type: "Full-time", color: "#1d59c2", tint: "rgba(29,89,194,0.13)", icon: "M9 11 l3 3 L22 4 M21 12 v7 a2 2 0 0 1 -2 2 H5 a2 2 0 0 1 -2 -2 V5 a2 2 0 0 1 2 -2 h11" },
  { title: "Full-stack Developer (React/Node)", team: "IT Solutions", loc: "Hyderabad / Hybrid", type: "Full-time", color: "#3fa03c", tint: "rgba(63,160,60,0.13)", icon: "M16 18 L22 12 L16 6 M8 6 L2 12 L8 18" },
  { title: "Technical Recruiter", team: "Workforce & Staffing", loc: "Hyderabad", type: "Full-time", color: "#14a8a2", tint: "rgba(20,168,162,0.12)", icon: "M11 19 a8 8 0 1 0 0-16 a8 8 0 0 0 0 16 M21 21 L16.65 16.65" },
  { title: "SEO & Performance Analyst", team: "Digital Growth", loc: "Remote (India)", type: "Contract", color: "#6da41c", tint: "rgba(122,178,36,0.12)", icon: "M23 6 L13.5 15.5 L8.5 10.5 L1 18 M17 6 H23 V12" },
];

const HIRING = [
  { n: "1", title: "Apply", desc: "Send a CV and a note on what you've built or commissioned. No cover-letter theatre." },
  { n: "2", title: "Technical deep-dive", desc: "90 minutes with the team you'd join, on real problems from our projects." },
  { n: "3", title: "Domain panel", desc: "Standards, safety and judgment — how you think when the stakes are high." },
  { n: "4", title: "Offer", desc: "Decision within 3 days. Start dates flex around notice periods." },
];

const gridBg = {
  position: "absolute" as const,
  inset: 0,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Cpath d='M0 .5H43.5V44' fill='none' stroke='%230d2248' stroke-opacity='.05'/%3E%3C/svg%3E")`,
};
const kicker = { fontSize: 11, fontWeight: 800, letterSpacing: "0.26em", textTransform: "uppercase" as const, color: "#1d59c2", marginBottom: 14 };

export default function CareersPage() {
  return (
    <>
      <RevealEffect />
      <section style={{ position: "relative", overflow: "hidden", padding: "150px 24px 70px" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", width: "64vw", height: "64vw", left: "-18vw", top: "-26vw", borderRadius: "50%", background: "radial-gradient(circle,rgba(29,89,194,0.12),transparent 62%)", filter: "blur(60px)", animation: "auroraA 26s ease-in-out infinite" }} />
          <div style={gridBg} />
        </div>
        <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "8px 18px", borderRadius: 999, background: "rgba(255,255,255,0.75)", border: "1px solid rgba(13,34,72,0.10)", backdropFilter: "blur(14px)", marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#86bc25", animation: "dotpulse 2s infinite" }} />
            <span style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#33456b" }}>Careers at Onmog</span>
          </div>
          <h1 style={{ margin: 0, fontSize: "clamp(36px,5vw,68px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.06, maxWidth: 840, textWrap: "balance" }}>
            Do the most precise work of your{" "}
            <span style={{ background: "linear-gradient(100deg,#1d59c2,#14a8a2 45%,#5cb84a)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>career</span>.
          </h1>
          <p style={{ margin: "24px 0 0", fontSize: 16, lineHeight: 1.7, color: "#5d6c8a", maxWidth: 560 }}>
            Railways, cloud platforms, workforce systems — problems with real stakes, owned end to end. Join us in Hyderabad or on-site with clients worldwide.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
            <a href="#roles" style={{ display: "inline-block", padding: "15px 32px", borderRadius: 14, fontSize: 15, fontWeight: 700, color: "#fff", background: "linear-gradient(135deg,#1d59c2,#14a8a2)", boxShadow: "0 8px 30px rgba(29,89,194,0.4)" }}>
              See open roles
            </a>
            <a href="mailto:info@onmog.com" className="ghostbtn" style={{ display: "inline-block", padding: "15px 32px", borderRadius: 14, fontSize: 15, fontWeight: 700, color: "#0e1a2e", background: "rgba(13,34,72,0.045)", border: "1px solid rgba(13,34,72,0.12)" }}>
              Send your CV
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "30px 24px 70px", maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
          {PERKS.map((p) => (
            <div key={p.title} data-reveal className="hov-raise" style={{ "--hc": p.color, padding: "30px 26px", borderRadius: 22, background: "rgba(255,255,255,0.85)", border: "1px solid rgba(13,34,72,0.08)", transition: "transform .35s,border-color .35s" } as React.CSSProperties}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 46, height: 46, borderRadius: 13, background: p.tint, color: p.color, marginBottom: 18 }}>
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={p.icon} />
                </svg>
              </span>
              <h3 style={{ margin: "0 0 9px", fontSize: 17, fontWeight: 800 }}>{p.title}</h3>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: "#5d6c8a" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="roles" style={{ padding: "20px 24px 80px", maxWidth: 1180, margin: "0 auto" }}>
        <div data-reveal style={{ marginBottom: 40 }}>
          <div style={kicker}>Open positions</div>
          <h2 style={{ margin: 0, fontSize: "clamp(26px,3.4vw,44px)", fontWeight: 800, letterSpacing: "-0.025em" }}>Current openings</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {ROLES.map((r) => (
            <a
              key={r.title}
              href="mailto:info@onmog.com?subject=Application"
              data-reveal
              className="role-row"
              style={{ "--hc": r.color, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18, flexWrap: "wrap", padding: "24px 28px", borderRadius: 18, background: "linear-gradient(155deg,#ffffff,#f3f6fc)", border: "1px solid rgba(13,34,72,0.08)", color: "inherit", transition: "transform .35s,border-color .35s,box-shadow .35s" } as React.CSSProperties}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 18, minWidth: 0 }}>
                <span style={{ flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: 12, background: r.tint, color: r.color }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={r.icon} />
                  </svg>
                </span>
                <div style={{ minWidth: 0 }}>
                  <h3 style={{ margin: "0 0 4px", fontSize: 17, fontWeight: 800 }}>{r.title}</h3>
                  <span style={{ fontSize: 12.5, color: "#5d6c8a" }}>
                    {r.team} · {r.loc}
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ padding: "6px 14px", borderRadius: 999, fontSize: 11.5, fontWeight: 700, color: r.color, background: r.tint }}>{r.type}</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 700, color: "#4a5a7a" }}>
                  Apply{" "}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
        <p style={{ margin: "26px 0 0", fontSize: 13.5, color: "#8a94ab" }}>
          Don&apos;t see your role? Write to <a href="mailto:info@onmog.com">info@onmog.com</a> — we hire ahead of openings for exceptional people.
        </p>
      </section>

      <section style={{ padding: "0 24px 12vh", maxWidth: 1180, margin: "0 auto" }}>
        <div data-reveal style={{ marginBottom: 40 }}>
          <div style={kicker}>Hiring process</div>
          <h2 style={{ margin: 0, fontSize: "clamp(26px,3.4vw,44px)", fontWeight: 800, letterSpacing: "-0.025em" }}>Four steps, two weeks</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 16 }}>
          {HIRING.map((h) => (
            <div key={h.n} data-reveal style={{ padding: "26px 22px", borderRadius: 20, background: "rgba(255,255,255,0.85)", border: "1px solid rgba(13,34,72,0.08)" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: "50%", background: "rgba(29,89,194,0.14)", color: "#1d59c2", fontSize: 13, fontWeight: 800, marginBottom: 16 }}>
                {h.n}
              </span>
              <h3 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 800 }}>{h.title}</h3>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: "#5d6c8a" }}>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
