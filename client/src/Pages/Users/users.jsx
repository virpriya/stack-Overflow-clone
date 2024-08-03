import React from 'react'
import Leftsidebar from '../../Component/Leftsidebar/leftsidebar'
import "./users.css";
import Userslist from './userslist';

const Users =({slideIn})=> {
  return (
    <div className='home-container-1'>
      <Leftsidebar slideIn={slideIn} />
      <div className="home-container-2" style={{marginTop:"30px"}}>
        <h1 style={{fontWeight:"400"}}>Users</h1>
        <Userslist />
        </div>

    </div>
  )
}

export default Users
