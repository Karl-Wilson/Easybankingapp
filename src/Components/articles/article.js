import React from 'react';
import style from './article.module.css';
import Navlink from '../nav/navlink';

const article = props =>{
    return(
        <div className={["col-10 offset-1 col-md-3 offset-md-0 d-flex flex-column p-0 mb-3 mb-lg-0 me-md-5 me-lg-0", style.thumbnail].join(' ')}>
            <div>
                <img src={props.img} className={style.img} alt="article images"/>
            </div>
            <div className="p-3 d-flex flex-column align-items-start text-start">
                <p className={["mb-2", style.author].join(" ")}>{props.author}</p>
                <Navlink className={["mb-2", style.title].join(" ")}>{props.title}</Navlink>
                <p className={["mb-2",style.body].join(" ")}>{props.body}</p>
            </div>
        </div>
    )
}

export default article;