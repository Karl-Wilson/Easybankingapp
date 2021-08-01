import React from 'react';
import  Logoimg from '../../Assets/Images/logo.svg';
import Navlink from '../nav/navlink';
import logolink from '../../Utils/links'

const Logo = ({className, ...props}) =>{
    return(
        <div className={["d-flex flex-row justify-content-center align-items-center", className].join(' ')}>
            <Navlink url={logolink.logolink.url}><img src={Logoimg} className="img-fluid" alt="logo"/></Navlink>
        </div> 
    )
}

export default Logo;