import React from 'react';
import Container from '../page_container/pageContainer';
import Message from '../../heroarea/message'
import AppIntro from '../../heroarea/app_intro';
import style from './heroarea.module.css';
import Mobile_display from '../../../Assets/Images/image-mockups.png';

const heroarea = props =>{
    return(
        <div style={{overflowX: 'clip', position: 'relative'}}> 
            <img src={Mobile_display} className={style.mobile_display} alt="mobile app"/>
                <Container heroarea="yes" outsideClass={style.outside_container_class} insideClass={style.inside_container_class}>      
                    <div className={["row mx-0", style.container].join(' ')}>
                        <Message/>
                        <AppIntro/>
                    </div>
                </Container>
        </div>
    )
}

export default heroarea;