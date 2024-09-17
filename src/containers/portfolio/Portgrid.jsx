import { React, useState } from "react";
import pghyImage from "./images/zcd.jpg";
import lcdImage from "./images/lcd.png";
import classImage from "./images/class.jpg";
import psaImage from "./images/psadvr.png";
const projects = [
  {
    id: "1",
    title: "Lift Lobby Crowd Detector",
    image: lcdImage,
    description:
      "This project involves developing a system to monitor and manage the crowd density in lift lobbies. Using sensors and possibly computer vision technology, the system detects the number of people waiting for the elevator. The data collected can help optimize elevator dispatching algorithms, reduce wait times, and improve overall efficiency. The system can also alert building management when overcrowding occurs, ensuring better crowd control and enhancing safety measures.",
  },
  { id: "2", title: "Energy saving using Relay Control", image: classImage ,description:" This project focuses on reducing energy consumption in buildings by implementing a relay control system integrated with computer vision technology. Relays are used to automatically switch off electrical devices and appliances when they are not needed. The system utilizes computer vision to detect the presence or absence of people in a room. When no person is detected, the main relay is turned off to cut power to unnecessary devices. Additionally, the system can be programmed based on time schedules, occupancy sensors, or other control logic to ensure that lights, HVAC systems, and other power-consuming devices operate only when necessary. This approach not only reduces energy bills but also enhances environmental sustainability by lowering the building's carbon footprint."},
  { id: "3", title: "Zero Crossing Detector Circuit", image: pghyImage,description:"This is a zero crossing detection circuit which uses a opto coupler for precise detection. This output is detected by arduino to provide a pulse with required delay to activate a power mosfet." },
  { id: "4", title: "Voltage Sag correction using DVR", image: psaImage,description:"This project involves designing and implementing a system to correct voltage sags in electrical power systems using a Dynamic Voltage Restorer (DVR). Voltage sags, which are short-duration reductions in voltage, can cause malfunctioning of sensitive equipment and lead to production losses in industrial settings. The DVR is a power electronic device that injects the appropriate voltage to compensate for the sag, thus maintaining the desired voltage level. The project covers the design, simulation, and possibly the real-time implementation of the DVR system, ensuring a stable and reliable power supply." },
];

const Portgrid = () => {
  const [toggleClass, setToggleClass] = useState(new Array(9).fill(false));
  const handleProjClick = (index) => {
    console.log('click',index)
    const listItems=toggleClass.map((item,i)=>(i=== index?(!toggleClass[i]):item))
    setToggleClass(listItems);
  };
  return (
    <>
      {projects.map((item) => (
        <div
          className="portfolio_box"
          onClick={()=>handleProjClick(item.id-1)}
          style={{ backgroundImage: `url(${item.image})` }}
          key={item.id}
        >
          <div
            className={`portfolio_box_title ${toggleClass[item.id-1] ? "active" : " "}`}
          >
            {item.title}
            <p className="portfolio_box_desc">{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Portgrid;
