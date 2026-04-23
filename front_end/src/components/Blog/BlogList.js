import React, { useState, useMemo } from 'react';
import blogData from './BlogData';
import BlogCard from './BlogCard';

function BlogList() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTag, setActiveTag] = useState('All');

    // Collect unique tags from all posts
    const allTags = useMemo(() => {
        const tags = blogData.flatMap((post) => post.tags);
        return ['All', ...Array.from(new Set(tags))];
    }, []);

    // Filter posts by active tag and search query (case-insensitive)
    const filteredPosts = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        return blogData.filter((post) => {
            const matchesTag =
                activeTag === 'All' || post.tags.includes(activeTag);
            const matchesSearch =
                query === '' ||
                post.title.toLowerCase().includes(query) ||
                post.summary.toLowerCase().includes(query) ||
                post.content.toLowerCase().includes(query) ||
                post.tags.some((tag) => tag.toLowerCase().includes(query));
            return matchesTag && matchesSearch;
        });
    }, [searchQuery, activeTag]);

    return (
        <div>
            {/* Search input */}
            <div className="max-w-lg mx-auto my-8">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search posts..."
                    aria-label="Search blog posts"
                    className="w-full px-4 py-2 font-sans text-sm tracking-wide bg-tertiary border border-secondary text-character placeholder-character placeholder-opacity-30 focus:outline-none focus:border-ambient transition-colors duration-300"
                    style={{ '--tw-border-opacity': 1 }}
                />
            </div>

            {/* Tag filter buttons */}
            <div className="max-w-lg text-center my-4 mx-auto">
                {allTags.map((tag) => (
                    <button
                        type="button"
                        key={tag}
                        onClick={() => setActiveTag(tag)}
                        className={
                            tag === activeTag
                                ? 'mx-2 mb-3 px-4 py-1.5 font-sans text-xs tracking-widest uppercase transition-all duration-300'
                                : 'mx-2 mb-3 px-4 py-1.5 text-character border border-secondary font-sans text-xs tracking-widest uppercase opacity-40 hover:opacity-80 hover:border-red-700 transition-all duration-300'
                        }
                        style={
                            tag === activeTag
                                ? {
                                      color: 'rgb(var(--color-ambient))',
                                      borderWidth: '1px',
                                      borderStyle: 'solid',
                                      borderColor: 'rgb(var(--color-ambient))',
                                  }
                                : {}
                        }
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Results count */}
            <p className="max-w-lg mx-auto font-sans text-xs tracking-widest uppercase opacity-40 mb-6 text-center">
                {filteredPosts.length === 0
                    ? 'No posts found'
                    : `${filteredPosts.length} post${filteredPosts.length !== 1 ? 's' : ''}`}
            </p>

            {/* Blog post cards */}
            <ul className="space-y-12 box-border w-full">
                {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </ul>
        </div>
    );
}

export default BlogList;
