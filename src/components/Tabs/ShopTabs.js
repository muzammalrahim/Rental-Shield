import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
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
        <Row className="items-center ">
          <Col lg="5" md="12" sm="12" className="m-auto">
            <div class="flex rounded-full border-grey-light border mx-4">
              <button
                onClick={(e) => this.TabchangeHandler(1)}
                className={`w-4/12  rounded-full py-3 px-6 ${
                  TabValue === 1 ? "bg-green-900" : ""
                }`}
              >
                Landlords
              </button>
              <button
                onClick={(e) => this.TabchangeHandler(2)}
                className={`w-4/12  rounded-full py-3 px-6 ${
                  TabValue === 2 ? "bg-green-900" : ""
                }`}
              >
                Tenants
              </button>
              <button
                onClick={(e) => this.TabchangeHandler(3)}
                className={`w-4/12  rounded-full py-3 px-6 ${
                  TabValue === 3 ? "bg-green-900" : ""
                }`}
              >
                General
              </button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
