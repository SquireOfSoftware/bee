import React, { useState } from 'react'
import { uniqueNamesGenerator, adjectives, Config, names } from 'unique-names-generator'

export const createBee = props => {
  return {
    name: generateUniqueName(),
    type: Object.keys(BeeTypes)[BeeTypes.length * Math.random() << 0],
    id: uuidv4()
  }
}

const generateUniqueName = () => {
  return uniqueNamesGenerator({ dictionaries: [adjectives, names] });
}

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const BeeTypes = Object.freeze({
  WORKER: "worker",
  QUEEN: "queen",
  DRONE: "drone"
});