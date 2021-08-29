import React, { useState } from 'react'
import { createBee } from '../bee/Bee.js'

export const Swarm = (props = {}) => {
  let colonySize = props.hasOwnProperty("colonySize") ? props["colonySize"] : 30;
  let swarm = [];
  for (let i = 0; i < colonySize; i++) {
    swarm.push(createBee())
  }

  return useState(swarm);
}
