import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <Row>
        <Col md="12" lg="12">
          <div
            className=" border-gray-500 shadow m-2 pt-4 pb-16 pl-4 pr-7"
            onClick={() => setIsActive(!isActive)}
          >
            <div
              class=" float-left 
                  rounded-full h-10 w-10 flex items-center 
                  justify-center bg-white border-8 border-solid 
                   border-green-200  "
            ></div>

            <div className="font-body text-2x text-justify">
              <p className="w-9/12 float-left ml-4 text-gray-500 font-body text-2x"> {title}</p>
              <p className="text-2x float-right text-gray-500 font-body text-right">
                {" "}
                {isActive ? "-" : "+"}
              </p>
            </div>
          </div>
          {isActive && (
            <div className="float-left  border-gray-500 shadow m-2 font-body text-lg font-normal p-4 text-justify ">
              {content}
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Accordion;
