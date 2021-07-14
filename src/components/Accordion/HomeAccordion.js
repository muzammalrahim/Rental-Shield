import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

const HomeAccordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <Row>
        <Col md="12" lg="12">
          <div
            className=""
            onClick={() => setIsActive(!isActive)}
          >
       

            <div className="font-body text-2x text-justify border-b-2 border-gray-500  flex mb-3">
              <p className="  text-gray-500 font-body sm:text-lg lg:text-xl xl:text-2x"> {title}</p>
              <p className="ml-auto cursor-pointer text-2x  text-gray-500 font-body text-right">
                {" "}
                {isActive ? <b>{"-"}</b>  : "+"}
              </p>
            </div>
          </div>

          {isActive && (
            <div className="border-b-2 border-gray-500 float-left  pb-3 mb-3  font-body text-lg font-normal  text-justify ">
              {content} 
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default HomeAccordion;


