import React, { useEffect, useState } from 'react';
import './App.css';

const api="http://api.icndb.com/jokes/random";

function App() {
  const [joke, setJoke]= useState("");

  const getJoke = () =>{
    fetch(api)
      .then( response => response.json() )
      .then( data => setJoke(data.value.joke) )
  }

  useEffect(()=>{
    getJoke();
  },[])

  return (
    <div className="App">
      <h2>Today's Jokes</h2>
      <p dangerouslySetInnerHTML={{__html: joke}}/>
      <div className="btn"><button className='jokes-btn' onClick={getJoke}>Get Jokes</button></div>
    </div>
  );
}

export default App;
