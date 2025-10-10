"use client"

import dynamic from "next/dynamic"


const ProjectsSection = dynamic(() => import("@/sections/ProjectsSection"), {
  ssr: false,
  loading: () => (
    <div className="py-32 text-center text-blue-600 font-medium">
      Loading projects…
    </div>
  ),
})

export function ProjectsWrapper() {
  return <ProjectsSection />
}
