function GalleryItems({data, animationStatus, endAnimation}){
    
    const style = (animationStatus?'animation-fade-in':null);

    return (
        <div>
        {
            data.map((value)=>{
                return (
                    <div className={style} onAnimationEnd={endAnimation} key={value.id}>
                        <img className="h-auto max-w-full rounded-lg" src={value.image} alt=""/>
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                        <a className="blue" href={value.URL} target="_blank">Link to the project.</a>
                    </div>
                )
            })
        }
        </div>
    )
}

export default GalleryItems;