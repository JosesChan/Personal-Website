import CardGeneral from '../components/CardGeneral';
import { Fragment } from 'react';

const HobbiesContent = () => {
    return (
        <Fragment>
            <h1 className="invisible">Hobbies Page</h1>
            <div className="page-column">
                <CardGeneral>
                    <h2>My Hobbies</h2>
                    <p>This a generic page that will probably house some sort of updates on my current hobbies</p>
                </CardGeneral>
            </div>
        </Fragment>
    );
};

export default HobbiesContent;