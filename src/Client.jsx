import React from "react";
import img4 from "./assests/img4.jpg";
import img8 from "./assests/img8.jpg";
import Services from "./Services";

const Client = () => {
  return (
    <>
      <h1 className="text-center font-bold text-5xl text-blue-900 ">
        Our offerings
      </h1>

      <div class="flex justify-start  mt-6 w-72 h-96 mx-auto md:w-4/5 md:h-60 animate-pulse">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={img4}
            alt=""
          />
          <div class="p-6 flex flex-col justify-center">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              Digital Build: Innovation
            </h5>
            <p class="text-gray-700 text-base mb-4">
              Through the Digital Build process, we build your digital assets
              from scratch and develop your embryonic ideas into a robust brand.
            </p>
          </div>
        </div>
      </div>
      <div class=" flex justify-end w-72 h-auto mx-auto mt-5 md:w-4/5 md:h-60 animate-pulse">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            class=" w-full h-52 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={img8}
            alt=""
          />
          <div class="p-6 flex flex-col justify-center">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              Digital Refresh: Optimization
            </h5>
            <p class="text-gray-700 text-base mb-4">
              We equip you to always be at the top of your game by building your
              digital presence across newer platforms like IoT, wearables, voice
              and gesture based interactions.
            </p>
          </div>
        </div>
      </div>

      <Services />
    </>
  );
};

export default Client;
