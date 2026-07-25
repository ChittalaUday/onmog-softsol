"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import Footer from "@/components/footer";

const CAT = {
  "Rail Engineering": { color: "#1d59c2", tint: "rgba(29,89,194,0.13)" },
  "Workforce & Staffing": { color: "#14a8a2", tint: "rgba(20,168,162,0.12)" },
  "IT Solutions": { color: "#3fa03c", tint: "rgba(63,160,60,0.13)" },
  "Digital Growth": { color: "#6da41c", tint: "rgba(122,178,36,0.12)" },
} as const;

type Category = keyof typeof CAT;

const SERVICES: {
  title: string;
  category: Category;
  href: string;
  meta: string;
  linkLabel: string;
  desc: string;
  features: string[];
  icon: string;
}[] = [
  { title: "Rail Signalling", category: "Rail Engineering", href: "/services/rail", meta: "Enterprise · Ongoing", linkLabel: "Detail page",
    desc: "End-to-end signalling design, consultancy, installation supervision, testing and commissioning for railway and metro networks.",
    features: ["Interlocking Design", "Testing & Commissioning", "Safety Critical"], icon: "M4 11 H20 M4.5 19 L2 22 M19.5 19 L22 22 M12 2 C8 2 4 2.5 4 6 V15.5 A3.5 3.5 0 0 0 7.5 19 H16.5 A3.5 3.5 0 0 0 20 15.5 V6 C20 2.5 16 2 12 2" },
  { title: "Rail Consultancy", category: "Rail Engineering", href: "/services/rail-consultancy", meta: "Advanced · Flexible", linkLabel: "Explore",
    desc: "Multidisciplinary engineering and management consultancy — track design, OLE & electrification, RAMS and system assurance.",
    features: ["Track Design", "OLE & Electrification", "RAMS"], icon: "M9 21 H15 M12 17 V21 M5 3 H19 A2 2 0 0 1 21 5 V15 A2 2 0 0 1 19 17 H5 A2 2 0 0 1 3 15 V5 A2 2 0 0 1 5 3 M7 12 L10 9 L13 12 L17 7" },
  { title: "Contract Staffing", category: "Workforce & Staffing", href: "/services/staffing", meta: "Basic · Flexible", linkLabel: "Detail page",
    desc: "Scale your team fast with skilled professionals for short-term, long-term or project-based assignments — full lifecycle managed.",
    features: ["Rapid Deployment", "Flexible Workforce", "End-to-end"], icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11 a4 4 0 1 0 0-8 a4 4 0 0 0 0 8 M23 21v-2a4 4 0 0 0-3-3.87" },
  { title: "Permanent Recruitment", category: "Workforce & Staffing", href: "/services/permanent-recruitment", meta: "Advanced · Ongoing", linkLabel: "Explore",
    desc: "Strategic talent acquisition — executive search, technical screening and cultural alignment across seven industries.",
    features: ["Executive Search", "Technical Screening", "Retention"], icon: "M11 19 a8 8 0 1 0 0-16 a8 8 0 0 0 0 16 M21 21 L16.65 16.65" },
  { title: "Project Outsourcing", category: "Workforce & Staffing", href: "/services/project-outsourcing", meta: "Enterprise · Project-based", linkLabel: "Explore",
    desc: "End-to-end project execution with dedicated teams, strict quality control and SLA management.",
    features: ["Dedicated Teams", "SLA Management", "QA & Reporting"], icon: "M21 16 V8 a2 2 0 0 0 -1 -1.73 l-7 -4 a2 2 0 0 0 -2 0 l-7 4 A2 2 0 0 0 3 8 v8 a2 2 0 0 0 1 1.73 l7 4 a2 2 0 0 0 2 0 l7 -4 A2 2 0 0 0 21 16 M3.3 7 L12 12 l8.7 -5 M12 22 V12" },
  { title: "Payroll Services", category: "Workforce & Staffing", href: "/services/payroll-services", meta: "Basic · Monthly", linkLabel: "Explore",
    desc: "Accurate, confidential and compliant payroll — salary processing, PF/ESI/TDS management and MIS reporting.",
    features: ["Compliance", "Tax Deductions", "Secure Processing"], icon: "M14 2 H6 A2 2 0 0 0 4 4 V20 A2 2 0 0 0 6 22 H18 A2 2 0 0 0 20 20 V8 Z M14 2 V8 H20 M9 15 L11 17 L15 13" },
  { title: "Labor Law Compliance", category: "Workforce & Staffing", href: "/services/labor-law-compliance", meta: "Advanced · Ongoing", linkLabel: "Explore",
    desc: "Statutory audits, license registration and risk mitigation — PF, ESI, contract labor and minimum wages compliance.",
    features: ["Statutory Audits", "Licensing", "Risk Mitigation"], icon: "M12 22 c5.5 -1.5 9 -5.5 9 -11 V5 L12 2 L3 5 v6 c0 5.5 3.5 9.5 9 11 M9 12 l2 2 l4 -4" },
  { title: "Web Development", category: "IT Solutions", href: "/services/digital", meta: "Advanced · 3–6 months", linkLabel: "Detail page",
    desc: "Custom web applications and enterprise portals — React/Next.js front-ends on scalable, secure cloud architecture.",
    features: ["Responsive", "Performance", "Secure"], icon: "M16 18 L22 12 L16 6 M8 6 L2 12 L8 18" },
  { title: "App Development", category: "IT Solutions", href: "/services/app-development", meta: "Advanced · 4–8 months", linkLabel: "Explore",
    desc: "High-performance iOS, Android and cross-platform apps with native-like speed and exceptional UX.",
    features: ["React Native", "Flutter", "Offline-first"], icon: "M7 2 H17 A2 2 0 0 1 19 4 V20 A2 2 0 0 1 17 22 H7 A2 2 0 0 1 5 20 V4 A2 2 0 0 1 7 2 M12 18 h.01" },
  { title: "SEO & Search Optimization", category: "Digital Growth", href: "/services/seo-search", meta: "Advanced · Ongoing", linkLabel: "Explore",
    desc: "Technical SEO, content strategy and backlink growth for long-term visibility and high-intent organic traffic.",
    features: ["Technical SEO", "Content Strategy", "Analytics"], icon: "M23 6 L13.5 15.5 L8.5 10.5 L1 18 M17 6 H23 V12" },
];

const CATS = ["All", ...Object.keys(CAT)] as const;

const gridBg: CSSProperties = {
  position: "absolute",
  inset: 0,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Cpath d='M0 .5H43.5V44' fill='none' stroke='%230d2248' stroke-opacity='.05'/%3E%3C/svg%3E")`,
};

export default function Services() {
  const [filter, setFilter] = useState<string>("All");

  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", padding: "150px 24px 40px" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", width: "60vw", height: "60vw", right: "-20vw", top: "-28vw", borderRadius: "50%", background: "radial-gradient(circle,rgba(29,89,194,0.11),transparent 62%)", filter: "blur(60px)", animation: "auroraA 26s ease-in-out infinite" }} />
          <div style={gridBg} />
        </div>
        <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "8px 18px", borderRadius: 999, background: "rgba(255,255,255,0.75)", border: "1px solid rgba(13,34,72,0.10)", backdropFilter: "blur(14px)", marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#86bc25", animation: "dotpulse 2s infinite" }} />
            <span style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#33456b" }}>Services</span>
          </div>
          <h1 style={{ margin: 0, fontSize: "clamp(36px,5vw,68px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.06, maxWidth: 820, textWrap: "balance" }}>
            Everything we do,{" "}
            <span style={{ background: "linear-gradient(100deg,#1d59c2,#14a8a2 45%,#5cb84a)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>end to end</span>.
          </h1>
          <p style={{ margin: "24px 0 0", fontSize: 16, lineHeight: 1.7, color: "#5d6c8a", maxWidth: 560 }}>Ten services across four disciplines. Filter by practice, or dive into a detail page.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginTop: 38 }}>
            {CATS.map((c) => {
              const isActive = filter === c;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className="filter-btn"
                  style={{
                    padding: "10px 20px",
                    borderRadius: 999,
                    fontFamily: "inherit",
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                    color: isActive ? "#fff" : "#4a5a7a",
                    background: isActive ? "linear-gradient(135deg,#1d59c2,#14a8a2)" : "rgba(255,255,255,0.85)",
                    border: `1px solid ${isActive ? "transparent" : "rgba(13,34,72,0.10)"}`,
                    transition: "all .3s",
                  }}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ position: "relative", padding: "50px 24px 12vh", maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(330px,1fr))", gap: 16 }}>
          {SERVICES.map((s) => {
            const { color, tint } = CAT[s.category];
            const visible = filter === "All" || filter === s.category;
            return (
              <Link
                key={s.title}
                href={s.href}
                className="svc-card"
                style={
                  {
                    "--hc": color,
                    "--ht": tint,
                    display: visible ? "flex" : "none",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 24,
                    padding: 30,
                    background: "linear-gradient(155deg,#ffffff,#f3f6fc)",
                    border: "1px solid rgba(13,34,72,0.08)",
                    color: "inherit",
                    transition: "transform .4s cubic-bezier(.22,1,.36,1),border-color .4s,box-shadow .4s",
                  } as CSSProperties
                }
              >
                <div style={{ position: "absolute", width: "70%", height: "70%", right: "-25%", top: "-30%", borderRadius: "50%", background: `radial-gradient(circle,${tint},transparent 65%)`, filter: "blur(36px)", pointerEvents: "none" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 14, background: tint, color }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={s.icon} />
                    </svg>
                  </span>
                  <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color, padding: "5px 11px", borderRadius: 999, background: tint }}>{s.category}</span>
                </div>
                <h3 style={{ margin: "0 0 10px", fontSize: 20, fontWeight: 800, letterSpacing: "-0.01em" }}>{s.title}</h3>
                <p style={{ margin: "0 0 20px", fontSize: 13.5, lineHeight: 1.65, color: "#5d6c8a", flex: 1 }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 20 }}>
                  {s.features.map((f) => (
                    <span key={f} style={{ padding: "5px 11px", borderRadius: 999, fontSize: 11, fontWeight: 600, color: "#33456b", background: "rgba(13,34,72,0.045)", border: "1px solid rgba(13,34,72,0.08)" }}>
                      {f}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 16, borderTop: "1px solid rgba(13,34,72,0.07)" }}>
                  <span style={{ fontSize: 11.5, fontWeight: 700, color: "#8a94ab" }}>{s.meta}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 700, color }}>
                    {s.linkLabel}{" "}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
