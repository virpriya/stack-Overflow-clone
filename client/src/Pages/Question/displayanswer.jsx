import React from 'react'
import moment from 'moment/moment'
import { Link, useParams } from "react-router-dom"
import Avatar from '../../Component/Avatar/avatar'
import { useDispatch, useSelector } from 'react-redux'
import { deleteanswer } from "../../action/question"


const Displayanswer =({question, handleshare})  =>{
  const user = useSelector((state) => state.currentuserreducer);
  const {id} = useParams();
  const dispatch = useDispatch();
  const handledelete = (answerid, noofanswer)=>{
    dispatch(deleteanswer(id,answerid,noofanswer -1))
  }
  return (
    <div>
      {question.answer.map((ans) =>(
        <div className='display-ans' key={ans._id}>
          <p>{ans.answerbody}</p>
          <div className='question-actions-user' >
            <div>
              <button type='button' onClick={handleshare}>Share</button>
              {user?.result?._id === ans?.userid && (
                <button type='button' onClick={()=>handledelete(ans._id, question.noofanswer)}>Delete</button>
              )}
              </div>
              <div>
              <p>answered {moment(ans.answeredon).fromNow()}</p>
              <Link to={`Users/${ans.userid}`} className='user-limk' style={{ color: "#0086d8" }}>
              <Avatar backgroundColor="lightgreen"px="2px" py="2px" borderRadius="2px">
                {ans.useranswered.charAt(0).toUpperCase()}
              </Avatar>
              <div>{ans.useranswered}</div>
            </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Displayanswer
