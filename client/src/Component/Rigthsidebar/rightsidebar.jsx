import React from "react";
import "./rightsidebar.css";
import Widget from "./widget";
import Widgettag from "./widgettag";

const Rightsidebar = () => {
  return (
    <div>
      <aside className="right-sidebar">
        <Widget />
        <Widgettag />
      </aside>
    </div>
  );
};

export default Rightsidebar;
