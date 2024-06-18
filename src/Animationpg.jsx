import React from "react";
import { motion } from "framer-motion";
const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};
const Animationpg = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="intial"
      animate="animate"
      exit="exit"
      transition={{duration:1}}
    >
      {children}
    </motion.div>
  );
};

export default Animationpg;
