import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import useCollapse from "react-collapsed";

const Accordion = ({ title, content }) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div className="accordion-item FaqAccordionsItem">
      <Row>
        <Col md="12" lg="12">
          <div
            style={{ borderRadius: "10px" }}
            className=" border-gray-500 shadow m-2 pt-4 pb-16 pl-4 pr-7 w-full"
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
          >
            <div
              class=" float-left 
                  rounded-full h-10 w-10 flex items-center 
                  justify-center bg-white border-8 border-solid 
                   border-green-200  "
            ></div>

            <div className="font-body text-2x text-justify ">
              <p className="w-9/12 float-left ml-4 text-gray-500 font-body sm:text-lg lg:text-xl xl:text-2x xs_ItemTile">
                {" "}
                {title}
              </p>
              <p className="xs_ItemPara text-4xl font-thin float-right text-gray-500 font-body text-right cursor-pointer">
                {" "}
                {isExpanded ? "-" : "+"}
              </p>
            </div>
          </div>
          <section {...getCollapseProps()}>
            <div
              id="example-collapse-text"
              style={{ borderRadius: "10px" }}
              className="xs_ItemContent float-left w-full pr- border-gray-500 shadow m-2 font-body text-lg font-normal p-4 text-justify "
            >
              {content}
            </div>
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default Accordion;
