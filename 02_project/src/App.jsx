import React from 'react'
import { fetchPhotos } from './api/mediaApi'

const App = () => {


  return (
    <div className='h-screen w-full bg-gray-950 text-white'>
      <button
      onClick={()=>{
        fetchPhotos('cat');
      }}
      className='border-1'>Get photo</button>
    </div>
  )
}

export default App
