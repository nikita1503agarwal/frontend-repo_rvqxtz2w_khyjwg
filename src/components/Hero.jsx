import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Crafting modern websites with a playful 3D touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-white/80 max-w-prose"
          >
            I design and build interactive, fast, and visually striking web experiences. Scroll to explore selected work.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#work" className="inline-flex items-center rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-white/10 px-5 py-3 font-medium hover:bg-white/20 transition">Get in touch</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="md:justify-self-end"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-wider text-white/60">Services</p>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-white/90 text-sm">
              <li>Portfolio Sites</li>
              <li>Marketing Pages</li>
              <li>3D Interactions</li>
              <li>Design Systems</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
