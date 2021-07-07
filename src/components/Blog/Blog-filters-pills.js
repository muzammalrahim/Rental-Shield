import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";



export default class Blogfilter extends Component {
  
    constructor() {
      super()
      this.state = {
       TabValue:1
      }
  }
  
   TabchangeHandler=(value)=>{
        this.setState({TabValue:value})
    }
  
    render() {
      let {TabValue} = this.state
      return (
        <div>
          <Container fluid>
            <Row className="items-center">
              <Col lg="12" md="12" sm="12" className="m-auto">
              
                <div class="flex rounded-full border-grey-500 border-2 mx-4 text-xl font-bold">
                  <button onClick={(e)=>this.TabchangeHandler(1)} 
                  className={`w-4/12  rounded-full py-3 px-6 ${TabValue === 1 ? "bg-green-900 text-white font-bold" : "text-xl font-bold"}`}
                 >
                   Landlords
                  </button>
                  <button onClick={(e)=>this.TabchangeHandler(2)}  
                 className={`w-4/12  rounded-full py-3 px-6 ${TabValue === 2 ? "bg-green-900 text-white font-bold" : "text-xl font-bold"}`}
                  
                  >
                    Tenants
                  </button>
                  <button onClick={(e)=>this.TabchangeHandler(3)}  
                  className={`w-4/12  rounded-full py-3 px-6 ${TabValue === 3 ? "bg-green-900 text-white font-bold" : "text-xl font-bold"}`}
                  >
                    General
                  </button>
                </div>
              </Col>
            </Row>
            
          </Container>
        </div>
      );
    }
  }
  