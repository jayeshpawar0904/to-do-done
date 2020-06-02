import React from "react";
import { FaPlusCircle} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SubMenu from "./Submenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import axios from'axios'
import './DashBoard.css'

class SideBar extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      username:'',
      users:[]
       
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }
  
  render() {
    return (
      
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >
            <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
          </Button>
          <h5>ToDoDone</h5>
        </div>

        <Nav className="flex-column pt-2">

          <Nav.Item className="active">
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Nav.Link>
          </Nav.Item>

           
          <SubMenu
            title="Labels"
            icon={faCopy}
            items={this.state.users.map(function(user) {
              return <option 
              key={user}
               value={user}>{user}
               
                </option>;
                
            })}
          />
 <Nav.Item>
   
            <Nav.Link>
            <Link to='/user'>
            <FaPlusCircle  color='purple-red' size='1rem' />
              New label
              </Link>
            </Nav.Link>
            
          </Nav.Item>
  
          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faImage} className="mr-2" />
              Portfolio
            </Nav.Link>
          </Nav.Item>

         

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default SideBar;