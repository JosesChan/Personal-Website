import React from 'react';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

const NavMenu = () => {

  {/*State hook*/ }
  const [navbar, setNavbar] = React.useState(false);

  return (
    <nav className="bg-white lg:px-5 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto w-10/12">

        {/* Nav Image */}
        <a href="javascript:void(0)" className="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Joses Chan</span>
        </a>


        {/* Mobile button */}
        <div className="md:hidden">
          <button className="p-2 text-gray-200 rounded-md outline-none focus:border-gray-400 focus:border" onClick={() => setNavbar(!navbar)}>
            {navbar ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                <span className="sr-only">Open main menu</span>
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <span className="sr-only">Close main menu</span>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Large Screen Buttons Items */}
        <div className="hidden md:block md:order-2">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 
          focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
          mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Press
          </button>
        </div>

        {/* Navbar Items */}
        <div className={`lg:flex justify-between items-center w-full md:w-auto md:block md:order-1 md:pb-0 ${navbar ? "block" : "hidden"}`}>
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

              <CustomLink to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</CustomLink>
              <CustomLink to="/About" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</CustomLink>
              <CustomLink to="/Projects" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Work Projects</CustomLink>
              <CustomLink to="/Hobbies" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Hobbies</CustomLink>
              <CustomLink to="/Contact" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</CustomLink>

          </ul>
        </div>

      </div>
    </nav>
  );
};

function CustomLink({to,children,...props}){
  const path = window.location.pathname

  return(
    <li>
    <NavLink to={to} {...props}>
      {children}
    </NavLink>
    </li>
  )
}

export default NavMenu;