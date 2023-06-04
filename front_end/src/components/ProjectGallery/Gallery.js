import React, { Fragment } from "react";
import selfPicture from '../../imgs/IMG_02.jpg';
import ProjectJSON from './GalleryData.js';
import GalleryItems from "./GalleryItems";
import Tags from "./GalleryTag";
import CardGeneral from "../CardGeneral";
import { useState } from "react";

const Gallery = () => {

    /*State hooks*/ 
    const [filteredData, setSelectedData] = useState(ProjectJSON);

    return (
        <CardGeneral className="max-w-screen-sm">            
                <Tags dataJSON={ProjectJSON} setSelectedData={setSelectedData}/>
                <GalleryItems data={filteredData} />
        </CardGeneral>
    );
};  
            
export default Gallery;