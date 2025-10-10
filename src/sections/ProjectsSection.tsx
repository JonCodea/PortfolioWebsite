"use client"

import React, { useState } from 'react'
import { Github, ExternalLink, Code2, Palette, Database, Monitor } from 'lucide-react'
import { Reveal } from "@/components/Reveal"

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  type Category = 'Frontend' | 'Backend' | 'Frontend & Backend' | 'Data' | 'Game' | 'Design'

  const projects: Array<{
    id: number;
    title: string;
    desc: string;
    role: string;
    techStack: string[];
    github: string;
    demo: string;
    category: Category;
    featured: boolean;
    color: string;
    image: string;
    position: 'left' | 'right';
  }> = [
    {
      id: 1,
      title: 'Progresso — Self-Improvement App with AI Integration (2025)',
      desc: 'A web & mobile app that helps users beat procrastination through gamified goals and an AI chatbot for personalised productivity guidance.',
      role: 'Lead Developer',
      techStack: ['React', 'React Native', 'TypeScript', 'Supabase', 'Deepseek API', 'Figma'],
      github: 'https://github.com/',
      demo: '#',
      category: 'Frontend & Backend',
      featured: true,
      color: 'from-blue-400 to-blue-600',
      image: '/ProgressoImage.png',
      position: 'left'
    },
    {
      id: 2,
      title: 'UK Homebuyer Forecast App (2025)',
      desc: 'A Streamlit app that forecasts UK house prices and simulates savings & affordability using ARIMA and Monte Carlo models.',
      role: 'Developer & Data Engineer',
      techStack: ['Python', 'Streamlit', 'pandas', 'numpy', 'statsmodels', 'Plotly', 'ReportLab'],
      github: 'https://github.com/',
      demo: '#',
      category: 'Data',
      featured: false,
      color: 'from-blue-400 to-blue-600',
      image: '/HouseForecaster.png',
      position: 'right'
    },
    {
      id: 3,
      title: "A-Level Computing — 2D Game in Godot (2023)",
      desc: 'A 2D Godot game implementing gameplay logic, scoring, and persistence with SQLite for player data.',
      role: 'Game Developer',
      techStack: ['Godot', 'GDScript', 'SQLite'],
      github: 'https://github.com/',
      demo: '#',
      category: 'Game',
      featured: false,
      color: 'from-blue-400 to-blue-600',
      image: '/GameImage.jpg',
      position: 'left'
    }
  ]

  const getCategoryIcon = (category: Category) => {
    switch (category) {
      case 'Frontend':
        return (
          <Monitor className="h-5 w-5 text-blue-600" />
        )
      case 'Backend':
        return (
          <Database className="h-5 w-5 text-blue-600" />
        )
      case 'Frontend & Backend':
        return (
          <span className="inline-flex items-center gap-2">
            <Monitor className="h-5 w-5 text-blue-600" />
            <Database className="h-5 w-5 text-blue-600" />
          </span>
        )
      case 'Data':
        return (
          <Database className="h-5 w-5 text-blue-600" />
        )
      case 'Game':
        return (
          <Code2 className="h-5 w-5 text-blue-600" />
        )
      case 'Design':
        return (
          <Palette className="h-5 w-5 text-blue-600" />
        )
      default:
        return (
          <Code2 className="h-5 w-5 text-blue-600" />
        )
    }
  }

  return (
    <section className="relative min-h-screen bg-white py-12 lg:py-20 overflow-hidden">
      {}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 lg:w-96 lg:h-96 bg-blue-50 rounded-full opacity-60 blur-3xl bg-blob hidden sm:block"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 lg:w-96 lg:h-96 bg-blue-100 rounded-full opacity-40 blur-3xl bg-blob hidden sm:block"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {}
        <Reveal>
          <header className="text-center mb-12 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black">Projects I've created.</h1>
            <p className="mt-3 text-base sm:text-lg text-black max-w-2xl mx-auto">A showcase of my skills</p>
          </header>
        </Reveal>

        {}
        <div className="space-y-12 lg:space-y-32">
          {projects.map((project, index) => (
            <Reveal key={`proj-reveal-${project.id}`} delay={index * 0.08}>
            <div
              key={project.id}
              className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-16 ${project.position === 'right' ? 'lg:flex-row-reverse' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {}
              <div className={`w-full lg:flex-1`}>
                <div
                  className={`relative group project-card transform transition-all duration-700 ${hoveredProject === project.id ? 'scale-105 -rotate-1' : ''}`}
                  style={{
                    animation: 'fadeInSlide 0.8s ease-out',
                    animationDelay: `${index * 160}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  {}
                  <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.color} p-1 shadow-2xl`}>
                    <div className="relative bg-white rounded-3xl overflow-hidden">
                      {}
                      <div className="w-full aspect-[16/9] sm:aspect-video bg-gray-100 relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>

                        {}
                        {}

                        {}
                        <div className="absolute bottom-4 left-4 right-4 flex-col sm:flex-row gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <a
                            href={project.github}
                            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/95 backdrop-blur-sm rounded-full font-semibold text-sm text-blue-900 hover:bg-blue-50 transition-colors"
                          >
                            <Github className="h-4 w-4 text-blue-700" />
                            View Code
                          </a>
                          <a
                            href={project.demo}
                            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-900 backdrop-blur-sm rounded-full font-semibold text-sm text-white hover:bg-blue-800 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {}
                  <div className={`hidden lg:block absolute -z-10 inset-0 bg-gradient-to-br ${project.color} opacity-20 blur-2xl transform ${project.position === 'right' ? 'translate-x-8' : '-translate-x-8'} translate-y-8`}></div>
                </div>
              </div>

              {}
              <div className={`w-full lg:flex-1 space-y-4 ${project.position === 'right' ? 'lg:text-right text-left' : 'lg:text-left text-left'}`}>
                {}
                <div className={`inline-flex items-center gap-2 ${project.position === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  {getCategoryIcon(project.category)}
                  <span className="text-sm font-bold uppercase tracking-wider text-blue-600">{project.category}</span>
                </div>

                {}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">{project.title}</h2>

                {}
                <div className="text-sm font-medium text-black">{project.role}</div>

                {}
                <p className="text-base sm:text-lg text-black leading-relaxed max-w-full lg:max-w-md">{project.desc}</p>

                {}
                <div className={`flex flex-wrap gap-2 ${project.position === 'right' ? 'lg:justify-end' : ''}`}>
                  {project.techStack.map((t) => (
                    <span key={t} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-100 transition-colors">{t}</span>
                  ))}
                </div>

                {}
                <div className={`${project.position === 'right' ? 'ml-auto' : 'mr-auto'}`}>
                  <div className={`h-1 w-24 sm:w-32 bg-gradient-to-r ${project.color} rounded-full transform origin-left transition-all duration-700 ${hoveredProject === project.id ? 'scale-x-150' : 'scale-x-100'}`}></div>
                </div>
              </div>

              {}
              {index % 2 === 0 && (
                <div className={`hidden lg:block absolute ${project.position === 'right' ? '-left-20' : '-right-20'} top-1/2 -translate-y-1/2`}>
                  <div className="w-2 h-32 bg-gradient-to-b from-transparent via-blue-200 to-transparent rounded-full"></div>
                </div>
              )}
            </div>
            </Reveal>
          ))}
        </div>

        {}
        <Reveal>
          <div className="mt-12 lg:mt-32 text-center">
            <div className="inline-block">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-xl opacity-40 group-hover:opacity-75 transition-opacity"></div>
                <a
                  href="https://github.com/"
                  className="relative inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-blue-900 text-white font-bold text-base sm:text-lg rounded-full hover:scale-105 transition-transform"
                >
                  <Github className="h-6 w-6" />
                  Explore More Projects
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>

            <p className="mt-6 text-blue-600">View my complete portfolio on GitHub</p>
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

                @keyframes floatY {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-12px) translateX(6px); }
          100% { transform: translateY(0) translateX(0); }
        }

        .bg-blob {
          animation: floatY 8s ease-in-out infinite;
        }

                @media (prefers-reduced-motion: reduce) {
          .project-card, .bg-blob, img, a { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  )
}
