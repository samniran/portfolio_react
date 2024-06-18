import React from 'react'
import "./styles.scss"
import Portgrid from './Portgrid'
import { motion as m } from "framer-motion";
const Portfolio = () => {
  
  return (
    <m.div className='portfolio'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.75, ease: "easeOut" }}>
      <section className='portfolio_section'>
        <h3 className='portfolio_section_title'>
          My<span> Portfolio</span>
        </h3>
        <div className="portfolio_container grid">
          <Portgrid />
        </div>
        
      </section>
    </m.div>
  )
}

export default Portfolio
