import React from 'react'

interface SectionHeaderProps {
  title: string
  description?: string
  eyebrow?: string
}

export function SectionHeader({ title, description, eyebrow }: SectionHeaderProps) {
  return (
    <header>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{eyebrow}</p>
      )}
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-3 max-w-3xl text-slate-600 md:text-lg">{description}</p>
      )}
    </header>
  )
}
