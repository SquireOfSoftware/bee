import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import {Swarm} from './hive/Hive.js';
import {createBee} from './bee/Bee.js';
import {useFrameLoop} from './timer/Timer.js';

function App() {
  const [time, setTime] = useState(0);
  const [deltaTime, setDeltaTime] = useState(0);
  const [swarm, setSwarm] = Swarm()

  useFrameLoop((time, deltaTime) => {
    setTime(time);
    setDeltaTime(deltaTime);
//    setSwarm(time, deltaTime);
  });

  let swarmDiv = [];
  if (swarm.length > 0) {
    for(const bee of swarm) {
      swarmDiv.push(
        <div key={bee["id"]}>
          {bee["name"]}
        </div>
      )
    }
  }
  console.log(swarmDiv)

  return (
    <div className="game">
       <div className="grid-container">
        <div className="grid">
          <div>
            Time: {time}
          </div>
          <div>
            Delta Time: {deltaTime}
          </div>
          <div>
            {swarmDiv}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
