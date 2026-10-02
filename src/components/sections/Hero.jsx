import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../constants';
import CoderIllustration from '../CoderIllustration';

const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden">
      <div className="section-padding relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 pt-28 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-[2px] bg-accent"></div>
            <p className="text-accent font-semibold tracking-widest uppercase text-sm md:text-base">
              Portfolio
            </p>
          </motion.div>

          <h1 className="text-5xl font-black leading-[0.98] tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-8xl">
            Hi, I'm <br />
            <span className="accent-gradient">{PERSONAL_INFO.name.split(' ')[0]}.</span>
          </h1>
          <h2 className="mt-5 text-xl font-bold tracking-tight text-text-secondary sm:text-2xl md:text-3xl">
            I build digital experiences.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
            {PERSONAL_INFO.bio}
          </p>
          
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-text-primary px-6 py-3.5 text-sm font-bold text-bg-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 sm:text-base">
                View Projects
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">↗</span>
            </a>
            <a href="#contact" className="group flex items-center gap-2 text-text-primary font-bold text-lg hover:text-accent transition-colors">
              Contact Me
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 16 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-[31rem] lg:max-w-none"
        >
          <CoderIllustration variant="hero" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-xs text-text-secondary uppercase tracking-widest font-semibold">Scroll</span>
        <a href="#experience">
          <div className="w-[30px] h-[50px] rounded-3xl border-2 border-text-secondary/30 flex justify-center items-start p-2 cursor-pointer hover:border-accent transition-colors">
            <motion.div
              animate={{
                y: [0, 16, 0],
                opacity: [1, 0, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className="w-1.5 h-1.5 rounded-full bg-accent"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
