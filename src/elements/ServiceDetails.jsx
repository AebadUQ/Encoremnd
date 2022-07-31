import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import FooterTwo from "../component/footer/FooterTwo";
import TextLoop from "react-text-loop";
const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to the world of Encore',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]
class ServiceDetails extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                
                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Service Details' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
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
                                        <h1 className="title" style={{color:'white'}}>We Develop  <br/>
                                        <TextLoop>
                                        <span> Websites.</span>
                                        <span>Mobile Apps .</span>
                                            <span> UX Designs.</span>
                                            <span> UI Designs.</span>
                                            {/* <span> Content Writter.</span> */}
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
  
                {/* Start Breadcrump Area */}
                {/* <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">WEBSITE DEVELOPMENT</h2>
                                    <p>Fresh From The Press Discription</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1" style={{backgroundColor:'#191919'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src="/assets/images/service/web0.png" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                <h4 className="title" style={{color:'#fa8452'}}>Develop Your Business Website</h4>
                                                    {/* <p>but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing</p> */}
                                                    <p style={{color:'white'}}>We are motivated to combine the art of design with the art of programming ? then you are at the right place . We will be responsible to translate the ui/ux design wireframes to actual code that will produce visual elements of the application.</p>
                                                    <p style={{color:'white'}}>Our experts bring you custom web development with various offers.</p>
                                                    {/* <ul className="liststyle">
                                                        <li>Yet this above sewed flirted opened ouch</li>
                                                        <li>Goldfinch realistic sporadic ingenuous</li>
                                                        <li>Abominable this abidin far successfully then like piquan</li>
                                                        <li>Risus commodo viverra</li>
                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    </ul> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}
                                        <div className="portfolio-related-work pb--120 bg_color--1" style={{backgroundColor:'#191919'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="theme-color font--18 fontWeight600">Related Work</span>
                                    <h2 style={{color:'white'}}>Our More Projects</h2> 
                                    {/* 1500 x 100 ki p ics */}
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10">
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                    {/* /portfolio-details */}
                                        <a href=""> 
                                            <img src="/assets/images/portfolio/web1.png" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4 style={{color:'white'}}><a href="" style={{color:'white'}}></a>Marketing Website</h4>
                                        {/* <span className="category">Business</span> */}
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="">
                                            <img src="/assets/images/portfolio/web2.png" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="" style={{color:'white'}}>Restaurant Website</a></h4>
                                        {/* <span className="category">PLANNING</span> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="">
                                            <img src="/assets/images/portfolio/web3.png" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="" style={{color:'white'}}>Real Estate Website</a></h4>
                                        {/* <span className="category">PLANNING</span> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="">
                                            <img src="/assets/images/portfolio/web4.png" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="" style={{color:'white'}}>Creative Website</a></h4>
                                        {/* <span className="category">PLANNING</span> */}
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                        </div>
                    </div>
                </div>
                                        {/* Start Single Area */}
                                        {/* <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing</p>
                                                    <p>hidden in the middle of text. All the Lorem Ipsum generators tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet.</p>
                                                    <h4 className="title">Our Working Process</h4>
                                                    <ul className="liststyle">
                                                        <li>Yet this above sewed flirted opened ouch</li>
                                                        <li>Goldfinch realistic sporadic ingenuous</li>
                                                        <li>Abominable this abidin far successfully then like piquan</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-02.png" alt="Service Images"/>
                                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* End Single Area */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}
                
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
export default ServiceDetails;