import React, { useState } from "react";
import Leftsidebar from "../../Component/Leftsidebar/leftsidebar";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import Avatar from "../../Component/Avatar/avatar";
import Profilebio from "./profilebio";
import Editprofileform from "./editprofileform";
import "./userprofile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Userprofile = ({ slideIn }) => {
  const [Switch, setswitch] = useState(false);
  const { id } = useParams();
  const users = useSelector((state) => state.usersreducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentuserreducer);

  return (
    <div className="home-container-1">
      <Leftsidebar slideIn={slideIn} />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar
                backgroundColor="purple"
                color="white"
                fontSize="50px"
                px="40px"
                py="30px"
              >
                {currentProfile.name.charAt(0).toUpperCase()}
              </Avatar>
              <div className="user-name">
                <h1>{currentProfile?.name}</h1>
                {/* track location */}
                <div>
                  <button>
                  <Link to="/Userlocation" style={{color: "gray", textDecoration: "none" }}>Obtain Location</Link>
                  </button>
                </div>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                  {moment(currentProfile?.joinedon).fromNow()}
                </p>
              </div>
            </div>
            {currentUser?.result?._id === id && (
              <button
                className="edit-profile-btn"
                type="button"
                onClick={() => setswitch(true)}
              >
                <FontAwesomeIcon icon={faPen} /> Edit Profile
              </button>
            )}
          </div>
          <>
            {Switch ? (
              <Editprofileform
                currentUser={currentUser}
                setswitch={setswitch}
              />
            ) : (
              <Profilebio currentProfile={currentProfile} />
            )}
          </>
        </section>
      </div>
    </div>
  );
};

export default Userprofile;
