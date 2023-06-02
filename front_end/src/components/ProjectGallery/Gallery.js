import React, { Fragment } from "react";
import selfPicture from '../../imgs/IMG_02.jpg';
import ProjectJSON from './GalleryData.js';
import GalleryItem from "./GalleryItem";
import Tags from "./GalleryTag";
import { useState } from "react";

const Gallery = () => {

    /*State hooks*/ 
    const [filteredData, setSelectedData] = useState(ProjectJSON);

    return (
        <Fragment>            
            <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <Tags dataJSON={ProjectJSON} setSelectedData={setSelectedData}/>
                <GalleryItem data={filteredData} />

            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={selfPicture} alt=""/>
                </div>

            </div>
        </Fragment>
    );
};  
            
export default Gallery;