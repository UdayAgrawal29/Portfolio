import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      
      <div className="form-section">
        <h2 className="contact-title">Contact </h2>
        <p className="contact-subtext">
          What do you want to discuss? Send me a message and let's talk.
        </p>

        <form className="contact-form">
          <div className="input-group">
            <input type="text" placeholder="Name" required />
          </div>

          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>

          <div className="input-group">
            <textarea placeholder="Your message" required />
          </div>

          <button type="submit" className="send-btn">
            📨 Send Message
          </button>
        </form>
      </div>

      <div className="connect-section">
        <h3>Connect With Me</h3>
        <div className="connect-links">
          
          <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="connect-box linkedin">
            <img src="images/Connect/linkedin.svg" alt="LinkedIn" width="20" />
            LinkedIn
          </a>


          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="connect-box github">
            <img src="images\Connect\github-icon-1-logo.svg" width="20" alt="GitHub" />
            GitHub
          </a>


          <a href="mailto:your@email.com" className="connect-box email">
            <img src="images\Connect\gmail-icon-logo.svg" width="20" alt="Email" />
            Email
          </a>

        </div>
      </div>
    </div>
  );
};

export default Contact;
