import React, {useState} from "react";
import '../styles/ContactPage.css';
import contactimage from '../assets/contact.png';

const ContactPage = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const formData = {name, email, subject, message};

        try{
            const response = await fetch('http://localhost:5000/api/contact',{
                method: 'POST',
                headers: {
                    'content-Type':'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('Message sent successfully');
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
            } else{
                setStatus(data.error || 'An Error Occured');
            }
        } catch (error){
            console.error('Error:', error);
            setStatus('Failed to send message. Try again later.');
        }
    };

    return(
        <div className="contact-page">
            <section className="contact-heading">
                <h1>Get in touch</h1>
                <p>I'd love to hear from you! Feel free to reach out with any questions or opportunities.</p>
            </section>

            <section className="contact-form-section">
                <div className="contact-form-left">
                    <img
                        src={contactimage}
                        alt="Get in touch"
                        className="contact-image"
                    />
                </div>
                <div className="contact-form-right">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input 
                        type="text"
                        name="name" 
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required/>
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        required/>
                        <input type="text" 
                        name="subject" placeholder="subject"
                        value={subject}
                        onChange={(e)=>setSubject(e.target.value)}
                        />
                        <textarea name="message" placeholder="Your Message"
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                    {status&&<p className="status-message">{status}</p>}
                </div>

            </section>

            <section className="contact-details">
                <h2>Contact Information</h2>
                <p>Email: aryanyogesh1947@gmail.com</p>
                <p>Phone: +91 7019558173</p>
                <div className="social-icons">
                    <a href="https://www.instagram.com/aa.ry.xnn/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/aryan-yogesh-s1914/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/AryanYogesh" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>

            <section className="map-section">
                <h2>Find Me Here!</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2719.323066233031!2d77.62016107428667!3d13.121506411411946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1737118557889!5m2!1sen!2sin" title="Google Maps Location" width="100%" height="300" style={{ border: "none" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </div>
    )
}

export default ContactPage;