import CardGeneral from '../components/CardGeneral';
import { Fragment } from 'react';

const ContactPage = () => {
    return (
        <Fragment>
            <h1 className="invisible">Contact Page</h1>
            <div className="page-column">
                <CardGeneral>
                    <h2>Contact me</h2>
                    <p>You can find me through the following sources</p>
                </CardGeneral>
            </div>
        </Fragment>
    );
};

export default ContactPage;