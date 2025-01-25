import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="max-w-[100%] p-10 md:max-w-[80%] m-auto bg-gray-100 dark:bg-stone-800 h-auto md:h-auto">
      <main className="gird grid-cols-1 md:grid md:grid-cols-2 gap-5 bg-white dark:bg-stone-800 p-5 rounded-2xl ">
        <div className=" w-auto shadow-2xl rounded-lg bg-gray-100 dark:bg-stone-700 dark:text-white p-5 text-center md:text-start">
          <h1 className="text-2xl font-bold font-mono">
            Hello I'm{" "}
            <p className="text-green-700 animate-pulse">Nuon Thanith</p>
          </h1>
          <p className="font-mono mb-4">
            I'm a student at National University of Battambang(<u>NUBB</u>).I am
            in the first semester of my second year, majoring in Imformation
            Techology. I chose Frontend development as my main skill. I have
            finished Full-Stack cours at MasterIT Battambang , Study about
            ReactJS MongoDb NodeJs ExpressJs and Tailwind Css.
          </p>
          <Link
            to="/contact"
            className="border-2 rounded-lg p-2 hover:scale-95 transition "
          >
            <i className="fa-solid fa-arrow-right mr-1 animate-bounce"></i>
            Here Me
          </Link>
        </div>
        <div className=" w-auto shadow-2xl rounded-lg bg-gray-100 dark:bg-stone-700 dark:text-white p-5 text-center md:text-start mt-5 md:mt-0">
          <h1 className="text-2xl font-bold font-mono">
            About My
            <p className="text-green-700 animate-pulse">Future.</p>
          </h1>
          <p className="font-mono">
            Currently, I am studying to be a React Js front-end developer and
            researching and exploring frameworks such as ReactJS TailwindCss. I
            also have plans for the future. I can have a blog to share knowledge
            with others interested in skills such as React Front end developer.
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;
