import React, {Fragment} from "react";

function Tags({dataJSON, selectData}){

    // Statehooks
    const uniqueTags = Array.from(new Set(dataJSON.flatMap((projectObject) => projectObject.tags))); // Get only unique tags from data
    // Add an All tag to allow selecting all JSON objects
    const displayedTagOptions= ["All", ...new Set(uniqueTags)]; 
    const [activeTag, setTagState] = React.useState(null); // Statehook to keep track of which tag we're currently using
    
    // Updates statehook based on currently selected tag
    const filterTags = (inputTag) => {
        
        // If all then store all JSON objects in statehook (Note: Investigate what the object limit is until performance degradation)
        if(inputTag==="All") {
            selectData(dataJSON);
            return;
        }

        // Filter and update statehook to store JSON objects that match the tag 
        const filteredObjects = inputTag ? dataJSON.filter((projectObject) => projectObject.tags.includes(inputTag)) : dataJSON;
        selectData(filteredObjects);
    }

    // Component which creates multiple buttons that filter based on category
    return(
        <Fragment>
            <div className="max-w-md text-center my-4 mx-auto">
            {
            displayedTagOptions.map((tags, index)=>{
                return (
                    <button type="button" 
                        // Change styling based on whether this project tag is the currently active one
                        className={tags === activeTag?
                            "btn btn-outline-primary mx-2 text-capitalize text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 transition ease-out duration-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full md:text-base text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800" 
                            : 
                            "btn btn-outline-primary mx-2 text-capitalize text-gray-900 border border-neutral-400 hover:border-gray-700 transition ease-in duration-300 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full md:text-base text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"}
                        onClick={()=> {filterTags(tags); setTagState(tags);}} 
                        key={index}>
                        {tags} 
                    </button>                    
                )
            })
            }
            </div>
        </ Fragment>
    )
}

export default Tags;