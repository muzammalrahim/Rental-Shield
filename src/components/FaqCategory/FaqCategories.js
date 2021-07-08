import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import General from "../../assets/images/FaqCategoriesGeneral.png";
import Tenants from "../../assets/images/FaqCategoriesTenants.png";
import Landlords from "../../assets/images/FaqCategoriesLandlords.png";
 import SliderBg from "../../assets/images/team-bg-top.png";
 import CategoryBtm from "../../assets/images/faq-category-bottom.png";

export default class FaqCategories extends Component {
  render() {
    return (
      <div>
     {/* <img className="w-full" src={SliderBg} alt=""/>  */}

        <div className="pb-32 relative">
        <div className="bg-gradient-to-b from-green-700 via-green-700 to-white">
          <Container>
            <div className="z-30">
            <br />
            <p className="text-gray-500  lg:text-5xx md:text-4xl  font-normal 2xl font-body ">
            Categories
              </p>
            <br /> <br />
            <Row className="items-center py-16">
              <Col lg="4" md="4" sm="12" className="">
                <div className="m-auto bg-no-repeat bg-center faq-bg no-repeat  relative">
                  <img
                    class="m-auto"
                    src={Landlords}
                    alt="Sunset in the mountains"
                  />

                  <button
                    type="button"
                    class="top-44 left-8 opacity-50 absolute bg-gradient-to-b from-silver-100 to-blue-500 p-24	 hover:from-pink-500 hover:to-yellow-500 ..."
                  >
                    Landlords
                  </button>
                  <div
                    class="lg:ml-36 ml-14  mt-12
                  rounded-full h-12 w-12 flex items-center justify-center bg-white border-8 border-solid  border-green-200  "
                  ></div>
                </div>
              </Col>
              <Col lg="4" md="4" sm="12" className="">
                <div className="m-auto bg-contain bg-no-repeat bg-center faq-bg no-repeat ">
                  <img
                    class="m-auto"
                    src={Tenants}
                    alt="Sunset in the mountains"
                  />
                  <button
                    type="button"
                    class="top-44 right-12  opacity-50  absolute bg-gradient-to-b from-silver-100 to-blue-500 p-24	 hover:from-pink-500 hover:to-yellow-500 ..."
                  >
                    Tenants
                  </button>

                  <div
                    class="ml-40 mt-12
                  rounded-full h-12 w-12 flex items-center 
                  justify-center bg-white border-8 border-solid 
                   border-green-200  "
                  ></div>
                </div>
              </Col>
              <Col lg="1" md="1" sm="12" className=""></Col>
              <Col lg="3" md="3" sm="12" className="">
                <div className="m-auto bg-contain bg-no-repeat bg-center faq-bg no-repeat ">
                  <img
                    class="m-auto pl-2 pt-16"
                    src={General}
                    alt="Sunset in the mountains"
                  />
                  <button
                    type="button"
                    class="top-44 right-12  opacity-50 absolute bg-gradient-to-b from-silver-100 to-blue-500 p-24	 hover:from-pink-500 hover:to-yellow-500 ..."
                  >
                    General
                  </button>
                  <div
                    class="mb-auto ml-20 mt-16

                  rounded-full h-12 w-12 flex items-center justify-center bg-white border-8 border-solid  border-green-200  "
                  ></div>
                </div>
              </Col>
            
            </Row>
            </div>
          </Container>
          </div>
          <img style={{zIndex:"-9"}} className="w-full absolute bottom-28" src={CategoryBtm } alt=""/> 
        </div>
      </div>
    );
  }
}
