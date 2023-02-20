
const LinkBar = () => {
    return(
        <div className="p-6 bg-tertiary dark:bg-gray-900 rounded-xl shadow-lg flex items-center space-x-4">
            {props.inputs}
        </div>
    );
};  
            
export default LinkBar;