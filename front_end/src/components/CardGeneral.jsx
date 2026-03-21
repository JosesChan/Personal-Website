//{`p-6 bg-tertiary dark:bg-gray-900 rounded-xl shadow-lg flex items-center space-x-4 ${this.props.styleName}`}
const CardGeneral = (props) => {
    return(
        <div className={props.className ? "p-7 bg-tertiary border border-secondary border-l-2 flex items-start space-x-4 " + props.className : "p-7 bg-tertiary border border-secondary border-l-2 flex items-start space-x-4"}
             style={{borderLeftColor: 'rgb(200 0 0)'}}>
            <div className={props.subClassName ? props.subClassName + " w-full" : "w-full"}>
                {props.children}
            </div>
        </div>
    );
};  
            
export default CardGeneral;