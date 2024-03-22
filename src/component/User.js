import React, { useState } from 'react'

const User = (props) => {
   const[count1] = useState(0);
   const[count2] = useState(1);
  return (
    <div className='user-card'>
      <h1>count1: {count1}</h1>
      <h1>count2: {count2}</h1>
      <h3>Name : {props.name}</h3>
      <h3>Location: Dehradun</h3>
      <h4>Contact: @akshaymarch7</h4>
        
    </div>
  )
}

export default User
