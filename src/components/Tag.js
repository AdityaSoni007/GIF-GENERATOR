import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
import { useState } from 'react';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { toast } from 'react-hot-toast';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = ({ user, isAuthenticated }) => {
  const [tag, setTag] = useState('car');
  const [favorite, setFavorite] = useState(false);

  const { gif, loading, fetchData } = useGif(tag);
  const handleClick = () => {
    setFavorite(!favorite);


  }
  if (favorite) toast("Added to favourites ❤️");



  return (
    <div className='w-[100%]  bg-blue-400 rounded-lg border-black border-[2px]
    flex flex-col items-center gap-y-5 mt-[15px] tag-container'>

      <h1 className='mt-[15px] lg:text-xl  uppercase font-bold '> {`Random ${tag} Gif`}</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} alt='MEME' className='border-[5px] gif-img ' />)
      }

      <input
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />

      


      {isAuthenticated ? (<div className='w-10/12 flex gap-4 '>
        <button onClick={() => fetchData()}
          className="w-5/6 border-[3px] border-black  bg-yellow-500 lg:text-xl py-2 rounded-lg mb-[20px] font-semibold ">Generate 👆🏾</button>

        <button onClick={handleClick} className='w-1/6  flex items-center justify-center py-2  font-semibold  bg-white border-[3px] border-black sm:text-[30px] text-red-700 rounded-lg mb-[20px] '> 
        {favorite ? (<MdOutlineFavorite />) : (<MdOutlineFavoriteBorder />)}</button>
        </div>) : 
        
        (<button onClick={() => fetchData()}
        className="w-10/12 border-[3px] border-black  bg-yellow-500 md:text-xl py-2 rounded-lg mb-[20px] font-semibold  "> Generate 👆🏾</button>)}




    </div>
  )
}

export default Tag
