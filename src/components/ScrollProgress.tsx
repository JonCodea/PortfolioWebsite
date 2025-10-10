"use client"

import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
      {}
      <div className="absolute inset-0 bg-slate-200/50" />
      {}
      {mounted && (
        <motion.div
          className="h-full bg-slate-900 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      )}
    </div>
  )
}
