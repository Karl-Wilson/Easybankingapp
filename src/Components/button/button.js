import React from "react";
import style from './button.module.css';


const Button = ({href, className, ...props})=> {
    const Tag = href ? "a": "button" ;
    return(
        <Tag type="button" className={["btn", style.button, className].join(" ")} {...props}></Tag>
    )
}

export default Button;