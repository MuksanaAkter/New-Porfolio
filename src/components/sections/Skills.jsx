import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../../constants';
import { scrollReveal } from '../../utils/scrollReveal';

const Skills = () => (
  <section id="skills" className="section-padding section-wash section-wash--blue relative z-0 mx-auto w-full max-w-7xl">
    <motion.div
      {...scrollReveal(0, 18)}
      className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
    >
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">A toolkit in motion</p>
        <h2 className="text-4xl font-black tracking-tight text-text-primary md:text-5xl">Skills & technologies</h2>
      </div>
      <p className="max-w-sm text-sm leading-relaxed text-text-secondary">The tools I use to shape thoughtful web and mobile products.</p>
    </motion.div>

    <div className="skill-marquee-list">
      {Object.entries(SKILLS).map(([category, skills], index) => {
        const duration = 21 + index * 2;

        return (
          <motion.div
            key={category}
            {...scrollReveal(index * 0.08, 18)}
            className="skill-marquee-row"
          >
            <div className="skill-marquee__category">
              <span>0{index + 1}</span>
              <h3>{category}</h3>
            </div>
            <div className="skill-marquee__viewport" aria-label={`${category} skills`}>
              <div
                className={`skill-marquee__track ${index % 2 ? 'skill-marquee__track--reverse' : ''}`}
                style={{ '--marquee-duration': `${duration}s` }}
              >
                {[0, 1].map((copy) => (
                  <div className="skill-marquee__group" aria-hidden={copy === 1} key={`${category}-${copy}`}>
                    {skills.map((skill, skillIndex) => (
                      <motion.span
                        key={`${skill}-${skillIndex}`}
                        whileHover={{ y: -3, scale: 1.045 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="skill-marquee__chip"
                        style={{ '--skill-hue': (skillIndex * 47 + index * 31 + 20) % 360 }}
                      >
                        <span className="skill-marquee__monogram" aria-hidden="true">{skill.slice(0, 1)}</span>
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Skills;