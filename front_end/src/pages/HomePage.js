import React, {Fragment} from "react";
import CardGeneral from '../components/CardGeneral';
import ContainerText from '../components/ContainerText';
import PictureStandalone from '../components/PictureStandalone';
import selfPicture from '../imgs/IMG_02.jpg';
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

      
      <ContainerText inputHead="My projects!"
        inputBody="I love developing and creating software. Below are some of the projects I've worked on since attending and finishing university."
      />
      
      
      <Gallery/>
      
    </Fragment>
  );
};

export default Home;