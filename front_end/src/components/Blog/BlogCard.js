import React, { useState } from 'react';
import CardGeneral from '../CardGeneral';

function BlogCard({ post }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <li>
            <CardGeneral subClassName="space-y-4">
                {/* Header */}
                <div className="space-y-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="font-sans text-xs tracking-widest uppercase opacity-50">
                            {post.date}
                        </span>
                        <span className="font-sans text-xs tracking-widest uppercase opacity-50">
                            {post.readTime}
                        </span>
                    </div>
                    <h3 style={{ color: 'rgb(var(--color-ambient))' }}>
                        <span className="font-sans text-xs tracking-widest uppercase transition-colors duration-300">
                            {post.title}
                        </span>
                    </h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-0.5 font-sans text-xs tracking-widest uppercase border border-secondary opacity-60"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Summary */}
                <p className="font-sans font-light text-sm leading-relaxed opacity-80">
                    {post.summary}
                </p>

                {/* Expanded content */}
                {expanded && (
                    <p className="font-sans font-light text-sm leading-relaxed opacity-70 border-t border-secondary pt-4 mt-2">
                        {post.content}
                    </p>
                )}

                {/* Read more / Read less toggle */}
                <button
                    onClick={() => setExpanded((prev) => !prev)}
                    aria-expanded={expanded}
                    className="font-sans text-xs tracking-widest uppercase transition-colors duration-300 opacity-60 hover:opacity-100"
                    style={{ color: 'rgb(var(--color-ambient))' }}
                >
                    {expanded ? '— Read less' : '+ Read more'}
                </button>
            </CardGeneral>
        </li>
    );
}

export default BlogCard;
