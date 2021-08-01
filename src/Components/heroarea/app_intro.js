import React from 'react';
import  App_bg_display from '../../Assets/Images/bg-intro-desktop.svg';
import style from './heroarea.module.css';

const AppIntro = props =>{
    return(
        <div className={["col-12 col-md-6 order-1 order-md-2 position-relative overflow-visible", style.appWrapper].join(' ')}>
                <img src={App_bg_display} className={style.bg_display} alt="app background"/> 
        </div>
    )
}

export default AppIntro;