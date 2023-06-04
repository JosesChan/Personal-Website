import { Fragment } from 'react';
import PictureStandalone from '../components/PictureStandalone';
import ContainerText from '../components/ContainerText';
import swordPicture from '../imgs/IMG_1955.JPG';

const AboutContent = () => {
    return (
        <Fragment>
            <ContainerText inputHead="A little more about me!"
                inputBody="I love solving problems and I always try to learn new ideas and concepts to help bolster my abilities.
                Alongside developing software, I enjoy naturally exploring different badminton techniques and tactics on the court, 
                beating challenging videogames which require good resource management or predicting human decision making,
                and learning HEMA (Historical European Martial Arts) through sparring and reading of historical manuscripts."
            />
            <PictureStandalone location={swordPicture} altTag="Two people sparring during a University of Lincoln HEMA demonstration" />

        </Fragment>
    );
};

export default AboutContent;