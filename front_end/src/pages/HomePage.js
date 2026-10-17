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
                      If I were to describe myself, I would say these are the two principles I follow the most.
                    </p>
                    <br/>
                    <p>
                      I've always looked up to people who can be so freely charitable. Even if I can't be as wonderfully spirited as they, 
                      I can try to be as kind and helpful to those I meet. Supporting friends and helping strangers when I can. As for learning, 
                      I believe being capable not only helps me solve problems for myself and others, but the act of exploring and discovery itself is invigorating.</p>
                    <br/>                    
                    <p>
                      As a result I tend to read alot, through lived experiences people have documented or through stories and fictions that reflect people's idea of the world. 
                      But the knowledge I value most, is often used and applied, making practical skills the most exciting to acquire.</p>         
            </CardGeneral>

        <div className="page-column">
            <CardGeneral>
                    <h2 className="mb-3">Current Projects - A Whole Load of Blah</h2>
                    <h3>Stories and Game Development</h3>
                    <br/>
                    <p>Games have always been a part of my life. Playing Runescape at the age of six, I found friends, community, and the love for inventive puzzles and engaging 'questing'.</p>
                    <br/>            
                    <p>
                      But I knew I wanted to make a game. There was this desire that always lulled me towards game development.
                      Learning to model objects with embarassingly questionable topology in Blender, alongside secondary school classroom OOP lessons using Java. 
                      Or sitting in game jams to hang around my game dev friends without the confidence to fully join in during my university years.
                    </p>
                    <br/>            
                    <p>
                      
                      Then I played through the wonderful and narratively rich game Disco Elysium. Falling in love with the ideas and storytelling presented by it.
                      Blending an absurdist world with a confluence of clashing ideas, all experienced while trying to solve a murder mystery through the lense of someone going through problems
                      that would make anyone empathise with. 
                      
                    </p>
                    <br/>            
                    <p>
                      Then I played through Signalis. Heartbreakingly sad, industrial grunge, mixed with analog futurism. A beautiful mix of inspirations used
                      to tell a story of love in a horrifying dystopian world. Connecting with me emotionally, seeing love persist through horrors of even supernaturally variety.

                      </p>
                    <br/>            
                    <p>
                      After these two games, I was determined to make my own, with a story from my own dreams that has haunted me since. Plaguing my days with thoughts of 
                      its world, its characters and its presentation. Learning from friends how anatomy plays a roll into drawing to better my organic models, and pocketing 
                      various people I've met to tap on later on for voice acting and sound design whenever I feel ready to present a more complete version of the world trapped within me.
                    </p>
                    <br/>            
                    <br/>            
                    <p>
                      The game itself is a large scale army battle simulator, set in a time period between intertransitionary period between medieval and renaissance. 
                      The atmosphere is of a wartorn Europe-esque environment, with generational struggle similar to the Hundred Years war.  
                    </p>
                    <br/>            
                    <p>
                      In the world, two warring states are locked in an endless struggle, where clashing ideals has led to mass violence.
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
                      Which informs how I cook, always trying to precisely replicate flavours of childhood food from Thailand and Hong Kong.
                      I love food from my home countries but I also love exploring culinarily. Learning to prepare and cure my own sausages or 
                      trying to make new dishes like Cubanos, regional moles, Feijoadas, Dauphinoise.  
                    </p>
                    <br/>       
                    <p>
                      I have also inadvertently fell in love with cocktail making. 
                      Figuring out the flavour profiles of drinks from my childhood and replicating them has become one of my favourite past times. 
                      While discovering new flavours through things like mezcal and categorising them also feeds into my enjoyment, 
                      always finding potential ingredients to add to my recipes. So far my favourites to make are a 
                      milkwashed HK milk tea martini and a carbonated grapefruit orange tequila sunset. 
                    </p>
                    <br/>       
                    <p>
                      As to how I got into perfumery, it was a chance encounter at the yearly bartender convention where I was given a sample of Jasmine perfume
                      which is no longer produced. Reawakening memories of jasmine garlands that are often found when travelling in Thailand. I found it beautiful,
                      and ponder endlessly on the idea of making perfumes. After some reading and many experiments, I can now make perfume that is wonderfully distinct 
                      and exactly what I love in a scent. I'm currently working on developing Vanilla, Chocolate, Coffee and Rose based scents
                      that follow IFRA 53 safety standards, and occassional gift them to friends.
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