import React from 'react';
import './features.css';
import box_one from '../../assets/images/box-one.png';

const Features = () => {
  return (
    <div id="features">
        <div className='features-title'>
            <h2>Expert Web Development Services for Your Business</h2>
        </div>
        <div className='container'>
            <div className='box'>
                <img src={box_one} alt="" />
                <h3>
                    Custom App Development Solutions to Meet Your Needs
                </h3>
                <p>
                    Our agency offers a wide range of services, including web and app development, UI/UX design and more.
                </p>
            </div>
            <div className='box'>
                <img src={box_one} alt="" />
                <h3>
                    Innovative App Solutions for Seamless User Experience
                </h3>
                <p>
                     We create user-friendly websites that look great on all devices.
                </p>
            </div>
            <div className='box last-child'>
                <img src={box_one} alt="" />
                <h3>
                    Responsive Web Design to Engage Your Audience
                </h3>
                <p>
                    We develop cutting-edge mobile apps that deliver exceptional performance.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Features