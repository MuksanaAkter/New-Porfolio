import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PERSONAL_INFO } from '../../constants';
import { scrollReveal } from '../../utils/scrollReveal';

const currentYear = new Date().getFullYear();

const Footer = () => {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="site-footer relative z-10 w-full">
      <div className="site-footer__cta relative w-full overflow-hidden px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <motion.div
          className="site-footer__scanline"
          aria-hidden="true"
          animate={reduceMotion ? undefined : { left: ['-35%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />

        <div className="mx-auto max-w-7xl">
          <motion.div
            {...scrollReveal(0, 24)}
            className="site-footer__content relative z-10 grid items-end gap-10 md:grid-cols-[1fr_auto]"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/80"
              >
                <span className="site-footer__availability-dot" /> Available for opportunities
              </motion.p>
              <h2 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
                Have a good project <span className="site-footer__accent">in mind?</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
                Let’s turn the next big idea into something useful, thoughtful, and a little delightful.
              </p>
            </div>

            <motion.a
              href={`mailto:${PERSONAL_INFO.email}`}
              whileHover={reduceMotion ? undefined : { y: -4, scale: 1.025 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="site-footer__contact group inline-flex w-fit items-center gap-5 rounded-full bg-white px-6 py-4 text-sm font-bold text-zinc-950 shadow-xl shadow-black/20 sm:px-7"
            >
              <span>Let’s talk</span>
              <span className="site-footer__arrow grid size-9 place-items-center rounded-full bg-zinc-950 text-white transition-transform duration-300 group-hover:rotate-45" aria-hidden="true">↗</span>
            </motion.a>
          </motion.div>

          <div className="site-footer__rule relative z-10 mx-auto mt-12 flex max-w-7xl flex-col gap-5 border-t border-white/15 pt-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="transition-colors hover:text-white">{PERSONAL_INFO.email}</a>
            <div className="flex items-center gap-5">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">GitHub ↗</a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-text-secondary sm:px-8 sm:flex-row sm:items-center sm:justify-between">
        <span>© {currentYear} {PERSONAL_INFO.name}</span>
        <a href="#hero" className="group inline-flex items-center gap-2 transition-colors hover:text-text-primary">
          Back to top <span className="transition-transform group-hover:-translate-y-1" aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;