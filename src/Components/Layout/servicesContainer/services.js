import React, {Component} from 'react';
import Container from '../page_container/pageContainer';
import Service from '../../services/service';
import Question from '../../services/question';
import Icon_budgeting from '../../../Assets/Images/icon-budgeting.svg';
import Icon_onboarding from '../../../Assets/Images/icon-onboarding.svg'
import Icon_online from '../../../Assets/Images/icon-online.svg';
import Icon_api from '../../../Assets/Images/icon-api.svg';
import style from './services.module.css';


class serviceSection extends Component{
    state={
        services: [{icon: Icon_online,
              title: "Online Banking",
              body: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world",
              id: "service01"
            },
            {icon: Icon_budgeting,
              title: 'Simple Budgeting',
              body: " See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
              id: "service02"
            },            
            {icon: Icon_onboarding,
                title: "Fast Onboarding",
                body: " We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
                id: "service03"
            },
            {
            icon: Icon_api,
            title: " Open API",
            body: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
            id: "service04"
        }]
        }
    render(){
        return(
            <Container outsideClass={style.outer_class}>
                <div className={style.container}>
                    <Question/>
                    <div className="col-12 col-md-10 col-lg-12 d-flex flex-column flex-md-row justify-content-between flex-wrap">
                    {this.state.services.map(
                        value => {
                            return <Service icon={value.icon} title={value.title} body={value.body} key={value.id}/>
                        }
                    )}
                    </div>
                </div>
            </Container>
        )
    }
}

export default serviceSection;