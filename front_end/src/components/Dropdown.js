const Radio = (props) => {
    return (
        <div class="flex items-center mb-4">
            <input 
            id={props.element_id} 
            type={props.type} 
            defaultValue={props.value_input} 
            name={props.element_name}
            checked={props.checked_if}
            onChange={props.statehook}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
            />
            <label for="default-radio-1" class="ml-2 text-sm font-medium text-black-900">{props.value_input}</label>
        </div>
                
    );
};

export default Radio;