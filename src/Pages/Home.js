import React from 'react';
import Heroarea from '../Components/Layout/Header/heroarea';
import ServiceSection from '../Components/Layout/servicesContainer/services';
import ArticleContainer from '../Components/Layout/articleContainer/articleContainer';


const Homepage = props => {
    return(
        <div>
            <Heroarea/>
            <ServiceSection/>
            <ArticleContainer/>
        </div>
    )
}
export default Homepage;