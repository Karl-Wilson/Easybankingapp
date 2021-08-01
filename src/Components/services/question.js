import React from 'react';
import style from './services.module.css';

const question = props => {
    return(
        <div className="col-10 offset-1 offset-md-0 col-md-6 d-flex flex-column align-items-md-start text-md-start mb-5">
            <h3 className={["mb-3", style.sectiontitle].join(' ')}> Why choose Easybank?</h3>
            <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </div>
    )
}

export default question;