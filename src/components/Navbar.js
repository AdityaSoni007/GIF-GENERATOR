import React from 'react'
// import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom'

function Navbar({user,isAuthenticated,logout,loginWithRedirect}) {
    
    return (
        <div className='flex h-[80px] items-center justify-center border-b-[4px] border-b-black bg-black '>
            <div className='flex w-11/12 max-w-maxContent items-center justify-between py-[18px]'>

                <h1 className='text-white font-semibold text-lg'><Link to='/'>GIFS Generator 🤔</Link></h1>

                <div className='flex gap-x-6'>

                    {
                        (!isAuthenticated) ? 
                        (<button onClick={() => loginWithRedirect()} 
                        className='border border-700 bg-white px-[20px] py-[8px] text-black rounded-md font-semibold hover:scale-90 transition duration-150 ease-out hover:ease-out'> Login </button>
                        
                        ):
                        
                        (<div className='flex gap-7 items-center'><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}className='border border-900 font-semibold bg-white px-[12px] py-[8px] text-black rounded-md hover:scale-90 transition duration-150 ease-out hover:ease-out'> Logout</button> {(isAuthenticated) && (<h2 className='text-white font-semibold'>{user.name}</h2>)}</div>)
                    }



                    

                </div>

            </div>
        </div>
    )
}

export default Navbar