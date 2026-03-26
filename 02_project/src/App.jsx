import React from 'react'
import { fetchGIF, fetchPhotos, fetchVideos } from './api/mediaApi'

const App = () => {


  return (
    <div className='h-screen w-full bg-gray-950 text-white p-5'>
      <button
      onClick={ async ()=>{
         const data = await fetchPhotos('dog');
        console.log(data.results);
      }}
      className='border-1 bg-green-500 px-2 py-1 rounded font-bold mr-2'>Get photo</button>

      <button
      onClick={ async ()=>{
         const data = await fetchVideos('dog');
         console.log(data); 
      }}
      className='border-1 bg-green-500 px-2 py-1 rounded font-bold'>Get Videos</button>
      
      <button
      onClick={ async ()=>{
         const data = await fetchGIF('dog');
         console.log(data);
      }}
      className='border-1 bg-green-500 px-2 py-1 rounded font-bold mr-2'>Get GIF</button>
    </div>
  )
}

export default App
