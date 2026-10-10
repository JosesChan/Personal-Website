import React, {Fragment} from "react";
import PictureStandalone from '../components/PictureStandalone';
import selfPicture from '../imgs/IMG_02.jpg';
import Gallery from '../components/ProjectGallery/Gallery';
import CardGeneral from '../components/CardGeneral';
import CardPicture from '../components/CardPicture';


const Home = () => {
  return (
    <Fragment>
      <h1 className="invisible">Home Page</h1>
      <div className="page-background">
        <div className="page-column">
            <CardGeneral>
                    <h2 className="mb-3">Kindness and Curiosity</h2>
                    <p>
                      If I were to describe myself, I would say these are the two principles I cherish the most.
                      Constantly trying to adhere to the tenets I set myself.
                    </p>
                    <br/>
                    <p>
                      Helping others is one of life's greatest joys. I've always looked up to people who can be so freely charitable. 
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

        <div className="page-column">
            <CardGeneral>
                    <h2 className="mb-3">Current Projects - A Whole Load of Blah</h2>
                    <h3>Stories and Game Development</h3>
                    <p>Games have always been a part of my life. Playing Runescape at the sage of six, I found friends, community, and the love for inventive puzzles and engaging 'questing'.</p>
                    <br/>            
                    <p>I knew I wanted to make a game. When I was sixteen, I started to learn 3D modelling via Blender, yet I couldn't conceptualise how to pull all these developmental tools to form a game</p>
                    <br/>            
                    <p>It was only after studying Computer Science and experiencing narratively moving games, such as Disco Elysium and Signalis, that I committed to making a game.</p>
                    <br/>            
                    <p>
                      The game is a large scale unit battle simulator set in a pre-renaissance period during a war of the roses-esque environment.  
                      Using the setting as the background for a tragic love/revenge story thats haunts me until I make it real.
                    </p>
                    <br/>            
                    <p>
                      In this world there are two warring states locked in an eternal struggle. 
                      Mass violence is abound, with their political ideals in bloody conflict.
                    </p>
                    <p>
                      Between a corrupt oligarchical republic and a fervent egalitarian-esque crusade.  
                      Common people suffer, beneath the violence of armies or the grips of starvation.
                    </p> 
                    <br/>       
                    <p>And yet there is a girl, leading a mercenary band.</p>
                    <p>She builds a family amongst her motley crew and finds love in another.</p> 
                    <p>She inspires hope, and radiates warm kindness. </p>      
                    <br/>       
                    <p>Then she dies, never seeing her dreams of peace, her loved ones left to handle the grief.</p> 

                    <br/>       
                    <br/>       
                    <h3>Cocktails, Cooking and Perfumery</h3>
                    <p>
                      I find cooking deeply personal especially when I cook for others. 
                      Food is a part of culture, when I cook it is a reflection of myself and the environment I grew up in. 
                      Which informs how I cook, always trying to accurately recreate the taste of childhood Thai/Hong Kong food.
                      It is also equally influential when tasting food from other cultures. Not only is it exciting to see similar flavours
                      when looking at Thai and Latin American food, but also how the same ingredients gets prepared and used. For example, 
                      lime is prevalent in both cuisines, in Thailand its squeezed as a little garnish over Thai fried rice or used in cooking 
                      to add a sour refreshing component to sauces such as in the spicy sour pork dish moo manao. While

                       
                      figuring out the way one should make foods like Feijoadas and Mole to not only taste correct but also reflect
                      the regions it originates from.
                    </p>
                    <br/>       
                    <p>
                      I have also inadvertently fell in love with cocktail making. Figuring out the flavour profiles of drinks from my childhood
                      and replicating them has become one of my past times. While discovering new flavours through things like mezcal and categorising
                      them also feeds into my enjoyment, always finding potential ingredients to add to my recipes. So far my favourites to make are a 
                      milkwashed HK milk tea martini and a carbonated grapefruit orange tequila sunset.
                    </p>
                    <br/>       
                    <p>
                      As to how I got into perfumery, it was a chance encounter at the yearly bartender convention where I was given a sample of Jasmine perfume
                      which is no longer produced. Reawakening memories of jasmine garlands that are often found when travelling in Thailand. I found it beautiful,
                      and ponder endlessly on the idea of making perfumes. After some reading and many experiments, I now make perfume for me and my friends 
                      that is wonderfully distinct and exactly what I love in a scent. I'm currently working on developing Vanilla, Chocolate, Coffee and Rose based scents
                      that follow IFRA 53 safety standards.
                    </p>

                    <br/> 
                    <br/> 
                    <h3>Jewerly - Moons and Rings</h3>
                    <p>
                      I find fashion to be a sort of armour against the world. A sort of facade to show the world.
                      I am also not incredibly bold or exciting in my own fashion. But I find certain things beautiful and love to express it.
                      Through pendants devoted to my connection with the moon and myths relating to Diana and Artemis, or
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