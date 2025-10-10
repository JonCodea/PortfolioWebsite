"use client"

import { ReactNode, useEffect, useRef } from "react"

type Props = {
  children: ReactNode
  strength?: number 
}

export function ParallaxMouse({ children, strength = 16 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      const tx = Math.max(Math.min(dx, 1), -1) * strength
      const ty = Math.max(Math.min(dy, 1), -1) * strength
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
    }

    const reset = () => {
      el.style.transform = "translate3d(0,0,0)"
    }

    window.addEventListener("mousemove", handle)
    window.addEventListener("mouseleave", reset)
    return () => {
      window.removeEventListener("mousemove", handle)
      window.removeEventListener("mouseleave", reset)
    }
  }, [strength])

  return (
    <div ref={ref} className="will-change-transform transition-transform duration-200 ease-out">
      {children}
    </div>
  )
}
