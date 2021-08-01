import React from 'react';
import style from './navbar.module.css';
import Logo from '../../logo/logo';
import Nav from '../../nav/nav';
import { GeneralButton } from '../../button/buttons';
import menu from '../../../Assets/Images/icon-hamburger.svg';
import Container from '../page_container/pageContainer'
function clickhandler(){
    document.getElementById('nav').classList.toggle(style.dropdown)
}
const navbar = props => {
    return(
        <Container outsideClass={style.outsideClass}>
            <nav className={style.navbar}>
                <Logo/>
                <Nav id="nav"/>
                <GeneralButton className={style.navbutton}>Request Invite</GeneralButton>
                <img src={menu} onClick={clickhandler} className={style.menu} alt="menu button"/>
            </nav>
        </Container>
    )
}

export default navbar;