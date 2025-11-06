import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Contact</h2>
          <p className="mt-2 text-slate-600">Let’s build something great together</p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Socials */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-800">Find me</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@example.com" className="group inline-flex items-center gap-3 text-slate-700 transition hover:text-emerald-600">
                  <Mail className="h-5 w-5" /> hello@example.com
                </a>
              </li>
              <li>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 text-slate-700 transition hover:text-emerald-600">
                  <Github className="h-5 w-5" /> github.com/yourhandle
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 text-slate-700 transition hover:text-emerald-600">
                  <Linkedin className="h-5 w-5" /> linkedin.com/in/yourhandle
                </a>
              </li>
            </ul>
          </div>

          {/* Form */}
          <form className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                <input type="text" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Your name" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
                <textarea rows="4" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Tell me about your project" />
              </div>
            </div>
            <button type="submit" className="mt-4 w-full rounded-lg bg-emerald-500 px-4 py-2 font-medium text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">
              Send message
            </button>
            <p className="mt-3 text-center text-xs text-slate-500">This is a demo form. Replace with your preferred form handler.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
