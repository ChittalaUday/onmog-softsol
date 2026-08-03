import Link from "next/link";
import type { CSSProperties } from "react";

const colLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 800,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#5d6c8a",
  marginBottom: 4,
};
const colLink: CSSProperties = { fontSize: 13.5, color: "#4a5a7a" };
const miniLink: CSSProperties = { fontSize: 12.5, color: "#4a5a7a" };

// Home gets the full four-column footer; every other page the one-line version.
export default function Footer({ full = false }: { full?: boolean }) {
  if (!full) {
    return (
      <footer style={{ borderTop: "1px solid rgba(13,34,72,0.07)", background: "#eef1f6", padding: "34px 24px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <span style={{ fontSize: 12, color: "#8a94ab" }}>© 2026 Onmog Softsol Private Limited</span>
          <span style={{ display: "flex", gap: 22 }}>
            <Link href="/" style={miniLink}>
              Home
            </Link>
            <Link href="/about" style={miniLink}>
              About
            </Link>
            <Link href="/services" style={miniLink}>
              Services
            </Link>
            <Link href="/careers" style={miniLink}>
              Careers
            </Link>
          </span>
        </div>
      </footer>
    );
  }
  return (
    <footer style={{ borderTop: "1px solid rgba(13,34,72,0.07)", background: "#eef1f6", padding: "60px 24px 34px" }}>
      <div className="grid-collapse" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 36 }}>
        <div style={{ minWidth: 220 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- fixed-height logo, exact replica of prototype */}
            <img src="/logo.png" alt="ONMOG" style={{ height: 22, width: "auto", display: "block" }} />
            <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0e1a2e" }}>Softsol</span>
          </div>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: "#8a94ab", maxWidth: 280 }}>
            Transforming challenges into sustainable solutions across rail, workforce, software and growth.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          <span style={colLabel}>Company</span>
          <Link href="/about" style={colLink}>
            About
          </Link>
          <Link href="/careers" style={colLink}>
            Careers
          </Link>
          <a href="#contact" style={colLink}>
            Contact
          </a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          <span style={colLabel}>Services</span>
          <Link href="/services/rail" style={colLink}>
            Rail Signalling
          </Link>
          <Link href="/services/staffing" style={colLink}>
            Contract Staffing
          </Link>
          <Link href="/services/digital" style={colLink}>
            Web Development
          </Link>
          <Link href="/services" style={colLink}>
            All services
          </Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          <span style={colLabel}>Reach us</span>
          <a href="mailto:hello@onmogsoftsol.com" style={colLink}>
            hello@onmogsoftsol.com
          </a>
          <a href="tel:+919000161826" style={colLink}>
            +91 9000161826
          </a>
          <span style={{ fontSize: 13.5, color: "#8a94ab" }}>Hyderabad, India</span>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1180,
          margin: "44px auto 0",
          paddingTop: 22,
          borderTop: "1px solid rgba(13,34,72,0.05)",
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: 12, color: "#8a94ab" }}>© 2026 Onmog Softsol Private Limited</span>
        <span style={{ fontSize: 12, color: "#8a94ab" }}>Precision Engineering · Digital Innovation · Human Excellence</span>
      </div>
    </footer>
  );
}
