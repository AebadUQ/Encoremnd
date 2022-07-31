import React, { Component } from "react";
const des='Our goal is to create the best possible solution for the complexities in your business. Our experts band with team members of the companies to understand the intricacies of your business, consumer base and competition thereby enabling a creative strategy to probe successful initiatives.'
       
class About extends Component{
    render(){
        let title = 'About',
        description = 'We help companies and owners indulge in experiences that stimulate their growth individually and as a business. ';
         return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about.jpg" alt="About Images"/>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                        {/* <p className="description">{des}</p> */}
                                    </div>
                                    <div className="row mt--30 mt_sm--10">
                                       
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list" style={{border:'1px solid red',width:'100%'}}>
                                                <h3 className="title">Who we are</h3>
                                                <p>We are a young company driven to help achieving business success. Our core manifests marketing strategies and services for businesses.</p>
                                            </div>
                                            <div className="about-us-list" style={{border:'1px solid red',width:'100%'}}>
                                                <h3 className="title">Who we are</h3>
                                                <p>We are a young company driven to help achieving business success. Our core manifests marketing strategies and services for businesses.</p>
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
export default About;