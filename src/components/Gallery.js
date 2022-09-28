import ContainerText from './ContainerText';
import TextButton from './TextButton';
import PictureStandalone from './PictureStandalone';
import selfPicture from '../imgs/SelfImage.jpg';


function Gallery(props){

    const projects = props.inputArray;

    const [images,setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

};  
            
export default Gallery;