import React, { useState, useEffect } from "react";
import "./userlocation.css";

const Userlocation = () => {
  const [location, setLocation] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setLocation(data.address));
    });
  }, []);
  console.log(location, "location");
  return (
    <div className="user-location-container">
      <p>City:  {location.county}</p>
      <p>State:  {location.state}</p>
      <p>Country: {location.country}</p>
    </div>
  );
};

export default Userlocation;
