import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GeneralImg from "../../assets/images/FaqCategoriesGeneral.png";
import TenantsImg from "../../assets/images/FaqCategoriesTenants.png";
import LandlordsImg from "../../assets/images/FaqCategoriesLandlords.png";
import SliderBg from "../../assets/images/team-bg-top.png";
import CategoryBtm from "../../assets/images/faq-category-bottom.png";

export default class FaqCategories extends Component {
  constructor() {
    super();
    this.state = {
       Landlords : false,
       Tenants : false,
       General : false,
    };
  }


  render() {
    let { Landlords,Tenants,General } = this.state;
    return (
      <div>
        {/* <img className="w-full" src={SliderBg} alt=""/>  */}

        <div className="relative FaqCategories">
          <div className="bg-green-700">
            <Container>
              <div className="z-30">
                <br />
                <p className="text-gray-500 lg:text-6xl md:text-4xl font-normal font-body xs_heading">
                  Categories
                </p>
                <br /> <br />
                <Row className="items-center pb-9">
                  <Col lg="4" md="6" sm="12" className=" mb-44 xs_itemText">
                    <div className="m-auto bg-no-repeat bg-contain bg-center faq-bg no-repeat relative sm:pb-36 lg:pb-0">
                      <img
                        class="m-auto relative z-50"
                        src={LandlordsImg}
                        alt="Sunset in the mountains"
                      />

                      <div
                        className="text-3xl font-bold top-44 m-auto min-w-full z-10 left-0
                        opacity-50 absolute bg-gradient-to-b from-silver-600 to-blue-500 p-24	
                     hover:from-pink-500 hover:to-yellow-500  ..."
                      >
                        <p className="mt-7">Landlords</p>
                        <button
                          onClick={(e) => {
                            this.setState({Landlords: !Landlords ,Tenants:false,General:false});
                          }}
                          className={`mx-auto  mt-14
                  rounded-full h-12 w-12 flex items-center justify-center
                    border-8 border-solid  border-green-200 ${
                      Landlords ? "bg-green-400" : "bg-white"
                    }`}
                        ></button>
                      </div>
                    </div>
                  </Col>

                  <Col lg="4" md="6" sm="12" className=" mb-44 xs_itemText">
                    <div className="m-auto bg-contain bg-no-repeat bg-center faq-bg no-repeat relative sm:pb-36 lg:pb-0">
                      <img
                        className="m-auto relative z-50"
                        src={TenantsImg}
                        alt="Sunset in the mountains"
                      />

                      <div
                        className="text-3xl font-bold top-44 m-auto min-w-full z-10 left-0
                        opacity-50 absolute bg-gradient-to-b from-silver-600 to-blue-500 p-24	
                     hover:from-pink-500 hover:to-yellow-500 ..."
                      >
                        <p className="mt-7">Tenants</p>
                        <button
                          onClick={(e) => {
                            this.setState({ Tenants: !Tenants,Landlords:false,General:false });
                          }}
                          className={`mx-auto  mt-14
                  rounded-full h-12 w-12 flex items-center justify-center
                    border-8 border-solid  border-green-200 ${
                      Tenants ? "bg-green-400" : "bg-white"
                    }`}
                        ></button>
                      </div>
                    </div>
                  </Col>

                  <Col lg="4" md="6" sm="12" className=" mb-56 xs_itemText">
                    <div className="m-auto bg-contain bg-no-repeat bg-center faq-bg no-repeat relative sm:pb-36 lg:pb-0">
                      <img
                        className="m-auto relative z-50"
                        src={GeneralImg}
                        alt="Sunset in the mountains"
                      />
                      <div
                        className="text-3xl font-bold top-44 m-auto min-w-full z-10 left-0
                        opacity-50 absolute bg-gradient-to-b from-silver-600 to-blue-500 p-24	
                     hover:from-pink-500 hover:to-yellow-500 ..."
                      >
                        <p className="mt-7">General</p>
                        <button
                          onClick={(e) => {
                            this.setState({ General: !General,Tenants:false,Landlords:false });
                          }}
                          className={`mx-auto  mt-14
                  rounded-full h-12 w-12 flex items-center justify-center
                    border-8 border-solid  border-green-200 ${
                      General ? "bg-green-400" : "bg-white"
                    }`}
                        ></button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <img
            style={{ zIndex: "99" }}
            className="w-full  bottom-6"
            src={CategoryBtm}
            alt=""
          />
        </div>
      </div>
    );
  }
}
