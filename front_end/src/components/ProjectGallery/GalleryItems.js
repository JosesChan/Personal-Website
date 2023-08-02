function GalleryItems({data, animationStatus, endAnimation}){
    
    const style = (animationStatus?'animation-fade-in':null);

    return (
        <ul className="box-border">
        {
            data.map((value)=>{
                return (
                    <li className={style} onAnimationEnd={endAnimation} key={value.id}>
                        <br/>
                        <br/> 
                        <img className="h-auto mx-auto max-w-full rounded-lg md:max-w-screen-sm md:max-h-screen-sm sm:max-w-screen-xs sm:max-h-screen-xs" src={value.image} alt=""/>
                        <br/>
                        <div className="box-content">
                            <h3>
                                <a className="text-blue-500 underline font-medium text-lg" href={value.URL} target="_blank" rel="noopener noreferrer">
                                    {value.title}
                                </a>
                            </h3>
                            <p>{value.description}</p>
                        </div>
                    </li>
                )
            })
        }
        </ul>
    )
}

export default GalleryItems;