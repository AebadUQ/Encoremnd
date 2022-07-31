import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
import {Link} from "react-router-dom";


const PortfolioList = [
    {
        image: 'image-1',
        category: 'Graphic Designing',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'Inteior Designing',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-5',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: ' Getting tickets to the big show'
    }
]

class Portfolio extends Component{
    render(){
        let title = 'Our Works',
        description = 'The achievement of the objectives devised for the business needs to met, we ensure our results are coherent with your objectives. We partner with you to enable the growth of your business and develop perceptive strategies that are long lasting and impactful.';
        return(
            <React.Fragment>
                <div className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title" >
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* line 38  public/assets/scss/elements */}
                    <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...portfolioSlick2}>
                            {PortfolioList.map((value , index) => (
                                <div className="portfolio" key={index}>
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        {/* <div className={`bg-blr-image ${value.image}`}></div> */}
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            {/* <p>{value.category}</p>
                                            <h4 className="title"><a href="/portfolio-details">{value.title}</a></h4> */}
                                            <div className="portfolio-button">
                                                <a className="rn-btn" href="/designer-portfolio">View Us</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link className="link-overlay" to="/designer-portfolio"></Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Portfolio;