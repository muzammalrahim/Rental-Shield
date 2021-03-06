import React, { Component } from "react";
import Faq from "react-faq-component";
import { Container, Row, Col } from "react-bootstrap";
import FaqBg from "../../assets/images/FaqAccordion.png";
import Accordion from "./Accordion";

const accordionData = [
  {
    title: " How does this work exactly?",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
  },
  {
    title: "Am I protected by the law?",
    content:
      "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
  },
  {
    title: "So ultiamtley you can make the final decision",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
  },
  {
    title: "What sort of terms & conditions exactly?",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
  },
  {
    title: "Is my data protected?",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
  },
];

export default class FaqAccordion extends Component {
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
      <div className="FaqAccordions">
        <Container fluid>
          {/* <Row className="items-center mt-4">
            <Col lg="5" md="12" sm="12" className="m-auto">
              <br /> <br />
              <p className="text-6xl font-body text-gray-500 mb-7">
                Frequently Akesd Questions
              </p>
              <br /> <br /> <br />
              <div class="flex rounded-full border-grey-light border mx-4">
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
                    Landlords
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
                    Tenants
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
                    General
                  </p>
                </button>
              </div>
            </Col>
          </Row> */}
          <Row className="items-center px-11">
            <Col lg="5" md="12" sm="12" className="xs_picSize lg_picSize">
              <div
                className="bg-contain bg-no-repeat bg-top faq-bg no-repeat min-h-screen "
                style={{ backgroundImage: `url(${FaqBg})` }}
              ></div>
            </Col>
            <Col
              lg="7"
              md="12"
              sm="12"
              className="text-center lg:text-left md:faq-content"
            >
              <div style={{ marginTop: "-10rem" }} className="accordion">
                {accordionData.map(({ title, content }) => (
                  <Accordion title={title} content={content} />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
