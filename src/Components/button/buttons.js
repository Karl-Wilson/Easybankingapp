import React from'react';
import Button from './button';
import style from '../button/button.module.css';

export const GeneralButton = ({className, ...props}) => {
    return(
        <Button className={[style.generalbutton, className].join(' ')} {...props}/>
    )
}

export const LoginButton = ({className, ...props}) =>{
    return(
        <Button className={[style.loginbutton, className].join(" ")} {...props}></Button>
    )
}
export const LignupButton = ({className, ...props}) =>{
    return(
        <Button className={[style.signupbutton, className].join(" ")} {...props}></Button>
    )
}

