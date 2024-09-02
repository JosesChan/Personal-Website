import React, {Fragment} from "react";
import PictureStandalone from '../components/PictureStandalone';
import selfPicture from '../imgs/IMG_02.jpg';
import Gallery from '../components/ProjectGallery/Gallery';
import CardGeneral from '../components/CardGeneral';


const Home = () => {
  return (
    <Fragment>
      <h1 className="invisible">Home Page</h1>
      <div className="inset-0 -z-10 h-full w-full px-5 pt-12 bg-radial-gradient-top">
        <div className="page-column">
            <CardGeneral>
                    <h2>Hello, I'm Joses!</h2>
                    <p>
                        I am a graduate from the University of Lincoln and I like to make useful software projects.
                    </p>                    
            </CardGeneral>
          
          <PictureStandalone location={selfPicture} altTag="Me standing in a field" />

            <CardGeneral>
                    <h2>Why does this website exist?</h2>
                    <p>
                      I made this website to both showcase my work and learn front end development skills, such as HTML, CSS and Javascript. 
                      At the moment, it uses React, Node.js, Express, MongoDB and Tailwind CSS to create a responsive MERN website.
                    </p>
            </CardGeneral>
          
            <CardGeneral>
                    <h2>My projects!</h2>
                    <p>
                      I love developing and creating software. Below are some of the projects I've worked on since attending and finishing university.
                    </p>                    
            </CardGeneral>
        </div>
      </div>

      <div className="top-0 z-[-2] h-full w-full bg-page">
        <div className="justify-center items-center md:max-w-screen-md sm:max-w-xs flex container mx-auto pb-36">
          <Gallery/>
        </div>
      </div>

    </Fragment>
  );
};

export default Home;