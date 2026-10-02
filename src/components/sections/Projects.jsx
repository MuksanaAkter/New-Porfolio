import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../constants';
import ProjectPreview from '../ProjectPreview';
import { scrollReveal } from '../../utils/scrollReveal';

const ProjectCard = ({ index, name, description, tags, source_code_link }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      {...scrollReveal(index * 0.1, 30)}
      whileHover={{ y: -3 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center w-full`}
    >
      {/* Project Info (Text Side) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h3 className="text-3xl md:text-5xl font-black text-text-primary tracking-tight mb-6">
          {name}
        </h3>
        <div className="card-sweep hover-surface glass relative z-10 overflow-hidden rounded-3xl p-6 shadow-2xl md:p-8">
          <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6">
            {description}
          </p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className="text-xs font-bold px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Project Image / Animation (Right/Left Side) */}
      <div className="w-full lg:w-1/2 relative group">
        <ProjectPreview name={name} />

        {/* Floating Link Button */}
        <div className="absolute bottom-4 right-4 z-20">
          <motion.a
            href={source_code_link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${name} source code on GitHub`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-accent shadow-xl transition-shadow hover:shadow-accent/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding section-wash section-wash--teal max-w-7xl mx-auto">
      <motion.div
        {...scrollReveal(0, 22)}
        className="mb-12 flex flex-col items-center text-center"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-0.5 bg-accent"></div>
          <p className="text-accent font-bold tracking-widest uppercase text-sm md:text-base">
            Selected Works
          </p>
          <div className="w-12 h-0.5 bg-accent"></div>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black text-text-primary tracking-tight">
          Featured Projects
        </h2>
      </motion.div>

      <div className="flex flex-col gap-20 lg:gap-24 w-full">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
