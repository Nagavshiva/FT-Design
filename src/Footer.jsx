import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer class="text-center bg-gray-900 text-white md:w-full mt-9">
    <div class="container px-6 pt-6 ml-10">
    <div class="flex justify-center mb-6 gap-10 text-4xl ">
<BsFacebook className='hover:scale-110'/>
<AiOutlineTwitter  className='hover:scale-110'/>
<BsInstagram  className='hover:scale-110'/>
<BsLinkedin  className='hover:scale-110'/>
    </div>
      <div>
        <form action="">
          <div class="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
            <div class="md:ml-auto md:mb-6">
              <p class="">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>
  
            <div class="md:mb-6">
              <input
                type="text"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="exampleFormControlInput1"
                placeholder="Email address"/>
            </div>
  
            <div class="md:mr-auto mb-6">
              <button type="submit" class="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  
    <div class="text-center p-4 bg-blue-900">
     All Rights Reserved
    </div>
  </footer>
  )
}

export default Footer