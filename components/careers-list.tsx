"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { JOB_TYPE_LABELS, formatExperience, type CmsJob } from "@/lib/cms";

const ROLE_STYLE = {
  color: "#1d59c2",
  tint: "rgba(29,89,194,0.13)",
  icon: "M4 7 H20 A2 2 0 0 1 22 9 V19 A2 2 0 0 1 20 21 H4 A2 2 0 0 1 2 19 V9 A2 2 0 0 1 4 7 M8 7 V5 A2 2 0 0 1 10 3 H14 A2 2 0 0 1 16 5 V7 M2 12 H22",
};

export function CareersLoadingSkeleton() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Loading Spinner & Status Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", borderRadius: 14, background: "rgba(29,89,194,0.05)", border: "1px solid rgba(29,89,194,0.12)", marginBottom: 12 }}>
        <div style={{ width: 22, height: 22, borderRadius: "50%", border: "2.5px solid rgba(29,89,194,0.2)", borderTopColor: "#1d59c2", animation: "spin 0.8s linear infinite" }} />
        <span style={{ fontSize: 13.5, fontWeight: 700, color: "#1d59c2" }}>Loading latest career opportunities...</span>
      </div>

      {/* Skeleton Cards */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
            flexWrap: "wrap",
            padding: "24px 28px",
            borderRadius: 18,
            background: "linear-gradient(155deg,#ffffff,#f3f6fc)",
            border: "1px solid rgba(13,34,72,0.08)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18, minWidth: 0, flex: 1 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(13,34,72,0.08)", animation: "pulse 1.5s infinite" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1, maxWidth: 360 }}>
              <div style={{ height: 18, width: "70%", borderRadius: 6, background: "rgba(13,34,72,0.10)", animation: "pulse 1.5s infinite" }} />
              <div style={{ height: 13, width: "45%", borderRadius: 4, background: "rgba(13,34,72,0.06)", animation: "pulse 1.5s infinite" }} />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 80, height: 26, borderRadius: 999, background: "rgba(13,34,72,0.08)", animation: "pulse 1.5s infinite" }} />
            <div style={{ width: 100, height: 20, borderRadius: 6, background: "rgba(13,34,72,0.06)", animation: "pulse 1.5s infinite" }} />
          </div>
        </div>
      ))}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.9; } }
      `}</style>
    </div>
  );
}

export default function CareersList({ jobs, departments }: { jobs: CmsJob[]; departments: string[] }) {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? jobs : jobs.filter((j) => j.department === filter);

  return (
    <>
      {departments.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginBottom: 28 }}>
          {["All", ...departments].map((d) => {
            const isActive = filter === d;
            return (
              <button
                key={d}
                onClick={() => setFilter(d)}
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
                {d}
              </button>
            );
          })}
        </div>
      )}

      {visible.length === 0 && (
        <p style={{ margin: 0, fontSize: 14.5, color: "#5d6c8a" }}>
          No open positions right now — send us your CV and we&apos;ll reach out when a fit opens up.
        </p>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {visible.map((j) => {
          const expText = formatExperience(j.requiredExperience);
          return (
            <Link
              key={j.id}
              href={`/careers/${j.slug}`}
              data-reveal
              className="role-row"
              style={
                {
                  "--hc": ROLE_STYLE.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 18,
                  flexWrap: "wrap",
                  padding: "24px 28px",
                  borderRadius: 18,
                  background: "linear-gradient(155deg,#ffffff,#f3f6fc)",
                  border: "1px solid rgba(13,34,72,0.08)",
                  color: "inherit",
                  transition: "transform .35s,border-color .35s,box-shadow .35s",
                } as CSSProperties
              }
            >
              <div style={{ display: "flex", alignItems: "center", gap: 18, minWidth: 0 }}>
                <span style={{ flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: 12, background: ROLE_STYLE.tint, color: ROLE_STYLE.color }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={ROLE_STYLE.icon} />
                  </svg>
                </span>
                <div style={{ minWidth: 0 }}>
                  <h3 style={{ margin: "0 0 4px", fontSize: 17, fontWeight: 800 }}>{j.title}</h3>
                  <span style={{ fontSize: 12.5, color: "#5d6c8a" }}>
                    {j.department} · {j.location}{expText ? ` · ${expText}` : ""}
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ padding: "6px 14px", borderRadius: 999, fontSize: 11.5, fontWeight: 700, color: ROLE_STYLE.color, background: ROLE_STYLE.tint }}>{JOB_TYPE_LABELS[j.jobType]}</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 700, color: "#4a5a7a" }}>
                  View & Apply{" "}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
