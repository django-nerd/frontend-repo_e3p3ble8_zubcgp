const projects = [
  {
    title: 'Realtime Chat App',
    description: 'Socket-powered rooms, message history, and typing indicators.',
    tags: ['React', 'Node', 'Socket.io'],
    link: '#',
  },
  {
    title: 'E-commerce Kit',
    description: 'Product catalog, cart, checkout, and order management.',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Interactive charts, role-based access, and exports.',
    tags: ['React', 'FastAPI', 'Postgres'],
    link: '#',
  },
  {
    title: 'Portfolio Engine',
    description: 'CMS-powered sections and dynamic theming.',
    tags: ['Remix', 'Prisma', 'Tailwind'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-slate-600">A selection of things I loved building</p>
          </div>
          <a href="#contact" className="hidden rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 md:inline-block">Work with me</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 h-40 w-full rounded-xl bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-200" />
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-600">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
