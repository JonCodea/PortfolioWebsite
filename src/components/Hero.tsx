"use client"

import React, { useMemo, useRef, useState } from 'react'
import { motion, useAnimationFrame } from 'framer-motion'
import Link from 'next/link'
import faceSrc from '../../FaceImage.png'
import { ParallaxMouse } from '@/components/ParallaxMouse'
import { SplitText } from '@/components/SplitText'

const textVariants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const imageVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
}

export const Hero = () => {
  
  const blobPath = "M280,100Q380,70,460,140Q540,210,520,300Q500,390,400,430Q300,470,210,420Q120,370,70,290Q20,210,80,140Q140,70,210,60Q280,50,280,100Z";

  
  
  const altBlobPath =
    "M41.1,-61.1C56.2,-54.2,73.4,-47.8,75.1,-36.5C76.8,-25.2,62.9,-9.1,55.5,4.4C48,18,46.9,28.8,42,38.9C37.1,48.9,28.4,58,16.6,65.6C4.8,73.1,-10.1,79.1,-23.9,77C-37.7,74.9,-50.4,64.8,-57,52.2C-63.6,39.5,-64.1,24.4,-67.1,9.1C-70.2,-6.2,-75.9,-21.7,-72.1,-34.2C-68.4,-46.7,-55.3,-56.2,-41.7,-63.8C-28.1,-71.4,-14.1,-77,-0.5,-76.2C13,-75.3,26,-68,41.1,-61.1Z";

  
  const userBlobPath =
    "M43.3,-66.9C55.2,-59.7,63.4,-46.2,70.7,-31.8C77.9,-17.5,84.2,-2.2,83.7,13.1C83.2,28.4,75.8,43.9,63.6,51.7C51.5,59.5,34.5,59.7,20.9,57.4C7.2,55.2,-3.1,50.5,-12.4,46.1C-21.7,41.6,-29.9,37.3,-41.3,31.6C-52.8,25.9,-67.5,18.9,-72.2,8.3C-77,-2.3,-71.8,-16.4,-61.6,-23.7C-51.3,-31,-36,-31.6,-24.9,-39.2C-13.8,-46.8,-6.9,-61.4,4.4,-68.3C15.7,-75.1,31.4,-74.2,43.3,-66.9Z";

  
  const userBlobPath2 =
    "M37.6,-58.3C52.6,-48.8,71.4,-45,74.8,-34.9C78.2,-24.8,66.2,-8.5,60.8,6.7C55.5,21.9,56.7,36,49.4,40.7C42.1,45.4,26.3,40.7,13,45C-0.4,49.4,-11.4,62.7,-21.2,63.7C-31.1,64.8,-39.9,53.5,-51.4,43C-62.8,32.5,-77,22.8,-82.7,9.5C-88.4,-3.9,-85.7,-20.9,-75.2,-30.3C-64.6,-39.7,-46.2,-41.5,-32.4,-51.5C-18.5,-61.5,-9.3,-79.8,1,-81.4C11.3,-82.9,22.6,-67.8,37.6,-58.3Z";

  
  const transformPath = (d: string, tx: number, ty: number, sx: number, sy: number) => {
    
    
    const tokens = d.match(/[a-zA-Z]|-?\d*\.?\d+(?:e[-+]?\d+)?/g) || []
    let isX = true
    const out: string[] = []
    for (const t of tokens) {
      if (/^[a-zA-Z]$/.test(t)) {
        
        out.push(t)
        
        isX = true
      } else {
        const num = parseFloat(t)
        if (Number.isNaN(num)) {
          out.push(t)
        } else {
          if (isX) {
            const v = (num + tx) * sx
            out.push(String(v))
          } else {
            const v = (num + ty) * sy
            out.push(String(v))
          }
          isX = !isX
        }
      }
    }
    return out.join(' ')
  }

  const altBlobPathScaled = useMemo(() => transformPath(altBlobPath, 100, 100, 2.6, 2.3), [])
  const userBlobPathScaled = useMemo(() => transformPath(userBlobPath, 100, 100, 2.6, 2.3), [])
  const userBlobPath2Scaled = useMemo(() => transformPath(userBlobPath2, 100, 100, 2.6, 2.3), [])

  
  
  const interpolator = useMemo(() => {
    const shapes = [blobPath, altBlobPathScaled, userBlobPathScaled, userBlobPath2Scaled]
    try {
      
      
      const { interpolate } = require('flubber') as {
        interpolate: (a: string, b: string, opts?: any) => (t: number) => string
      }
      
      const pairs = shapes.slice(0, -1).map((s, i) => interpolate(shapes[i], shapes[i + 1], { maxSegmentLength: 4 }))
      const n = pairs.length
      return (tau: number) => {
        
        const s = Math.min(Math.max(tau, 0), 1) * n
        const i = Math.min(Math.floor(s), n - 1)
        const local = Math.min(Math.max(s - i, 0), 1)
        return pairs[i](local)
      }
    } catch (e) {
      
      return (tau: number) => {
        if (tau < 1 / 4) return shapes[0]
        if (tau < 2 / 4) return shapes[1]
        if (tau < 3 / 4) return shapes[2]
        return shapes[3]
      }
    }
  }, [blobPath, altBlobPathScaled, userBlobPathScaled, userBlobPath2Scaled])

  
  const [t, setT] = useState(0)
  const start = useRef<number | null>(null)
  
  const morphTime = 16000 
  const pauseTime = 2000 
  const halfCycle = morphTime + pauseTime
  const totalCycle = 2 * halfCycle
  useAnimationFrame((time) => {
    if (start.current === null) start.current = time
    const elapsed = (time - start.current) % totalCycle
    
    if (elapsed < pauseTime) {
      setT(0)
      return
    }
    if (elapsed < halfCycle) {
      
      const p = (elapsed - pauseTime) / morphTime
      setT(Math.min(Math.max(p, 0), 1))
      return
    }
    const e2 = elapsed - halfCycle
    if (e2 < pauseTime) {
      setT(1)
      return
    }
    
    const p2 = (e2 - pauseTime) / morphTime
    setT(1 - Math.min(Math.max(p2, 0), 1))
  })

  const morphD = interpolator(t)


  return (
    <section className="py-10 sm:py-14 min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-b from-white to-[#FDFDFC]">
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8 w-full">
        {}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="show"
          className="space-y-2 order-2 md:order-1"
        >
          <h1 className="leading-none font-extrabold tracking-tight text-4xl sm:text-6xl md:text-8xl">
            <SplitText text="JONATHAN" as="span" className="block" mode="letters" />
            <SplitText text="EDWARDS" as="span" className="block" mode="letters" />
          </h1>
          <div className="text-black text-base sm:text-lg md:text-xl">CCCU Student Studying Software Engineering</div>
          <div className="mt-8 flex flex-wrap gap-3">
            {}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              GitHub
            </a>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              View Projects
            </Link>
          </div>
        </motion.div>

        {}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="show"
          className="order-1 md:order-2 flex items-center justify-center md:justify-end gap-6"
        >
          {}
          <ParallaxMouse strength={14}>
            <div className="relative w-80 h-72 sm:w-[520px] sm:h-[460px] md:w-[620px] md:h-[546px] shrink-0 translate-x-0 sm:translate-x-4 md:translate-x-12">
            <svg
              viewBox="0 0 520 460"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
              style={{ overflow: 'visible' }}
            >
              <defs>
                {}
                <mask id="blobDynamicMask" maskUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="520" height="460" fill="black" />
                  {}
                  <g transform={`translate(260 230) scale(1.22 1.22) translate(-260 -230)`}>
                    <path d={morphD} fill="white" />
                  </g>
                  {}
                  <rect x="0" y="-1000" width="520" height="1200" fill="white" />
                </mask>

                {}
                <filter id="rippleSvg" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="2" seed="2" result="noise">
                    <animate attributeName="baseFrequency" values="0.007;0.012;0.007" dur="6s" repeatCount="indefinite" />
                  </feTurbulence>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G">
                    <animate attributeName="scale" values="10;16;10" dur="6s" repeatCount="indefinite" />
                  </feDisplacementMap>
                </filter>
                <linearGradient id="blobFill" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#94caff" />
                  <stop offset="100%" stopColor="#3a8cff" />
                </linearGradient>
              </defs>

              {}
              <g filter="url(#rippleSvg)">
                {}
                <g transform={`translate(260 230) scale(1.22 1.22) translate(-260 -230)`}>
                  <path d={morphD} fill="url(#blobFill)" />
                </g>
              </g>

              <image
                href={(faceSrc as unknown as { src: string }).src}
                x="84"
                y="-60"
                width="440"
                height="560"
                preserveAspectRatio="xMidYMid slice"
                mask="url(#blobDynamicMask)"
              />
            </svg>
          </div>
        </ParallaxMouse>
        </motion.div>
      </div>
    </section>
  )
}

