import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../../constants';

const Skills = () => (
  <section id="skills" className="section-padding max-w-7xl mx-auto relative z-0">
    <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Tools I work with</p>
        <h2 className="text-4xl font-black tracking-tight text-text-primary md:text-5xl">Skills & technologies</h2>
      </div>
      <p className="max-w-sm text-sm leading-relaxed text-text-secondary">A practical toolkit for building and shipping web and mobile products.</p>
    </div>

    <div className="grid gap-3 sm:grid-cols-2">
      {Object.entries(SKILLS).map(([category, skills], index) => (
        <motion.article
          key={category}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5, scale: 1.01 }}
          transition={{ duration: 0.3, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="hover-surface group relative overflow-hidden rounded-lg border border-bg-tertiary bg-bg-secondary/50 p-5 transition-colors duration-300 sm:p-6"
        >
          <div className="relative z-10 mb-5 flex items-center justify-between border-b border-bg-tertiary pb-4">
            <h3 className="font-bold text-text-primary">{category}</h3>
            <span className="text-xs font-semibold tabular-nums text-accent">0{index + 1}</span>
          </div>
          <div className="relative z-10 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <motion.span key={skill} whileHover={{ y: -2 }} className="rounded-md border border-bg-tertiary bg-bg-primary/40 px-3 py-2 text-sm text-text-secondary transition-colors duration-200 hover:border-accent/50 hover:bg-accent/10 hover:text-text-primary">
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Skills;