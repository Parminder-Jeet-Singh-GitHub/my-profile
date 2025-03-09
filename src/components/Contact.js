// export default ContactForm;
import React from "react";
// import "./ContactForm.css"; // Import CSS file

const ContactForm = () => {
  return (
    <div className="contact-container">
      {/* Left Side - Image */}
      <div style={{ display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center", backgroundColor: "#f3f3f3" }}>
            <div className="left-side">
                <img src={`${process.env.PUBLIC_URL}/me.png`} alt="Contact" className="contact-image" />
            </div>

            {/* Right Side - Form */}
            <div className="right-side">
                <h2>Get in Touch</h2>
                <form action="https://formsubmit.co/ff6d65b387750a955e2bc47e830a6e60" method="POST">
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default ContactForm;
