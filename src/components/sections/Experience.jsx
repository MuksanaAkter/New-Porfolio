import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../../constants';

const ExperienceCard = ({ experience, index, isLast }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true, margin: "-50px" }}
    className="relative flex flex-col md:flex-row gap-5 md:gap-8 w-full group"
  >
    {/* Timeline Dot & Line */}
    <div className="hidden md:flex flex-col items-center mt-2">
      <div className="w-5 h-5 rounded-full bg-accent relative z-10 shadow-[0_0_15px_rgba(99,102,241,0.6)] border-4 border-bg-primary group-hover:scale-125 transition-transform duration-300"></div>
      {!isLast && <div className="w-[2px] h-full bg-bg-tertiary/50 my-2 rounded-full flex-grow group-hover:bg-accent/30 transition-colors"></div>}
    </div>
    
    {/* Card */}
    <div className="hover-surface glass relative w-full overflow-hidden rounded-3xl border border-bg-tertiary p-6 shadow-xl transition-all duration-300 group-hover:-translate-y-1 md:p-8">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-bl from-accent/20 to-purple-500/0 rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-700"></div>
      
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 gap-3">
        <div>
          <h3 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight mb-1">{experience.title}</h3>
          <p className="text-xl font-bold text-accent">{experience.company_name}</p>
        </div>
        <span className="text-sm font-bold bg-bg-secondary text-text-primary px-4 py-2 rounded-full whitespace-nowrap self-start shadow-sm border border-bg-tertiary">
          {experience.date}
        </span>
      </div>
      
      <ul className="list-none space-y-4">
        {experience.points.map((point, i) => (
          <li key={`experience-point-${i}`} className="text-text-secondary text-base md:text-lg leading-relaxed flex items-start gap-3">
            <span className="text-accent mt-1.5 flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="section-padding max-w-7xl mx-auto relative z-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="mb-12 flex flex-col items-center text-center"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-[2px] bg-accent"></div>
          <p className="text-accent font-bold tracking-widest uppercase text-sm md:text-base">
            Career Path
          </p>
          <div className="w-12 h-[2px] bg-accent"></div>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black text-text-primary tracking-tight">
          Experience
        </h2>
      </motion.div>

      <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto relative">
        {EXPERIENCES.map((experience, index) => (
          <ExperienceCard 
            key={`experience-${index}`} 
            experience={experience} 
            index={index}
            isLast={index === EXPERIENCES.length - 1} 
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
