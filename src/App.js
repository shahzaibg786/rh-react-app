import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Message} from './Message.js';
import {turnprop} from './Turn.js';
//import Dinner from './dinner.js'

function App() {
  let [Count,setCount]=useState(0);
  let [isMorning,setMorning] = useState(false)
  return (

    // we will use component name message
    <div className={`body ${isMorning ? 'dayLight' : ''}`}>

        <h1> Day Time {isMorning ? 'Morning':'Night'}</h1>
        <button onClick ={()=>setMorning(!isMorning)}>Adjust Light</button>
        <br></br>
        <Message counter = {Count}/>
        <turnprop counter1 ={Count} />
        <button onClick = {()=> setCount(++Count)}>Update Counter</button>
        
        <button onClick = {()=> setCount(--Count)}>Decrese Counter</button>
        
      </div>


    // Class 3 
 //   <div className='App'>
      /** we are using multiple components **/
  //    <Dinner taskName="super Monday" taskName2="App is my first app"/>
  //    <hr/>
 //     <Dinner taskName="super Tuesday" taskName2="Tuesday is bussy"/>
  //    <hr/>
 //     <Dinner taskName="super Wednesday" taskName2="Wednesday too much bussy"/>
//    </div>

  );
}

export default App;
