import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur">
          <a href="#home" className="flex items-center gap-2 text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500 font-bold text-slate-900">IZ</div>
            <span className="hidden text-sm font-medium text-white/80 sm:block">Irfan zid</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((i) => (
              <a key={i.href} href={i.href} className="text-sm font-medium text-white/70 transition hover:text-white">
                {i.label}
              </a>
            ))}
            <a href="#contact" className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100">Hire me</a>
          </nav>

          <button onClick={() => setOpen((v) => !v)} className="rounded-md p-2 text-white md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur md:hidden">
            {navItems.map((i) => (
              <a key={i.href} href={i.href} className="block rounded-lg px-3 py-2 text-white/80 transition hover:bg-white/5">
                {i.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
