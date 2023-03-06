import React from 'react'
import profile1 from "./images/images.png"


const singleComment = (props ) => {
    return(
        <div className='comment'>
      <a href="/" className='avatar'><img className = 'profile' src={profile1} alt="profile"/></a>
      <div className='content'>
      <a href="/" className='author'>{props.name}</a>
      <div className='metadata'>
        <span className='data'>{props.time}</span>
      </div>
      <div className='text'>{props.message}</div>

      </div>
      
    </div>
    )
}

//  matha file ku naama ipdi onu create panirkomnu teriyanum adku indha comment use pandrom

export default singleComment;