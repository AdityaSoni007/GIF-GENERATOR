import React from 'react'
import { Link } from 'react-router-dom'

function Container({ user, isAuthenticated, logout, loginWithRedirect }) {
    return (
        <div className='relative  flex flex-col items-center w-full '>
            <img src='backgound-image.jpg' className='w-[100%] ' alt='Image'/>

            <div className='absolute back-text  w-[90%] flex flex-col items-center justify-center mt-7 gap-9 '>

                <div className='bg-white h-[auto] rounded-3xl flex items-center justify-between w-[70%]  nav '>

                    <h1 className='text-black font-semibold lg:text-lg ml-5'><Link to='/'>GIFS Generator </Link></h1>
                   
                    <div className='flex gap-x-6 mr-3'>

                    {
                        (!isAuthenticated) ?
                            (<button onClick={() => loginWithRedirect()}
                                className=' px-[20px] py-[8px] text-black rounded-2xl font-semibold hover:scale-90 transition duration-150 ease-out hover:ease-out'> Login </button>

                            ) :

                            (<div className='flex gap-7 items-center'><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className=' font-semibold bg-white px-[12px] py-[8px] text-black rounded-md hover:scale-90 transition duration-150 ease-out hover:ease-out'> Logout</button> {(isAuthenticated) && (<h2 className='text-black font-semibold'>{user.name}</h2>)}</div>)
                    }

                    </div>
                    


                </div>

                <div className='  flex flex-col items-center justify-center generate '>
                    <p className='text-black font-semibold lg:text-4xl  sm:text-[1.5rem] '>
                        "Unleash the Joy: Discover Endless
                    </p>
                    <p className='text-black font-semibold lg:text-4xl  sm:text-[1.5rem]  lg:mt-3 '>
                        Laughter with Our
                    </p>
                    <p className='text-black font-bold lg:text-4xl sm:text-[1.5rem]  lg:mt-3 '>
                        Random GIF Generator !"
                    </p>
                </div>

                <div className='  w-[15vw] flex  justify-center items-center generate '>
                    <button onClick={() => loginWithRedirect()} className='flex items-center justify-center gap-1 bg-white text-black lg:text-lg font-semibold p-2 sm:text-[1rem] rounded-3xl w-[100%] nav hover:scale-90 transition duration-150 ease-out hover:ease-out'> Generate 👆🏾
                        
                    </button>
                </div>


            </div>






        </div>
    )
}

export default Container