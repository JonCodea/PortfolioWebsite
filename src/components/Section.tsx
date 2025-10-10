import React from 'react'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string
  fullScreen?: boolean
  containerClassName?: string
}

export function Section({ id, fullScreen = false, className, containerClassName, children, ...rest }: SectionProps) {
  const cx = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ')
  return (
    <section
      id={id}
      className={cx(
        fullScreen && 'min-h-[100svh] flex items-center',
        'bg-white py-24 border-t border-slate-100',
        className,
      )}
      {...rest}
    >
      <div className={cx('container-padded w-full mx-auto max-w-7xl', containerClassName)}>{children}</div>
    </section>
  )
}
