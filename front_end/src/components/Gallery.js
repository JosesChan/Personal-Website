import React, { useState, useEffect } from "react";


import ContainerText from './ContainerText';
import TextButton from './TextButton';
import PictureStandalone from './PictureStandalone';
import selfPicture from '../imgs/SelfImage.jpg';


function Gallery(props){

    const projects = props.inputPictureArray;

    const [images,setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');
};  
            
export default Gallery;