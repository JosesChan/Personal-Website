import CardGeneral from "../CardGeneral";

function GalleryItems({data, animationStatus, endAnimation}){
    
    const style = (animationStatus?'animation-fade-in space-y-4 ':null);

    return (
        <ul className="space-y-12 box-border w-full">
        {
            data.map((value)=>{
                return (

                    <li className={style} onAnimationEnd={endAnimation} key={value.id}>     
                        <CardGeneral subClassName="space-y-5"> 
                            <img className="object-cover w-full h-auto" src={value.image} alt=""/>
                            <div className="space-y-2">
                                <h3>
                                    <a className="font-sans text-xs tracking-widest uppercase text-character transition-colors duration-300 underline underline-offset-4" style={{color:'rgb(200 0 0)'}} href={value.URL} target="_blank" rel="noopener noreferrer">
                                        {value.title}
                                    </a>                                    
                                </h3>                            
                                <p className="font-sans font-light text-sm leading-relaxed opacity-80">{value.description}</p>
                            </div>
                        </CardGeneral>
                    </li>

                )
            })
        }
        </ul>
    )
}

export default GalleryItems;