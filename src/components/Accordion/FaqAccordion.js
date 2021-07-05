import React, { Component } from 'react'
import Faq from "react-faq-component";
import {Container, Row, Col} from 'react-bootstrap'
import FaqBg from '../../assets/images/FaqAccordion.png'

const data = {
    title: "",
    rows: [
        {
            title: "How does this work exactly?",
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


export default class FaqAccordion extends Component {
    render() {
        return (
            <div>
       
            <Container fluid>
                <Row  className ="items-center mt-4">
             
                    <Col  lg="5" md="12" sm="12" className="m-auto">
                        <br/>   <br/>
                    <h2>Frequently Akesd Questions</h2>   <br/>  <br/>  <br/>
                    <div class="flex rounded-full border-grey-light border mx-4">
                    <button class="w-25 bg-green-900 rounded-full py-3 px-6">Pill Shape</button>
                    <button class="w-25 rounded-full py-3 px-6...">Pill Shape</button>
                    <button class=" w-25 rounded-full py-3 px-6...">Pill Shape</button>
                  
</div>
        
                    </Col>
                </Row>
                <Row className ="items-center">
                    <Col lg="5" md="12" sm="12"  className="min-h-screen">
                        <div className="bg-contain bg-no-repeat bg-center faq-bg no-repeat min-h-screen" style={{ backgroundImage:`url(${FaqBg})` }}>
                
                        </div>
                    </Col>
                    <Col lg="7" md="12" sm="12" className="text-center lg:text-left md:faq-content">
                        <Faq
                            data={data}
                            styles={styles}
                            config={config}
                        />
                    </Col>
                </Row>
            </Container>
            
            

            </div>
        )
    }
}
