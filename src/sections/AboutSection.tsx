import { Reveal } from "@/components/Reveal"

export function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="container-padded py-16 sm:py-20">
        <Reveal>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-black uppercase">
            About Me
          </h2>

          <p className="mt-6 text-black text-base sm:text-lg md:text-xl leading-relaxed">
            I’m Jonathan Edwards, a Software Engineering student at Canterbury Christ Church University (2024–2028).
            I’m passionate about building intelligent, efficient software that solves real-world problems — from web apps and
            automation tools to data-driven systems. My focus is on Python, C#, and modern web technologies like React and
            TypeScript. I enjoy combining technical development with creative design to make clean, user‑focused software.
            <br/><br/>
            I’m also exploring AI integration, data analysis, and cloud-based applications as part of my personal and academic projects.
            Outside of coding, I’m dedicated to personal growth, fitness, and continuous learning — values that help me stay consistent
            and disciplined in both life and software engineering.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            {['Languages', 'Technology', 'Frameworks'].map((label) => (
              <button
                key={label}
                className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 text-white px-5 py-2 text-sm sm:text-base font-semibold shadow-sm hover:scale-[1.02] transition-transform"
                aria-label={label}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <a href="/#projects" className="text-sm text-black underline">View projects</a>
            <a href="/resume.pdf" download className="text-sm text-black underline">Download resume</a>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  )
}

