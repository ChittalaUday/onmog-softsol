"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type CSSProperties } from "react";

const MENU_CATS = [
  {
    name: "Rail Engineering",
    color: "#1d59c2",
    tint: "rgba(29,89,194,0.14)",
    icon: "M4 15 H20 M4 9 H20 M7 4 L7 20 M17 4 L17 20",
    items: [
      { name: "Rail Signalling", href: "/services/rail" },
      { name: "Rail Consultancy", href: "/services" },
      { name: "Testing & Commissioning", href: "/services/rail" },
      { name: "RAMS & Assurance", href: "/services" },
    ],
  },
  {
    name: "Workforce",
    color: "#14a8a2",
    tint: "rgba(20,168,162,0.13)",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11 a4 4 0 1 0 0-8 a4 4 0 0 0 0 8 M23 21v-2a4 4 0 0 0-3-3.87",
    items: [
      { name: "Contract Staffing", href: "/services/staffing" },
      { name: "Permanent Recruitment", href: "/services" },
      { name: "Payroll Services", href: "/services" },
      { name: "HR Outsourcing", href: "/services" },
    ],
  },
  {
    name: "IT Solutions",
    color: "#3fa03c",
    tint: "rgba(63,160,60,0.14)",
    icon: "M16 18 L22 12 L16 6 M8 6 L2 12 L8 18",
    items: [
      { name: "Web Development", href: "/services/digital" },
      { name: "App Development", href: "/services" },
      { name: "ERP Integration", href: "/services" },
      { name: "Cloud & DevOps", href: "/services" },
    ],
  },
  {
    name: "Digital Growth",
    color: "#6da41c",
    tint: "rgba(122,178,36,0.14)",
    icon: "M23 6 L13.5 15.5 L8.5 10.5 L1 18 M17 6 H23 V12",
    items: [
      { name: "SEO & Search", href: "/services" },
      { name: "PPC & Performance", href: "/services" },
      { name: "Brand Strategy", href: "/services" },
    ],
  },
];

const navLinkStyle = (active: boolean): CSSProperties => ({
  padding: "9px 14px",
  borderRadius: 10,
  fontSize: 13.5,
  fontWeight: 600,
  color: active ? "#0e1a2e" : "#4a5a7a",
});

