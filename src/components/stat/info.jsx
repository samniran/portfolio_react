import React from 'react'

const Info = () => {

  const personalInfo=[
    {
       id:1,
       title:'First Name : ',
       value:'Sam', 
    },
    {
        id:2,
        title:'Last Name : ',
        value:'Niran', 
     },
     {
        id:3,
        title:'Age : ',
        value:'20', 
     },
     {
        id:4,
        title:'Nationality : ',
        value:'Indian', 
     },
     {
        id:5,
        title:'Address : ',
        value:'Chennai', 
     },
     {
        id:6,
        title:'Mail : ',
        value:'samniran2020@gmail.com', 
     },
     {
        id:7,
        title:'Languages : ',
        value:'English, Tamil', 
     },
     {
        id:8,
        title:'Skype : ',
        value:'samniran', 
     }
  ]
  return (
    <>
    {personalInfo.map(({title,value},index)=>{
        return(
            <li className='info_item' key={index}>
              <span className="info_title">{title}</span>
              <span className="info_value">{value}</span>
            </li>
        )
    })}
    </>
  )
}

export default Info
