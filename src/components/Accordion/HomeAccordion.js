import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import useCollapse from "react-collapsed";

const HomeAccordion = ({ title, content }) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <div className="accordion-item">
      <Row>
        <Col md="12" lg="12">
          <div
            className=""
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
          >
            <div
              className={`font-body text-2x text-left  flex mb-3 ${
                isExpanded ? "border-none" : "border-b-2 border-gray-500"
              }`}
            >
              <p className=" faq-inner text-gray-500 font-body sm:text-base leading-6 pr-3 lg:text-xl xl:text-2x">
                {" "}
                {title}
              </p>
              <p className="ml-auto mb-0 text-4xl font-thin cursor-pointer   text-gray-500 font-body text-right">
                {" "}
                {isExpanded ? "-" : "+"}
              </p>
            </div>
          </div>
          <section {...getCollapseProps()}>
            <div
              id="example-collapse-text faq-inner-content "
              className="border-b-2 border-gray-500 text-gray-500  float-left w-full pb-4 mb-3  font-body text-base leading-5 font-normal  text-justify "
            >
              {content}
            </div>
          </section>
        </Col>
      </Row>
      <div></div>
    </div>
  );
};

export default HomeAccordion;
