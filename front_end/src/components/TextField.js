const TextField = (props) => {
    return (
        <div>
            <label for={props.element_id} class="block mb-2 text-sm font-medium text-medium">{props.element_text}</label>
            <input type={props.type} id={props.element_id} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder={props.placeholder}
            defaultValue={props.value_input}
            onChange={props.statehook}
            />
        </div>
    );
};

export default TextField;