import React, { useEffect, useState } from 'react';
import { NAV_LINKS, PERSONAL_INFO } from '../constants';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const current = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

      if (current) setActive(current.target.id);
    }, {
      rootMargin: '-35% 0px -55% 0px',
      threshold: [0, 0.1, 0.25, 0.5],
    });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex items-center py-2.5 sm:py-3 fixed top-0 z-50 transition-colors duration-300 px-4 sm:px-8"
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto glass rounded-full px-4 sm:px-6 py-2 sm:py-2.5 shadow-lg relative">
        <a 
          href="#hero"
          aria-label={`${PERSONAL_INFO.name}, back to top`}
          className="flex items-center gap-2.5 group"
        >
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-accent to-emerald-500 text-xs font-black tracking-wide text-white shadow-md"
          >
            {PERSONAL_INFO.name.split(' ').map((part) => part[0]).join('')}
          </motion.div>
          <p className="text-text-primary text-sm sm:text-[18px] font-bold cursor-pointer tracking-tight group-hover:text-accent transition-colors duration-300">
            {PERSONAL_INFO.name.split(' ')[0]}
          </p>
        </a>

        <ul className="list-none hidden md:flex flex-row gap-8 items-center">
          {NAV_LINKS.map((nav) => (
            <li
              key={nav.id}
              className="relative group cursor-pointer"
              onClick={() => setActive(nav.id)}
            >
              <a 
                href={`#${nav.id}`} 
                className={`text-[15px] font-medium transition-colors duration-300 ${
                  active === nav.id ? "text-accent font-bold" : "text-text-secondary group-hover:text-text-primary"
                }`}
                aria-current={active === nav.id ? 'location' : undefined}
              >
                {nav.title}
              </a>
              {active === nav.id ? (
                <motion.span layoutId="active-nav-link" className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
              ) : (
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={toggle ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={toggle}
            className="md:hidden flex h-7 w-7 items-center justify-center text-text-primary"
            onClick={() => setToggle(!toggle)}
          >
            <motion.div
              animate={{ rotate: toggle ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {toggle ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile menu drop down */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: toggle ? 1 : 0, scale: toggle ? 1 : 0.95, y: toggle ? 0 : -20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`${
            !toggle ? "pointer-events-none" : "pointer-events-auto"
          } p-6 glass absolute top-full mt-4 right-0 min-w-60 z-10 rounded-2xl shadow-2xl border border-bg-tertiary md:hidden`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-6">
            {NAV_LINKS.map((nav) => (
              <li
                key={nav.id}
                className={`font-medium cursor-pointer text-[16px] w-full border-b border-bg-tertiary pb-2 transition-colors duration-300 ${
                  active === nav.id ? "text-accent pl-2 border-accent" : "text-text-secondary hover:text-text-primary"
                }`}
                onClick={() => {
                  setToggle(false);
                }}
              >
                <a href={`#${nav.id}`} className="block w-full">{nav.title}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
