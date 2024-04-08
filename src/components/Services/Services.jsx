import React from 'react';
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineSentimentSatisfied } from "react-icons/md";
import { IoCodeWorking } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { MdLocalLibrary } from "react-icons/md";
import { FaWifi } from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./services.css";


const Services = React.forwardRef((props, ref) => {

  return (
    <section ref={ref}  className='containers'>
        <div className='services'>
            <div className='dot'>.</div>
            <div className='top'>
                <h2>What I Offer</h2>
                <p>I'm a great team player, and I enjoy working with others. some of my work qualities are listed below.</p>
            </div>

            <div className='row gaping'>
                <div  className='col-lg-4'>
                    <RiComputerLine  size={40} color={'#ff9e1b'} />
                    <h4>Web Development</h4>
                    <p>I do some research before starting my development to choose the right way for the job.</p>
                </div>

                <div className='col-lg-4'>
                    <MdOutlineSentimentSatisfied size={40} color={'#ff9e1b'} />
                    <h4>Fully Responsive</h4>
                    <p>I design my websites for every screen size available and I make sure it looks great on every device.</p>
                </div>

                <div className='col-lg-4'>
                    <IoCodeWorking  size={40} color={'#ff9e1b'} />
                    <h4>Beautiful Code</h4>
                    <p>Working on projects, I write beautiful and clean codes to make them better readable for any partner or client.</p>
                </div>
            </div>

            <div className='row gaping '>
                <div className='col-lg-4'>
                    <IoTimeOutline  size={40} color={'#ff9e1b'} />
                    <h4>On Time</h4>
                    <p>Always responsible to complete any given project on time.</p>
                </div>

                <div className='col-lg-4'>
                    <MdLocalLibrary  size={40} color={'#ff9e1b'} />
                    <h4>Quick Learner</h4>
                    <p>I like to learn new things and I have the ability to learn it quickly.</p>
                </div>

                <div className='col-lg-4'>
                    <FaWifi  size={40} color={'#ff9e1b'} />
                    <h4>Online</h4>
                    <p>Easy to reach and happy to help.</p>
                </div>
            </div>
        </div>
    </section>
    );
});


export default Services;