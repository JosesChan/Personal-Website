import React, {Fragment} from "react";
import PictureStandalone from '../components/PictureStandalone';
import selfPicture from '../imgs/IMG_02.jpg';
import Gallery from '../components/ProjectGallery/Gallery';
import CardGeneral from '../components/CardGeneral';


const Home = () => {
  return (
    <Fragment>
      <h1 className="invisible">Home Page</h1>
      <div className="inset-0 -z-10 h-full w-full px-5 pt-12 bg-radial-gradient-top">
        <div className="page-column">
            <CardGeneral>
                    <h2 className="mb-3">Kindness and Curiosity</h2>
                    <p>
                      If I were to describe myself, I would say these are the two principles I cherish the most.
                      Constantly trying to adhere to the tenets I set myself.
                    </p>
                    <br/>
                    <p>
                      Helping others is one of life's greatest joys. I've always looked up to people who can be so charitable even in spite of difficult circumstances. 
                      Even if I can't be as wonderfully spirited as they, I can try to be as kind and helpful to those I meet. 
                      Supporting friends and helping strangers when I can.
                    </p>
                    <br/>
                    <p>Another joy for me is learning. Being capable not only helps me solve problems for myself and others, but the act of exploring and discovery itself is invigorating.</p>
                    <br/>                    
                    <p>
                      As a result I tend to read alot, through lived experiences people have documented or through stories and fictions that reflect people's idea of the world. 
                      But the knowledge I value most, is often used and applied, making practical skills the most exciting to acquire.</p>         
            </CardGeneral>

            <CardGeneral>
                    <h2 className="mb-3">Current Projects - A Whole Load of Blah</h2>
                    <h3>Stories and Game Development</h3>
                    <p>Games have always been a part of my life. Playing Runescape at the sage of six, I found friends, community, and the love for inventive puzzles and engaging 'questing'.</p>
                    <br/>            
                    <p>Since then, I knew I wanted to make a game. At the age of sixteen, I started to learn 3D modelling via Blender, yet I wasn't ready to use all the tools to make a game yet.</p>
                    <br/>            
                    <p>It was only after studying Computer Science and experiencing deeply personal and emotionally captivating games, like Disco Elysium and Signalis, that I figured out what story I need to tell.</p>
                    <br/>            
                    <p>
                      The medium for my game is part tactical unit battle simulator, part continental logistics resource management. 
                      Focusing less on realism, and pushing for more immersion to a tragic love story set in a hundred year war landscape.
                    </p>
                    <br/>            
                    <p>
                      Two warring states are in a bitter struggle. Ideals and beliefs are in a bloody conflict. Mass violence is abound,
                      with innocent people suffering at the behest of vengeful leaders and the lack of no easy resolution.
                    </p> 
                    <br/>       
                    <p>And yet two people find love.</p>
                    <p>They form friendships.</p> 
                    <p>There is hope. </p>      
                    <br/>       
                    <p>Then one dies. </p> 
                    <p>The other is consumed by grief and driven to revenge. </p> 
                    <p>Is there still hope? </p> 

                    <br/>       
                    <br/>       
                    <h3>Cocktails, Cooking and Perfumery</h3>
                    <p>
                      I find cooking deeply personal and very vulnerable when I cook for others. 
                      I view food as a culture, when I cook it is a reflection of myself, of the environment I grew up in. 
                      And so when I taste other cuisines, its an exciting experience to see how different ingredients are used and to what effect.
                      Often cooking dishes again and again to capture accurately capture their flavours.
                    </p>
                    <br/>       
                    <p>
                      While in the cocktail scene that I have inadvertently found myself in, it is a similar experience.
                      Oft times bartenders have recreated childhood dishes in a drink format. Using similar techniques such as sous vide infusions
                      and fat washing to create whimsically fun and elegantly balanced cocktails.
                    </p>
                    <br/>       
                    <p>
                      In this rush of learning, I found myself driven more so to explore the culinary space, launching my skills from simple skills like making sauces
                      and shaping Raviolli, to more niche activities like using nitrates to cure salami which is then hang dried in a minifridge.
                    </p>
                    <br/>       
                    <p>
                      As to how I got into perfumery, it was a chance encounter at the yearly bartender convention where I was given a sample of Jasmine perfume
                      which is no longer produced. Reawakening memories of garlands made out of jasmine that is so often found in Thailand. I found it beautiful,
                      and ponder endlessly on the idea of making perfumes. Until I read enough and experimented enough to make my own perfume distinct in character 
                      and exactly what I love wearing. Now following IFRA 51 standards, I make perfumes for myself and for my friends to enjoy.
                    </p>

                    <br/> 
                    <br/> 
                    <h3>Jewerly - Moons and Rings</h3>
                    <p>
                      I find fashion to be a sort of armour against the world. A defining facade to show the world.
                      I am also not incredibly bold or vibrant in my fashion. But what I find beautiful is what I want to portray.
                      Whether its a deep connection to the moon and myths with pendants dedicated to a Greek combination of Diana and Artemis, or
                      through rings that evoke nature and vivid florals. 
                    </p>
                    <br/>       
                    <p>
                      There are two pieces I wish desperately to make, the first is a modern take on gimmal and puzzle rings as a proposal/partner ring. 
                      The second is a recreation of the Kritonios Crown that pulled me into this world of jewelry.
                    </p>
                        
            </CardGeneral>

          

        </div>
      </div>


      {/* Gallery Section 
      <div className="top-0 z-[-2] h-full w-full bg-page">
        <div className="justify-center items-center md:max-w-screen-md sm:max-w-xs flex container mx-auto pb-36 px-5">
          <Gallery/>
        </div>
      </div>
      */}

    </Fragment>
  );
};

export default Home;