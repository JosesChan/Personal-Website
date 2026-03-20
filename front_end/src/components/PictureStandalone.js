function PictureStandalone(props){
    return (
            <img className="w-full h-auto object-cover" src={props.location} alt={props.altTag}/>
    );
};  
            
export default PictureStandalone;