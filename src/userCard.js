import React from "react"

const userCard = (props) =>{
    
    return(
        <div className="ui card">
  <div className="content">
    <a className="header" href="/">User details</a>
    <div className="description">
      Some sample discrition
      {props.children}
    </div>
    <div className='ui bottom button'>
        <i className="add icon"></i>Addfriend               
    </div>
  </div>
</div>
    )
}

export default userCard;