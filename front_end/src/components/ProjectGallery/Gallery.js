import React, {useState} from "react";
import ProjectJSON from './GalleryData.js';
import GalleryItems from "./GalleryItems";
import Tags from "./GalleryTag";

const Gallery = () => {

    /*State hooks*/ 
    const [filteredData, setSelectedData] = useState(ProjectJSON);
    const [animationFadeStatus, setFadeAnimationStatus] = useState(false);
    
    function updateGallery(value) {
        setSelectedData((prev) => value);
        changeAnimationStatus();
    }

    function changeAnimationStatus(){
        setFadeAnimationStatus((prev) => !prev);
    }


    /*Reduce gallery size and turn into a more smaller format*/
    return (
            <div>     
                <Tags dataJSON={ProjectJSON} selectData={updateGallery}/>
                <GalleryItems data={filteredData} animationStatus={animationFadeStatus} endAnimation={changeAnimationStatus}/>
            </div>
    );
};  
            
export default Gallery;