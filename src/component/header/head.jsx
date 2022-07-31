import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn } from "react-icons/fa";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]
class Head extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }


    render(){
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Digital Agency" />;
        }else{
            logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;
        }
        
        return(
            <header className={`header-area formobile-menu header--transparent ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                    </div>
                    <div className="header-right" >
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                                <li className="has-droupdown"><Link to="/dark-main-demo" style={{color:'white',fontWeight:'bold'}}>Home</Link>
                                    {/* <ul className="submenu">
                                        <li><Link to="/main-demo">Main Demo</Link></li>
                                        <li><Link to="/dark-main-demo">Main Demo Dark</Link></li>
                                        <li><Link to="/creative-agency">Creative Agency</Link></li>
                                        <li><Link to="/creative-landing">Creative One Page</Link></li>
                                        <li><Link to="/creative-portfolio">Creative Portfolio</Link></li>
                                        <li><Link to="/personal-portfolio">Personal Portfolio</Link></li>
                                        <li><Link to="/portfolio-landing">Portfolio One Page</Link></li>
                                        <li><Link to="/dark-portfolio-landing">Portfolio One Page 02</Link></li>
                                        <li><Link to="/digital-agency">Digital Agency</Link></li>
                                        <li><Link to="/startup">Startup</Link></li>
                                        <li><Link to="/paralax">Paralax</Link></li>
                                        <li><Link to="/portfolio-home">Minimal Portfolio</Link></li>
                                        <li><Link to="/business">Business</Link></li>
                                        <li><Link to="/home-particles">Home Particles</Link></li>
                                        <li><Link to="/studio-agency">Studio Agency</Link></li>
                                        <li><Link to="/designer-portfolio">Designer Portfolio</Link></li>
                                        <li><Link to="/interactive-agency">Interactive Agency</Link></li>
                                    </ul> */}
                                </li>
                                <li className="has-droupdown"><Link to="/startup"style={{color:'white',fontWeight:'bold'}} >Service</Link>
                                    <ul className="submenu">
                                        {/* <li><Link to="/service">Service</Link></li> */}
                                        <li><Link to="/startup">Marketing</Link></li>
                                        <li><Link to="/studio-agency">Photography & Videography </Link></li>
                                        <li><Link to="/service-details">Web Development</Link></li>
                                       {/* <li><Link to="/interior-landing">Graphic Designing</Link></li>

                                        <li><Link to="/blog-details">Content Writing</Link></li> */}
                                    </ul>
                                </li>
                                {/* <li><Link to="/about" >About</Link></li> */}
                                <li ><Link to="/designer-portfolio" style={{color:'white',fontWeight:'bold',boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"}}>Portfolio</Link>
                                   </li>
                                {/* <li className="has-droupdown"><Link to="#pages" style={{color:'white',fontWeight:'bold',boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"}}>Client</Link>
                                    <ul className="submenu">
                                        <li><Link to="/blog">Blog List</Link></li>
                                        <li><Link to="/blog-details">Blog Details</Link></li>
                                        <li><Link to="/service">Service</Link></li>
                                        <li><Link to="/service-details">Service Details</Link></li>
                                        <li><Link to="/portfolio">Portfolio</Link></li>
                                        <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                                        <li><Link to="/404">404</Link></li>
                                    </ul>
                                </li> */}
                                {/* <li className="has-droupdown"><Link to="#" >Blocks</Link>
                                    <ul className="submenu">
                                        <li><Link to="/portfolio">Portfolio</Link></li>
                                        <li><Link to="/team">Team</Link></li>
                                        <li><Link to="/service">Service</Link></li>
                                        <li><Link to="/video-popup">Video Popup</Link></li>
                                        <li><Link to="/progressbar">Progressbar</Link></li>
                                        <li><Link to="/gallery">Gallery</Link></li>
                                        <li><Link to="/counters">Counters</Link></li>
                                        <li><Link to="/blog">Blog List</Link></li>
                                        <li><Link to="/clint-logo">Clint Logo</Link></li>
                                        <li><Link to="/contact-form">Contact Form</Link></li>
                                        <li><Link to="/google-map">Google Map</Link></li>
                                        <li><Link to="/columns">Columns</Link></li>
                                        <li><Link to="/pricing-table">Pricing Table</Link></li>
                                    </ul>
                                </li> */}
                                <li><Link to="/contact" style={{color:'white',fontWeight:'bold'}}>Contact Us</Link></li>
                            </ul>
                        </nav>
                        <div className="header-right">
                        {/* <div className="social-share-inner">
                            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div> */}
                        {/* <div className="header-btn">
                            <a className="rn-btn" href="https://themeforest.net/checkout/from_item/25457315?license=regular">
                                <span>buy now</span>
                            </a>
                        </div> */}
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Head;