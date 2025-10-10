export default function SkillsPage() {
  return (
    <section id="skills" className="min-h-[100svh] bg-white py-20 md:py-24">
      <div className="container-padded">
        <header className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Skills</h1>
          <p className="mt-3 text-slate-600 md:text-lg">
            A snapshot of technologies and strengths I use to build accessible, performant software.
          </p>
        </header>

        <div className="mt-10">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-slate-700">
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
            <li>REST APIs</li>
            <li>Git/GitHub</li>
            <li>Testing</li>
            <li>CI/CD</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
