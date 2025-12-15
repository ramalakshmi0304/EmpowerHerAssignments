import React from 'react'
import MessageCard from "./MessageCard";

const App = () => {
  return (
   
      <div>
        <h1>Welcome</h1>
       <MessageCard
          title="Welcome"
          message="Welcome to the React Application" />
       
        <MessageCard
          title="Reminder"
          message="Please submit your assignment on time" />



        <MessageCard
          title="Success"
          message="You have successfully learned React props" />
          </div>
        );
};

        export default App