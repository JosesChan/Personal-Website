import React, { useState, useMemo, Fragment } from 'react';
import { Link } from 'react-router-dom';
import CardGeneral from '../components/CardGeneral';
import blogPosts from '../data/blogPosts.json';

const BlogPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTag, setActiveTag] = useState('All');

    // Derive unique tags from all posts
    const allTags = useMemo(() => {
        const tags = blogPosts.flatMap((post) => post.tags);
        return ['All', ...Array.from(new Set(tags))];
    }, []);

    // Filter posts by active tag and search query
    const filteredPosts = useMemo(() => {
        const query = searchQuery.toLowerCase();
        return blogPosts.filter((post) => {
            const matchesTag = activeTag === 'All' || post.tags.includes(activeTag);
            const matchesSearch =
                query === '' ||
                post.title.toLowerCase().includes(query) ||
                post.summary.toLowerCase().includes(query) ||
                post.tags.some((tag) => tag.toLowerCase().includes(query));
            return matchesTag && matchesSearch;
        });
    }, [searchQuery, activeTag]);

    return (
        <Fragment>
            <h1 className="invisible">Game Dev Blog</h1>
            <div className="inset-0 -z-10 h-full w-full px-5 pt-12 bg-radial-gradient-top">
                <div className="page-column">

                    <CardGeneral subClassName="w-full">
                        <h2 className="text-center md:text-3xl mb-2">Game Development Blog</h2>
                        <p className="text-center">
                            Notes and write-ups on my game development journey — Unity, C#, design patterns, and more.
                            Add a new post by appending an entry to <code className="font-mono text-sm bg-secondary px-1 rounded">src/data/blogPosts.json</code>.
                        </p>
                    </CardGeneral>

                    {/* Search bar */}
                    <div className="w-full">
                        <input
                            type="search"
                            aria-label="Search blog posts"
                            placeholder="Search by title, tag, or keyword…"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-secondary bg-tertiary text-character focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Tag filters */}
                    <div className="text-center">
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                type="button"
                                onClick={() => setActiveTag(tag)}
                                className={
                                    tag === activeTag
                                        ? 'mx-1 mb-2 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-600 text-white bg-blue-600 transition-colors duration-200'
                                        : 'mx-1 mb-2 px-4 py-1.5 rounded-full text-sm font-medium border border-secondary text-character bg-tertiary hover:border-blue-500 transition-colors duration-200'
                                }
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* Post list */}
                    {filteredPosts.length === 0 ? (
                        <CardGeneral subClassName="w-full text-center">
                            <p>No posts found matching your search.</p>
                        </CardGeneral>
                    ) : (
                        <ul className="space-y-6">
                            {filteredPosts.map((post) => (
                                <li key={post.id}>
                                    <CardGeneral subClassName="w-full space-y-3">
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 text-xs rounded-full bg-secondary text-character"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3>
                                            <Link
                                                to={`/Blog/${post.id}`}
                                                className="text-blue-500 hover:underline font-semibold text-lg"
                                            >
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p className="text-sm text-character opacity-70">{post.date}</p>
                                        <p>{post.summary}</p>
                                        <Link
                                            to={`/Blog/${post.id}`}
                                            className="inline-block text-sm text-blue-500 hover:underline"
                                        >
                                            Read more →
                                        </Link>
                                    </CardGeneral>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </Fragment>
    );
};

export default BlogPage;
