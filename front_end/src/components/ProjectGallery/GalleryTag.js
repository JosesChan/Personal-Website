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
            <div className="max-w-lg text-center my-8 mx-auto">
            {
            displayedTagOptions.map((tags, index)=>{
                return (
                    <button type="button" 
                        className={tags === activeTag?
                            "mx-2 mb-3 px-4 py-1.5 font-sans text-xs tracking-widest uppercase transition-all duration-300" 
                            : 
                            "mx-2 mb-3 px-4 py-1.5 text-character border border-secondary font-sans text-xs tracking-widest uppercase opacity-40 hover:opacity-80 hover:border-red-700 transition-all duration-300"}
                        style={tags === activeTag ? {color:'rgb(200 0 0)', borderWidth:'1px', borderStyle:'solid', borderColor:'rgb(200 0 0)'} : {}}
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