export const scrollReveal = (delay = 0, distance = 22) => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: {
    duration: 0.68,
    delay,
    ease: [0.16, 1, 0.3, 1],
  },
});