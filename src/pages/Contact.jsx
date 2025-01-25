import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="max-w-[100%] p-10 md:max-w-[80%] m-auto bg-gray-100 dark:bg-stone-800 h-auto md:h-screen">
      <main className="gird grid-cols-1 md:grid md:grid-cols-2 gap-5 bg-white dark:bg-stone-800 p-5 rounded-2xl ">
        <div className="font-mono shadow-2xl dark:bg-stone-700 p-5 rounded-lg">
          <h1 className="text-2xl dark:text-white ml-4">Here me</h1>
          <div className="grid grid-cols-1">
            <div className="flex justify-start items-center sm:justify-center sm:gap-10 border-2 gap-1 rounded-lg mt-3 p-3 dark:text-white">
              <i className="fa-solid fa-phone text-2xl md:text-4xl"></i>
              <div>
                <p>Phone Number</p>
                <p className="font-bold text-sm md:text-lg">+885 939 392 90</p>
              </div>
            </div>
            <div className="flex justify-start items-center sm:justify-center sm:gap-10 w-[100%] border-2 gap-1 rounded-lg mt-3 p-3 dark:text-white">
              <i className="fa-regular fa-envelope text-2xl md:text-4xl"></i>
              <div>
                <p>My Email</p>
                <p className="font-bold text-sm">nounthanith99@gmail.com</p>
              </div>
            </div>
            <div className="flex justify-start items-center sm:justify-center sm:gap-10 border-2 gap-1 rounded-lg mt-3 p-3 dark:text-white">
              <i className="fa-solid fa-location-dot text-2xl md:text-4xl"></i>
              <div>
                <p>Location</p>
                <p className="font-bold text-sm md:text-lg">Battambang Kdol</p>
              </div>
            </div>
          </div>
        </div>

        <div className="font-mono shadow-2xl dark:bg-stone-700 p-5 rounded-lg mt-5 md:mt-0">
          <h1 className="text-2xl dark:text-white ml-4">Here me</h1>
          <div className="p-5">
            <h1 className="text-2xl dark:text-white font-bold font-mono">
              Hello I'm{" "}
              <p className="text-green-700 animate-pulse">Nuon Thanith</p>
            </h1>
            <p className="font-mono dark:text-white">
              I'm a student at National University of Battambang(<u>NUBB</u>).I
              am in the first semester of my second year, majoring in
              Imformation Techology. I chose Frontend development as my main
              skill. I have finished Full-Stack cours at MasterIT Battambang ,
              Study about ReactJS MongoDb NodeJs ExpressJs and Tailwind Css.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
