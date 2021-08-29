import React, { useReducer, useState, useRef, useEffect } from 'react'

export const useFrameLoop = callback => {
  const requestId = useRef();
  const previousTime = useRef();
  const loop = time => {
    if (previousTime.current !== undefined) {
      const deltaTime = time - previousTime.current;
      callback(time, deltaTime);
    }
    previousTime.current = time;
    requestId.current = requestAnimationFrame(loop);
  }

  useEffect(() => {
    requestId.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(requestId.current);
  }, []);
}