import CardGeneral from '../components/CardGeneral';
import { Fragment } from 'react';

const ProjectContent = () => {
    return (
        <Fragment>
            <h1 className="invisible">My Projects!</h1>
            <div className="page-column">
                <CardGeneral>
                    <h2>My projects!</h2>
                    <p>This page will probably house all my projects as opposed to the showcase on the Homepage</p>
                </CardGeneral>
            </div>
        </Fragment>
    );
};

export default ProjectContent;