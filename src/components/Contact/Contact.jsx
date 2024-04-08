import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { BsTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Contact.css"

const Contact = React.forwardRef((props, ref) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2w33hbi', 'template_u3a2r2j', form.current, {
        publicKey: 'c2nK10F0v9D2HObqi',
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("")
          alert("MESSAGE SEND SUCCESS FULL!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <section ref={ref} className='containers'>
      <div className="title" >
        <h2>Contact Me,</h2>
        <h2>LET'S BUILD SOMETHING GREAT </h2>
        <h2>TOGETHER</h2>
      </div>

      <div className='cont'>
          <div className='left-co col-10 col-lg-6'>
            <form className='row' ref={form}  onSubmit={sendEmail} >
              {/* <label>Name</label> */}
              <input className='col-11 col-md-6' type="text" name="from_name" placeholder='Name*' value={name} onChange={(e) => setName(e.target.value)} />
              {/* <label>Email</label> */}
              <input className='col-11 col-md-5' type="email" name="from_email" placeholder='Email*' value={email} onChange={(e) => setEmail(e.target.value)}/>
              {/* <label>Message</label> */}
              <textarea className='col-12' name="message" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} />
              <input id="send" type="submit" value="send"/>
            </form>
          </div>

    <div className='right-co col-11 col-lg-4'>

      <div className='phone'> 
      <BsTelephoneFill className='' color='rgb(255, 158, 27)' size={30} />
      <div className='names'>
        <h4>Phone</h4>
        <span>+251 949990995 	</span>
      </div>
      </div>

      <div className='phone'>
      <FaMapMarkerAlt className='' color="rgb(255, 158, 27)" size={30}/>
      <div className='names'>
        <h4>Address</h4>
        <span>Addis Ababa, Ethiopia</span>
      </div>
      </div>

      <div className='phone'>
      <TfiEmail className='' color='rgb(255, 158, 27)' size={30}/>
      <div className='names'>
        <h4>Email</h4>
        <span>shumihenok2@gmail.com</span>
      </div>
      </div>

      </div>
    </div>

    </section>
        <div className='footer '>
        <a href='https://github.com/useHENI' className='col-1 '><BsGithub /></a>
        <a href='https://www.linkedin.com/in/henok-shumi-3aab92281/' className='col-1 right' ><BsLinkedin /></a>
        <small className='col-10 '>© 2024 Henok ShumI. </small>
      </div>
    </>
  )
});

export default Contact;


