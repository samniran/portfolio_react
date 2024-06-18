import React from "react";
import Skillinfo from "../../components/stat/Skillinfo";
import "./styles.scss";
import { motion as m } from "framer-motion";
const Skills = () => {
  return (
    <m.div
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <section className="skills-section">
        <h3 className="section_subtitle">
          My <span>Skills</span>
        </h3>
        <m.div
          className="skills_container grid"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "circOut"}}
        >
          <Skillinfo />
        </m.div>
      </section>
    </m.div>
  );
};

export default Skills;
