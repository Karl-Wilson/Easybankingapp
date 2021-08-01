import React from 'react';
import Container from '../page_container/pageContainer';
import { GeneralButton } from '../../button/buttons';
import Logo from '../../logo/logo';
import Copyright from '../../copyright/copyright';
import SocialHandles from '../../social_media/social_handles';
import style from './footer.module.css';
import pagelinks from '../../../Utils/links';
import Navlink from '../../nav/navlink';


const footer = props => {
    let links;
    [...links] = pagelinks.pagelinks;
    return(
        <Container outsideClass={style.outsideClass}>
            <div className={style.container}>
                <div className="row justify-content-between flex-wrap">
                    <div className="col-10 offset-1 offset-md-0 col-md-3 d-flex flex-column justify-content-around align-items-center align-items-md-start mb-3 mb-md-0">
                        <Logo className="mb-3 mb-md-0"/>
                        <SocialHandles spacing="me-3" className={["d-flex flex-row", style.hover].join(" ")}/>
                    </div>
                    <div className="col-10 offset-1 offset-md-0 col-md-6 d-flex flex-column flex-md-row justify-content-center justify-content-md-start mb-3 mb-md-0">
                        <div className="d-flex flex-column justify-content-between align-items-center align-items-md-start me-md-5">
                            { 
                                links.map(
                                    (link, index) => { 
                                        if(index <= 2){
                                            return(
                                            <Navlink className={style.footnav} url={link.url} key={link.id}>{link.name}</Navlink>
                                            )
                                        }else{
                                            return '';
                                        }
                                    }
                                ) 
                            }
                        </div>
                        <div className="d-flex flex-column justify-content-between align-items-center align-items-md-start">
                        { 
                                links.map(
                                    (link, index) => { 
                                        if(index > 2){
                                            return(
                                            <Navlink className={style.footnav} url={link.url} key={link.id}>{link.name}</Navlink>
                                            )
                                        }else{
                                            return '';
                                        }
                                    }
                                ) 
                            }
                        </div>
                             
                    </div>
                    <div className="col-10 offset-1 offset-md-0 col-md-3 d-flex flex-column justify-content-around align-items-center align-items-md-end">
                        <GeneralButton className="mb-4"> Request Invite</GeneralButton>
                        <Copyright/>
                    </div>
                </div>
            </div>

        </Container>
    )
}
export default footer;