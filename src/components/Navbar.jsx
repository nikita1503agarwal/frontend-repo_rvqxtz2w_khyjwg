import { useEffect, useState } from 'react';
import { Rocket, Github, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const Item = ({ href, children }) => (
    <a href={href} className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
      {children}
    </a>
  );

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled ? 'backdrop-blur bg-black/40' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="h-8 w-8 grid place-items-center rounded-md bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
              <Rocket size={16} className="text-white" />
            </span>
            <span className="text-white font-semibold tracking-tight">My Webfolio</span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            <Item href="#work">Work</Item>
            <Item href="#about">About</Item>
            <Item href="#contact">Contact</Item>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-sm transition"
            >
              <Github size={16} /> GitHub
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 py-2 text-sm font-medium text-white shadow hover:shadow-lg transition">
              <Mail size={16} /> Hire Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
