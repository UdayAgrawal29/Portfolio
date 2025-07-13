import React from 'react';
import './contact.css';
import { FaPhone, FaMapMarkerAlt, FaRegEnvelope } from 'react-icons/fa';
const Contact = () => {
  return (

    <div className='contact_cont'>
      <div className='form_side'>
          <h2 className="con_title">Send me a message </h2>
          <p className="con_text">
            Fill out the form below and I'll get back to you as soon as possible
          </p>

          <form className="contact-form" action="https://formsubmit.co/udayagarwal29@gmail.com" method="POST">
            <div className="input-grp">
              <input type="text" placeholder="Name" name="name" required />
            </div>

            <div className="input-grp">
              <input type="email" placeholder="Email" name="email"  required />
            </div>

            <div className="input-grp">
              <textarea placeholder="Your message" name="message" required />
            </div>

            <button type="submit" className="send-btn">
              📨 Send Message
            </button>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_next" value="https://udayagrawal29.github.io/Portfolio/"></input>
            {/* <input type="hidden" name="_autoresponse" value="Thanks for contacting me! I’ve received your message and will respond as soon as possible. ">  </input> */}
          </form>
        
      </div>
      
      <div className='detail_side'>
          <div className="contanct_info">
          <h3>Contact Information</h3>
          <div className="contact_divs">

            <div className="connect-box email">
              <FaRegEnvelope size={20} color="#b388f4" /> 
              udayagarwal29@gmail.com
            </div>

           
            {/* <div className="connect-box phone">
              <FaPhone size={20} color="#00FF88" /> 
              (+91) 7205753779
            </div> */}

           
            <div className="connect-box location">
              <FaMapMarkerAlt size={20} color="#00ccff" /> 
              Chennai, India
            </div>
          </div>
        </div>


          <div className='social_media'>
            <h3>Follow Me</h3>
            <div className="connect-links">

              <a href="https://www.linkedin.com/in/uday-agrawal29/" target="_blank"  className="connect-box linkedin">
                <img src="images/Connect/linkedin.svg" alt="LinkedIn" width="20" />
                LinkedIn
              </a>


              <a href="https://github.com/UdayAgrawal29" target="_blank"  className="connect-box github">
                <img src="images\Connect\github-icon-1-logo.svg" width="20" alt="GitHub" />
                GitHub
              </a>

            </div>
          </div>

      </div>
    </div>
  );
};

export default Contact;
