import CardGeneral from '../components/CardGeneral';
import { Fragment } from 'react';

const ContactPage = () => {
    return (
        <Fragment>
            <h1 className="invisible">Contact Page</h1>
            <div className="inset-0 -z-10 h-full w-full px-5 pt-12 bg-radial-gradient-top">
                <div className="page-column">
                    <CardGeneral>
                        <h2>Contact me</h2>
                        <p>Below are some of the ways you can get in touch with me.</p>
                    </CardGeneral>
                </div>
            </div>
        </Fragment>
    );
};

export default ContactPage;