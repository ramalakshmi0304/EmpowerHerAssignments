import React from 'react'
import UserInfo from './UserInfo'
const UserProfile = () => {
    const user1={name:"Rama",age: 30};
    const user2={name:"Radha",age:25};

    const name = "Radha";
    const age = 25;
    return (
        <div>
            <UserInfo name={user1.name}age={user1.age}/>
             <UserInfo name={user2.name}age={user2.age}/>
           
        </div>
    )
}

export default UserProfile