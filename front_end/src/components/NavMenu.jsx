import React from 'react';
import {NavLink} from 'react-router-dom';

const NavMenu = () => {

  /*State hook*/ 
  const [navbar, setNavbar] = React.useState(false);

  return (
    <nav className="bg-white lg:px-5 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto w-10/12">

        {/* Nav Image */}
        <a href="https://www.linkedin.com/feed/?trk=onboarding-landing" className="flex items-center md:order-1">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Joses Chan</span>
        </a>


        {/* Mobile button */}
        <div className="md:hidden order-last">
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

        {/* */}
        <div className="md:order-3">

        </div>

        {/* Navbar Items */}
        <div className={`lg:flex md:justify-between sm:justify-end items-center w-full md:w-auto md:block md:order-1 sm:order-3 md:pb-0 ${navbar ? "block" : "hidden"}`}>
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              
              <CustomListLink to="/" className={({isActive}) => 
              (isActive?'navbar-active' : 'navbar-inactive') + " " + "navbar-header"}>
               Home
              </CustomListLink>
              
              <CustomListLink to="/About" className={({isActive}) => 
              (isActive?'navbar-active' : 'navbar-inactive') + " " + "navbar-header"}>
                About
              </CustomListLink>
              
              <CustomListLink to="/Records" className={({isActive}) => 
              (isActive?'navbar-active' : 'navbar-inactive') + " " + "navbar-header"}>
                Record List
              </CustomListLink>
              
              <CustomListLink to="/Create" className={({isActive}) => 
              (isActive?'navbar-active' : 'navbar-inactive') + " " + "navbar-header"}>
                Create Record
              </CustomListLink>
              
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

{/*Hoisted to the top of the file to avoid linter error*/}
function CustomListLink({to,children,...props}){
  return(
    <li>
    <NavLink to={to} {...props}>
      {children}
    </NavLink>
    </li>
  )
}

export default NavMenu;