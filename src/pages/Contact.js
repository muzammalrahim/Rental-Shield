import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import "./contact.css";
import ContactBanner from "../components/Banners/ContactBanner";
import ContactReg from "../components/RegistrationForm/ContactReg";

// Images
import ConImg from "../assets/images/contact-bg.png";


function Contact() {
 
  return (
    <div className="">
      <Header />

      {/* <div className="container"> */}
      <div className="bg-gray-600 relative">
        <div className="w-10/12 mx-auto">
          <div className="row mb-0">
            {/* left */}
            <ContactBanner />
            {/* right */}

            <ContactReg />
          </div>
          
        </div>
      </div>
      
      <div className="contact-b-img">
        <img className="relative z-10 w-full" src={ConImg} alt="img"/>
      </div>


      {/* Map */}

      



      
      <section className="-mt-24 mb-16 relative">
      {/* <div class="relative mt-24 z-10">
        <svg viewBox="0 0 500 150"><path d="M-22.29,128.78 C201.18,196.88 334.93,46.88 533.57,153.45 L500.00,0.00 L-21.72,-13.31 Z" style={{stroke: "none", fill: "#000"}}></path></svg>
      </div>  */}
          
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14145845.838998312!2d60.32380396720331!3d30.04902997839946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1596990723193!5m2!1sen!2s"
          width="100%"
          height="800"
          frameBorder="0"
          style={{ border: "0px", }}
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
