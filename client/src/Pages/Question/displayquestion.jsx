import React from 'react'
import LeftSidebar from "../../Component/Leftsidebar/leftsidebar";
import Rightsidebar from "../../Component/Rigthsidebar/rightsidebar";
import Questiondetails from './questiondetails';

const Displayquestion =({slideIn}) =>{
  return (
<div className="home-container-1">
      <LeftSidebar slideIn={slideIn} />
      <div className="home-container-2">
        <Questiondetails />
        <Rightsidebar />
      </div>
    </div>
  )
}

export default Displayquestion
