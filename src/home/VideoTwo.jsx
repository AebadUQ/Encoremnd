import React, { Component, Fragment } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import ServiceTwo from "../elements/service/ServiceTwo";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import AboutTwo from "../component/HomeLayout/homeOne/AboutTwo";
import Portfolio from "../component/HomeLayout/homeOne/Portfolio";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import ModalVideo from "react-modal-video";
import { videoTagString, VideoTag } from "react-video-tag";
import Helmet from "../component/common/Helmet";
videoTagString({
  src: "/assets/images/service/video.mp4",
  poster: "/assets/images/bg/bg-image-24.jpg",
});

const SlideList = [
  {
    textPosition: "text-left",
    category: "",
    title: "Welcome Video Studio",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

class StudioAgency extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    const PostList = BlogContent.slice(0, 3);
    return (
      <Fragment>
        <Helmet pageTitle="Studio Agency" />
        {/* Start Header Area  */}
        {/* <Header /> */}
        {/* End Header Area  */}
        <div className="rn-service-details ptb--120 bg_color--1" style={{backgroundColor:'#101010'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content align-items-center">
                                        <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/forti.jpg" alt="Service Images"/>
                                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='3iNyFMF_aPU' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
                                                </div>                     
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="details mt_md--30 mt_sm--30">
                                                <h4 className="title" style={{color:'white'}}>Fortifiers Highlights</h4>
                                                    <p style={{color:'#808080'}}>The rapidly emerging market of real estate and the digitalisation of the world made it mandatory that realtors and builders would reach their clients through the channels of digital marketing. 

The magnificent design of the estate, extended photography that exhibits the comfortable features of the real estate and catchy videography attracts the audience of the builders. 

Our experts will deploy effective marketing strategies for your real estate projects. We understand that you value your time and the consumers value their money so we are here to maximise your efforts.</p>
                                                    {/* <p style={{color:'#808080'}}>hidden in the middle of text. All the Lorem Ipsum generators tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet.</p>
                                                    <p style={{color:'#808080'}}>hidden in the middle of text. All the Lorem Ipsum generators tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet.</p>
                                                     */}
                                                    {/* <ul className="liststyle">
                                                        <li>Yet this above sewed flirted opened ouch</li>
                                                        <li>Goldfinch realistic sporadic ingenuous</li>
                                                        <li>Abominable this abidin far successfully then like piquan</li>
                                                    </ul> */}
                                                </div>
                                            </div>
                                           
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div> </div>
      </Fragment>
    );
  }
}
export default StudioAgency;
