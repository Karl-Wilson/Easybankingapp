import React from 'react';
import style from '../page_container/pageContainer.module.css'

const Container = ({insideClass, outsideClass, heroarea, ...props}) =>{
    let outerContainer = ["container-fluid", outsideClass, style.outerContainer].join(" ");
    let innerContainer = [insideClass, style.innerContainer].join(" "); 
   /* let a, b;
    if (heroarea){
        [a, ...b] = props.children
    } else{
        b = props.children
    }*/
    return(
        <div className={outerContainer}>
           
            <div className={innerContainer} {...props} >
            </div>
        </div>
    )
}
export default Container;