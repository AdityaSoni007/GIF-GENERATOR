import Container from "./components/Container";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import Random from "./components/Random"
import Tag from "./components/Tag";
import { useAuth0 } from "@auth0/auth0-react";


export default function App() {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();


  return (
    <>

      <Container user={user} isAuthenticated={isAuthenticated} logout={logout} loginWithRedirect={loginWithRedirect} />

      {/*############################################################################################################ */}


      <div className=" background flex flex-col items-center justify-center py-12 gap-12">

        <h1 className="  bg-white rounded-lg w-11/12 flex items-end justify-center  
       px-10 py-2 lg:text-2xl sm:text-xl font-bold  border  ">
          Unpredictable Fun : Uncover the Unexpected with Our GIF Generator</h1>



        <div className=" sm:flex items-center justify-center  w-[100%] gap-9 random-gif ">

          <div className=" w-[45vw] random-gif-1"><Random user={user} isAuthenticated={isAuthenticated} /></div>

          <div className=" w-[35vw] text-white  p-9 border random-gif-1">

            <p className="font-semibold lg:text-2xl">Our extensive library boasts a wide range of GIFs spanning various categories and themes.</p><br />
            <p className="">" Whether you're in the mood for adorable animals, hilarious reactions, epic fails, heartwarming moments, or anything in between, we've got you covered. Discover hidden gems and explore the full spectrum of emotions through our diverse collection. "</p>

          </div>

        </div>

      </div>

      {/*############################################################################################################ */}

      <div className="relative flex justify-center">

        <img src='bg-3.jpg' className='w-[100%] back 'alt='Image' />
        <h1 className="absolute nav rounded-2xl p-3 lg:text-2xl md:text-xl font-bold w-[60%] mt-12">"Inject Some GIF Magic: Experience Our Random GIF Generator!"</h1>
        
      </div>

      {/*############################################################################################################ */}

      <div className="  background flex flex-col  items-center justify-center py-12 gap-12">

      <h1 className="  bg-white rounded-lg w-11/12 flex items-end justify-center  
       px-10 py-2 lg:text-2xl sm:text-xl font-bold  border  ">
          Fuel Your Imagination: Let Our Random GIFs Inspire You !</h1>



        <div className=" flex items-center justify-center  w-[100%] gap-9   random-gif ">

          <div className=" w-[35vw] text-white border p-9 random-gif-1">

            <p className="font-semibold lg:text-2xl">Looking for the perfect GIF to express yourself ?</p><br />

            <p>" Our Random GIF Generator is here to ignite your creativity. With a simple click, you'll be presented with a surprise GIF that can serve as a catalyst for your imagination. Unleash your wit, share your thoughts, or simply brighten someone's day with the power of animated visuals "</p>
          </div>

          <div className="w-[45vw] random-gif-1"><Tag user={user} isAuthenticated={isAuthenticated} /></div>

        </div>

      </div>

      {/*############################################################################################################ */}

      <Footer /></>

  );
}
