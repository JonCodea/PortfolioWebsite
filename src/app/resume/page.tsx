export default function ResumePage() {
  return (
    <section id="resume" className="min-h-[60svh] bg-slate-50 py-20 md:py-24">
      <div className="container-padded">
        <header className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Resume</h1>
          <p className="mt-3 text-slate-700">Download my resume or view it in your browser.</p>
        </header>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            download
          >
            Download PDF
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            View in Browser
          </a>
        </div>
      </div>
    </section>
  )
}
