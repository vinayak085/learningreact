import React, { useEffect } from "react";

const Home = (props) => {
  useEffect(() =>{
     document.title = "Home || Hello Brothers";
  }, []);
  return (
    <div>

        <h1>Hello its me Brother</h1>
        <p> this is for learnimg purpose to 
           create frontend and also
           a backend for the beginner</p>
    
    </div>   
  );
};


export default Home;