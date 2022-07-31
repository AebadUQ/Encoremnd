import React, { Component } from "react";

class AboutTwo extends Component{
    render(){
        let title = 'About',
        description = 'Our goal is to create the best possible solution for the complexities in your business. Our experts band with team members of the companies to understand the intricacies of your business, consumer base and competition thereby enabling a creative strategy to probe successful initiatives. ';
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/aboutus.png" alt="About Images"/>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                    </div>
                                    <div className="row mt--30 mt_sm--10">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">Who we are</h3>
                                                <p>We are a young company driven to help achieving business success. Our core manifests marketing strategies and services for businesses.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">What we do</h3>
                                                <p>We help companies and owners indulge in experiences that stimulate their growth individually and as a business. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default AboutTwo;