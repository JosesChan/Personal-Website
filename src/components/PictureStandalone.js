function PictureStandalone(props){
    return (
            <img className="mx-auto w-42 h-56 rounded-lg" src={props.location} alt={props.altTag}/>
    );
};  
            
export default PictureStandalone;