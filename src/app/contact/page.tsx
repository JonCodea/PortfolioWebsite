export default function ContactPage() {
  return (
    <section id="contact" className="container-padded py-20 md:py-24 min-h-[100svh] flex items-center bg-gradient-to-b from-white to-slate-50">
      <header className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Get in touch</h1>
        <p className="mt-3 text-slate-600 md:text-lg">
          I’m open to opportunities, collaborations, and interesting problems. Send a message and I’ll get back soon.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {}
        <aside className="lg:col-span-1">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Contact Details</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>
                <span className="block text-sm text-slate-500">Email</span>
                <a href="mailto:you@example.com" className="font-medium hover:underline">you@example.com</a>
              </li>
              <li>
                <span className="block text-sm text-slate-500">Location</span>
                <span className="font-medium">Canterbury, UK</span>
              </li>
              <li>
                <span className="block text-sm text-slate-500">GitHub</span>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">github.com/your-handle</a>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="mailto:you@example.com?subject=Hello Jonathan"
                className="inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-700"
              >
                Email Me
              </a>
            </div>
          </div>
        </aside>

        {}
        <div className="lg:col-span-2">
          <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-slate-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-slate-400 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What’s this about?"
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-slate-400 focus:outline-none"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Write your message..."
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-slate-400 focus:outline-none"
                required
              />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-700"
              >
                Send Message
              </button>
              <a
                href="mailto:you@example.com"
                className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white px-5 py-2.5 text-sm font-medium text-brand-800 hover:bg-brand-50"
              >
                Or email directly
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Tip: To wire this form up, connect to a service like Formspree or build a simple API route.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
