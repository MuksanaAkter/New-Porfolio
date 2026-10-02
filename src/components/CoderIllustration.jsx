import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const CoderIllustration = ({ variant = 'hero' }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { scale: 1.015 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.1 }}
      className={`coder-scene coder-scene--${variant}`}
      role="img"
      aria-label="Illustration of a developer working at a laptop"
    >
      <div className="coder-scene__grid" />
      <div className="coder-scene__sun" />
      <motion.div
        className="coder-scene__float coder-scene__float--code"
        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="coder-scene__window-dots"><i /><i /><i /></span>
        <span className="coder-scene__code-line coder-scene__code-line--long" />
        <span className="coder-scene__code-line" />
        <span className="coder-scene__code-line coder-scene__code-line--short" />
      </motion.div>
      <motion.div
        className="coder-scene__float coder-scene__float--status"
        animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 4.5, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="coder-scene__status-dot" />
        Building something good
      </motion.div>
      <motion.div
        className="coder-scene__person"
        animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="coder-scene__hair" />
        <div className="coder-scene__face"><i /><i /><b /></div>
        <div className="coder-scene__neck" />
        <div className="coder-scene__body" />
        <div className="coder-scene__arm" />
      </motion.div>
      <div className="coder-scene__laptop">
        <div className="coder-scene__screen">
          <span>&lt;/&gt;</span>
          <i /><i /><i />
        </div>
        <div className="coder-scene__keyboard" />
      </div>
      <div className="coder-scene__desk" />
      <div className="coder-scene__plant"><i /><i /><b /></div>
      <div className="coder-scene__caption">
        <span>{variant === 'about' ? 'A little about my process' : 'Thoughtfully built, line by line'}</span>
        <span className="coder-scene__caption-mark">{variant === 'about' ? '02' : '01'}</span>
      </div>
    </motion.div>
  );
};

export default CoderIllustration;