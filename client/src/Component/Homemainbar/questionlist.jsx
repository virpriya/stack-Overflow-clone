import React from 'react'
import Question from "./question"

const Questionlist=({questionlist}) => {
  return (
    <>
    {questionlist.map((question) =>(
      <Question question={question} key={question._id} />
    ))}
    </>
  )
}

export default Questionlist;
