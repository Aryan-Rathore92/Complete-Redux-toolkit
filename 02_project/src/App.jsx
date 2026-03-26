import React from 'react'
import { fetchGIF, fetchPhotos, fetchVideos } from './api/mediaApi'
import SearchBar from './components/SearchBar'

const App = () => {


  return (
    <div className='h-screen w-full bg-gray-950 text-white'>
      <SearchBar/>
    </div>
  )
}

export default App
