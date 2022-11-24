
const CardGeneral = () => {
    return(
        <div className="p-6 bg-tertiary dark:bg-gray-900 rounded-xl shadow-lg flex items-center space-x-4">
            <div>
                <div className="text-xl font-medium text-large">{props.inputHead}</div>
                    <p className="text-medium">{props.inputText}</p>
            </div>
        </div>
    );
};  
            
export default CardGeneral;