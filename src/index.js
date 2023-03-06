// step-1 import from libreary,src eg./app,/css

import React from  'react';
import SingleComment from './singleComment'
import UserCard from './userCard';
import ReactDOM from "react-dom/client";

// step function class component create

const First = ( ) => { 
  return ( 
  <div className = 'ui comments'>
    <UserCard>
    <SingleComment name ='bala' time="3.30pm"  message="hi ,how are you"/>
    </UserCard>
    <UserCard>
    <SingleComment name = 'mala' time="9.33pm" message="are you take break fast"/>
    </UserCard>
    <UserCard>
    <SingleComment name= 'vishnu' time="4.40pm" message="how can you manage your family"/>
    </UserCard>
  </div>)
}

// Display dat 

ReactDOM.createRoot(document.querySelector("#root")).render(<React.StrictMode><First /></React.StrictMode>);