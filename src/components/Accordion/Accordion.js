import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <Row>
        <Col md="12" lg="12">
          <div
            className=" border-gray-500 shadow m-2 p-4"
            onClick={() => setIsActive(!isActive)}
          >
            <div
              class=" float-left 
                  rounded-full h-10 w-10 flex items-center 
                  justify-center bg-white border-8 border-solid 
                   border-green-200  "
            ></div>

            <span className="font-body text-2x "> {title}</span>
            <span className="font-body text-2x float-right  pr-4">
              {" "}
              {isActive ? "-" : "+"}
            </span>
          </div>
          {isActive && (
            <div className=" border-gray-500 shadow m-2 font-body text-2x p-4 ">
              {content}
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Accordion;