const mobileLinkStyle: CSSProperties = {
  padding: "12px 14px",
  borderRadius: 10,
  fontSize: 16,
  fontWeight: 700,
  color: "#0e1a2e",
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const active =
    pathname === "/"
      ? "home"
      : pathname.startsWith("/about")
        ? "about"
        : pathname.startsWith("/services")
          ? "services"
          : pathname.startsWith("/careers")
            ? "careers"
            : "";
  const closeAll = () => {
    setMenuOpen(false);
    setMobileOpen(false);
  };

  return (
    <div
      onMouseLeave={() => setMenuOpen(false)}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        display: "flex",
        justifyContent: "center",
        padding: "14px 20px 0",
        pointerEvents: "none",
      }}
    >
      <nav
        style={{
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          width: "100%",
          maxWidth: 1180,
          padding: "10px 12px 10px 18px",
          background: "rgba(255,255,255,0.75)",
          border: "1px solid rgba(13,34,72,0.08)",
          borderRadius: 18,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 12px 40px rgba(16,34,72,0.10)",
        }}
      >
        <Link href="/" onClick={closeAll} style={{ display: "flex", alignItems: "center", gap: 11, color: "#0e1a2e" }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- fixed-height logo, exact replica of prototype */}
          <img src="/logo.png" alt="ONMOG" style={{ height: 26, width: "auto", display: "block" }} />
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1, paddingTop: 2 }}>
            <span style={{ fontWeight: 800, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", whiteSpace: "nowrap", color: "#0e1a2e" }}>
              Softsol
            </span>
            <span style={{ fontWeight: 700, fontSize: 7.5, letterSpacing: "0.2em", textTransform: "uppercase", color: "#14a8a2", marginTop: 3, whiteSpace: "nowrap" }}>
              Sustainable Solutions
            </span>
          </span>
        </Link>
        <div data-mq="desktop" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Link href="/" className="nl" style={navLinkStyle(active === "home")}>
            Home
          </Link>
          <Link href="/about" className="nl" style={navLinkStyle(active === "about")}>
            About
          </Link>
          <button
            onMouseEnter={() => setMenuOpen(true)}
            onClick={() => setMenuOpen((v) => !v)}
            className="nl"
            style={{
              ...navLinkStyle(active === "services"),
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Services
            <svg width="10" height="10" viewBox="0 0 10 10" style={{ transition: "transform .3s", transform: menuOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
              <path d="M1 3 L5 7 L9 3" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            </svg>
          </button>
          <Link href="/careers" className="nl" style={navLinkStyle(active === "careers")}>
            Careers
          </Link>
        </div>
        <div data-mq="desktop" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Link
            href="/#contact"
            className="ncta"
            style={{
              padding: "10px 20px",
              borderRadius: 12,
              fontSize: 13.5,
              fontWeight: 700,
              color: "#fff",
              whiteSpace: "nowrap",
              background: "linear-gradient(135deg,#1d59c2,#14a8a2)",
              boxShadow: "0 6px 20px rgba(29,89,194,0.35)",
              transition: "transform .25s,box-shadow .25s",
            }}
          >
            Contact Us
          </Link>
        </div>
        <button
          data-mq="mobile"
          aria-label="Menu"
          onClick={() => {
            setMobileOpen((v) => !v);
            setMenuOpen(false);
          }}
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            background: "rgba(13,34,72,0.05)",
            border: "1px solid rgba(13,34,72,0.10)",
            borderRadius: 10,
            cursor: "pointer",
            color: "#0e1a2e",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path
              d={mobileOpen ? "M3 3 L15 15 M15 3 L3 15" : "M2 4.5 H16 M2 9 H16 M2 13.5 H16"}
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <div
          style={{
            pointerEvents: "auto",
            position: "absolute",
            top: 76,
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(960px,94vw)",
            background: "rgba(248,250,253,0.96)",
            border: "1px solid rgba(13,34,72,0.10)",
            borderRadius: 20,
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            boxShadow: "0 30px 80px rgba(16,34,72,0.14)",
            padding: 26,
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 8,
            animation: "navdrop .35s cubic-bezier(.22,1,.36,1)",
          }}
        >
          {MENU_CATS.map((cat) => (
            <div
              key={cat.name}
              className="mcat"
              style={{ padding: 14, borderRadius: 14, border: "1px solid transparent", transition: "border-color .3s,background .3s" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 30,
                    height: 30,
                    borderRadius: 9,
                    background: cat.tint,
                    color: cat.color,
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={cat.icon} />
                  </svg>
                </span>
                <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0e1a2e" }}>{cat.name}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {cat.items.map((it) => (
                  <Link
                    key={it.name}
                    href={it.href}
                    onClick={closeAll}
                    className="mitem"
                    style={{
                      padding: "7px 9px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#5d6c8a",
                      transition: "color .2s,background .2s,padding-left .2s",
                    }}
                  >
                    {it.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {mobileOpen && (
        <div
          style={{
            pointerEvents: "auto",
            position: "absolute",
            top: 76,
            left: 16,
            right: 16,
            background: "rgba(255,255,255,0.97)",
            border: "1px solid rgba(13,34,72,0.10)",
            borderRadius: 18,
            backdropFilter: "blur(28px)",
            boxShadow: "0 30px 80px rgba(16,34,72,0.14)",
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Link href="/" onClick={closeAll} style={mobileLinkStyle}>
            Home
          </Link>
          <Link href="/about" onClick={closeAll} style={mobileLinkStyle}>
            About
          </Link>
          <Link href="/services" onClick={closeAll} style={mobileLinkStyle}>
            Services
          </Link>
          <Link href="/careers" onClick={closeAll} style={mobileLinkStyle}>
            Careers
          </Link>
          <Link
            href="/#contact"
            onClick={closeAll}
            style={{
              marginTop: 10,
              padding: 13,
              borderRadius: 12,
              textAlign: "center",
              fontSize: 15,
              fontWeight: 700,
              color: "#fff",
              background: "linear-gradient(135deg,#1d59c2,#14a8a2)",
            }}
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
}
