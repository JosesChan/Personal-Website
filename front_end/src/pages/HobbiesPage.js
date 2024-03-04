import CardGeneral from '../components/CardGeneral';
import { Fragment } from 'react';
import PictureStandalone from '../components/PictureStandalone';
import dndPicture from '../imgs/IMG_14.jpg'
import swordPicture from '../imgs/IMG_1955.jpg';

const HobbiesContent = () => {
    return (
        <Fragment>
            <h1 className="invisible">Hobbies Page</h1>
            <div className="page-column">
            <h2 className="text-center md:text-3xl">My Hobbies</h2>

                <CardGeneral>
                    <h2>Purpose for Practicing</h2>
                    <p>
                        I believe that its good to have a wide variety of interests since its a good opportunity to practise transferable 
                        skills and provides a beneficial effect to mental health. Below are some of my hobbies that I find particularly 
                        exciting and fulfilling, especially after overcoming a substantial roadblock in improvement.
                    </p>
                </CardGeneral>

                <CardGeneral>
                    <h2>Historical European Martial Arts (HEMA)</h2>
                    <br/>
                    
                    <h3>What is HEMA?</h3>
                    <p>
                        Historical European Martial Arts reconstructs historical fighting styles through old manuals and treatises. 
                        I joined the University of Lincoln HEMA society in 2019 and had a lot of fun not only sparring with my colleagues
                        but making friends with good people who shared similar interests as me.
                    </p>                    
                    <br/>
                    <PictureStandalone location={swordPicture} altTag="Two people sparring during a University of Lincoln HEMA demonstration"/>
                    <br/>
                    <p>
                        I also was able to help organise public combat demonstrations to help raise awareness of the society and get experience sparring in a competition format. 
                        Helping promote and run our society's Fight Night demonstration, which used steel sparring swords and had multiple duelists 
                        rotating in and out of protective gear.
                    </p>
                    <br/>
                    <p>
                        Its incredibly exciting to see people using techniques from fencing manuals written hundreds of years ago in action.
                        I personally love watching two skilled fighters used techniques that are hundreds of years old, developed by masterful 
                        fencers like Fiore dei Liberi and Johannes Liechtenauer.
                    </p>
                </CardGeneral>


                <CardGeneral>
                    <h2>Videogames</h2>

                    <h3>Early experiences</h3>                    
                    <p>
                        I find videogames to be relaxing and a very interesting medium of entertainment. I was able to learn valuable lessons from videosgames growing up. 
                        Games like the MMORPG Runescape, taught me not only social skills to interact with people from different cultures, but also cyber safety practises 
                        from a young age due to exposure of phishing and scamming attempts in a low risk environment.

                        I also enjoy noticing the similarities between Software Development and Game Development. Which I find particularly interesting since both implement 
                        concepts like Object Oriented Programming, UI/UX design or development methodologies like Agile or Scrum, but differ in the actual end product created.
                    </p>
                    <br/>
                    
                    <h3>Educational Teaching Tool</h3>     
                    <p>
                        I was curious with what games could offer aside from just entertainment. During my ITGS IB Programme, I looked at
                        whether Digital Game Based Learning was beneficial as an additional learning tool. Inspired by similar studies and 
                        research on Piaget's theory of cognitive development, I conducted a study with students and commercial off the shelf 
                        game based learning tools. While the benefits were minimal, I saw that it had potential to be a useful addition as a 
                        teaching aid but needs to strike the right balance between fun and information to actually provide any benefit.
                    </p>
                    <br/>
                      
                    <h3>3D Modelling</h3>
                    <p>
                        I like to play around making 3D models in Blender in order to build up the skills and resources for a cool project like 
                        making a game. I practise techniques like retopology and sculpting by working it into my activities in highschool, 
                        recreating historical patterns of swords in my freetime while rendering animations for my highschool project. My most 
                        recent usage of Blender was for creating digital models for my team software engineering project in robotics which used 
                        inverse kinematics, sensors and pathfinding to build a digital prototype.
                    </p>
                </CardGeneral>


                <CardGeneral>
                    <h2>Fiction and Fantasy</h2>
                    <br/>
                    <h3>Fantasy Books</h3>
                    <p>
                        I am an avid fan of fiction. I love reading about the grim and gritty circumstances that characters made by Joe Abercrombie 
                        find themselves in, or vivid descriptions of space combat presented by John G. Hemry in his millitary science fiction novels.
                        This extends into mythology as well, having spent my early years reading tales of Euripdes, Troy and the Greek Pantheon.
                    </p>
                    <br/>
                    <h3>Dungeons and Dragons</h3>
                    <p>
                        Having been a participant in multiple DND games, I now host a weekly session with my friends. Having gone through many iterations 
                        of improvements, our current game now uses the virtual tabletop software Foundry. My players connect to my device set up to host 
                        Foundry using ports exposed with ngrok. We use many packages made by great developers passionate in the DND sphere, which allow us 
                        to customise scripts and automate mundane tasks in Javascript to aid in running the story.
                    </p>
                    <br/>
                    <PictureStandalone location={dndPicture} altTag="Image of Foundry DND software used to host online games, multiple tokens of characters on a map"/>
                    <br/>
                    <p>
                        Despite being relatively new to hosting DND games, I always try to improve each session. I've been using my knowledge of AI tools like StableDiffuse 
                        to generate detailed images to help players visualise a scene. I now also work with a friend to create an overarching narrative in a fictional world 
                        that we have created and detailed.
                    </p>
                </CardGeneral>


            </div>
        </Fragment>
    );
};

export default HobbiesContent;