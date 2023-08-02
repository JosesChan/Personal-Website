//{`p-6 bg-tertiary dark:bg-gray-900 rounded-xl shadow-lg flex items-center space-x-4 ${this.props.styleName}`}
const CardGeneral = (props) => {
    return(
        <div className={props.className ? "p-6 bg-tertiary rounded-xl shadow-lg flex items-center space-x-4 " + props.className : "p-6 bg-tertiary rounded-xl shadow-lg flex items-center space-x-4" }>
        <div>
                {props.children}
            </div>
        </div>
    );
};  
            
export default CardGeneral;