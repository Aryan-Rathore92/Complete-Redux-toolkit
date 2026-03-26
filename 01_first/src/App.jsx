import { combineReducers } from '@reduxjs/toolkit';
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyAmount } from './redux/features/counterSlice';

const App = () => {

  const disPatch = useDispatch();
  const count = useSelector(state=> state.counter.value);
  const [num, setNum] = useState(5)
  

  return (
    <div>
      <h1 className='bg-red-400 h-30 w-40 rounded font-bold flex items-center justify-center text-7xl m-10'>{count}</h1>
      <button
      onClick={()=>{
        disPatch(increment())
        
      }}
      className='bg-amber-400 px-4 py-2 rounded-xl ml-2 mr-5'>Increament</button>
      <button
      onClick={()=>{
        disPatch(decrement());
      }}
      className='bg-amber-400 px-4 py-2 rounded-xl'>Decreament</button>
      <button 
      onClick={()=>{
        disPatch(incrementbyAmount(Number(num)));
      }}
      className='bg-amber-400 px-4 py-2 rounded-xl ml-5'>Increament by Amount</button>
      
      <input
      value={num}
      onChange={(e)=>{
        setNum(e.target.value);
      }}
      type="number" className='border-1 h-10 rounded outline-none font-bold text-xl'/>
    </div>
  )
}

export default App