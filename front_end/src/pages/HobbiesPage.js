import CardGeneral from '../components/CardGeneral';
import { Fragment } from 'react';
import PictureStandalone from '../components/PictureStandalone';
import dndPicture from '../imgs/IMG_14.jpg'
import swordPicture from '../imgs/IMG_1955.jpg';

const HobbiesContent = () => {
    return (
        <Fragment>
            <h1 className="invisible">Hobbies Page</h1>
            <div className="inset-0 -z-10 h-full w-full px-5 pt-12 bg-radial-gradient-top">
                <div className="page-column">
                <h2 className="text-center md:text-3xl">My Hobbies</h2>

                    <CardGeneral>
                        <h2>Why I love learning</h2>
                        <p>
                            I believe that its good to have a wide variety of interests. Aside from enjoyment, I am able 
                            to learn various transferable skills, keeping myself both mentally and physically active. 
                            Below are some of my hobbies that I love dedicating my time towards.
                        </p>
                    </CardGeneral>

                    <CardGeneral>
                        <h2>Historical European Martial Arts (HEMA)</h2>
                        <br/>
                        
                        <h3>What is HEMA?</h3>
                        <p>
                            Historical European Martial Arts reconstructs historical fighting styles through studying surviving fencing manuals and treatises. 
                            I joined the University of Lincoln HEMA society in 2019, and had a lot of fun not only sparring with my colleagues 
                            while making friends with people who shared similar interests as me.
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
                            I find videogames to be relaxing and interesting medium of entertainment. I was able to learn valuable lessons from videosgames growing up. 
                            MMORPG games like Runescape, taught me not only social skills to interact with people from different cultures, but also cyber safety practises 
                            from a young age due to exposure of phishing and scamming attempts in a low risk environment.
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
                        
                        <h3>Game Development and 3D Modelling</h3>
                        <p>
                            My interests in videogames has always made me curious in making a game myself. 
                        </p>
                        <br/>
                        <p>
                            Throughout my life, I have been building up the skills to develop my own game. 
                            Having used Blender, a 3D modelling software, to sculpt and model various items like 
                            swords and planes for fun.
                        </p>
                        <br/> 
                        <p>
                            I have also used my proficiency in Blender to create amateur animations for my highschool project,
                            and for modelling components for my university's robotics module. 
                        </p>
                        <br/>
                        <p>
                            Most recently, I have been using my time to practise my development skills in Unity. 
                            Practising object oriented design patterns like abstract factory or mediator, and focusing 
                            on creating loose coupling when possible through SOLID principles. Currently, I'm working  
                            with a partner to create a story-driven 2D real time strategy game.
                        </p>
                    </CardGeneral>


                    <CardGeneral>
                        <h2>Fiction and Fantasy</h2>
                        <br/>
                        <h3>Fantasy Books</h3>
                        <p>
                            I am an avid fan of fiction with my most recent read being Piranesi by Susanna Clarke. I love reading about the grim and gritty 
                            circumstances that characters, made by Joe Abercrombie, find themselves in, or vivid descriptions of space combat presented 
                            by John G. Hemry in his millitary science fiction novels. This love of stories extends into mythology as well, having spent my early years 
                            reading tales of Euripdes, the fall of Troy and the Greek Pantheon. 
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
            </div>
        </Fragment>
    );
};

export default HobbiesContent;