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
                    <h2 className="mb-3">A space for my errant thoughts.</h2>         
            </CardGeneral>
          
          {/*<PictureStandalone location={selfPicture} altTag="Me standing in a field" />*/}

            <CardGeneral>
                    <h2 className="mb-3">The Person</h2>
                    <h3>
                      A developer who sews. A writer who solders. A bartender who fences. A gamer who hikes.
                    </h3>
                    <br/>
                    <p>                       
                      Driven by an inner desire to learn and explore, I've found myself lost and in love with the many facets of this world.
                    </p>
                    <br/>                       
                    <p>                         
                      Whether it is an artist's expression of natural landscapes, mundane historical accounts on a time period or studies investigating autonomous vehicles on logistics, 
                      I've always enjoyed understanding what different mediums present and the method in which they are shown.
                    </p>
                    <br/>
                    <p>
                      My dream is to one day create stories like the ones that inspired my youngerself to be kind and inquisitive in this vibrant world.
                    </p>


                    {/*Constantly chasing new skills and applying them to solve. Using my skills in soldering to fix electronics, webscraping to 
                      notify product availability, and even just using my culinary skills to prepare original recipes for friends.*/}
            </CardGeneral>
          
            <CardGeneral>
                    <h2 className="mb-3">The Purpose</h2>
                    <h3>
                    Expression of style. Maturation of aesethetic. Exploration of ideas.  
                    </h3>               
                    <br/>
                    <p>
                      Initially, I made this site to practise dockerised development of a responsive full stack application, but upon completion 
                      I wanted to improve my UI/UX design and maintain the site as a general space to share my projects. 
                    </p>
                    <br/>
                    <p>
                      Through this site, I'll also be testing different aesethetics and visual designs that will eventually be used in my game.
                      Alongside such experiments, I will also be recording stages of my game development project and other projects that I am interested in pursuing.
                    </p>
            </CardGeneral>
        </div>
      </div>


      {/* Gallery Section 
      <div className="top-0 z-[-2] h-full w-full bg-page">
        <div className="justify-center items-center md:max-w-screen-md sm:max-w-xs flex container mx-auto pb-36 px-5">
          <Gallery/>
        </div>
      </div>
      */}

    </Fragment>
  );
};

export default Home;