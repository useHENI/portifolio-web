import React, { useState } from 'react';
import classes from "./About.module.css";
import me from "../img/henok.png";
import resumeimg from "../img/senter.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";



const About = React.forwardRef((props, ref) => {
    const navigate = useNavigate();
    const [click, setClick] = useState(false)

    const opnepdf = () => {
        if (true) {
            setClick(true);

            navigate('/resume')
        }
    }
    // console.log(click);

  return (
    <>
    <section ref={ref}>
        <div className={classes.dot}>.</div>
        <div className={classes.about}>
        <div className={classes.about__me}>
            <div className={classes.skills}>
            <h1>About me</h1>
            <p>I'm a creative Full Stack Web Developer, and I'm very passionate and dedicated to my work. I have acquired the skills necessary to build great, appealing, and premium websites that meet the latest web standards.</p>
            <br />
            <p>Detail-orientated Web Developer adept at interpreting blueprints, working with others, and meeting production deadlines. Skilled at quickly learning new processes, technologies, and machinery. Self-motivated with strong organizational and time management abilities. Most importantly, I'm constantly trying to learn new skills to improve myself and my work.</p>
            <br />
            <h1>Skills</h1>

            <div className="row  justify-content-center">
            <div className="col-6 col-md-3">
                <p>HTML</p>
                <p>React</p>
                <p>Shopify</p>
                <p>MongoDB</p>
                <p>FireBase</p>
            </div>
            <div className="col-6 col-md-3">
                <p>CSS</p>
                <p>JSX</p>
                <p>JQuery</p>
                <p>PHP</p>
                <p></p>
            </div>
            <div className="col-6 col-md-3">
                <p>Bootstrap</p>
                <p>REST API</p>
                <p>Express</p>
                <p>API</p>
                <p></p>
            </div>
            <div className="col-6 col-md-3">
                <p>JavaScript</p>
                <p>WordPress</p>
                <p>Node</p>
                <p>Mysql</p>
                <p>JSON</p>
            </div>
            </div>
            </div>
            
        </div>
        <div className={classes.img__container}>
            <div className={classes.img}>
                <img src={me} alt="my image" />
            </div>
            
        </div>
        </div>
    </section>
    <div className={classes.resume}>
        <div className={classes.resuimg}>
            <div></div>
            <img src={resumeimg} />
            
        </div>
        <div className={classes.myresume}>
        <h1>View My Resume</h1>
        <button onClick={opnepdf}>View Resume</button>
        </div>
    </div>
        
    
    </>
  );
  
});


export default About;