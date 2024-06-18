import React from "react";
import Info from "../../components/stat/info";
import "./styles.scss";
import { GiBlackBook } from "react-icons/gi";
import { motion as m } from "framer-motion";

import resume from "../../components/resume.pdf";


const About = () => {
  return (
    <m.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <section className="about_section">
        <h2 className="about_section_title">
          About <span> Me</span>
        </h2>

        <div className="about_container grid">
          <div className="about_info">
            <h3 className="section_subtitle">Personal Info</h3>
            <ul className="info_list grid">
              <Info />
            </ul>
          </div>
          <div className="about_para">
            <GiBlackBook size={30} />
            <p align="justify">
              I am an enthusiastic engineering student with a passion for
              frontend web development, video editing, and design. My technical
              skills in HTML, CSS, and JavaScript, combined with my creativity,
              allow me to craft visually appealing and user-friendly web
              experiences. Additionally, I love creating engaging video content
              and striking graphics.
            </p>
          </div>
        </div>
        <div className="dwldcv">
          <a href={resume} download="Resume">
            <button>Download Resume</button>
          </a>
        </div>
      </section>
    </m.div>
  );
};

export default About;
