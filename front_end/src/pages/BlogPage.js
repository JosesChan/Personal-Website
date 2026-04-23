import CardGeneral from '../components/CardGeneral';
import BlogList from '../components/Blog/BlogList';
import { Fragment } from 'react';

const BlogPage = () => {
    return (
        <Fragment>
            <h1 className="invisible">Game Development Blog</h1>
            <div className="inset-0 -z-10 h-full w-full px-5 pt-12 bg-radial-gradient-top">
                <div className="page-column">
                    <CardGeneral>
                        <h2>Game Dev Blog</h2>
                        <p>
                            A collection of posts documenting my game development journey — covering Unity architecture,
                            Blender 3D modelling, design patterns, and the collaborative world-building behind the
                            story-driven 2D real-time strategy game I'm building with a partner.
                            Use the search bar or tags below to find topics that interest you.
                        </p>
                    </CardGeneral>

                    <BlogList />
                </div>
            </div>
        </Fragment>
    );
};

export default BlogPage;
