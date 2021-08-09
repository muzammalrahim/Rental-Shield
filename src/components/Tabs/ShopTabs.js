import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import setting from "../../assets/images/setting.svg";
export default class ShopTabs extends Component {
  constructor() {
    super();
    this.state = {
      TabValue: 1,
    };
  }

  TabchangeHandler = (value) => {
    this.setState({ TabValue: value });
  };
  render() {
    let { TabValue } = this.state;
    return (
      <div>
        <Row className="items-center mt-7">
          <Col lg="6" md="9" sm="9" className="m-auto flex">

            <div class="w-full rounded-full border-grey-light border mx-4">
                <button
                  onClick={(e) => this.TabchangeHandler(1)}
                  className={`w-4/12  rounded-full py-3 px-6 ${
                    TabValue === 1 ? "bg-green-900" : ""
                  }`}
                >
                  <p
                    className={`text-xl font-bold font-body m-auto text-gray-500 ${
                      TabValue === 1 ? "text-white" : ""
                    }`}
                  >
                    {" "}
                    Category
                  </p>
                </button>
                <button
                  onClick={(e) => this.TabchangeHandler(2)}
                  className={`w-4/12  rounded-full py-3 px-6 ${
                    TabValue === 2 ? "bg-green-900" : ""
                  }`}
                >
                  <p
                    className={`text-xl font-bold font-body m-auto text-gray-500 ${
                      TabValue === 2 ? "text-white" : ""
                    }`}
                  >
                    {" "}
                    Category
                  </p>
                </button>
                <button
                  onClick={(e) => this.TabchangeHandler(3)}
                  className={`w-4/12  rounded-full py-3 px-6 ${
                    TabValue === 3 ? "bg-green-900" : ""
                  }`}
                >
                  <p
                    className={`text-xl font-bold font-body m-auto text-gray-500 ${
                      TabValue === 3 ? "text-white" : ""
                    }`}
                  >
                    {" "}
               Category
                  </p>
                </button>
              </div>
              <div>
              <button className="mt-4">
                 <img src={setting} alt="" />
              </button>
              </div>
        
          </Col>
        </Row>
      </div>
    );
  }
}
