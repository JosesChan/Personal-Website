import { Fragment } from 'react';
import CardGeneral from '../components/CardGeneral';

const AboutContent = () => {
    return (
        <Fragment>
            <h1 className="invisible">About Page</h1>
            <div  className="page-column">
            <h2 className="text-center md:text-3xl">A little more about me!</h2>
                <CardGeneral>
                    <h2>Who am I?</h2>
                    <p>
                        I am a graduate computer scientist who loves solving problems in a wide variety of complex domains. 
                        I feel ecstatic to be living in an age of information, where we are able to deepen our existing knowledge 
                        or explore new ideas through the internet. 
                    </p>
                    <br/>
                    <p>
                        This freedom of information perfectly suits my curious nature. Allowing me to pursue knowledge in areas  
                        such as history, philosophy, while maintaining my specialty in computer science.
                    </p>
                    <br/>
                    <p>
                        However, there exists a problem with rampant misinformation on the internet.  
                        To minimise the risk of bias and inaccurate information, 
                        I rely on my own pre-existing knowledge combined with the approach of "Trust, but verify". 
                    </p>
                    <br/>
                    <p>
                        This reliance on pre-existing knowledge, pushes me to research and discover 
                        new information faster than public consciousness, ideally using sources that are neutral leaning and written as formal reports.
                    </p>
                </CardGeneral>
                <br/>
                <br/>
                <h2 className="text-center md:text-3xl">"In every person, a universe"</h2>
                <h3 className="text-center md:text-2xl">- Elie Wiesel</h3>
                <CardGeneral>
                    <h2>Learning and Reflection</h2>
                    <p>
                        My main motivator is curiosity, which pushes me to grow new skills and explore different ideas. 
                        I value all mediums of knowledge, from first hand experience to written accounts. The mere act of accumlating a wealth of knowledge gives me 
                        great joy. Especially if I can apply what I've learned to solve problems and help others.
                    </p> 
                    <br/>
                    <p>
                        Part of my quest for knowledge involves reflecting and critcising what I know to determine the truth. 
                        Making it quite important for me to be flexible and open to new ideas that contradict my own. 
                        Therefore, when I learn a contradictory idea, I try to remain aware of my biases and see if it matches my own 
                        world view, or be willing to adjust my own flawed understanding if I can't comprehend it.
                    </p>
                </CardGeneral>
            </div>
        </Fragment>
    );
};

export default AboutContent;