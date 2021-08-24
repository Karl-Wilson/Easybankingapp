import React from 'react';
import style from './nav.module.css';
import Navlink from './navlink';
import Links from '../../Utils/links';
  
const Navlinkbar = ({className, ...props}) => {
        return(
            <div className={[className, style.navlinkbar].join(' ')}{...props}>
                {
                    Links.pagelinks.map((page, index) => {
                        return(

                          (index<5)?<Navlink onClick={props.click} className={["me-3", style.nav].join(" ")}  url={page.url} key={page.id}>{page.name}</Navlink> : ''
                        )
                    })
                }
        </div>
        )
}

export default Navlinkbar;