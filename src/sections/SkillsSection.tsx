import React from "react";
import { Reveal } from "@/components/Reveal";








type SkillItem = { name: string; note?: string }
type Column = { title: string; items: SkillItem[] }

type PillProps = {
  name: string
  note?: string
  highlighted?: boolean
}

type SkillsSectionProps = { title?: string }

const COLUMNS: Column[] = [
  {
    title: "Programming Languages",
    items: [
      { name: "HTML / CSS / JavaScript" },
      { name: "Python", note: "Homebuyer app, prototyping" },
      { name: "Lua" },
      { name: "TypeScript", note: "Progresso (web + mobile)" },
      { name: "GDScript", note: "Godot — A-Level game" },
      { name: "Java", note: "Listed / limited projects" },
      { name: "C#", note: "Coursework / CV" },
    ],
  },
  {
    title: "Frameworks & Runtimes",
    items: [
      { name: "React", note: "Progresso (web)" },
      { name: "Next.js", note: "Portfolio / SSR" },
      { name: "React Native", note: "Progresso (mobile)" },
      { name: "Streamlit", note: "Homebuyer Forecast app" },
      { name: "Vite", note: "Progresso tooling" },
      { name: "PostgreSQL", note: "Primary relational DB" },
      { name: "DBeaver", note: "Database client" },
      { name: "Godot Engine", note: "A-Level game" },
      { name: "Flask / Django", note: "Aspirational" },
      { name: ".NET Core", note: "Listed / PDAP" },
    ],
  },
  {
    title: "Soft / Transferable Skills",
    items: [
      { name: "Problem Solving", note: "Across projects" },
      { name: "Project Management", note: "Gantt, sprints" },
      { name: "Testing & QA", note: "Manual & in-app" },
      { name: "Requirements Analysis", note: "User-survey driven" },
      { name: "UI / UX Prototyping", note: "Figma, responsive design" },
      { name: "Auth & Account Mgmt", note: "Progresso" },
    ],
  },
];

function SparkIcon() {
  return (
    <svg className="h-4 w-4 text-sky-400 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="h-4 w-4 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function FrameworkIcon() {
  return (
    <svg className="h-4 w-4 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function Pill({ name, note, highlighted = false }: PillProps) {
  
  return (
    <div
      className={`flex w-full items-center gap-3 rounded-full px-4 py-3 text-sm text-white shadow-sm transition-all duration-150
        ${highlighted ? "border border-sky-400/50 bg-slate-800/60 ring-2 ring-sky-400/20" : "border border-slate-700 bg-slate-900/60"}`}
    >
      <div className="min-w-[28px] flex items-center justify-center">
        <svg className="h-4 w-4 text-sky-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>
      <div className="flex-1">
        <div className="font-medium text-white">{name}</div>
      </div>
    </div>
  )
}

export function SkillsSection({ title = "Technical Skills & Expertise" }: SkillsSectionProps) {
  return (
    <section id="skills" className="pt-12 pb-48 bg-[#071023]">
      <div className="max-w-6xl mx-auto px-6">
        {}
        <Reveal>
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-white">{title}</h2>
            <div className="mt-3 h-1 w-40 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COLUMNS.map((col, idx) => (
            <Reveal key={`skills-col-${col.title}`} delay={idx * 0.08}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                {}
                <div className="rounded-full bg-slate-800/30 p-2">
                  {idx === 0 ? <CodeIcon /> : idx === 1 ? <FrameworkIcon /> : <SparkIcon />}
                </div>
                <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              </div>

              <div className="space-y-3">
                {col.items.map((it, i) => (
                  <Pill key={it.name} name={it.name} note={it.note} highlighted={i % 3 === 1} />
                ))}
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
