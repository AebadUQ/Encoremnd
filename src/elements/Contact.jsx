import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";
import GoogleMapReact from 'google-map-react';
import ContactTwo from "../elements/contact/ContactTwo";
import BrandTwo from "../elements/BrandTwo";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import TextLoop from "react-text-loop";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to the world of Encore',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]

class Contact extends Component{
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Contact' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                 {/* Start Breadcrump Area */}
                 <div className="slider-wrapper" >
                {/* Start Single Slide */}
                {SlideList.map((value , index) => (
                    <div className="slide designer-portfolio slider-style-3  d-flex align-items-center justify-content-center bg_color--5 rn-slider-height" key={index} style={{backgroundColor:'#101010'}}>
                        <div className="container">
                            <div className="row align-items-center">
                                {/* <div className="col-lg-5">
                                    <div className="designer-thumbnail">
                                        <img src="/assets/images/about/designer-avatar.png" alt="Slider Images"/>
                                    </div>
                                </div> */}
                                <div className="col-lg-7 mt_md--40 mt_sm--40">
                                    <div className={`inner ${value.textPosition}`}  style={{color:'white'}}>
                                        {value.category ? <span  style={{color:'white'}}>{value.category}</span> : ''}
                                        <h1 className="title" style={{color:'white'}}>We are the future of <br/>
                                        <TextLoop>
                                        <span> Marketing.</span>
                                        <span>Business .</span>
                                            <span> UX Designer.</span>
                                            <span> UI Designer.</span>
                                            <span> Content Writter.</span>
                                        </TextLoop>{" "}
                                        </h1>
                                        <h2  style={{color:'white'}}>based in Karachi.</h2>
                                        {value.description ? <p className="description">{value.description}</p> : ''}
                                        {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* End Single Slide */}
            </div>
                 {/* <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"  data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Cntact With Us</h2>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Breadcrump Area */}


                {/* Start Contact Top Area  */}
                <div className="rn-contact-top-area ptb--120 bg_color--5" style={{backgroundColor:'#191919'}}>
                    <div className="container">
                       
                        <div className="row">
                            {/* Start Single Address  */}
                            
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            
                            {/* End Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiHeadphones />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Contact With Phone Number</h4>
                                        <p><a href="tel:+057 254 365 456">0346-2476070</a></p>
                                        <p><a href="tel:+856 325 652 984">0313-2070003</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Email Address</h4>
                                        <p><a href="encore.marketndev@gmail.com">encore.marketndev@gmail.com</a></p>
                                        {/*     <p><a href="mailto:example@gmail.com">example@gmail.com</a></p> */}
                                    </div>
                                </div>
                            </div>
                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50"  >
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Location</h4>
                                        <p>Dominion Business Center 3,<br/> Jinnah Avenue, BTK, Karachi.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                        </div>
                    </div>
                </div>
                {/* End Contact Top Area  */}

                {/* Start Contact Page Area  */}
                {/* <div className="rn-contact-page ptb--120 bg_color--1">
                    <ContactTwo />
                </div> */}
                {/* End Contact Page Area  */}

                {/* Start Contact Map  */}
                {/* <div className="rn-contact-map-area position-relative">
                    <div style={{ height: '650px', width: '100%' }}>
                        <GoogleMapReact
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                        </GoogleMapReact>
                    </div>
                </div> */}
                {/* End Contact Map  */}
                

                {/* Start Brand Area */}
                {/* <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Brand Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <FooterTwo />
                
            </React.Fragment>
        )
    }
}
export default Contact