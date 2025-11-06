import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text contrast (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center sm:pt-36">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-sm text-white/80">Open to freelance & collaboration</span>
        </div>

        <div className="mb-8 flex items-center gap-6">
          <div className="h-20 w-20 overflow-hidden rounded-full ring-2 ring-white/20">
            {/* Avatar (replace with your image if desired) */}
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-400 text-xl font-bold text-slate-900">
              IZ
            </div>
          </div>
          <div className="text-left">
            <h1 className="text-3xl font-semibold text-white/90 sm:text-4xl">Irfan zid</h1>
            <p className="text-white/60">Full Stack Dev • Building seamless web experiences</p>
          </div>
        </div>

        <p className="mx-auto max-w-2xl text-balance text-lg leading-relaxed text-white/80">
          I craft modern, performant products from pixel to production — turning ideas into delightful, scalable apps.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#projects" className="rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">
            View Projects
          </a>
          <a href="#contact" className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur-md transition hover:bg-white/10">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
