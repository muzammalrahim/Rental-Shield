import React, { useState, useEffect } from "react";
// import {Container, Row, Col} from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import SideBar from "../components/Sidebar";

// import { Uk, Ae } from "react-flags-select";
import ReactFlagsSelect from "react-flags-select";

// Images
import logo from "../assets/images/logo.svg";
import Enter from "../assets/images/enter.svg";
import DownArrow from "../assets/images/arrow-down.png";

//Translation
import { withTranslation } from "react-i18next";

function Header({ t, i18n, ...props }) {
  const history = useHistory();
  const [isShow, setShow] = useState(
    localStorage.getItem("selected_Flag") === "false"
  );
  // console.log("Header_parameter", props.lang);
  // const [isUK, setUK] = useState(false);
  // if (
  //   props.lang &&
  //   props.lang != null &&
  //   localStorage.getItem("selected_language") != props.lang
  // ) {
  //   i18n.changeLanguage(props.lang);
  // }

  const langHandler = (lang, truthy) => {
    localStorage.setItem("selected_language", lang);

    localStorage.setItem("selected_Flag", isShow);

    i18n.changeLanguage(lang);
    console.log("header" + props);

    if (props.lang && props.url) {
      var currentUrl = props.url;
      currentUrl = currentUrl.replace(`/${props.lang}`, `${lang}`);
      history.push(`/${currentUrl}`);
    }

    // if (localStorage.getItem("selected_language")) {
    //   i18n.changeLanguage(localStorage.getItem("selected_language"));
    //   if (localStorage.getItem("selected_Flag")) {
    //   }
    // } else {
    //   i18n.changeLanguage(lang);
    // }

    // if (localStorage.getItem("selected_language") == "en") {
    //   window.history.pushState("en", "en", "/en");
    // } else {
    //   window.history.pushState("ar", "ar", "/ar");
    // }

    // setUK(truthy);
    setShow(!isShow);
  };
  // useEffect(() => {
  //   localStorage.setItem("selected_language", props.lang);
  //   localStorage.setItem("selected_Flag", isShow);
  // }, [isShow]);

  // const {t, i18n} = useTranslation('common');

  return (
    <div className="header-main px-5  pt-4  relative z-10">
      <Navbar expand="lg" className="p-0 relative top-3">
        {/* logo */}
        <Navbar.Brand
          href={`/${localStorage.getItem("selected_language")}`}
          className="mr-0"
        >
          <img className="" src={logo} alt="logo" />
        </Navbar.Brand>
        {/* logo */}

        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <div className="mobile-side-menu">
          <SideBar className="mob-nav" />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Menu Links */}
          <Nav className="mr-auto">
            <Nav.Link
              href={`/${localStorage.getItem("selected_language")}/about`}
            >
              <div className="menu-name text-gray-500 font-body font-normal text-lg pl-4">
                {t("header.about")}
              </div>
            </Nav.Link>
            <Nav.Link
              href={`/${localStorage.getItem("selected_language")}/faq`}
            >
              <div className="menu-name text-gray-500 font-body font-normal text-lg pl-3">
                {t("header.faqs")}
              </div>
            </Nav.Link>
            <Nav.Link href="#link">
              <div className="menu-name text-gray-500 font-body font-normal text-lg pl-3">
                {t("header.more")}
              </div>
            </Nav.Link>
          </Nav>
          {/* Menu Links */}

          {/* Right Options */}
          <Form inline>
            <Button className="bttn mr-3 p-0">
              <Nav.Link
                className=""
                href={`/${localStorage.getItem("selected_language")}/landlord`}
              >
                <div className="btn-heading text-gray-500 font-medium font-body text-base px-2">
                  {t("header.landlord")}
                </div>
              </Nav.Link>
            </Button>
            {/* {localStorage.getItem("selected_Flag") == "en" ? (
              <Button className="bttn mr-3 p-0">
                <Nav.Link className="" href="/en/landlord">
                  <div className="btn-heading text-gray-500 font-medium font-body text-base px-2">
                    {t("header.landlord")}
                  </div>
                </Nav.Link>
              </Button>
            ) : (
              <Button className="bttn mr-3 p-0">
                <Nav.Link className="" href="/ar/landlord">
                  <div className="btn-heading text-gray-500 font-medium font-body text-base px-2">
                    {t("header.landlord")}
                  </div>
                </Nav.Link>
              </Button>
            )} */}
            <Button className="bttn px-3 p-0 mr-2">
              <Nav.Link
                className=""
                href={`/${localStorage.getItem("selected_language")}/tanents`}
              >
                <div className="btn-heading text-gray-500 font-medium font-body text-base">
                  {t("header.tenant")}
                </div>
              </Nav.Link>
            </Button>
            <Link className="logins ml-5">
              <div className="btn-heading text-gray-500 font-body font-normal text-lg ml-3 mr-1">
                {t("header.login")}
              </div>
            </Link>
            /
            <Link className="logins">
              <div className="btn-heading text-gray-500 font-body font-normal text-lg ml-1">
                {t("header.signup")}
              </div>
            </Link>
            <img className="mx-3" src={Enter} alt="enter"></img>
            {/* <select
              className="bg-gray"
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
             <option
                className="uk flag-icon flag-icon-us fas fa-flag "
                style={{ backgroundImage: `url(${logo})` }}
                value="en"
              >
                UK
              </option>
              <option value="ar"> Ar</option> 
              {options.map((o) => {
                return <option>{o}</option>;
              })}
            </select> */}
            <div className="lang-main relative">
              <div
                className="lang-header flex"
                // onClick={() => setShow(!isShow)}
              >
                {!isShow ? (
                  <div
                    onClick={() => langHandler("en")}
                    className="btn-heading selected-lang uk eng-lan cursor-pointer flex leading-9"
                  >
                    UK
                  </div>
                ) : (
                  <div
                    onClick={() => langHandler("ar")}
                    className="btn-heading selected-lang ae eng-lan cursor-pointer flex leading-9"
                  >
                    AE
                    {/* العربية */}
                  </div>
                )}

                {/* {!isUK ? (
                  <div
                    onClick={() => langHandler("en", false)}
                    className="selected-lang uk eng-lan cursor-pointer flex leading-9"
                  >
                    UK
                  </div>
                ) : (
                  <div
                    onClick={() => langHandler("ar", true)}
                    className="selected-lang ae eng-lan cursor-pointer flex leading-9"
                  >
                    AE
                  </div>
                )} */}
                {/* <span className="pl-2 pt-2 mt-2">
                  <img src={DownArrow} alt="img" />
                </span> */}
              </div>

              {/* {isShow && (
                <div
                  className="lang-list absolute"
                  style={{ backgroundColor: "white", padding: "0 10px" }}
                >
                  <div
                    onClick={() => langHandler("en", false)}
                    className="selected-lang uk eng-lan cursor-pointer flex leading-9"
                  >
                    UK
                  </div>
                  <div
                    onClick={() => langHandler("ar", true)}
                    className="selected-lang ae eng-lan cursor-pointer flex leading-9"
                  >
                    AE
                  </div>
                </div>
              )} */}
            </div>
          </Form>
          {/* Right Options */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default withTranslation(["common"])(Header);
