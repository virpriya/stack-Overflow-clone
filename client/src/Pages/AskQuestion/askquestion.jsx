import React, { useState } from "react";
import "./askquestion.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { askquestion } from "../../action/question";


const AskQuestion = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentuserreducer)
  const [questiontitle, setQuestionTitle] = useState("");
  const [questionbody, setQuestionBody] = useState("");
  const [questiontag, setQuestionTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      if (questiontitle && questionbody && questiontag) {
        dispatch(askquestion({questiontitle,questionbody,questiontag,userposted:user.result.name},navigate))
        alert("You have successfully posted a question.");
      } else {
        alert("Please enter all the fields.");
      }
    } else {
      alert("Login to ask question");
    }
  };

  const handleEnter =(e) =>{
    if(e.code === "Enter"){
      setQuestionBody(questionbody + "/n")
    }
  } 

  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a public question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                {" "}
                Be specific and imagine you’re asking a question to another
                person
              </p>
              <input
                type="text"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                name=" "
                id="ask-ques-body"
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                cols="30"
                rows="10"
                onKeyDown={handleEnter}
              ></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                id="ask-ques-tags"
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                placeholder="e.g. (xml typescript wordpress)"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Reivew your question"
            className="review-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
