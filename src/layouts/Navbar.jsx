import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex dark:bg-stone-600 dark:text-white font-mono justify-between items-center max-w-[100%] m-auto text-xl p-5 shadow-2xl px-5 md:px-20">
        <div>
            <Link to='/' className="flex justify-center items-center gap-2 font-bold text-xl hover:underline">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 animate-bounce">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </span>
                <div className="hidden sm:flex justify-center font-mono">
                    Nuon Thanith
                </div>
            </Link>
        </div>
        <div className="flex justify-center items-center gap-3 text-md font-mono md:text-2xl md:font-bold">
            <Link to='/about' className="hover:underline">About</Link>
            <Link to='/contact' className="hover:underline">Contact</Link>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;
