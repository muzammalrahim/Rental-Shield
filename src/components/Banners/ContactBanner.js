import React from "react";
import Phone from "../../assets/images/phone.svg";
import mail from "../../assets/images/mail.svg";
import location from "../../assets/images/location.svg";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaPhone } from "react-icons/fa";
function ContactBanner() {
  return (
    <div className="col-lg-6 mt-16">
      <h2 className="description mt-8 mb-8 text-left">
        For any inquiries, please call or email us.Alternatively you can fill in
        the following contact form.
      </h2>
      {/* phone */}
      <div className="row">
        <div className="col-1 mt-1 ml-2">
          <img className="contact__image" src={Phone} alt="phone" />
        </div>
        <div className="col-3 contact">+ 123 456 7890</div>
      </div>

      {/* <div className="contact_archit">
          <img className="contact__img mt-16" src={Phone} alt="phone" />
          <span className="contact">+ 123 456 7890</span>
        </div> */}

      {/* right */}
      <div className="row mt-4">
        <div className="col-1 mt-1 ml-2">
          <img className="contact__image" src={mail} alt="mail" />
        </div>
        <div className="col-3 contact">info@mysite.com</div>
      </div>
      {/* location */}
      <div className="row mt-4" style={{ marginLeft: "-8px" }}>
        <div className="col-12">
          <img className="" src={location} alt="" />
        </div>
      </div>
      {/* social links */}
      <div className="text-left">
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
