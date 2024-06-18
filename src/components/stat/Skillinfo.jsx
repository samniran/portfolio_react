import React from "react";

import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaHtml5 ,FaCss3Alt,FaPython,FaJava,FaReact,FaCloud} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaMicrochip } from "react-icons/fa6";
import "./skilinfo.css"
const skills = [
  {
    id: "1",
    title: "Html",
    icon: <FaHtml5 size={60} />,
    percentage: "60"
  },
  {
    id: "2",
    title: "Css",
    icon: <FaCss3Alt size={60} />,
    percentage: "45",
  },
  {
    id: "3",
    title: "Javascript",
    icon: <IoLogoJavascript size={60} />,
    percentage: "48",
  },
  {
    id: "4",
    title: "React Js",
    icon: <FaReact size={60} />,
    percentage: "20",
  },
  {
    id: "5",
    title: "Python",
    icon: <FaPython size={60} />,
    percentage: "50",
  },
  {
    id: "6",
    title: "Java",
    icon: <FaJava size={60} />,
    percentage: "44",
  },
  {
    id: "7",
    title: "Embedded C",
    icon: <FaMicrochip size={60} />,
    percentage: "30",
  },
  {
    id: "8",
    title: "IoT",
    icon: <FaCloud size={60} />,
    percentage: "20",
  },
];
const Skillinfo = () => {
  return (
    <>
    {skills.map((item)=>{
        
        return(
            <div className="progress_box" key={item.id}>
                <div className="progress_circle">
                    <CircularProgressbar strokeWidth={7.5}  value={item.percentage} 
                    styles={buildStyles({pathColor: `rgba(156, 209, 237,1)`,
                        textColor: '#f17f7f',
                        trailColor: '#fffff',
                        backgroundColor: '#fffff',})} />
                    <div className="icon_wrapper">{item.icon}</div>
                </div>
                
                <h3 className="skill_name">{item.title}</h3>
            </div>
        )
    })

    }
    </>
  )
  
};

export default Skillinfo;
