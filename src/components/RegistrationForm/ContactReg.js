import React from "react";

function ContactReg() {
  return (
    <div className="col-lg-6">
      <div className="from-main  ml-32 ">
        <div
          className=" col-12 col-lg-4 login-card hv-center bg-green-800 form-contact"
          style={{
            backgroundColor: "#F3FDEA",
            border: "none",
            borderRadius: "10px",
            boxShadow: "-1px 6px 25px rgba(0, 0, 0, 0.14",
            padding: "0 35px",
          }}
        >
          <h1 className="text-black font-weight-bold text-2xl text-left pt-5 py-4">
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

            <button class="bg-black rounded-full px-5 mb-5 mt-3 py-1.5 text-xl text-white font-bold">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactReg;
