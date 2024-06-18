import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { MdCancel } from "react-icons/md";
import { TbLetterS } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import './styles.scss'
const data=[
  {label:'Home',
   to:'/'
  },
  {label:'About Me',
    to:'/about'
   },
   {label:'Portfolio',
    to:'/portfolio'
   },
   
   {label:'Skills',
    to:'/skills'
   }
]
const Navbar = () => {
  const[toggleIcon,setToggleIcon]=useState(false)
  const handleToggleIcon=()=>{
      setToggleIcon(!toggleIcon)
  }
  return (
    
    <div>
        <nav className='navbar'>
            <div className='navbar_container'>
              <Link to={"/"} className='navbar_container_logo'>
                Sam
              </Link>
            </div>
            <ul className={`navbar_container_menu ${toggleIcon?"active":" "}`}>
              {
                data.map((item,key)=>(
                  <li key={key} onClick={handleToggleIcon} className='navbar_container_menu_items'>
                    <Link className='navbar_container_menu_items_links' to={item.to}>{item.label}
                    </Link>
                  </li>
                ))
              }
            </ul>
            <div className="nav-icon" onClick={handleToggleIcon}>{toggleIcon?<MdCancel size={30}/>:<GiHamburgerMenu size={30}/>}</div>
        </nav>
      
    </div>
  )
}

export default Navbar
