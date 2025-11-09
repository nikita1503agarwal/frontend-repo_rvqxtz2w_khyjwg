import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-slate-950 text-white py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-3 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-1"
        >
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="mt-2 text-white/70">Designer & Frontend Developer</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2"
        >
          <div className="prose prose-invert max-w-none">
            <p>
              I build immersive web experiences that balance aesthetics with usability. My toolkit includes React, Tailwind, and motion design, often pairing with 3D scenes for extra delight.
            </p>
            <p>
              I care about accessibility, performance, and details that make interfaces feel alive. When I’m not designing, I explore new tools and experiment with micro-interactions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
