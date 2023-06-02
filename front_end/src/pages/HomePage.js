import React, {Fragment} from "react";
import CardGeneral from '../components/CardGeneral';
import ContainerText from '../components/ContainerText';
import PictureStandalone from '../components/PictureStandalone';
import selfPicture from '../imgs/IMG_02.jpg';
import swordPicture from '../imgs/IMG_1955.JPG'
import Gallery from '../components/ProjectGallery/Gallery';


const Home = () => {
  return (
    <Fragment>

      <ContainerText inputHead="Hello, I'm Joses!"
        inputBody="I am a graduate from the University of Lincoln and I like to make useful software projects." />

      <PictureStandalone location={selfPicture} altTag="Me standing in a field" />

      <ContainerText inputHead="Why does this website exist?"
        inputBody="I made this website to both showcase my work and learn web-dev languages such as HTML, CSS and Javascript. 
          At the moment it uses React.js and Tailwind CSS to create a mobile-friendly website." />

      <ContainerText inputHead="A little more about me!"
        inputBody="I love solving problems and I always try to learn new ideas and concepts to help bolster my abilities.
          Alongside developing software, I enjoy naturally exploring different badminton techniques and tactics on the court, 
          beating challenging videogames which require good resource management or predicting human decision making,
          and learning HEMA (Historical European Martial Arts) through sparring and reading of historical manuscripts."
      />
      
      <PictureStandalone location={swordPicture} altTag="Two people sparring during a University of Lincoln HEMA demonstration" />

      <CardGeneral>
        <Gallery/>
      </CardGeneral>
      
    </Fragment>
  );
};

export default Home;