"use client"

import { useEffect, useRef } from "react"




export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const dprRef = useRef<number>(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1)

  
  const pointsRef = useRef<Array<{ x: number; y: number; t: number }>>([])
  const mouseRef = useRef<{ x: number; y: number } | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setSize = () => {
      const dpr = (window.devicePixelRatio || 1)
      dprRef.current = dpr
      const { innerWidth: w, innerHeight: h } = window
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = w + "px"
      canvas.style.height = h + "px"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
    }

    setSize()
    window.addEventListener("resize", setSize)

    const onMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      mouseRef.current = { x, y }
      pointsRef.current.push({ x, y, t: performance.now() })
      
      if (pointsRef.current.length > 50) pointsRef.current.shift()
    }

    window.addEventListener("mousemove", onMove)

    const isTransparent = (rgba: string) => {
      
      if (!rgba) return true
      if (rgba === "transparent") return true
      
      const m = rgba.match(/rgba?\(([^)]+)\)/)
      if (!m) return false
      const parts = m[1].split(",").map(v => v.trim())
      if (parts.length === 4) {
        const a = parseFloat(parts[3])
        return a === 0
      }
      return false
    }

    const getEffectiveBackground = (x: number, y: number): string => {
      let el: Element | null = document.elementFromPoint(x, y)
      const seen = new Set<Element>()
      while (el && !seen.has(el)) {
        seen.add(el)
        const cs = window.getComputedStyle(el as Element)
        const bg = cs.backgroundColor
        if (bg && !isTransparent(bg)) return bg
        el = (el as HTMLElement).parentElement
      }
      
      return window.getComputedStyle(document.body).backgroundColor || "rgb(255,255,255)"
    }

    const luminance = (rgb: string): number => {
      
      const m = rgb.match(/rgba?\(([^)]+)\)/)
      if (!m) return 1
      const [r, g, b] = m[1].split(",").slice(0, 3).map(v => parseInt(v.trim(), 10) || 0)
      const srgb = [r, g, b].map(v => {
        const c = v / 255
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
      })
      
      return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2]
    }

    const render = () => {
      const now = performance.now()

      
      ctx.save()
      ctx.globalCompositeOperation = "destination-out"
      ctx.fillStyle = "rgba(0,0,0,0.98)" 
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.restore()

      
      let stroke = "#000"
      if (mouseRef.current) {
        const bg = getEffectiveBackground(mouseRef.current.x, mouseRef.current.y)
        const L = luminance(bg)
        
        stroke = L > 0.6 ? "#000" : "#fff"
      }

      
      const pts = pointsRef.current
      if (pts.length > 1) {
        for (let i = 1; i < pts.length; i++) {
          const p0 = pts[i - 1]
          const p1 = pts[i]
          
          const age = (now - p1.t) / 300 
          if (age > 0.6) continue
          const alpha = Math.max(0, 1 - age)
          const width = Math.max(0.5, 3 * (1 - age))
          ctx.beginPath()
          ctx.strokeStyle = `${stroke}`
          
          ctx.globalAlpha = Math.min(0.5, 0.08 + alpha * 0.5)
          ctx.lineWidth = width
          ctx.moveTo(p0.x, p0.y)
          ctx.lineTo(p1.x, p1.y)
          ctx.stroke()
        }
      }

      
      pointsRef.current = pts.filter(p => now - p.t < 600)

      rafRef.current = requestAnimationFrame(render)
    }

    rafRef.current = requestAnimationFrame(render)

    const onLeave = () => {
      mouseRef.current = null
      
      ctx.save()
      ctx.globalCompositeOperation = "destination-out"
      ctx.fillStyle = "rgba(0,0,0,0.4)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.restore()
    }

    window.addEventListener("mouseleave", onLeave)

    return () => {
      window.removeEventListener("resize", setSize)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[60]"
      aria-hidden
    />
  )
}
