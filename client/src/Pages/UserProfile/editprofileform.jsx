import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateprofile } from "../../action/users";
import "./userprofile.css";

const Editprofileform = ({ currentUser, setswitch }) => {
  const [name, setName] = useState(currentUser?.result?.name);
  const [about, setAbout] = useState(currentUser?.result?.about);
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tags[0] === "" || tags.length === 0) {
      alert("Update tags field");
    } else {
      dispatch(updateprofile(currentUser?.result?._id,{ name, about, tags }));
    }
    setswitch(false);
  };
  return (
    <div>
      <h1 className="edit-profile-title">Edit your Profile</h1>
      <h2 className="edit-profile-title">Public Imformation</h2>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <h3>Display Name</h3>
          <input
            type="text"
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="about">
          <h3>About me</h3>
          <textarea
            name=""
            id="about"
            value={about}
            cols="30"
            rows="10"
            onChange={(e) => setAbout(e.target.value)}
          />
        </label>
        <label htmlFor="tags">
          <h3>Watched tags</h3>
          <p>Add tags separated by 1 space</p>
          <input
            type="text"
            id="tags"
            onChange={(e) => setTags(e.target.value.split(" "))}
          />
        </label>
        <br />
        <input type="submit" value="save profile" className="user-submit-btn" />
        <button
          type="button"
          className=".user-cancel-btn"
          onClick={() => setswitch(false)}
        >
          Cancle
        </button>
      </form>
    </div>
  );
};

export default Editprofileform;
