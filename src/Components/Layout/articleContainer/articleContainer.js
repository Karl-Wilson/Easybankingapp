import React, {Component} from 'react';
import Container from '../page_container/pageContainer';
import Article from '../../articles/article';
import Img4 from '../../../Assets/Images/image-confetti.jpg';
import Img1 from '../../../Assets/Images/image-currency.jpg';
import Img3 from '../../../Assets/Images/image-plane.jpg';
import Img2 from '../../../Assets/Images/image-restaurant.jpg';
import style from './articleContainer.module.css';

class articleContainer extends Component{
    state={
        articles: [
            {image: Img1, author: "By Claire Robinson", title: "Receive money in any currency with no fees", body: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …", id: "article1"},
            {image: Img2,author: "By Wilson Hutton",title: "Treat yourself without worrying about money", body: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you … ", id: "article2"},
            {image: Img3,author: "By Wilson Hutton",title: "Take your Easybank card wherever you go", body: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … ", id: "article3"},
            {image: Img4,author: "By Claire Robinson",title: "Our invite-only Beta accounts are now live!", body: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... ", id: "article4"}
        ]
    }
    render(){
        return(
            <Container outsideClass={style.outsideClass}>
                <div className={["mx-0", style.container].join(' ')}>
                <div className="d-flex flex-column align-items-md-start mb-3">
                    <h3 className={style.sectiontitle}> Latest Articles </h3>
                </div>
                    <div className="row justify-content-lg-between flex-wrap">
                        {
                            this.state.articles.map(
                                post => { return <Article img={post.image} author={post.author} title={post.title} body={post.body} key={post.id}/>}
                            )
                        }
                    </div>
                </div>
            </Container>
        )
    }
}

export default articleContainer;



