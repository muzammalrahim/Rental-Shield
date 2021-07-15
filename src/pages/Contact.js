import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./contact.css";
import ContactBanner from "../components/Banners/ContactBanner";
import ContactReg from "../components/RegistrationForm/ContactReg";
function Contact() {
 
  return (
    <div>
      <Header />

      {/* <div className="container"> */}
      <div className="w-10/12 mx-auto">
        <div className="row mt-8 mb-0">
          {/* left */}
          <ContactBanner />
          {/* right */}

          <ContactReg />
        </div>
      </div>

      {/* Map */}

      
      <section className="mt-5 mb-16 relative">

      {/* <div className="absolute" style={{height: "150px", overflow: "hidden"}} >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
          <path d="M-31.31,2.47 C118.79,210.69 386.84,-87.33 587.75,170.22 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill: "#fff"}}></path>
          
        </svg>
      </div> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14145845.838998312!2d60.32380396720331!3d30.04902997839946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1596990723193!5m2!1sen!2s"
          width="100%"
          height="500"
          frameBorder="0"
          style={{ border: "0px" }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
