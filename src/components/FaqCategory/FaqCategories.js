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

        <div className="relative">
          <div className="bg-green-700">
            <Container>
              <div className="z-30">
                <br />
                <p className="text-gray-500  lg:text-6xl md:text-4xl  font-normal  font-body ">
                  Categories
                </p>
                <br /> <br />
                <Row className="items-center">
                  <Col lg="4" md="4" sm="12" className="mt-14 mb-4">
                    <div className="m-auto bg-no-repeat bg-contain bg-center faq-bg no-repeat relative">
                      <img
                        class="m-auto relative z-50"
                        src={Landlords}
                        alt="Sunset in the mountains"
                      />

                      <div
                        className="text-3xl font-bold top-44 m-auto min-w-full z-10 left-0
                        opacity-50 absolute bg-gradient-to-b from-silver-600 to-blue-500 p-24	
                     hover:from-pink-500 hover:to-yellow-500 ..."
                      >
                        <p className="mt-7">Landlords</p>
                      </div>

                      <div
                        className="mx-auto  mt-28
                  rounded-full h-12 w-12 flex items-center justify-center
                   bg-white border-8 border-solid  border-green-200  "
                      ></div>
                    </div>
                  </Col>
                  <Col lg="4" md="4" sm="12" className="mt-14 mb-4">
                    <div className="m-auto bg-contain bg-no-repeat bg-center faq-bg no-repeat relative">
                      <img
                        className="m-auto relative z-10"
                        src={Tenants}
                        alt="Sunset in the mountains"
                      />

                      <div
                        className="text-3xl font-bold top-44 m-auto min-w-full z-10 left-0
                        opacity-50 absolute bg-gradient-to-b from-silver-600 to-blue-500 p-24	
                     hover:from-pink-500 hover:to-yellow-500 ..."
                      >
                        <p className="mt-7">Tenants</p>
                      </div>
                      <div
                        className="mx-auto  mt-28
                  rounded-full h-12 w-12 flex items-center 
                  justify-center bg-white border-8 border-solid 
                   border-green-200  "
                      ></div>
                    </div>
                  </Col>

                  <Col lg="4" md="4" sm="12" className="mt-14 mb-4">
                    <div className="m-auto bg-contain bg-no-repeat bg-center faq-bg no-repeat relative">
                      <img
                        className="m-auto relative z-50"
                        src={General}
                        alt="Sunset in the mountains"
                      />
                      <div
                        className="text-3xl font-bold top-44 m-auto min-w-full z-10 left-0
                        opacity-50 absolute bg-gradient-to-b from-silver-600 to-blue-500 p-24	
                     hover:from-pink-500 hover:to-yellow-500 ..."
                      >
                        <p className="mt-7">General</p>
                      </div>
                      <div
                        className="mx-auto  mt-40
                  rounded-full h-12 w-12 flex items-center 
                  justify-center bg-white border-8 border-solid 
                   border-green-200  "
                      ></div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
    
          </div>
            <img style={{zIndex:"99"}} className="w-full  bottom-6" src={CategoryBtm} alt=""/>     
        </div>
      </div>
    );
  }
}
