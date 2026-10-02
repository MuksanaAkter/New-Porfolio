import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ProjectPreview = ({ name }) => {
  const kind = name.toLowerCase();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.012 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.1 }}
      className={`project-preview project-preview--${kind} relative aspect-[1.38] w-full overflow-hidden border border-bg-tertiary`}
    >
      <div className="project-preview__browser">
        <div className="project-preview__topbar">
          <span className="project-preview__dots"><i /><i /><i /></span>
          <span className="project-preview__address">{kind}.studio</span>
          <span className="project-preview__top-mark">↗</span>
        </div>
        {kind === 'soundmade' && (
          <div className="project-preview__music">
            <aside className="project-preview__rail"><b>soundmade</b><span>Discover</span><span>Following</span><span>Library</span></aside>
            <div className="project-preview__music-main">
              <div className="project-preview__music-title"><span>GOOD EVENING</span><b>Find your next sound.</b></div>
              <div className="project-preview__album-row">
                <div className="project-preview__album project-preview__album--one"><i>SM</i></div>
                <div className="project-preview__album project-preview__album--two"><i>LIVE</i></div>
                <div className="project-preview__album project-preview__album--three"><i>PLAY</i></div>
              </div>
              <div className="project-preview__player"><span>▶</span><i /><span>03:24</span></div>
            </div>
          </div>
        )}
        {kind === 'kiibee' && (
          <div className="project-preview__market">
            <header><b>kiibee</b><span>Explore&nbsp;&nbsp; Collections&nbsp;&nbsp; Creator hub</span><i>Search library</i></header>
            <div className="project-preview__market-title"><span>THE CREATOR LIBRARY</span><b>Ideas worth keeping.</b></div>
            <div className="project-preview__shelf">
              <div className="project-preview__book project-preview__book--one"><i>01 / DESIGN</i></div>
              <div className="project-preview__book project-preview__book--two"><i>FIELD NOTES</i></div>
              <div className="project-preview__book project-preview__book--three"><i>FORM + COLOR</i></div>
            </div>
          </div>
        )}
        {kind === 'foodime' && (
          <div className="project-preview__restaurant">
            <aside className="project-preview__restaurant-rail"><b>f.</b><span>⌂</span><span>▤</span><span>◷</span><span>⚙</span></aside>
            <div className="project-preview__restaurant-main">
              <header><div><span>MONDAY, OCTOBER 02</span><b>Good afternoon, Muksana</b></div><i>Today⌄</i></header>
              <div className="project-preview__stats"><div><span>ORDERS</span><b>128</b><i>+12.8%</i></div><div><span>REVENUE</span><b>$2,840</b><i>+8.4%</i></div><div><span>AVG. TIME</span><b>18 min</b><i>−2 min</i></div></div>
              <div className="project-preview__chart"><span>Weekly overview</span><div>{[35, 54, 42, 74, 59, 90, 67, 82, 51, 72, 96, 60].map((height, index) => <i key={index} style={{ '--bar-height': `${height}%` }} />)}</div></div>
            </div>
          </div>
        )}
      </div>
      <div className="project-preview__label"><span>SELECTED PROJECT</span><b>{name}</b></div>
    </motion.div>
  );
};

export default ProjectPreview;