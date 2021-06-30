import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import {Container, Row, Col} from 'react-bootstrap'
import FaqBg from '../../assets/images/123.png'



const data = {
    title: "",
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "#606060",
    rowTitleColor: "#606060",
    rowContentColor:"#606060",
    rowContentTextAlign:"left",
    arrowIcon:"",
    arrowColor:"#606060",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function FAQMain() {

    return (
        <div className="faq-main faq-bg no-repeat" style={{ backgroundImage:`url(${FaqBg})` }}>
            <Container>
                <Row className ="items-center">
                    <Col lg="6" md="12" sm="12"  className="">
                        <div className="text-gray faq-heading md:faq-heading">
                            <h3 className="font-normal md:text-left text-lg lg:text-6xl">Frequently</h3>
                            <h3 className="font-normal md:text-left text-lg lg:text-6xl">Asked</h3>
                            <h3 className="font-normal md:text-left text-lg lg:text-6xl">Questions</h3>
                        </div> 
                    </Col>
                    <Col lg="6" md="12" sm="12" className="text-center lg:text-left md:faq-content">
                        <Faq
                            data={data}
                            styles={styles}
                            config={config}
                        />
                    </Col>
                </Row>
            </Container>
            
            
        </div>
    );
}