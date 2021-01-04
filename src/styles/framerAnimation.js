export const pageTransition = {
  hidden: {
    y: "-10vh",
    opacity: 0
  },
  visible: {
    opacity: 1,
    y: "0vh",
    transition: { duration: 0.85 }
  },
  exit: {
    opacity: 0,
    y: "-10vh",
    transition: { ease: "easeInOut", duration: 0.4 }
  }
};
