function ContainerText(props){
    return (

        <div className="p-4 bg-tertiary rounded-xl shadow-lg flex items-center space-x-4">
            <div>
                <div className="text-xl font-medium text-large">{props.inputHead}</div>
                    <p className="text-medium">{props.inputBody}</p>
            </div>
        </div>

    );
};  

export default ContainerText;