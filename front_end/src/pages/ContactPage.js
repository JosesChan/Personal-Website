import CardGeneral from '../components/CardGeneral';
import { Fragment } from 'react';

const ContactPage = () => {
    return (
        <Fragment>
            <h1 className="invisible">Contact Page</h1>
            <div className="page-column">
                <CardGeneral>
                    <h2>Contact me</h2>
                    <p>Below are some of the ways you can get in touch with me.</p>
                </CardGeneral>
            </div>
        </Fragment>
    );
};

export default ContactPage;