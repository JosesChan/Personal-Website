import CardGeneral from '../components/CardGeneral';
import { Fragment } from 'react';
import Blog from '../components/GameDevBlog/Blog';

const GameDevBlogContent = () => {
    return (
        <Fragment>
            <h1 className="invisible">Game Dev Blog Page</h1>
            <div className="inset-0 -z-10 h-full w-full px-5 pt-12 bg-radial-gradient-top">
                <div className="page-column">
                    <h2 className="text-center md:text-3xl">Game Dev Blog</h2>

                    <CardGeneral>
                        <h2>My Game Development Journey</h2>
                        <p>
                            Game development has been a long-standing passion of mine. From early experiments
                            with Blender for 3D modelling to building projects in Unity and Godot, I document
                            my progress, lessons learned, and thoughts here. Use the search bar or topic tags
                            below to find posts that interest you.
                        </p>
                    </CardGeneral>

                    <Blog />
                </div>
            </div>
        </Fragment>
    );
};

export default GameDevBlogContent;
