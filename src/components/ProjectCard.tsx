import React from 'react'
import { Pill } from '@/components/Pill'

interface ProjectCardProps {
  title: string
  desc: string
  tags: string[]
  github?: string
  demo?: string
}

export function ProjectCard({ title, desc, tags, github = 'https://github.com/JonCodea', demo = '#' }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold leading-tight">{title}</h3>
        <span className="shrink-0 rounded-full bg-slate-900 px-2.5 py-1 text-xs font-medium text-white">{tags[0]}</span>
      </div>
      <p className="mt-3 text-slate-700">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.slice(0, 4).map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          GitHub
        </a>
        <a
          href={demo}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
        >
          Live Demo
        </a>
      </div>
    </article>
  )
}
