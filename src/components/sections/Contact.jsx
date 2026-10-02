import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../constants';
import { scrollReveal } from '../../utils/scrollReveal';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending
    setTimeout(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding section-wash section-wash--amber max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        <motion.div
          {...scrollReveal(0, 24)}
          className="lg:flex-1"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-accent"></div>
            <p className="text-accent font-semibold tracking-widest uppercase text-sm md:text-base">
              Say Hello
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tight mb-8">
            Let's work <br /> together.
          </h2>
          <p className="text-text-secondary text-lg mb-12 max-w-md">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>

          <div className="space-y-8">
            <motion.div {...scrollReveal(0.08, 14)} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <p className="text-text-secondary text-sm font-medium mb-1">Email</p>
                <p className="text-text-primary text-lg font-semibold">{PERSONAL_INFO.email}</p>
              </div>
            </motion.div>

            <motion.div {...scrollReveal(0.16, 14)} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <p className="text-text-secondary text-sm font-medium mb-1">Phone</p>
                <p className="text-text-primary text-lg font-semibold">{PERSONAL_INFO.phone}</p>
              </div>
            </motion.div>
            
            <motion.div {...scrollReveal(0.24, 14)} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <p className="text-text-secondary text-sm font-medium mb-1">Location</p>
                <p className="text-text-primary text-lg font-semibold">{PERSONAL_INFO.location}</p>
              </div>
            </motion.div>
          </div>

          <motion.div {...scrollReveal(0.3, 14)} className="mt-12 flex gap-4">
            <motion.a whileHover={{ y: -4 }} href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-text-primary hover:text-accent hover:border-accent transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </motion.a>
            <motion.a whileHover={{ y: -4 }} href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-text-primary hover:text-accent hover:border-accent transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          {...scrollReveal(0.14, 24)}
          className="card-sweep relative overflow-hidden rounded-3xl border border-bg-tertiary glass p-8 md:p-12 lg:flex-[1.2]"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-text-primary font-medium text-sm">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="bg-bg-primary/50 py-4 px-6 placeholder:text-text-secondary/50 text-text-primary rounded-xl outline-none border border-bg-tertiary focus:border-accent transition-colors"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-text-primary font-medium text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="bg-bg-primary/50 py-4 px-6 placeholder:text-text-secondary/50 text-text-primary rounded-xl outline-none border border-bg-tertiary focus:border-accent transition-colors"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-text-primary font-medium text-sm">Message</label>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                className="bg-bg-primary/50 py-4 px-6 placeholder:text-text-secondary/50 text-text-primary rounded-xl outline-none border border-bg-tertiary focus:border-accent transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="relative mt-4 w-full rounded-xl bg-text-primary px-8 py-4 text-lg font-bold text-bg-primary transition-transform duration-300 hover:scale-[1.02]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
