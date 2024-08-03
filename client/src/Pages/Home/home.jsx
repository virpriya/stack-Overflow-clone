import React from "react";
import LeftSidebar from "../../Component/Leftsidebar/leftsidebar";
import Rightsidebar from "../../Component/Rigthsidebar/rightsidebar";
import Homemainbar from "../../Component/Homemainbar/homemainbar";
import "../../App.css";

const Home = ({ slideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} />
      <div className="home-container-2">
        <Homemainbar />
        <Rightsidebar />
      </div>
    </div>
  );
};

export default Home;
