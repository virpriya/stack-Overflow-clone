import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Askquestion from "./Pages/AskQuestion/askquestion"
import Auth from "./Pages/Auth/auth";
import Question from "./Pages/Question/question";
import Displayquestion from  "./Pages/Question/displayquestion"
import Tags from "./Pages/Tags/tags"
import Users from "./Pages/Users/users";
import Userprofile from "./Pages/UserProfile/userprofile";
import Userlocation from "./Pages/UserProfile/userlocaton";

function Allroutes({slideIn, handleSlideIn}) {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn}/>}
      ></Route>
      <Route
        path="/Askquestion"
        element={<Askquestion />}
      ></Route>
      <Route
        path="/Auth"
        element={<Auth />}
      ></Route>
      <Route
        path="/Question"
        element={<Question slideIn={slideIn} handleSlideIn={handleSlideIn}/>}
      ></Route>
      <Route
        path="/Question/:id"
        element={<Displayquestion slideIn={slideIn} handleSlideIn={handleSlideIn}/>}
      ></Route>
      <Route
        path="/Tags"
        element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn}/>}
      ></Route>
      <Route
        path="/Users"
        element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn}/>}
      ></Route>
      <Route
        path="/Users/:id"
        element={<Userprofile slideIn={slideIn} handleSlideIn={handleSlideIn}/>}
      ></Route>
      <Route
        path="/Userlocation"
        element={<Userlocation />}
      ></Route>
    </Routes>
  );
}

export default Allroutes;
