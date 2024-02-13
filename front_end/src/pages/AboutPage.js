import { Fragment } from 'react';
import PictureStandalone from '../components/PictureStandalone';
import dndPicture from '../imgs/IMG_14.jpg'
import CardGeneral from '../components/CardGeneral';

const AboutContent = () => {
    return (
        <Fragment>
            <h1 className="invisible">About Page</h1>
            <div  className="page-column">
                <CardGeneral>
                    <h2>A little more about me!</h2>
                    <p>
                        I am a graduate computer scientist and I love solving problems in a wide variety of complex domains. My greatest asset would be 
                        my natural curiosity and stubborn determination to produce useful solutions. The way I improve is often through reading documentation 
                        or research, then shortly applying it to a project. During this process, I want my work criticised in order for me to consider the impact 
                        that flaw will have and lessen the chance of building bad habits for the future.

                    </p>   

                    <h2>
                        "Slow is smooth, smooth is fast"
                    </h2>

                </CardGeneral>

                <CardGeneral>
                    <h2>Learning New Technology</h2>
                    <br/>
                    <h3>Keeping up on innovation</h3>
                    <p>
                        I am highly interested in new technology and their current possible applications. I like the idea of technology
                        being an open door from a paper on Medieval Technology and Social Change by Lynn White Jr. Suggesting innovations are relient on
                        contextual factors like culture, politics and economy in order to be implemented. Which makes it my duty to not only stay up to date 
                        on new innovation through industry whitepapers or tech conferences, but also foster an openmind to change and experiment with new ideas.
                    </p>
                    <br/>
                    <h3>Reflecting on emerging technology</h3>
                    <p>
                        I love to imagine the exciting application of emerging tech like augmented reality, artificial intelligence and cloud computing. It is important 
                        to learn from past experiences and using case studies allows us to develop better solutions for the future.

                        Take for example augmented reality, there are numerous possible implementation in areas like education, architecture and industrial use.
                        One example I didn't expect was in the millitary, Microsoft is in development of IVAS to enhance US army night vision capabilities which
                        looks incredible. However, Microsoft's current development in 2023, has faced numerous challenges and roadblocks to its implementation.
                        Even if IVAS isn't adopted, lessons learnt from its development like reducing bulk or minimising emitted light from the device
                        can be used by NVD companies making similar product for security or ecologists usage.
                    </p>
                </CardGeneral>

                


            </div>
        </Fragment>
    );
};

export default AboutContent;