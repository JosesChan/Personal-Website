import React from 'react';
import {NavLink} from 'react-router-dom';

const NavMenu = () => {

  // State hook 
  const [navbar, setNavbar] = React.useState(false);

  return (
    <nav className="bg-primary lg:px-5 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-secondary">
      <div className="container flex flex-wrap justify-between items-center mx-auto w-10/12">

        {/* Nav Image/Logo*/}
        <a href="https://www.linkedin.com/in/fong-sun-joses-chan-b693667b/" className="flex items-center order-1" target="_blank" rel="noopener noreferrer">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-character">Joses Chan</span>
        </a>

        {/* Mobile button */}
        <div className="md:hidden order-2">
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

        {/* Navbar Items */}
        <div className={`w-full self-center md:items-center md:w-auto md:order-2 order-last self-center md:block ${navbar ? "block animation-fade-in-down" : "hidden"}`}>
          <ul className={`flex md:flex-row flex-col w-full h-full md:pb-0 p-4 mt-4 mb-4 md:space-y-0 space-y-4 rounded-lg border border-gray-100 md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 text-character md:bg-primary bg-secondary border-gray-700`}>
              
              <CustomListLink to="/" className={({isActive}) => 
              (isActive?'navbar-active' : 'navbar-inactive') + " " + "navbar-header"}>
               Home
              </CustomListLink>
              
              <CustomListLink to="/About" className={({isActive}) => 
              (isActive?'navbar-active' : 'navbar-inactive') + " " + "navbar-header"}>
                About
              </CustomListLink>

              <CustomListLink to="/Hobbies" className={({isActive}) => 
              (isActive?'navbar-active' : 'navbar-inactive') + " " + "navbar-header"}>
                Hobbies
              </CustomListLink>
              
              {/* <CustomListLink to="/Records" className={({isActive}) => 
              (isActive?'navbar-active' : 'navbar-inactive') + " " + "navbar-header"}>
                Record List
              </CustomListLink>
              
              <CustomListLink to="/Create" className={({isActive}) => 
              (isActive?'navbar-active' : 'navbar-inactive') + " " + "navbar-header"}>
                Create Record
              </CustomListLink> */}
              
          </ul>
        </div>

        {/*Social Media Items*/}
        <div className="flex flex-col order-3 hidden md:block items-center space-x-2">
          <a href="https://github.com/JosesChan?tab=repositories" target="_blank" rel="noopener noreferrer">
            <button type="button" data-te-ripple-init data-te-ripple-color="light" 
              className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 
                3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 
                1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </button>
          </a>
          
          <a href="https://www.linkedin.com/in/fong-sun-joses-chan-b693667b/" target="_blank" rel="noopener noreferrer">
            <button type="button" data-te-ripple-init data-te-ripple-color="light" className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-sky-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </button>
          </a>

          {/* 
          For future dark mode button
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </button> */}

        </div>
      </div>
    </nav>
  );
};

// Hoisted to the top of the file to avoid linter error
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