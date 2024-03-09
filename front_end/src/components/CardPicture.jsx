const CardGeneral = (props) => {
    return(
        
        <div className="flex flex-row space-x-4">
            <img className="mx-auto w-42 h-56 rounded-lg" src={props.location} alt={props.altTag}/> 

            <div className={props.className ? "p-6 bg-tertiary rounded-xl shadow-2xl" + props.className : "p-6 bg-tertiary rounded-xl shadow-lg" }>
                <div className={props.subClassName}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};  
            
export default CardGeneral;