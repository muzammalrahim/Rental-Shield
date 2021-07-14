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
       

            <div className="font-body text-2x text-justify">
              <p style={{width:"97%"}} className="border-b-2 border-gray-500  float-left  text-gray-500 font-body sm:text-lg lg:text-xl xl:text-2x"> {title}</p>
              <p style={{width:"3%"}} className="border-b-2 border-gray-500 cursor-pointer  text-2x float-right text-gray-500 font-body text-right">
                {" "}
                {isActive ? "-" : "+"}
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
