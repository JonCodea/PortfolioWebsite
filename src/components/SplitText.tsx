"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

type Mode = "letters" | "words"

type Props = {
  text: string
  as?: keyof JSX.IntrinsicElements
  className?: string
  mode?: Mode
}

export function SplitText({ text, as = "span", className, mode = "letters" }: Props) {
  const parts = mode === "words" ? text.split(/(\s+)/) : [...text]
  const Tag: any = as

  return (
    <Tag className={className}>
      {parts.map((p, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-transform"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.04 }}
        >
          {p}
        </motion.span>
      ))}
    </Tag>
  )
}
