import React, { Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import CardGeneral from '../components/CardGeneral';
import blogPosts from '../data/blogPosts.json';

const BlogPostPage = () => {
    const { id } = useParams();
    const post = blogPosts.find((p) => p.id === parseInt(id, 10));

    if (!post) {
        return (
            <Fragment>
                <h1 className="invisible">Post Not Found</h1>
                <div className="inset-0 -z-10 h-full w-full px-5 pt-12 bg-radial-gradient-top">
                    <div className="page-column">
                        <CardGeneral subClassName="w-full text-center space-y-4">
                            <h2>Post not found</h2>
                            <p>The blog post you are looking for does not exist.</p>
                            <Link to="/Blog" className="text-blue-500 hover:underline">
                                ← Back to Blog
                            </Link>
                        </CardGeneral>
                    </div>
                </div>
            </Fragment>
        );
    }

    return (
        <Fragment>
            <h1 className="invisible">{post.title}</h1>
            <div className="inset-0 -z-10 h-full w-full px-5 pt-12 bg-radial-gradient-top">
                <div className="page-column">

                    <CardGeneral subClassName="w-full space-y-4">

                        {/* Back link */}
                        <Link to="/Blog" className="text-sm text-blue-500 hover:underline">
                            ← Back to Blog
                        </Link>

                        {/* Tags */}
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

                        {/* Title and date */}
                        <h2 className="text-2xl font-semibold">{post.title}</h2>
                        <p className="text-sm opacity-70">{post.date}</p>

                        {/* Content blocks */}
                        <div className="space-y-4 pt-2">
                            {post.content.map((block, index) => {
                                if (block.type === 'heading') {
                                    return <h3 key={`${block.type}-${index}`}>{block.text}</h3>;
                                }
                                return <p key={`${block.type}-${index}`}>{block.text}</p>;
                            })}
                        </div>
                    </CardGeneral>

                </div>
            </div>
        </Fragment>
    );
};

export default BlogPostPage;
