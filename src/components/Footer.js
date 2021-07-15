import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

//Translation
import { withTranslation } from "react-i18next";

class Footer extends Component {
  render() {
    const { t, i18n } = this.props;
    return (
      <div className="footer-main px-5 mt-5">
        {/* footer logo + Social Links */}
        <div className="footer-top">
          <Row className="items-center pb-4">
            <Col xl="6" md="12" xs="12" className="">
              <img className="footer-logo" src={logo} alt="logo" />
            </Col>
            <Col xl="6" md="12" xs="12">
              <div className="social-links">
                <ul className="list-none md:text-center lg:text-right">
                  <a href="https://twitter.com/?lang=en" target="_blank" className="hover:no-underline">  
                    <li className="pr-3">
                      <img
                        src={process.env.PUBLIC_URL + "/img/twit.svg"}
                        alt="twitter"
                      />
                    </li>
                  </a>

                  <a to="#" className="hover:no-underline">  
                    <li className="pr-3">
                      <img
                        src={process.env.PUBLIC_URL + "/img/youtube.svg"}
                        alt="youtube"
                      />
                    </li>
                  </a>

                  <Link to="#" className="hover:no-underline">  
                    <li className="pr-3">
                      <img
                        src={process.env.PUBLIC_URL + "/img/in.svg"}
                        alt="insta"
                      />
                    </li>
                  </Link>

                  <Link to="#" className="hover:no-underline">  
                  <li className="pr-3">
                    <img
                      src={process.env.PUBLIC_URL + "/img/fb.svg"}
                      alt="fb"
                    />
                  </li>
                  </Link>

                  <Link to="#" className="hover:no-underline">  
                  <li>
                    <img
                      src={process.env.PUBLIC_URL + "/img/ins.svg"}
                      alt="insta"
                    />
                  </li>
                  </Link>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        {/* footer logo + Social Links */}

        <hr></hr>

        <div className="footer-bottom pt-5">
         
          <div className="footer-inner grid">
            <div className="footer-adress text-left pb-3">
              <ul className="text-left">
                <li>
                  <Link
                    href="tel:123-456-7890"
                    className="text-base text-gray-500 font-medium"
                  >
                    {t("footer.number")}{" "}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="text-base text-gray-500 font-medium">
                    {t("footer.email")}
                  </Link>
                </li>
                <li className="text-base text-gray-500 font-medium">
                  {t("footer.address")}
                  <br></br> {t("footer.address-1")}
                  <br></br>
                  {t("footer.address-2")}
                </li>
              </ul>
            </div>

            {/* Col 2 */}
            <div className=" text-left pb-3">
              <h4 className="text-gray-500 text-base font-bold pb-4">
                {t("footer.aboutus")}
              </h4>
              <ul>
                {/* <li className="text-sm text-gray-500 font-medium pb-1">
                  {t("footer.ourteam")}
                </li> */}
                {/* <li className="text-sm text-gray-500 font-medium pb-1">
                  {t("footer.adjucicatiors")}
                </li> */}
                <Link to="/serach" className="hover:no-underline">
                  {" "}
                  <li className="text-sm text-gray-500 font-medium pb-1">
                    Search
                  </li>
                </Link>
                <Link to="/pricing" className="hover:no-underline">
                  {" "}
                  <li className="text-sm text-gray-500 font-medium pb-1">
                    Plan & Pricing
                  </li>
                </Link>
                <Link to="/shop" className="hover:no-underline">
                  {" "}
                  <li className="text-sm text-gray-500 font-medium pb-1">
                    Shop
                  </li>
                </Link>
                
                <Link to="/contact" className="hover:no-underline">
                  <li className="text-sm text-gray-500 font-medium pb-1">
                    {t("footer.contactus")}
                  </li>
                </Link>
                <Link to="/investor"  className="hover:no-underline">
                  <li className="text-sm text-gray-500 font-medium pb-1">
                    {t("footer.investors")}
                  </li>
                </Link>
                <Link to="/careers" className="hover:no-underline">
                  {" "}
                  <li className="text-sm text-gray-500 font-medium pb-4">
                    {t("footer.careers")}
                  </li>
                </Link>
                {/* <li className="text-sm text-gray-500 font-medium pb-4">
                  {t("footer.csr")}
                </li> */}
                 <Link to="/faq" className="hover:no-underline">
                  {" "}
                  <li className="text-sm text-gray-500 font-medium pb-4">
                    {t("footer.faqs")}
                  </li>
                </Link>
                
              </ul>
            </div>
            {/* Col 2 */}
                
            {/* Col 3 */}
            <div className=" text-left pb-3">
              <h4 className="text-gray-500 text-base font-bold pb-4">
                I'm a Landlord
              </h4>
              <ul>
                <Link to="/landlord" className="hover:no-underline">
                  <li className="text-sm text-gray-500 font-medium pb-3">
                    Landlords
                  </li>
                </Link>

                {/* <Link to="" className="hover:no-underline">
                  <li className="text-sm text-gray-500 font-medium pb-3">
                    Agents
                  </li>
                </Link> */}
                
                <Link to="/tanents" className="hover:no-underline">
                  <li className="text-sm text-gray-500 font-medium pb-3">
                  Ternats
                  </li>
                </Link>
                <Link to="">
                  {" "}
                  <li className="text-sm text-gray-500 font-medium ">More</li>
                </Link>
              </ul>
            </div>
            {/* Col 3 */}


            {/* Col 4 */}
            <div className=" text-left pb-3">
              <h4 className="text-gray-500 text-base font-bold pb-4">Blog</h4>
              <ul>
                <Link to="/blog" className="hover:no-underline">
                  <li className="text-sm text-gray-500 font-medium pb-3">
                    Latest
                  </li>
                </Link>

                <Link to="/blogpost" className="hover:no-underline">
                  <li className="text-sm text-gray-500 font-medium ">
                    {" "}
                    Important
                  </li>
                </Link>
              </ul>
            </div>
            {/* Col 4 */}

            {/* Col 5 */}
            <div className=" text-left pb-3">
              <h4 className="text-gray-500 text-base font-bold pb-4">
                Account
              </h4>
              <ul>
                <li className="text-sm text-gray-500 font-medium pb-3">
                  Manage Account
                </li>
                <li className="text-sm text-gray-500 font-medium pb-3">
                  Settings
                </li>
                <li className="text-sm text-gray-500 font-medium"> Support</li>
              </ul>
            </div>
            {/* Col 5 */}

            {/* Col 6 */}
            <div className=" text-left pb-3">
              <h4 className="text-gray-500 text-base font-bold pb-4">
                Princing
              </h4>
              <ul>
                <li className="text-sm text-gray-500 font-medium pb-2">
                  Privacy Policy
                </li>
              </ul>
            </div>
            {/* Col 6 */}

            {/* Col 7 */}
            <div className=" text-left">
              <h4 className="text-gray-500 text-base font-bold pb-4">
                Terms & Conditions
              </h4>
              <ul>
                <li className="text-sm text-gray-500 font-medium pb-2">
                  Privacy Policy
                </li>
                <li className="text-sm text-gray-500 font-medium pb-2">
                  Legal
                </li>
                <li className="text-sm text-gray-500 font-medium pb-2">
                  {" "}
                  Cockie Policy
                </li>
                <li className="text-sm text-gray-500 font-medium pb-2">
                  Terms of use
                </li>
                <li className="text-sm text-gray-500 font-medium">Site Map</li>
              </ul>
            </div>
            {/* Col 7 */}
          </div>
        </div>
      </div>
    );
  }
}
export default withTranslation(["common"])(Footer);
