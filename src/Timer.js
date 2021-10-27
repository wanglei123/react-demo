import React, { useState,useRef,useCallback } from 'react';

function Timer() {
  console.log('run');
  const [time, setTime] = useState(null);
  const timer = useRef(null) // 组件多次渲染之间保存数据
  const handleStart = useCallback(
    () => {
      timer.current = window.setInterval(() =>{
        setTime((time) => time + 1)
      }, 100)
    },
    [],
  )
  const handlePause = useCallback(() =>{
    window.clearInterval(timer.current)
    timer.current = null;
  },[])
  return (
    <div>
      {time / 10} seconds
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}


export default Timer;
