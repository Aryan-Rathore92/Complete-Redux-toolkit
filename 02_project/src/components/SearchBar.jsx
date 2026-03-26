import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import {setQuery} from '../redux/features/searchSlice'

const SearchBar = () => {

    const [text, setText] = useState('');
    const disPatch = useDispatch();

    const submithandler =(e)=>{
        e.preventDefault();
        disPatch(setQuery(text))
        setText('');
    }
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }} className='flex gap-5 p-10 bg-gray-900'>
        <input
        value={text}
        onChange={(e)=>{
            setText(e.target.value)
        }}
        required
        className='border-2 px-4 py-2 text-xl rounded outline-none w-full'
         type="text"
         placeholder='Search anything....'/>
        <button className='active:scale-95 cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
