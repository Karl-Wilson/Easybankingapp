import React from 'react';
import style from './nav.module.css';

import { Link } from 'react-router-dom';

const Navlink = ({className, url, ...props}) => {
    return(
            <Link className={[style.linkTag, className].join(" ")} to={url} {...props}/>
    )
}

export default Navlink;