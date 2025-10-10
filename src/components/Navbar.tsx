"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

const navItems: { href: string; label: 'About' | 'Projects' | 'Skills' | 'Resume' | 'Contact' }[] = [
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#resume', label: 'Resume' },
  { href: '/#contact', label: 'Contact' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
}

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-padded h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-slate-900">
          Jonathan Edwards
        </Link>
        <motion.nav
          variants={container}
          initial="hidden"
          animate="show"
          className="flex items-center gap-2"
        >
          {navItems.map((itemLink) => (
            <motion.div key={itemLink.href} variants={item}>
              <Link
                href={itemLink.href}
                className="inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60 transition-colors"
              >
                {itemLink.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </div>
    </header>
  )
}

