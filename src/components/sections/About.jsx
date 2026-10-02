import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../constants';
import CoderIllustration from '../CoderIllustration';
import { scrollReveal } from '../../utils/scrollReveal';

const About = () => {
  return (
    <section id="about" className="section-padding section-wash section-wash--peach relative z-0 mx-auto max-w-7xl">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          {...scrollReveal(0, 22)}
        >
          <CoderIllustration variant="about" />
        </motion.div>

        <motion.div
          {...scrollReveal(0.12, 22)}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">About me</p>
          <h2 className="mb-5 text-4xl font-black leading-tight tracking-tight text-text-primary md:text-5xl">
            I build products from idea to release.
          </h2>
          <p className="text-base leading-relaxed text-text-secondary md:text-lg">{PERSONAL_INFO.bio}</p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-bg-tertiary pt-5">
            {[
              { label: 'Based in', value: PERSONAL_INFO.location },
              { label: 'Focus', value: 'Web and mobile products' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-text-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
