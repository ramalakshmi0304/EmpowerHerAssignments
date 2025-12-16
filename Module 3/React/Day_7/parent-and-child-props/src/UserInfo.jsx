import React from 'react'

const UserInfo = ({name,age})=>{
  return (
    <div>
        <h1>User Info</h1>
        <p>{name}</p>
        <p>{age}</p>
    </div>
  )
}

export default UserInfo