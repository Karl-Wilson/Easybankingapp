import React from 'react';
import Navlink from '../nav/navlink';
import Facebook from '../../Assets/Images/icon-facebook.svg';
import Instagram from '../../Assets/Images/icon-instagram.svg';
import Pinterest from '../../Assets/Images/icon-pinterest.svg';
import Twitter from '../../Assets/Images/icon-twitter.svg';
import Youtube from '../../Assets/Images/icon-youtube.svg';
import social_link from '../../Utils/links';

const social_handles = ({spacing, ...props}) => {
    return(
        <div {...props}>
            <Navlink url={social_link.social_links.facebook}><img src={Facebook} className={spacing} alt="facebook icon"/></Navlink>
            <Navlink url={social_link.social_links.instagram}><img src={Instagram} className={spacing} alt="instagram icon"/></Navlink>
            <Navlink url={social_link.social_links.pinterest}><img src={Pinterest} className={spacing} alt="pinterest icon"/></Navlink>
            <Navlink url={social_link.social_links.twitter}><img src={Twitter} className={spacing} alt="twitter icon"/></Navlink>
            <Navlink url={social_link.social_links.youtube}><img src={Youtube} className={spacing} alt="youtube icon"/></Navlink>
        </div>
    )
}

export default social_handles;