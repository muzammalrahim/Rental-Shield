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
      <Sidebar  className={'test'} 
      rootClassName="mob-sidebar-main"
      sidebarClassName="test"
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
          <Form inline>
            <Button className="bttn mr-4 p-0">
              <Nav.Link className="" href="/landlord">
                <div className="text-gray-500 font-medium font-body text-lg">
                  'm a Landlord
                </div>
              </Nav.Link>
            </Button>
            <Button className="bttn px-3 p-0">
              <Nav.Link className="" href="/tanents">
                <div className="text-gray-500 font-medium font-body text-lg">
                  I'm a Tenant
                </div>
              </Nav.Link>
            </Button>
            <Link className="logins ml-5">
              <div className="text-gray-500 font-body font-normal text-lg ml-3 mr-1">
                Login 
              </div>
            </Link>
            /
            <Link className="logins">
              <div className="text-gray-500 font-body font-normal text-lg ml-1">
                Sign Up
              </div>
            </Link>
            <img className="mx-3" src={Enter} alt="enter"></img>
            {/* <select
              className="bg-gray"
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
             <option
                className="uk flag-icon flag-icon-us fas fa-flag "
                style={{ backgroundImage: `url(${logo})` }}
                value="en"
              >
                UK
              </option>
              <option value="ar"> Ar</option> 
              {options.map((o) => {
                return <option>{o}</option>;
              })}
            </select> */}
            
          </Form>
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

