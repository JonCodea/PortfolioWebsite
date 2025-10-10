import { Reveal } from "@/components/Reveal"
import { DownloadCloud, ExternalLink, FileText } from "lucide-react"

export default function ResumeSection() {
  return (
    <section id="resume" className="py-28 bg-[#071023] text-white">
      <div className="container-padded">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/8 shadow-2xl p-10 sm:p-12">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex items-center gap-3">
                  <FileText className="h-8 w-8 text-white" />
                  <h2 className="text-3xl sm:text-4xl font-bold text-white">Resume</h2>
                </div>

                <div className="mt-6 flex items-center justify-center gap-3">
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#071023] px-6 py-3 text-base font-semibold shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2"
                    aria-label="Download resume as PDF"
                  >
                    <DownloadCloud className="h-5 w-5" />
                    Download PDF
                  </a>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-6 py-3 text-base font-medium text-white hover:bg-white/6 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2"
                    aria-label="Open resume in a new tab"
                  >
                    <ExternalLink className="h-5 w-5" />
                    View in Browser
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

