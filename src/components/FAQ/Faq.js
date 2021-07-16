import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

import {Container, Row, Col} from 'react-bootstrap'
import HomeAccordion  from "../Accordion/HomeAccordion";

// Images
import FaqBgTop from '../../assets/images/faq-top.png';
import FaqBgBottom from '../../assets/images/team-bg-bottom.png';


const accordionData = [
        {
            title: "Should I use this service as a Landlord?",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Is this legal? ",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "What if I am an agent or property manager?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "Do i need a lawyer?",
            content: <p>current version is 1.2.1</p>,
        },
        {
            title: "How much does this service cost?",
            content: <p>current version is 1.2.1</p>,
        },
        {
            title: "What happens if there is a dispute?",
            content: <p>current version is 1.2.1</p>,
        },
        {
            title: "How does this benefit me?",
            content: <p>current version is 1.2.1</p>,
        },
    ];


// const styles = {
//     // bgColor: 'white',
//     titleTextColor: "#606060",
//     rowTitleColor: "#606060",
//     rowContentColor:"#606060",
//     rowContentText:"left",
//     arrowIcon:"",
//     arrowColor:"#606060",
//     // rowContentColor: 'grey',
//     // arrowColor: "red",
//     rowContentText:'23'
// };

// const config = {
//     // animate: true,
//     arrowIcon: "+",
    
    
//     // tabFocus: true
// };

export default function FAQMain() {

    return (
        <div className="faq-main faq-bg no-repeat">
            <div className="fag-bg w-full">
                <img className="w-full" src={ FaqBgTop } alt="img"/>
            </div>
            <div className="faq-inner bg-green-700 pt-4 pb-14">
                <div className="faq-home">
                {/* <div className="lg:px-40 md:px-5 sm:px-5"> */}
                    <Row className ="items-center">
                        <Col lg="5" md="12" sm="12"  className="">
                            <div className="text-gray-500 faq-heading md:faq-heading">
                                <h3 className="font-normal md:text-left text-4xl lg:text-6xl">Frequently</h3>
                                <h3 className="font-normal md:text-left text-4xl lg:text-6xl">Asked</h3>
                                <h3 className="font-normal md:text-left text-4xl lg:text-6xl">Questions</h3>
                            </div> 
                        </Col>
                        <Col lg="7" md="12" sm="12" className="text-center lg:text-left md:faq-content">
                        <div  className="accordion">
                {accordionData.map(({ title, content }) => (
                  <HomeAccordion title={title} content={content} />
                ))}
              </div>
                        </Col>
                    </Row>
                </div>
                
            </div>
            <div className="fag-bottom">
                    <img className="w-full" src={FaqBgBottom} alt="img"/>
            </div>
            
            
        </div>
    );
}

