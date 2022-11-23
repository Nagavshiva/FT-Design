import React from 'react';
// import {FaHandPointRight} from 'react-icons/fa';
import log3 from "./assests/log3.png"

const Hero = () => {
  return (
    <>
       <section className="py-10 sm:py-16 lg:py-24 ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 ">
                <div className='md:mx-auto'>
                    <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    Think.Make.
                        <div className="relative inline-flex">
                            <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                            <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">solve.</h1>
                        </div>
                    </h1>

                    <p className="mt-8 text-base text-black sm:text-xl">Design create culture.Culture shapes values.Values determine the future.</p>
                </div>

                <div>
                    <img className="lg:w-full md:w-4/5" src="https://weblatic.com/wp-content/uploads/2019/04/Website-Design-in-Vapi-Valsad-Daman-Silvassa-By-Website-Designer-of-Web-Development-Company-Weblatic.png" alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero;

{/* <div className='w-full h-screen flex flex-col justify-between mt-32'>
      <div className='grid md:grid-cols-2 m-auto max-w-[1240px]'>
        <div className="mt-4 text-center lg:mt-24">
          <p className='font-bold text-7xl mx-10'>Think.Make.
          <br/>
          Solve.
          </p>
          <p className=' flex pt-7 items-center gap-7 text-red-200 lg:text-3xl text-3xl font-bold'><FaHandPointRight className='ml-7 animate-bounce text-7xl'/>Design create culture.Culture shapes values.Values determine the future.</p>
        </div>

        <div className='mt-4 mx-10 lg:mb-7' >
          <img className="md:w-full" src="https://www.smvitsolution.com/image/web-main.gif" alt='images' />

        </div>

      </div> 
   </div> */}