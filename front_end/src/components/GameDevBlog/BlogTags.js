import React, { Fragment } from "react";

function BlogTags({ dataJSON, activeTag, onTagSelect }) {

    const uniqueTags = Array.from(new Set(dataJSON.flatMap((post) => post.tags)));
    const displayedTagOptions = ["All", ...uniqueTags];

    return (
        <Fragment>
            <div className="max-w-md text-center my-4 mx-auto">
                {
                    displayedTagOptions.map((tag, index) => {
                        return (
                            <button
                                type="button"
                                className={tag === activeTag ?
                                    "btn btn-outline-primary mx-2 text-capitalize text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 transition ease-out duration-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full md:text-base text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
                                    :
                                    "btn btn-outline-primary mx-2 text-capitalize text-gray-900 border border-neutral-400 hover:border-gray-700 transition ease-in duration-300 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full md:text-base text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"}
                                onClick={() => onTagSelect(tag)}
                                key={index}>
                                {tag}
                            </button>
                        );
                    })
                }
            </div>
        </Fragment>
    );
}

export default BlogTags;
