import React from "react";
import Sidebar from "react-sidebar";
import { BsList} from "react-icons/bs";
import { Link } from "react-router-dom";


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
      <Sidebar  className={'test'} styles={{height:'300px'}}
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
        </div>
        
        
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button className="mob-side-menue" onClick={() => this.onSetSidebarOpen(true)}>
         <BsList/>
          
        </button>
      </Sidebar>
    );
  }
}
 
export default SideBar;

