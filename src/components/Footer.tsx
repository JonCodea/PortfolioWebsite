import { Mail, Linkedin, Github, MapPin } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()
  const email = "edwardsjonathan1205@gmail.com"
  const linkedInUrl = "https://www.linkedin.com/in/jonathan-edwards"
  const githubUrl = "https://github.com/"

  return (
    <footer className="bg-[#071023] text-white border-t border-white/10">
      <div className="container-padded py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {}
          <div>
            <h3 className="text-lg font-bold text-white">Jonathan Edwards</h3>
            <p className="mt-2 text-sm text-white max-w-sm">
              Software Engineering student building clean, user-focused software across web, mobile, and data projects.
            </p>
          </div>

          {}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-white" />
                <a href={`mailto:${email}`} className="text-white hover:underline">{email}</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white" />
                <span className="text-white">Canterbury, UK</span>
              </li>
            </ul>
          </div>

          {}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white">Socials</h4>
            <div className="mt-3 flex items-center gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-sm text-white hover:bg-white/10"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 text-white" />
                <span className="text-white">GitHub</span>
              </a>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-sm text-white hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-white" />
                <span className="text-white">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white">
          <div className="text-white">© {year} Jonathan Edwards. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#about" className="text-white">About</a>
            <a href="#projects" className="text-white">Projects</a>
            <a href="#skills" className="text-white">Skills</a>
            <a href="#contact" className="text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
