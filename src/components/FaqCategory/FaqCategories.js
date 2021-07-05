import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import General from '../../assets/images/FaqCategoriesGeneral.png'
import Tenants from '../../assets/images/FaqCategoriesTenants.png'
import Landlords from '../../assets/images/FaqCategoriesLandlords.png'

export default class FaqCategories extends Component {
    render() {
        return (
            <div>
            <div className="bg-lightgreen">
            <Container>
                <br/>
                <h2>Categories</h2>
                <br/>  <br/>
              
                <Row className ="items-center">
                    <Col lg="4" md="4" sm="12"  className="min-h-screen">
                        <div className="m-auto bg-no-repeat bg-center faq-bg no-repeat min-h-screen relative">
                        <img class="m-auto" src={Landlords} alt="Sunset in the mountains"/>
                        <button type="button" class="top-44 left-8  absolute bg-gradient-to-b from-silver-100 to-blue-500 p-24	 hover:from-pink-500 hover:to-yellow-500 ...">
  Hover me
</button>
                        </div>
                        
                    </Col>
                    <Col lg="4" md="4" sm="12"  className="min-h-screen">
                        <div className="m-auto bg-contain bg-no-repeat bg-center faq-bg no-repeat min-h-screen" >
                        <img class="m-auto" src={Tenants} alt="Sunset in the mountains"/>
                        </div>
                    </Col>
                    <Col lg="1" md="1" sm="12"  className="min-h-screen">
                        
                    </Col>
                    <Col lg="3" md="3" sm="12"  className="min-h-screen">
                        <div className="m-auto bg-contain bg-no-repeat bg-center faq-bg no-repeat min-h-screen" >
                        <img class="m-auto pl-2 pt-16" src={General} alt="Sunset in the mountains"/>
                        </div>
                    </Col>
                   
                </Row>
                </Container>
            </div>
       
            </div>
        )
    }
}
