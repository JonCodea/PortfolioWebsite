import React from 'react'

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: 'span' | 'button' | 'a'
}

export function Pill({ as = 'span', className = '', children, ...rest }: PillProps) {
  const base = 'inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700 shadow-sm'
  const Comp: any = as
  return (
    <Comp className={`${base} ${className}`} {...rest}>
      {children}
    </Comp>
  )
}
