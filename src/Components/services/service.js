import React from 'react';
import style from './services.module.css';

const service = props => {
    return(
        <div className={["col-10 offset-1 offset-md-0 col-md-6 col-lg-3 d-flex flex-column align-items-center align-items-md-start text-md-start mb-3 mb-lg-0", style.thumbnail].join(' ')}>
            <img src={props.icon} className={["mb-3", style.icons].join(" ")} alt="services"/>
            <p className={["mb-3", style.title].join(" ")}>{props.title}</p>
            <p className="m-0">{props.body}</p>
        </div>
    )
}

export default service;