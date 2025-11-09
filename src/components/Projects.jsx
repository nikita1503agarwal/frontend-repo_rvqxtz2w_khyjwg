import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Agency Landing',
    description: 'A high-converting landing page with bold gradients and subtle motion.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1658357677949-0b1f2a1d089f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwQWdlbmN5JTIwTGFuZGluZ3xlbnwwfDB8fHwxNzYyNzAyODAzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'SaaS Dashboard',
    description: 'Data-rich dashboard with themeable UI components and charts.',
    tags: ['Next.js', 'Shadcn UI', 'Charts'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: '3D Product Teaser',
    description: 'Interactive 3D product exploration showcasing materials and lighting.',
    tags: ['Spline', 'Three.js', 'UX'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function Projects() {
  return (
    <section id="work" className="relative bg-gradient-to-b from-black to-slate-950 text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">Selected Work</h2>
          <p className="text-white/70 mt-2 max-w-prose">A snapshot of projects that blend aesthetics, performance, and playful interactions.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-sm text-white/70 mt-1">{p.description}</p>
                  </div>
                  <ExternalLink size={18} className="text-white/60 group-hover:text-white transition" />
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="rounded-md bg-white/10 px-2 py-1 text-xs text-white/80">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
