import React from 'react'
import { useState } from 'react';
import "./Style.css"



const HOC = () => {
    const [count,setCount]=useState(0);
  return (
    <>
      {count}<br></br>
      <button onClick={()=>setCount(count+1)}>Click Me!</button>
    </>
  )
}

export default HOC