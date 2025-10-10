"use client"

import { motion, useInView } from "framer-motion"
import { ReactNode, useRef } from "react"

type Props = {
  children: ReactNode
  delay?: number
  y?: number
  mask?: boolean 
}

export function Reveal({ children, delay = 0, y = 16, mask = false }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })

  return (
    <div ref={ref} className={mask ? "overflow-hidden" : undefined}>
      <motion.div
        initial={{ opacity: 0, y }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}
