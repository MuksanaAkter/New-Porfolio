import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../utils/scrollReveal';

const capabilities = [
  {
    number: '01',
    title: 'Frontend engineering',
    description: 'Responsive web and mobile interfaces built with React, Next.js, and React Native.',
  },
  {
    number: '02',
    title: 'API integration',
    description: 'Reliable product workflows connected to REST, GraphQL, and third-party services.',
  },
  {
    number: '03',
    title: 'Data-driven features',
    description: 'Practical backend features powered by Node.js, PostgreSQL, and MongoDB.',
  },
  {
    number: '04',
    title: 'Product delivery',
    description: 'Thoughtful iteration, testing, and collaboration from first commit to release.',
  },
];

const Expertise = () => (
  <section className="section-padding section-wash section-wash--mint max-w-7xl mx-auto relative z-0">
    <motion.div
      {...scrollReveal(0, 18)}
      className="mb-8 flex items-end justify-between gap-6"
    >
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">What I do</p>
        <h2 className="text-3xl font-black tracking-tight text-text-primary md:text-4xl">From interface to infrastructure.</h2>
      </div>
      <span className="hidden text-sm text-text-secondary sm:block">01 / 04</span>
    </motion.div>

    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {capabilities.map((capability, index) => (
        <motion.article
          key={capability.number}
          {...scrollReveal(index * 0.08, 22)}
          whileHover={{ y: -6, scale: 1.015 }}
          className="hover-surface group relative min-h-52 overflow-hidden rounded-lg border border-bg-tertiary bg-bg-secondary/60 p-5 transition-colors duration-300 sm:p-6"
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="text-xs font-bold tabular-nums text-accent">{capability.number}</span>
            <span className="text-text-secondary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true">↗</span>
          </div>
          <h3 className="text-lg font-bold text-text-primary">{capability.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">{capability.description}</p>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Expertise;