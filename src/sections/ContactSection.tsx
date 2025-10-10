"use client"
import { Mail, Linkedin, FileText, MapPin } from "lucide-react"
import { Reveal } from "@/components/Reveal"

export function ContactSection() {
  const email = "edwardsjonathan1205@gmail.com"
  const linkedInUrl = "https://www.linkedin.com/in/jonathan-edwards-1400b730a/"

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-24 bg-[#071023]">
      <div className="w-full max-w-4xl px-6">
        <Reveal>
          <div className="bg-white/5 backdrop-blur-sm text-white rounded-2xl shadow-2xl overflow-hidden border border-white/8">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {}
              <div className="px-10 py-12 lg:col-span-1 flex flex-col justify-center text-white">
                <dl className="space-y-6 text-base">
                  <div className="flex items-center gap-2">
                    <Mail className="h-6 w-6 text-white" />
                    <div>
                      <dt className="text-sm text-white">Email</dt>
                      <dd className="font-medium text-white">
                        <a href={`mailto:${email}`} className="text-white hover:underline">{email}</a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-white" />
                    <div>
                      <dt className="text-sm text-white">Location</dt>
                      <dd className="font-medium text-white">Canterbury, UK</dd>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Linkedin className="h-6 w-6 text-white" />
                    <div>
                      <dt className="text-sm text-white">LinkedIn</dt>
                      <dd className="font-medium text-white">
                        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Jonathan Edwards</a>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              {}
              <div className="px-10 py-12 lg:col-span-2 flex items-center justify-center">
                <div className="w-full max-w-2xl text-center">
                  <h4 className="text-3xl sm:text-4xl font-semibold text-white">Let’s talk</h4>

                  <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-3">
                    <a
                      href={`mailto:${email}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-base font-semibold text-white hover:bg-white/10"
                      aria-label="Email Jonathan"
                    >
                      <Mail className="h-5 w-5 text-white" />
                      Email
                    </a>

                    <a
                      href={linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-base text-white hover:bg-white/10"
                      aria-label="Open LinkedIn profile"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                      LinkedIn
                    </a>

                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-base text-white hover:bg-white/10"
                      aria-label="View resume"
                    >
                      <FileText className="h-5 w-5 text-white" />
                      View Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

