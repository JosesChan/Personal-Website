import ContainerText from '../components/ContainerText';
import PictureStandalone from '../components/PictureStandalone';
import selfPicture from '../imgs/SelfImage.jpg';
import Gallery from '../components/Gallery';


const Home = () => {

  return (
    <>
      <PictureStandalone location={selfPicture} altTag="JosesChan2021" />

      <ContainerText inputHead="Hello I'm Joses!"
        inputBody="I am a software developer that's curious in various fields. This website showcases all my current and past projects for display." />

      <ContainerText inputHead="Why does this website exist?"
        inputBody="I made this website to both showcase my work and learn web-dev languages such as HTML, CSS and Javascript. 
          At the moment it uses React.js and Tailwind CSS to create a mobile-friendly website." />
      
      <Gallery  />
    </>
  );
};

export default Home;