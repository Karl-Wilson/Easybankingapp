import React, {useState, useEffect} from 'react';
import style from './navbar.module.css';
import Logo from '../../logo/logo';
import Nav from '../../nav/nav';
import { GeneralButton } from '../../button/buttons';
import menu from '../../../Assets/Images/icon-hamburger.svg';
import Container from '../page_container/pageContainer'


const Navbar = props => {
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })
    function clickhandler(){
         if(window.innerWidth <= 1190){document.getElementById('nav').classList.toggle(style.dropdown)}
    }
    function resizehandler(){
        if(window.innerWidth > 1190){
             document.getElementById('nav').classList.remove(style.dropdown)
        }
    }
      useEffect(() => {
        window.addEventListener('resize', resizehandler)
        return () => window.removeEventListener('resize', resizehandler)
      })

    return(
        <Container outsideClass={style.outsideClass}>
            <nav className={style.navbar}>
                <Logo/>
                <Nav id="nav" click={clickhandler}/>
                <GeneralButton className={style.navbutton}>Request Invite</GeneralButton>
                <img src={menu} onClick={clickhandler} className={style.menu} alt="menu button"/>
            </nav>
        </Container>
    )
}

export default Navbar;