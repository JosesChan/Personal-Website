import React, { Fragment, useEffect, useState } from "react";
import selfPicture from '../../imgs/IMG_02.jpg';
import ProjectJSON from './GalleryData.js';
import GalleryItems from "./GalleryItems";
import Tags from "./GalleryTag";
import CardGeneral from "../CardGeneral";


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

    return (
        <CardGeneral className="max-w-screen-sm">            
                <Tags dataJSON={ProjectJSON} selectData={updateGallery}/>
                <GalleryItems data={filteredData} animationStatus={animationFadeStatus} endAnimation={changeAnimationStatus}/>
        </CardGeneral>
    );
};  
            
export default Gallery;