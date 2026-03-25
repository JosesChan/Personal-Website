import React, { useState } from "react";
import blogPosts from "./BlogData.json";
import BlogItems from "./BlogItems";
import BlogTags from "./BlogTags";

const Blog = () => {

    const [activeTag, setActiveTag] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [animationFadeStatus, setFadeAnimationStatus] = useState(false);

    function changeAnimationStatus() {
        setFadeAnimationStatus((prev) => !prev);
    }

    function handleTagSelect(tag) {
        setActiveTag(tag);
        changeAnimationStatus();
    }

    function handleSearchChange(e) {
        setSearchQuery(e.target.value);
    }

    const filteredPosts = blogPosts.filter((post) => {
        const matchesTag = activeTag === "All" || post.tags.includes(activeTag);
        const query = searchQuery.toLowerCase();
        const matchesSearch =
            query === "" ||
            post.title.toLowerCase().includes(query) ||
            post.summary.toLowerCase().includes(query) ||
            post.tags.some((tag) => tag.toLowerCase().includes(query));
        return matchesTag && matchesSearch;
    });

    return (
        <div>
            {/* Search bar */}
            <div className="max-w-md mx-auto my-4">
                <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-2 rounded-full border border-neutral-400 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-gray-900 dark:text-white dark:border-gray-700 dark:focus:ring-blue-800"
                />
            </div>

            {/* Tag filter buttons */}
            <BlogTags dataJSON={blogPosts} activeTag={activeTag} onTagSelect={handleTagSelect} />

            {/* Blog post list */}
            <BlogItems
                data={filteredPosts}
                animationStatus={animationFadeStatus}
                endAnimation={changeAnimationStatus}
            />
        </div>
    );
};

export default Blog;
