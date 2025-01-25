import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-[100%] p-10 md:max-w-[80%] m-auto bg-gray-100 dark:bg-stone-700 h-auto">
      <div className="min-h-screen md:min-h-0 flex items-center justify-center ">
        <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl">
          {/* Image Section */}
          <div className="md:w-1/2 p-10 animate-fade-up">
            <img
              src="https://z-p3-scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/405240209_1018977849331379_4338412654264365292_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG0418FSFK6Suvgd0KL_HegSz66VWuzOfdLPrpVa7M59_mk568QQTZqgaeEsof5cQ3twFVT4yv6TKZlDXMeq7l1&_nc_ohc=GWVnMesl5OEQ7kNvgFPLYK9&_nc_oc=Adhy8G01-yyUXCOEzAIswBYKrBArK_ZFVL62c7cZ66guQkz3QdTjF3HcwjyC-duOeaw&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-4.fna&_nc_gid=Ag7z8K3F-KyJTG_6PyjYwQt&oh=00_AYB0K-hgCvMRMEaiOWMeStugDCX5CUYB8oOeIfpWsBwuUg&oe=679A0CAB"
              alt="Placeholder"
              className="w-full h-full object-cover rounded-lg "
            />
          </div>
          {/* Text Section */}
          <div className="p-8 md:w-1/2 flex flex-col justify-center text-center md:text-start font-mono">
            <span className="flex justify-center items-center md:flex md:justify-start md:items-center dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 animate-spin"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              <p className="text-sm underline">Web developer</p>
            </span>

            <h1 className="text-2xl dark:text-white font-bold mb-4">
              Hello I'm <p className="text-green-700">Nuon Thanith</p>
            </h1>
            <p className="text-gray-600 dark:text-white mb-6 font-mono">
              I am a Junior Front-End Web Developer specializing in creating
              dynamic and user-friendly websites. My primary focus is on
              delivering engaging experiences that users enjoy. Currently, I am
              enhancing my skills in API integration and state management with
              Redux. I am eager to contribute to innovative projects and open to
              new job opportunities.
            </p>
            <Link
              to="/about"
              className="border-2 dark:border-white rounded-lg p-2 dark:text-white hover:scale-95 text-center transition"
            >
              About Me
            </Link>
            <a href="https://www.canva.com/design/DAGXAjIESag/O_k1IdMJEn1u4QvYvQGu9A/view?utm_content=DAGXAjIESag&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2de4b78108">
              <button className="w-full border-2 mt-2 dark:border-white rounded-lg p-2 dark:text-white hover:scale-95 transition flex justify-center items-center gap-3">
                <div>
                  My CV
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </button>
            </a>

            <div className="flex justify-around items-center gap-2">
              {/* <div className="dark:text-white text-4xl px-1 py-2 mt-4 animate-pulse">
                <i className="fa-solid fa-chevron-right"></i>
              </div> */}
              <div className="dark:text-white text-4xl px-1 py-2 mt-4 animate-pulse">
                <a href="https://t.me/Nuon_Thanith">
                  <i className="fa-brands fa-telegram"></i>
                </a>
              </div>
              <div className="dark:text-white text-4xl px-1 py-2 mt-4 animate-pulse">
                <a href="https://web.facebook.com/tha.nith.549">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
              <div className="dark:text-white text-4xl px-1 py-2 mt-4 animate-pulse">
                <a href="https://www.tiktok.com/@tonqqqq">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
              </div>
              <div className="dark:text-white text-4xl px-1 py-2 mt-4 animate-pulse">
                <a href="https://www.instagram.com/tonq_tong/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-stone-800 shadow-2xl mt-2 p-3 md:p-10 rounded-2xl font-mono m-auto flex justify-center items-center max-w-[100%] md:max-w-[100%] lg:max-w-[70%] xl:max-w-[70%]">
        <div className="grid grid-cols-1 gap-5 md:flex md:justify-center md:items-center">
          <div className="flex justify-between px-1 items-center border-2 dark:border-white rounded-lg gap-2 w-40">
            <span className="text-2xl md:text-5xl text-black dark:text-white">
              6
            </span>
            <div>
              <p className="max-w-[100px] text-sm md:text-lg leading-snug text-black dark:text-white">
                Month at MasterIT
              </p>
            </div>
          </div>
          <div className="flex justify-between px-1 items-center border-2 dark:border-white rounded-lg gap-2 w-40">
            <span className="text-2xl md:text-5xl text-black dark:text-white">
              1
            </span>
            <div>
              <p className="max-w-[100px] text-sm md:text-lg leading-snug text-black dark:text-white">
                Full-stack Pos-System
              </p>
            </div>
          </div>
          <div className="flex justify-between px-1 items-center border-2 dark:border-white rounded-lg gap-2 w-40">
            <span className="text-2xl md:text-5xl text-black dark:text-white">
              4
            </span>
            <div>
              <p className="max-w-[100px] text-sm md:text-lg leading-snug text-black dark:text-white">
                Programing Language
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-stone-800 shadow-2xl mt-2 p-3 md:p-10 rounded-2xl font-mono m-auto max-w-[100%] md:max-w-[100%] lg:max-w-[70%] xl:max-w-[70%]">
        <div className="flex justify-start items-center gap-3 dark:text-stone-300 underline">
          <span>
            <i className="fa-solid fa-code animate-pulse text-green-500"></i>
          </span>
          <h1 className="text-4xl font-bold animate-pulse">My skill</h1>
        </div>

        <div className="flex flex-wrap w-[100%] gap-2 mt-4">
          {/* Removed the inner div that caused wrapping issues */}
          <p className="border-2 border-stone-400 rounded-full px-4 py-1 dark:text-stone-200">
            Html
          </p>
          <p className="border-2 border-stone-400 rounded-full px-4 py-1 dark:text-stone-200">
            Css
          </p>
          <p className="border-2 border-stone-400 rounded-full px-4 py-1 dark:text-stone-200">
            Java Script
          </p>
          <p className="border-2 border-stone-400 rounded-full px-4 py-1 dark:text-stone-200">
            Tailwind Css
          </p>
          <p className="border-2 border-stone-400 rounded-full px-4 py-1 dark:text-stone-200">
            Mongo DB
          </p>
          <p className="border-2 border-stone-400 rounded-full px-4 py-1 dark:text-stone-200">
            React JS
          </p>
          <p className="border-2 border-stone-400 rounded-full px-4 py-1 dark:text-stone-200">
            C++
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-stone-800 shadow-2xl mt-2 p-3 md:p-10 rounded-2xl font-mono m-auto max-w-[100%] md:max-w-[100%] lg:max-w-[70%] xl:max-w-[70%]">
        <div className="flex justify-start items-center gap-3 dark:text-stone-300 underline">
          <span>
            <i className="fa-solid fa-book-open animate-pulse text-green-500"></i>
          </span>
          <h1 className="text-4xl font-bold animate-pulse">Learning Goals</h1>
        </div>

        <div className="flex flex-wrap w-[100%] gap-2 mt-4">
          {/* Removed the inner div that caused wrapping issues */}
          <p className="border-2 border-stone-400 rounded-full px-4 py-1 dark:text-stone-200">
            Java
          </p>
          <p className="border-2 border-stone-400 rounded-full px-4 py-1 dark:text-stone-200">
            Bootstrap
          </p>
          <p className="border-2 border-stone-400 rounded-full px-4 py-1 dark:text-stone-200">
            Next Js
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
