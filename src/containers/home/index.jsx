import React from "react";
import "./styles.scss";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaICursor } from "react-icons/fa6";
import { motion as m } from "framer-motion";
const Home = () => {
  const iconsize = 50;
  const [text] = useTypewriter({
    words: [
      "Designer",
      "Photographer",
      "Editor",
      "Front End Developer",
      "IoT Enthusiast",
    ],
    loop: {},
    typeSpeed: 90,
    deleteSpeed: 40,
  });
  return (
    <m.section
      id="home"
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="home_text-wrapper">
        <h1>Hello,I'm Sam!</h1>
        <h1>
          <span style={{ color: "white" }}>{text}</span>
          <Cursor cursorStyle={<FaICursor size={20} />} />
        </h1>
      </div>
      <m.div className="home_social-icons" 
      initial={{ opacity: 0 ,y:"100%"}}
      animate={{ opacity: 1,y:"0%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
        <a
          href="https://www.instagram.com/sam.nirxn?igsh=MW9yaXZzaXJudjExcQ=="
          target=" "
        >
          <FaInstagramSquare size={iconsize} />
        </a>
        <a href="https://www.linkedin.com/in/samniran/" target=" ">
          <FaLinkedin size={iconsize} />
        </a>
        <a
          href="https://twitter.com/x/migrate?tok=7b2265223a222f53616d5f7874776565743f743d6e47704a7779574f493734794a4a64345f5070686c4126733d3039222c2274223a313731383138363731357df284f9c5a568325e028a74f52233386d"
          target=" "
        >
          <FaXTwitter size={iconsize} />
        </a>
      </m.div>
    </m.section>
  );
};

export default Home;
