import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";

const HomeAccordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <Row>
        <Col md="12" lg="12">
          <div
            className=""
            onClick={(e) => {
              e.preventDefault();
              setIsActive(!isActive);
            }}
          >
            <div
              className={`font-body text-2x text-justify   flex mb-3 ${
                isActive ? "border-none" : "border-b-2 border-gray-500"
              }`}
            >
              <p className="  text-gray-500 font-body sm:text-lg lg:text-xl xl:text-2x">
                {" "}
                {title}
              </p>
              <p className="ml-auto mb-0 text-4xl font-thin cursor-pointer   text-gray-500 font-body text-right">
                {" "}
                {isActive ? "-" : "+"}
              </p>
            </div>
          </div>

          {/* {isActive && (
               <div
          className="border-b-2 border-gray-500 float-left w-full pb-3 mb-3  font-body text-lg font-normal  text-justify ">
              {content} 
            </div>
            
          )} */}

          <Collapse in={isActive} timeout={500}>
            <div
              id="example-collapse-text"
              className="border-b-2 border-gray-500 float-left w-full pb-3 mb-3  font-body text-lg font-normal  text-justify "
            >
              {content}
            </div>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

export default HomeAccordion;
