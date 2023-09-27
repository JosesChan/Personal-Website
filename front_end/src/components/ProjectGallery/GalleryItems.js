import CardGeneral from "../CardGeneral";

function GalleryItems({data, animationStatus, endAnimation}){
    
    const style = (animationStatus?'animation-fade-in space-y-2 md:flex w-1/3 md:flex-wrap':null);

    return (
        <ul className="box-border">
        {
            data.map((value)=>{
                return (
                    <li className={style} onAnimationEnd={endAnimation} key={value.id}>     
                        <CardGeneral>
                            <h3>
                                <a className="text-blue-500 underline font-medium text-lg" href={value.URL} target="_blank" rel="noopener noreferrer">
                                    {value.title}
                                </a>                                    
                            </h3>
                             
                            <img className="object-scale-down h-auto mx-auto max-w-full rounded-lg md:max-w-screen-sm md:max-h-screen-sm sm:max-w-screen-xs sm:max-h-screen-xs" src={value.image} alt=""/>

                            <p>{value.description}</p>
                        </CardGeneral>
                    </li>
                )
            })
        }
        </ul>
    )
}

export default GalleryItems;