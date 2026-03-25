import CardGeneral from "../CardGeneral";

function BlogItems({ data, animationStatus, endAnimation }) {

    const style = (animationStatus ? 'animation-fade-in space-y-4 ' : null);

    return (
        <ul className="space-y-16 box-border">
            {
                data.map((post) => {
                    return (
                        <li className={style} onAnimationEnd={endAnimation} key={post.id}>
                            <CardGeneral subClassName="space-y-4">
                                <div>
                                    <h3>
                                        {post.URL ? (
                                            <a className="text-blue-500 underline font-medium text-lg" href={post.URL} target="_blank" rel="noopener noreferrer">
                                                {post.title}
                                            </a>
                                        ) : (
                                            <span className="font-medium text-lg">{post.title}</span>
                                        )}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                                </div>
                                <p>{post.summary}</p>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag, index) => (
                                        <span key={index} className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-character">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardGeneral>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default BlogItems;
