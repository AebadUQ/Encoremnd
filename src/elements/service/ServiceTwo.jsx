import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Business Stratagy & Marketing',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiLayers />,
        title: 'App & Website Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiUsers />,
        title: 'Photography & Videography',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiMonitor />,
        title: 'Designing & Content Writing',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    }
]

class ServiceTwo extends Component{
    render(){
        let title = 'Services',
        description = 'We help companies and owners indulge in experiences that stimulate their growth individually and as a business.';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="/designer-portfolio"><span className="text">View Service Details</span></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">

                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" >
                                    <a href="/startup">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                            <FiCast />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Business Stratagy & Marketing</h3>
                                                <p>Our experts are passionate and always ready to deliver state-of-the-art marketing solutions that bring results.</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" >
                                    <a href="studio-agency">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                            <FiMonitor />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Designing & Content Writing</h3>
                                                <p>Our experts will have you connect with your audience through advance SEO optimisation and innovation.</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" >
                                    <a href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                            <FiUsers />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">App & Website Development</h3>
                                                <p>Our experts bring you custom web development with various offers. 
</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>



                                
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" >
                                    <a href="/studio-agency">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                            <FiLayers />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Photography & Videography</h3>
                                                <p>At encore we provide top notch creative digital services.</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>


                          
                            </div>
                            </div>


                    {/* <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
