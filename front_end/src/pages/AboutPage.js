import { Fragment } from 'react';
import PictureStandalone from '../components/PictureStandalone';
import ContainerText from '../components/ContainerText';
import swordPicture from '../imgs/IMG_1955.JPG';

const AboutContent = () => {
    return (
        <Fragment>
            <ContainerText inputHead="A little more about me!"
                inputBody="This page contains a little more about me and what I like to do for fun. I aim to become a healthy perfectionist
                and I take great enjoyment from being able to develop my skills and beat challenges. I am also naturally curious about a 
                majority of topics in the world and always try to learn new information. Below are some of my hobbies and interests that I enjoy."
            />

            <ContainerText inputHead="Historical European Martial Arts (HEMA)"
                inputBody="Historical European Martial Arts reconstructs historical fighting styles through old manuals and treatises.
                    I have had the opportunity to join University of Lincoln's HEMA society and learn different longsword techniques.
                    
                    This was a great way to make friends during university. I was able to meet people who shared the same niche interest,
                    and we worked with University of Lincoln's fencing society on occasion, which was a fun way to see the differences and 
                    similarities in our combat practises.                     

                    I also was able to help organise public combat demonstrations to help raise awareness of the society and get experience sparring in a competition format. 
                    Such as helping promote and run our society's Fight Night demonstration, which used steel sparring swords and had multiple duelists 
                    rotating in and out of protective gear."
            />

            <PictureStandalone location={swordPicture} altTag="Two people sparring during a University of Lincoln HEMA demonstration" />


            <ContainerText inputHead="Videogames"
                inputBody="I find videogames to be relaxing and a very interesting medium of entertainment. In addition to being entertaining, 
                I was able to learn valuable lessons from videosgames growing up. Games like the MMORPG Runescape, taught me not only social
                skills to interact with people from different cultures, but also cyber safety practises from a young age due to being able to 
                exposure of phishing and scamming attempts in a low risk environment.                
                
                I was enamoured with what games could offer aside from just entertainment. During my ITGS IB Programme, I looked at
                whether Digital Game Based Learning was beneficial as an additional learning tool. Inspired by similar studies and 
                research on Piaget's theory of cognitive development, I conducted a study with students and commercial off the shelf 
                game based learning tools. While the benefits were minimal, I saw that it had potential to be a useful teaching aid.
                However, future game-based tools need to balance correctly between enjoyment and learning otherwise students are 
                prone to boredom or fixate on the fun aspect without learning any new information.
                
                Another exciting use of digital games is in its ability to act as a model for different areas. There are couple examples,
                such as studying virtual economies because of their features as partial representation of real world economies, or looking 
                at how MMO's are affected by infectious diseases to improve real world pandemic responses."
            />

            <ContainerText inputHead="Learning New Technology"
                inputBody="I am highly interested in new technology and their current possible applications. I like the idea of technology
                being an open door from a paper on Medieval Technology and Social Change by Lynn White Jr. Which suggests that while innovation 
                may be available, it is relient on contextual factors like culture, politics and economy to implement wide spread technological advances. 
                That is why I think its important to not only know about emerging technology, but to also ponder and investigate new applications for it
                in order to maximise the amount of potential technological advances we can achieve.
                
                Take for example augmented reality, there are numerous possible benefits for its usage in education, architecture and industrial use.
                One example I didn't imagine however was its millitary application, Microsoft is in development of IVAS for the US army which has shown
                incredible potential to improve night vision capabilities, but it is also currently facing challenges with its implementation
                and political roadblocks which may delay or halt current development. 
                
                Even if IVAS isn't adopted, any lessons learnt can be acted upon in future projects which take into account the reasons why it failed,
                such as recent tendancies by the US millitary industrial complex to go overbudget causing stricter funding management, or even a simpler 
                short term problem like a misalignment of expected end user requirements and what soldiers actually need from the IVAS."
            />

            <ContainerText inputHead="Dungeons and Dragons!"
                inputBody="I have been and will always will be an avid fan of fiction. Whether it is reading about fantastical plots from Joe Abercrombie 
                or the unique take on millitary science fiction presented by John G. Hemry. What's more exciting is being a part of that story.
                
                Having been a participant in multiple DND games, I now host a weekly session with my friends which has me keeping track of new story developments 
                and what my friends personal goals are in the game. I aim to make my players have fun by giving them tools to help solve problems in creative ways
                and reward them for approaching challenges in ways I never even considered. 
                
                Despite being relatively new to hosting DND games, I always try to improve each session. Nowadays, I've been using my knowledge of AI tools like StableDiffuse 
                to generate vivid and detailed images that enhances the gameplay experience.  I have also recently been working with a friend who helps balance out my 
                weaknesses in dialogue and world building to deliver a better game experience for the rest of the players."
            />

            <ContainerText inputHead="Others!"
                inputBody="Aside from these interests, I sometimes commit myself to other activities like badminton, pottery or game development.
                Despite not being particularly talented or skilled in these activities, I enjoy practising them. Oddly enough, I was able to use
                my knowledge in 3D modelling with tools like Blender for my digital robotics project, experiences like this gives me satisfaction
                and reinforces my drive to improve my skills in all aspects."
            />


        </Fragment>
    );
};

export default AboutContent;