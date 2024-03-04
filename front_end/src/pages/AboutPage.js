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
                        or explore new ideas in areas like history, philosophy and science. 
                    </p>
                    <br/>
                    <p>
                        Although I find knowledge to be empowering, I believe there is a rising problem with misinformation which I can't stand. 
                        This is especially important on topics that are rather contentious. 
                    </p>
                    <br/>
                    <p>
                        To minimise the risk of bias and inaccurate information. I rely on my own pre-existing knowledge and enjoy extensive fact 
                        checking of various conflicting sources. 
                    </p>
                    <br/>
                    <p>
                        This reliance on pre-existing knowledge emphasises my need to research and discover 
                        information, especially from sources that are neutral leaning and oriented to factual reports.
                    </p>
                </CardGeneral>
                <br/>
                <br/>
                <h2 className="text-center md:text-3xl">"In every person, a universe"</h2>
                <CardGeneral>
                    <h2>Habits and Principles</h2>
                    <p>
                        My main motivating force is curiosity, which pushes me to grow new skills and explore different ideas. 
                        I value all mediums of knowledge, from direct experience or written information. Accumlating a wealth of knowledge gives me 
                        great joy and provides even more when I get to use it, especially when trying to understand and relate to experiences of other humans.
                    </p> 
                    <br/>
                    <p>
                        Part of my quest for knowledge involves reflecting and critcising myself. It is therefore important to be flexible and open enough to 
                        take in new ideas. Through processes like assimilating new knowledge into my current understanding or by reshaping my preconceptions 
                        to accommodate new information. It is also just as important to recognise my own biases and bias of the sources to avoid drawing
                        a flawed understanding of a topic.
                    </p>
                </CardGeneral>
            </div>
        </Fragment>
    );
};

export default AboutContent;