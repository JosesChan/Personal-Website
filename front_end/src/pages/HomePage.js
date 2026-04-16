import React, {Fragment} from "react";
import PictureStandalone from '../components/PictureStandalone';
import selfPicture from '../imgs/IMG_02.jpg';
import Gallery from '../components/ProjectGallery/Gallery';
import CardGeneral from '../components/CardGeneral';
import FireH3 from '../components/FireH3';


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
                    <FireH3>
                      Developer who sews. A writer who solders. A bartender who fences. A gamer who hikes.
                    </FireH3>
                    <br/>
                    <p> 
                      I've always loved stories, the way it could inspire people to be good and kind.
                      I've led my life with the intent of being kind. Helping others is an expression of my values.
                      However, I've learnt that you need more than just intent if you want to help people.
                      

                      And so learning is my foundation. I am and always will be a student. 

                    </p>
            </CardGeneral>
          
            <CardGeneral>
                    <h2 className="mb-3">The Purpose</h2>
                    <FireH3>
                    Expression of style. Maturation of aesethetic. Exploration of ideas.  
                    </FireH3>               
                    <br/>
                    <p>
                      My goal is to continue maintaining this site alongside my primary project in game development.
                      Creating a unified game identity and giving me a space to experiment with design and imagery.
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