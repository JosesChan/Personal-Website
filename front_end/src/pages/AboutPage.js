import { Fragment } from 'react';
import PictureStandalone from '../components/PictureStandalone';
import swordPicture from '../imgs/IMG_1955.jpg';
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
                        This page contains a little more about me and what I like to do for fun. I aim to become a healthy perfectionist
                        and I take great enjoyment from being able to develop my skills and beat challenges. I am also naturally curious about a 
                        majority of topics in the world and always try to learn new information. Below are some of my hobbies and interests that I enjoy.
                    </p>                    
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

                <CardGeneral>
                    <h2>Historical European Martial Arts (HEMA)</h2>
                    <br/>
                    
                    <h3>What is HEMA?</h3>     
                    <p>
                        Historical European Martial Arts reconstructs historical fighting styles through old manuals and treatises. 
                        I have had the opportunity to join University of Lincoln's HEMA society and learn different longsword techniques.
                    </p>
                    <br/>
                    <p>
                        This was a great way to make friends during university. I was able to meet people who shared the same niche interest,
                        and we worked with University of Lincoln's fencing society on occasion, which was a fun way to see the differences and 
                        similarities in our combat practises.                 
                    </p>
                    <br/>
                    <PictureStandalone location={swordPicture} altTag="Two people sparring during a University of Lincoln HEMA demonstration"/>
                    <br/>
                    <h3>Public Demonstrations</h3>     
                    <p>
                        I also was able to help organise public combat demonstrations to help raise awareness of the society and get experience sparring in a competition format. 
                        Such as helping promote and run our society's Fight Night demonstration, which used steel sparring swords and had multiple duelists 
                        rotating in and out of protective gear.
                    </p>
                </CardGeneral>

                <CardGeneral>
                    <h2>Videogames</h2>

                    <h3>Early experiences</h3>                    
                    <p>
                        I find videogames to be relaxing and a very interesting medium of entertainment. I was able to learn valuable lessons from videosgames growing up. 
                        Games like the MMORPG Runescape, taught me not only social skills to interact with people from different cultures, but also cyber safety practises 
                        from a young age due to being able to exposure of phishing and scamming attempts in a low risk environment.
                    </p>
                    <br/>
                    
                    <h3>Minor Research</h3>     
                    <p>
                        I was curious with what games could offer aside from just entertainment. During my ITGS IB Programme, I looked at
                        whether Digital Game Based Learning was beneficial as an additional learning tool. Inspired by similar studies and 
                        research on Piaget's theory of cognitive development, I conducted a study with students and commercial off the shelf 
                        game based learning tools. While the benefits were minimal, I saw that it had potential to be a useful teaching aid.
                        However, future game-based tools need to balance correctly between enjoyment and learning otherwise students are 
                        prone to boredom or fixate on the fun aspect without learning any new information.
                    </p>
                    <br/>
                    
                    <h3>Knowledge Model</h3>     
                    <p>
                        Another exciting use of digital games is in its ability to act as a knowledge model for different areas. There are couple examples,
                        such as studying virtual economies because of their features as partial representation of real world economies, or looking 
                        at how MMO's are affected by infectious diseases to improve real world pandemic responses.
                    </p>
                </CardGeneral>


                <CardGeneral>
                    <h2>Fiction and Fantasy!</h2>
                    <br/>
                    <h3>Fantasy Books</h3>
                    <p>
                        I have been and will always will be an avid fan of fiction. Whether it is reading about fantastical plots from Joe Abercrombie 
                        or the unique take on millitary science fiction presented by John G. Hemry. What's more exciting is being a part of that story.
                    </p>
                    <br/>
                    <h3>Dungeons and Dragons</h3>
                    <p>
                        Having been a participant in multiple DND games, I now host a weekly session with my friends which has me keeping track of new story developments 
                        and what my friends personal goals are in the game. I aim to make my players have fun by giving them tools to help solve problems in creative ways
                        and reward them for approaching challenges in ways I never even considered.
                    </p>
                    <br/>
                    <PictureStandalone location={dndPicture} altTag="DND AI generated image of a crowd gather around a floating winged being with an orb of light in the background"/>
                    <br/>
                    <p>
                        Despite being relatively new to hosting DND games, I always try to improve each session. I've been using my knowledge of AI tools like StableDiffuse 
                        to generate detailed images to help players visualise a scene. I also started running games with a friend to create a compelling narrative
                        and build a better gameplay experience.
                    </p>
                </CardGeneral>

                <CardGeneral>
                    <h2>Others!</h2>
                    <p>
                        Aside from these interests, I commit myself to other activities like badminton, pottery or game development.
                        Despite not being particularly talented or skilled in these activities, I enjoy developing my abilities and furthering my skillset. 
                    </p>
                    <br/>    
                    <p>
                        Oddly enough, there are scenarios where these skills have helped me. Such as having 3D modelling skills in tools like Blender to create 
                        better models for my digital robotics project, or knowing how to use inverse kinematics for a robotic arm due to past animation experience.
                    </p>
                </CardGeneral>

            </div>
        </Fragment>
    );
};

export default AboutContent;