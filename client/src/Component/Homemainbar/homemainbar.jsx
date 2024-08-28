import React from "react";
import "./homemainbar.css";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Questionlist from "./questionlist";

const Homemainbar = () => {
  const user = useSelector((state) => state.currentuserreducer);
  const location = useLocation();
  const navigate = useNavigate();
  const questionlist = useSelector((state) => state.questionreducer);

  const checkauth = () => {
    if (user === null) {
      alert("Login or Signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/Askquestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Question</h1>
        ) : (
          <h1>All Question</h1>
        )}
        <button className="ask-btn" onClick={checkauth}>
          Ask Question
        </button>
      </div>

      <div>
        {questionlist.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionlist.data.length} questions</p>
            <Questionlist questionlist={questionlist.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default Homemainbar;
