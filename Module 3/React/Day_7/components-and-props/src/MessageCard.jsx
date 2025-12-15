import React from 'react'

const MessageCard = ({title,message}) => {
  return (
   <div style={{ border: "1px solid grey", padding: "10px", margin: "10px" }}>
      <h2>{title}</h2> 
     <p>{message}</p> 
      
      </div>
  )
}

export default MessageCard