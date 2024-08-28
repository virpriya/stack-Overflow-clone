import "./App.css";
import Navbar from "./Component/Navbar/navbar";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Allroutes from "./Allroutes";
import { fetchallusers } from "./action/users";
import { fetchallquestion } from "./action/question";
import { useDispatch } from "react-redux";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const [slideIn, setSlideIn] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchallusers());
    dispatch(fetchallquestion());
  }, [dispatch]);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSlideIn(false);
    }
  }, []);

  const handleSlideIn = () => {
    if(window.innerWidth<=768){
      setSlideIn((state)=> !state);
    }
  };

  return (
    <GoogleOAuthProvider clientId="478328765650-ds8ruk85iue2oc86g2uqr6lh8skfqcqi.apps.googleusercontent.com">
       <div className="App">
      <Router>
        <Navbar handleSlideIn={handleSlideIn} />
        <Allroutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
      </Router>
    </div>
    </GoogleOAuthProvider>
   
  );
}

export default App;
