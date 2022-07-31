import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: '01',
        title: 'Business Stratagy',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
    },
    {
        icon: '02',
        title: 'Website Development',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
    },
    {
        icon: '03',
        title: 'Marketing & Reporting',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
    },
]

class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                    <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="service service__style--1">
                            <div className="icon">
                                            <FiCast style={{color:'#e14807',fontSize:'40px'}}/>
                                            </div>
                                <div className="content">
                                    <h4 className="title">Marketing</h4>
                                    {/* <p>{val.description}</p> */}
                                    <p>Our experts are passionate and always ready to deliver state-of-the-art marketing solutions that bring results</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="service service__style--1">
                            <div className="icon">
                                            <FiLayers style={{color:'#e14807',fontSize:'40px'}}/>
                                            </div>
                                <div className="content">
                                    <h4 className="title">Website Development</h4>
                                    {/* <p>{val.description}</p> */}
                                    <p>Our experts bring you custom web development with various offers. 
</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="service service__style--1">
                            <div className="icon">
                                            <FiUsers style={{color:'#e14807',fontSize:'40px'}}/>
                                            </div>
                                <div className="content">
                                    <h4 className="title">Business Stratagy</h4>
                                    {/* <p>{val.description}</p> */}
                                    <p>Our experts will have you connect with your audience through advance SEO optimisation and innovation.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                {/* <div className="row">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                    <img src={`/assets/images/icons/icon-${val.icon}.png`} alt="Digital Agency"/>
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}
            </React.Fragment>
        )
    }
}
export default ServiceOne;