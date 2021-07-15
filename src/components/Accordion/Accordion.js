import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";


const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <Row>
        <Col md="12" lg="12">
          <div
            style={{borderRadius:"10px"}}
            className=" border-gray-500 shadow m-2 pt-4 pb-16 pl-4 pr-7 w-full"
            onClick={(e) => {
              e.preventDefault();
              setIsActive(!isActive);
            }}
          >
            <div
              class=" float-left 
                  rounded-full h-10 w-10 flex items-center 
                  justify-center bg-white border-8 border-solid 
                   border-green-200  "
            ></div>

            <div className="font-body text-2x text-justify ">
              <p className="w-9/12 float-left ml-4 text-gray-500 font-body sm:text-lg lg:text-xl xl:text-2x"> {title}</p>
              <p className="text-4xl font-thin float-right text-gray-500 font-body text-right cursor-pointer">
                {" "}
                {isActive ? "-" : "+"}
              </p>
            </div>
          </div>
          {/* {isActive && (
            <div className="float-left w-full pr- border-gray-500 shadow m-2 font-body text-lg font-normal p-4 text-justify ">
              {content}
            </div>
          )} */}
           <Collapse in={isActive}>
           <div 
              style={{borderRadius:"10px"}}
              className="float-left w-full pr- border-gray-500 shadow m-2 font-body text-lg font-normal p-4 text-justify ">
              {content}
            </div>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

export default Accordion;
