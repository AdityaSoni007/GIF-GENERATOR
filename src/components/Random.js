import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
import { useState } from 'react';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { toast } from 'react-hot-toast';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = ({ user, isAuthenticated }) => {
  const [favorite, setFavorite] = useState(false);
  const handleClick = () => {
    setFavorite(!favorite);
  }
  if (favorite) toast("Added to favourites ❤️");


  const { gif, loading, fetchData } = useGif();


  return (
    <div className=' w-[100%]  bg-green-400 rounded-lg  border-black border-[2px]
    flex flex-col items-center gap-y-5 lg:mt-[15px] random-container'>

      <h1 className='mt-[15px] lg:text-xl  uppercase font-bold '> A Random Gif</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} alt='' className='border-[5px] gif-img' />)
      }

      {isAuthenticated ?
        (
          <div className='w-10/12 flex gap-4 '>

            <button onClick={() => fetchData()}
              className="w-5/6 border-[3px] border-black  bg-yellow-500 lg:text-xl py-2 rounded-lg mb-[20px] font-semibold ">Generate 👆🏾</button>

            <button onClick={handleClick} className='w-1/6  flex items-center justify-center py-2  font-semibold  bg-white border-[3px] border-black sm:text-[30px] text-red-700 rounded-lg mb-[20px] '> {favorite ? (<MdOutlineFavorite />) : (<MdOutlineFavoriteBorder />)}</button>

          </div>
        ) :
        (
          <button onClick={() => fetchData()}
            className="w-10/12 border-[3px] border-black  bg-yellow-500 lg:text-xl py-2 rounded-lg mb-[20px] font-semibold "> Generate 👆🏾
          </button>
        )
      }



    </div>
  )
}

export default Random
