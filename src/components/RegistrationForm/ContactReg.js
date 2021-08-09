import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ContactReg() {
  const [isContinue, setisContinue] = useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);

    setisContinue(true);
  }
  return (
    <div className="lg:w-1/2 md:w-full sm:w-full mt-16">
      <div className="from-main sm:ml-0 md:ml-0 lg:ml-40">
        <div
          className="bg-green-800 form-contact"
          style={{
            backgroundColor: "#F3FDEA",
            border: "none",
            borderRadius: "10px",
            boxShadow: "-1px 6px 25px rgba(0, 0, 0, 0.14",
            padding: "50px 50px 0",
          }}
        >
          <h1 className="text-black font-weight-bold text-2xl text-left pt-2 py-4">
            Send Us a Message
          </h1>
          <form>
            <div className="form-group text-left">
              {/* <label htmlFor="exampleInputEmail1" className="text-black font-normal text-lg">Name</label> */}
              <input
                type="text"
                className="form-control bg-green-800 contact__input"
                id=""
                aria-describedby="emailHelp"
                placeholder="Name"
                style={{ background: "#F3FDEA" }}
              />
            </div>

            <div className="form-group text-left">
              {/* <label htmlFor="exampleInputPassword1" className="text-black font-normal text-lg">Email</label> */}
              <input
                type="text"
                className="form-control bg-green-800"
                id=""
                placeholder="E-mail"
                style={{ background: "#F3FDEA" }}
              />
            </div>
            <div className="form-group text-left">
              <input
                type="text"
                className="form-control bg-green-800"
                id=""
                placeholder="Message"
                style={{ background: "#F3FDEA" }}
              />
            </div>

            <div className="form-group text-left">
              <textarea
                rows={6}
                type="text"
                className="form-control bg-green-800"
                id=""
                placeholder="Message"
                style={{ border: "none", borderRadius: "10px" }}
              />
            </div>
            <div>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
              />
            
            </div>
            <button
              disabled={!isContinue}
              className={`bg-black rounded-full 
            px-5 mb-5 mt-3 py-1.5 text-xl text-white font-bold ${
              isContinue ? "bg-black" : "bg-gray-500"
            }`}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactReg;
