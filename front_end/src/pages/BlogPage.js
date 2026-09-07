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
                            A loose collection of posts documenting the game's development. Probably just updates on architecture within Unity,
                            Blender 3D model updates, design patterns usage, or artwork for thegame.
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
