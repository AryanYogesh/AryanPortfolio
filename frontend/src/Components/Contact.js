import React from "react";
import '../styles/Contact.css';
import {useNavigate} from 'react-router-dom';
import contactimg from '../assets/contact.png';

const Contact = () =>{
    const navigate = useNavigate();

    return(
        <div className="contact-container">
            <div className="contact-content">
                <h2>Let's Connect to Build the Future!</h2>

                <p>
                   Have a question, an idea, or just want to chat? Feel free to reach out. Together, we can create something amazing.
                </p>

                <button className="contact-button"
                onClick={()=> navigate('/contact')}
                >
                    Contact Page
                 </button>
            </div>

            <div className="contact-image-container">
              <img
                src={contactimg}
                alt="contact me"
                className="contact-image"
             />
            </div>
        </div>
    );
};

export default Contact;