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

class VideoOne extends Component {
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

        <div className="rn-service-details ptb--120 bg_color--1"  style={{backgroundColor:'#191919'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-details-inner">
                  <div className="inner">
                    {/* Start Single Area */}
                    <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                <h4 className="title" style={{color:'white'}}>Xtreme makeovers </h4>
                                                    <p style={{color:'#787878'}}>
Want to attract an audience to your interior design? The two components of attracting customers to your interior design page is planning and advertisement. Don’t worry we are here to help. From renovated kitchens to styled bedrooms we cover everything for you in an aesthetic fashion that is visually pleasing. 

This renovated kitchen was photographed by our experts. Our videography team was able to capture the visuals of the renovation with an edge. They ensured the major elements of the renovated kitchen were captured through the lens and presented to our client’s audience.</p>
                                                    {/* <p style={{color:'#787878'}}>hidden in the middle of text. All the Lorem Ipsum generators tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet.</p>
                                                    <p style={{color:'#787878'}}>hidden in the middle of text. All the Lorem Ipsum generators tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet.</p> */}
                                                  
                                                    {/* <ul className="liststyle">
                                                        <li>Yet this above sewed flirted opened ouch</li>
                                                        <li>Goldfinch realistic sporadic ingenuous</li>
                                                        <li>Abominable this abidin far successfully then like piquan</li>
                                                    </ul> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/xtreme.jpg" alt="Service Images"/>
                                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='fUAN-u0cVBw' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
                                                </div>
                                            </div>
                                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </Fragment>
    );
  }
}
export default VideoOne;
