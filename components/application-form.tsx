"use client";

import { useState, useSyncExternalStore, type CSSProperties, type SubmitEvent, type ReactNode } from "react";
import type { CmsJob, CmsJobQuestion } from "@/lib/cms";

const appliedKey = (slug: string) => `onmog-applied:${slug}`;
const noopSubscribe = () => () => {};
const getServerSnapshot = () => false;

const inputStyle: CSSProperties = {
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(13,34,72,0.14)",
  background: "#fff",
  fontSize: 14,
  fontFamily: "inherit",
  color: "#0e1a2e",
  width: "100%",
};

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 700, color: "#33456b" }}>
      <span>
        {label}
        {required && <span style={{ color: "#c23d3d" }}> *</span>}
      </span>
      {children}
    </label>
  );
}

function MultiChoiceField({
  q,
  selected,
  onToggle,
  accent,
}: {
  q: CmsJobQuestion;
  selected: string[];
  onToggle: (option: string) => void;
  accent: string;
}) {
  const options = Array.isArray(q.options) ? (q.options as string[]) : [];
  return (
    <Field label={q.question} required={q.required}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
        {options.map((opt) => (
          <label key={opt} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13.5, fontWeight: 500, color: "#33456b" }}>
            <input type="checkbox" checked={selected.includes(opt)} onChange={() => onToggle(opt)} style={{ accentColor: accent }} />
            {opt}
          </label>
        ))}
      </div>
    </Field>
  );
}

function QuestionField({ q, accent }: { q: CmsJobQuestion; accent: string }) {
  const options = Array.isArray(q.options) ? (q.options as string[]) : [];

  switch (q.type) {
    case "SHORT_TEXT":
      return (
        <Field label={q.question} required={q.required}>
          <input name={`answer_${q.id}`} required={q.required} style={inputStyle} />
        </Field>
      );
    case "LONG_TEXT":
      return (
        <Field label={q.question} required={q.required}>
          <textarea name={`answer_${q.id}`} required={q.required} rows={4} style={{ ...inputStyle, resize: "vertical" }} />
        </Field>
      );
    case "SINGLE_CHOICE":
      return (
        <Field label={q.question} required={q.required}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            {options.map((opt) => (
              <label key={opt} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13.5, fontWeight: 500, color: "#33456b" }}>
                <input type="radio" name={`answer_${q.id}`} value={opt} required={q.required} style={{ accentColor: accent }} />
                {opt}
              </label>
            ))}
          </div>
        </Field>
      );
    case "YES_NO":
      return (
        <Field label={q.question} required={q.required}>
          <div style={{ display: "flex", gap: 14 }}>
            {["Yes", "No"].map((opt) => (
              <label key={opt} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13.5, fontWeight: 500, color: "#33456b" }}>
                <input type="radio" name={`answer_${q.id}`} value={opt} required={q.required} style={{ accentColor: accent }} />
                {opt}
              </label>
            ))}
          </div>
        </Field>
      );
    case "FILE":
      return (
        <Field label={q.question} required={q.required}>
          <input type="file" name={q.id} required={q.required} style={inputStyle} />
        </Field>
      );
    default:
      return null;
  }
}

export default function ApplicationForm({ job, accent, tint }: { job: CmsJob; accent: string; tint: string }) {
  const multiChoiceQuestions = job.questions.filter((q) => q.type === "MULTIPLE_CHOICE");
  const hasFileQuestion = job.questions.some((q) => q.type === "FILE");
  const [multiChoice, setMultiChoice] = useState<Record<string, string[]>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "success">("idle");
  const [error, setError] = useState("");
  const alreadyApplied = useSyncExternalStore(
    noopSubscribe,
    () => window.localStorage.getItem(appliedKey(job.slug)) !== null,
    getServerSnapshot
  );

  function toggleOption(questionId: string, option: string) {
    setMultiChoice((prev) => {
      const current = prev[questionId] ?? [];
      const next = current.includes(option) ? current.filter((o) => o !== option) : [...current, option];
      return { ...prev, [questionId]: next };
    });
  }

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    for (const q of multiChoiceQuestions) {
      if (q.required && (multiChoice[q.id]?.length ?? 0) === 0) {
        setError(`Please answer: ${q.question}`);
        return;
      }
    }

    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.set("jobId", job.id);
    for (const q of multiChoiceQuestions) {
      const selected = multiChoice[q.id] ?? [];
      if (selected.length) fd.set(`answer_${q.id}`, selected.join(", "));
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/careers/apply", { method: "POST", body: fd });
      let data: any = {};
      try {
        data = await res.json();
      } catch {
        data = { error: "Received invalid response from server." };
      }
      if (!res.ok || !data.success) {
        setStatus("error");
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      window.localStorage.setItem(appliedKey(job.slug), "1");
      setStatus("success");
      form.reset();
      setMultiChoice({});
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  if (status === "success" || alreadyApplied) {
    return (
      <div style={{ padding: 32, borderRadius: 22, background: tint, border: `1px solid ${accent}`, textAlign: "center" }}>
        <h3 style={{ margin: "0 0 8px", fontSize: 19, fontWeight: 800, color: "#0e1a2e" }}>
          {status === "success" ? "Application received" : "You’ve already applied"}
        </h3>
        <p style={{ margin: 0, fontSize: 14, color: "#5d6c8a" }}>
          {status === "success" ? "Thanks for applying — we’ll be in touch." : "This browser has already submitted an application for this role."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
        <Field label="Full name" required>
          <input name="applicantName" required style={inputStyle} />
        </Field>
        <Field label="Email" required>
          <input type="email" name="applicantEmail" required style={inputStyle} />
        </Field>
        <Field label="Phone">
          <input type="tel" name="applicantPhone" style={inputStyle} />
        </Field>
        {!hasFileQuestion && (
          <Field label="Resume">
            <input type="file" name="resume" accept=".pdf,.doc,.docx" style={inputStyle} />
          </Field>
        )}
      </div>

      {job.questions.map((q) =>
        q.type === "MULTIPLE_CHOICE" ? (
          <MultiChoiceField key={q.id} q={q} selected={multiChoice[q.id] ?? []} onToggle={(opt) => toggleOption(q.id, opt)} accent={accent} />
        ) : (
          <QuestionField key={q.id} q={q} accent={accent} />
        )
      )}

      {error && <p style={{ margin: 0, fontSize: 13.5, color: "#c23d3d", fontWeight: 600 }}>{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        style={{
          alignSelf: "flex-start",
          padding: "15px 32px",
          borderRadius: 14,
          fontSize: 15,
          fontWeight: 700,
          color: "#fff",
          background: accent,
          border: "none",
          cursor: status === "submitting" ? "wait" : "pointer",
          opacity: status === "submitting" ? 0.7 : 1,
        }}
      >
        {status === "submitting" ? "Submitting…" : "Submit application"}
      </button>
    </form>
  );
}
