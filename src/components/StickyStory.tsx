"use client"

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export function SloganColorShift() {
  const ref = useRef<HTMLElement | null>(null)
  const sloganRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const shouldReduceMotion = useReducedMotion()
  
  
  const colorStartThreshold = 0.45    
  const colorMidThreshold = 0.5       
  const colorEndThreshold = 0.65        
  const unpinThreshold = 0.95           

  
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, colorStartThreshold, colorMidThreshold, colorEndThreshold],
    [
      "#ffffff",      
      "#e0f2fe",      
      "#1e3a5f",      
      "#071023"       
    ]
  )

  
  const textColor = useTransform(
    scrollYProgress, 
    [0, colorStartThreshold, colorMidThreshold, colorEndThreshold], 
    [
      "#071023",      
      "#1e3a5f",      
      "#94a3b8",      
      "#ffffff"       
    ]
  )

  
  const pinProgress = useTransform(
    scrollYProgress, 
    [0, colorEndThreshold, unpinThreshold], 
    [0, 0, 1]
  )

  
  const rawScale = useTransform(scrollYProgress, [0, colorStartThreshold, colorEndThreshold], [1.06, 1.02, 1])
  const rawOpacity = useTransform(scrollYProgress, [0, unpinThreshold, 1], [1, 1, 0.85])
  const scale = shouldReduceMotion ? 1 : rawScale
  const opacity = shouldReduceMotion ? 1 : rawOpacity
  const letterSpacing = shouldReduceMotion ? "0px" : useTransform(
    scrollYProgress, 
    [0, colorStartThreshold, colorEndThreshold], 
    ["-1.5px", "-0.5px", "0px"]
  )

  
  const [isPinned, setIsPinned] = useState(true)
  const [placeholderHeight, setPlaceholderHeight] = useState<number | null>(null)

  
  useEffect(() => {
    const el = sloganRef.current
    if (!el) return

    const setSize = () => setPlaceholderHeight(el.getBoundingClientRect().height)
    setSize()

    const ro = new ResizeObserver(setSize)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const EPS = 1e-3
    setIsPinned(pinProgress.get() < 1 - EPS)

    const unsubscribe = pinProgress.onChange((v) => {
      setIsPinned(v < 1 - EPS)
    })

    return unsubscribe
  }, [pinProgress])

  
  useEffect(() => {
    const html = document.documentElement

    
    const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v))
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const hexToRgb = (hex: string) => {
      const h = hex.replace('#','')
      const bigint = parseInt(h, 16)
      const r = (bigint >> 16) & 255
      const g = (bigint >> 8) & 255
      const b = bigint & 255
      return { r, g, b }
    }
    const lerpHex = (from: string, to: string, t: number) => {
      const a = hexToRgb(from)
      const b = hexToRgb(to)
      const r = Math.round(lerp(a.r, b.r, t))
      const g = Math.round(lerp(a.g, b.g, t))
      const bch = Math.round(lerp(a.b, b.b, t))
      return `rgb(${r}, ${g}, ${bch})`
    }
    const lerpRgba = (from: [number,number,number,number], to: [number,number,number,number], t: number) => {
      const r = Math.round(lerp(from[0], to[0], t))
      const g = Math.round(lerp(from[1], to[1], t))
      const b = Math.round(lerp(from[2], to[2], t))
      const a = lerp(from[3], to[3], t)
      return `rgba(${r}, ${g}, ${b}, ${a})`
    }

    // Light -> Dark targets (should mirror globals.css vars)
    const lightTrack = '#eef6ff'
    const darkTrack = '#0b1530'
    const lightThumb: [number,number,number,number] = [2, 6, 23, 0.35]
    const darkThumb: [number,number,number,number] = [255, 255, 255, 0.25]
    const lightThumbHover: [number,number,number,number] = [2, 6, 23, 0.55]
    const darkThumbHover: [number,number,number,number] = [255, 255, 255, 0.35]

    const apply = (p: number) => {
      
      const t = clamp((p - colorStartThreshold) / (colorEndThreshold - colorStartThreshold))
      
      const track = lerpHex(lightTrack, darkTrack, t)
      const thumb = lerpRgba(lightThumb, darkThumb, t)
      const thumbHover = lerpRgba(lightThumbHover, darkThumbHover, t)
      html.style.setProperty('--scrollbar-track', track)
      html.style.setProperty('--scrollbar-thumb', thumb)
      html.style.setProperty('--scrollbar-thumb-hover', thumbHover)
    }

    
    apply(scrollYProgress.get())

    
    const unsub = scrollYProgress.on('change', apply)

    return () => {
      unsub?.()
      
      
      
      
    }
  }, [scrollYProgress])

  return (
    <motion.section 
      ref={ref} 
      style={{ backgroundColor } as any} 
      className="min-h-[250vh] transition-colors duration-75"
    >
      {}
      <div className="h-screen" />

      {}
      {isPinned && placeholderHeight ? (
        <div style={{ height: placeholderHeight }} aria-hidden />
      ) : null}

      <div
        ref={sloganRef}
        className={`${
          isPinned ? "sticky top-[30vh]" : "relative"
        } w-full flex justify-center px-6 z-10`}
      >
        <motion.div style={{ scale, opacity } as any}>
          <motion.h1
            style={{ 
              color: textColor, 
              letterSpacing,
              
              textShadow: useTransform(
                scrollYProgress,
                [colorStartThreshold, colorEndThreshold],
                ["0 0 0px rgba(0,0,0,0)", "0 2px 20px rgba(0,0,0,0.3)"]
              )
            } as any}
            className="pointer-events-none select-none text-6xl md:text-8xl lg:text-[7rem] font-extrabold leading-none text-center max-w-6xl transition-colors duration-75"
          >
            The future is written in code
          </motion.h1>
        </motion.div>
      </div>

      {}
      <div className="h-[150vh]" />
    </motion.section>
  )
}

export function StickyStory() {
  return <SloganColorShift />
}