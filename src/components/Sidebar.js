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
import User from "../assets/images/mob-avatar.png";



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
      sidebarClassName="m-sidebar-inner"
      
        sidebar={ 
        <div className="main-area">
          <div className="mob-side-topbar bg-green-700 py-2 text-center">
              <img className="mx-auto" src={User} alt="img"/>
              <p className="text-gray-500 text-base font-medium m-0">Sarah Jozaph</p>
          </div>
          <div className="mob-down-area pl-4">
          <ul className="">
              <li>
                    <Link>
                    <div className="text-gray-500 pt-5 pb-3 font-body font-normal text-lg">
                       I'm a Landlord
                    </div>
                    </Link>
                </li>
                <li>
                    <Link>
                    <div className="text-gray-500 pb-3 font-body font-normal text-lg">
                      I'm a Tanent
                    </div>
                    </Link>
                </li>
                <li>
                    <Link>
                    <div className="text-gray-500 pb-3 font-body font-normal text-lg">
                        About
                    </div>
                    </Link>
                </li>

                <li>
                    <Link>
                    <div className="text-gray-500 pb-3 font-body font-normal text-lg">
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


            {/* Right Options 
            <ul className="mob-right-side">
              <li className="mb-3">
                <Button className="bttn mr-4 p-0">
                  <Nav.Link className="" href="/landlord">
                    <div className=" mob-btn text-gray-500 font-medium font-body text-base ">
                      I'm a Landlord
                    </div>
                  </Nav.Link>
                </Button>
              </li>

              <li>
                <Button className="bttn p-0">
                <Nav.Link className="" href="/tanents">
                  <div className=" text-gray-500 font-medium font-body text-base">
                    I'm a Tenant
                  </div>
                </Nav.Link>
              </Button>
              </li>
            </ul>
            */}
            <ul>
              <li>
                  <Link>
                  <div className="text-green-900 font-body font-medium text-lg">
                      {/* <img src={Enter} alt="img"/>  */}
                      Signout
                  </div>
                  </Link>
              </li>
            </ul>
          
          {/* Right Options */}
          </div>
            
        </div>
        
        
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ 
          sidebar: { 
          background: "white", 
          width: "300px",
          textAlign:"left", 
          // padding: "10px 0 0 10px",
          // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          left:"0",
        } ,
        content: {
          overflowY: "hidden",
        },
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

