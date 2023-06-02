function GalleryItem({data}){
    return (
        <div>
        {
            data.map((value)=>{
                const {id, image, title, description, tags, URL} = value;
                return (
                    <div key={id}>
                        <img class="h-auto max-w-full rounded-lg" src={image} alt=""/>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a href={URL}>Link to the project.</a>
                    </div>
                )
            })
        }
        </div>
    )
}

export default GalleryItem;