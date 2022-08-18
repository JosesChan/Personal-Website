import ContainerText from './ContainerText';
import TextButton from './TextButton';
import ProfileIcon from './ProfileIcon';
import selfPicture from '../imgs/SelfImage.jpg';
import Gallery from './Gallery'


const MainContent = (props) => {

  return (
    <div className="mx-auto max-w-sm space-y-4 mt-36 items-center">

      <ProfileIcon location={selfPicture} altTag="JosesChan2022" />

      <ContainerText inputHead="Hello I'm Joses!"
        inputText="I am a software developer that's curious in various fields. This website showcases all my current and past projects for display." />

      <ContainerText inputHead="Why does this website exist?"
        inputText="I made this website to both showcase my work and learn web-dev languages such as HTML, CSS and Javascript. 
          At the moment it uses React.js and Tailwind CSS to create a mobile-friendly website." />

      <ContainerText inputHead="My hobbies"
        inputText="" />

      <Gallery  />

      <TextButton prompt="Send" />
    </div>
  );
};

export default MainContent;