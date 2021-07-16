import React from "react";
import Phone from "../../assets/images/phone.svg";
import mail from "../../assets/images/mail.svg";
import location from "../../assets/images/location.svg";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaPhone } from "react-icons/fa";
function ContactBanner() {
  return (
    <div className="lg:w-1/2 md:w-full sm:w-full mt-16">
      <h2 className="description mt-8 mb-16 text-left">
        For any inquiries, please call or email us.Alternatively you can fill in
        the following contact form.
      </h2>
      {/* phone */}
      <div className="row">
        <div className="w-1/6 md:w-12 lg:w-12 mt-1 ml-2">
          <img className="contact__image" src={Phone} alt="phone" />
        </div>
        <div className="w-2/4 contact text-left	">+ 123 456 7890</div>
      </div>

      {/* <div className="contact_archit">
          <img className="contact__img mt-16" src={Phone} alt="phone" />
          <span className="contact">+ 123 456 7890</span>
        </div> */}

      {/* right */}
      <div className="row mt-4">
        <div className="w-1/6 md:w-12 lg:w-12 mt-1 ml-2">
          <img className="contact__image" src={mail} alt="mail" />
        </div>
        <div className="w-2/4 contact text-left	">info@mysite.com</div>
      </div>
      {/* location */}
      <div className="row mt-4" style={{ marginLeft: "-8px" }}>
        <div className="w-1/6 md:w-12 lg:w-12">
          <img className="" src={location} alt="" />
        </div>
      </div>
      {/* social links */}
      <div className="text-left ml-1">
        <Link
          href="#"
          class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block mt-4 rounded-full"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href="#"
          class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block mt-4 rounded-full ml-2"
        >
          <FaFacebookF />
        </Link>
        <Link
          href="#"
          class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block mt-4 rounded-full ml-2"
        >
          <FaTwitter />
        </Link>
        <Link
          href="#"
          class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block mt-4 rounded-full ml-2"
        >
          <FaPhone />
        </Link>
      </div>
    </div>
  );
}

export default ContactBanner;
