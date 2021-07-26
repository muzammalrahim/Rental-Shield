import React from "react";
import Sidebar from "react-sidebar";
import { BsList} from "react-icons/bs";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";



// Images
import Enter from "../assets/images/enter.svg";


class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  render() {
    return (
      <Sidebar
      rootClassName="mob-sidebar-main"
      sidebarClassName=""
      styles={{ 
        height:'300px',
        left: "-42px"
      }}
        sidebar={ 
        <div className="main-area">
            <ul>
                <li>
                    <Link>
                    <div className="text-gray-500 font-body font-normal text-lg">
                        About
                    </div>
                    </Link>
                </li>

                <li>
                    <Link>
                    <div className="text-gray-500 font-body font-normal text-lg">
                        FAQ's
                    </div>
                    </Link>
                </li>

                <li>
                    <Link>
                    <div className="text-gray-500 font-body font-normal text-lg">
                        More
                    </div>
                    </Link>
                </li>
            </ul>


            {/* Right Options */}
            <ul className="mob-right-side">
              <li className="mb-3">
                <Button className="bttn mr-4 p-0">
                  <Nav.Link className="" href="/landlord">
                    <div className=" mob-btn text-gray-500 font-medium font-body text-base px-2">
                      I'm a Landlord
                    </div>
                  </Nav.Link>
                </Button>
              </li>

              <li>
                <Button className="bttn px-3 p-0">
                <Nav.Link className="" href="/tanents">
                  <div className=" text-gray-500 font-medium font-body text-base">
                    I'm a Tenant
                  </div>
                </Nav.Link>
              </Button>
              </li>
            </ul>
          
          {/* Right Options */}
        </div>
        
        
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ 
          sidebar: { 
          background: "white", 
          width: "300px",
          textAlign:"left", 
          padding: "10px 0 0 10px",
          // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          left:"0"
        } 
      }}
      >
        <button className="mob-side-menue" onClick={() => this.onSetSidebarOpen(true)}>
         <BsList/>
          
        </button>
      </Sidebar>
    );
  }
}
 
export default SideBar;

