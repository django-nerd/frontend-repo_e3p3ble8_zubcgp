export default function About() {
  return (
    <section id="about" className="relative w-full bg-white py-20 text-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h2>
          <p className="mt-2 text-slate-500">My story, values, and core skills</p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-slate-700">
              I'm Irfan, a full‑stack developer who loves crafting products that are fast, accessible, and delightful. I enjoy bridging design and engineering — from clean UI to scalable APIs — and I care about details that elevate the experience.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              I work with modern stacks like React, Node, and Python. I value thoughtful architecture, strong collaboration, and continuously learning. When I'm not coding, I explore new tools, read about product thinking, and iterate on side projects.
            </p>
          </div>

          <ul className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <li className="flex items-center justify-between">
              <span className="font-medium">Frontend</span>
              <span className="text-slate-600">React, Next.js, Tailwind</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-medium">Backend</span>
              <span className="text-slate-600">Node, Python, FastAPI</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-medium">Databases</span>
              <span className="text-slate-600">MongoDB, Postgres</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-medium">Cloud & Tools</span>
              <span className="text-slate-600">Docker, GitHub, CI/CD</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
