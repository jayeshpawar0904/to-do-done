import React from "react";
import { Accordion, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from'axios'
import ReactDOM from 'react-dom';
import Label from '../components/label'
class SubMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      username:'',
      collapsed: true
    };
    this.searchByUsername = this.searchByUsername.bind(this);
  }
  searchByUsername(e){
  
    this.setState({
      username:e.target.value
  })
  console.log(this.state.username);
 
}

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { icon, title, items } = this.props;

    return (
      <div>
       
      
      <Nav.Item className={classNames({ open: !this.state.collapsed })}>
        <Accordion>
          <Accordion.Toggle
            as={Nav.Link}
            variant="link"
            eventKey="0"
            onClick={this.toggleNavbar}
          >

            <FontAwesomeIcon icon={icon} className="mr-2" />
            {title}
            <FontAwesomeIcon
              icon={this.state.collapsed ? faCaretDown : faCaretUp}
              className="float-right"
            />
          </Accordion.Toggle>
   
         
   
          <Accordion.Collapse eventKey="0">
            <nav className="nav flex-column">
              {items.map(item => ( 
                
                <Link onClick={this.searchByUsername} className='btn btn-outline-success' value={item} to={"/labels/"+this.state.username}>{item}</Link>
               
               
              ))}

            </nav>
          </Accordion.Collapse>
          
          
        </Accordion>
      </Nav.Item>
      </div>
    );

    // return (
    //   <div>
    //     <NavItem
    //       onClick={this.toggleNavbar}
    //       className={classNames({ "menu-open": !this.state.collapsed })}
    //     >
    //       <NavLink className="dropdown-toggle" href="#">
    //         <FontAwesomeIcon icon={icon} className="mr-2" />
    //         {title}
    //       </NavLink>
    //     </NavItem>
    //     <Collapse
    //       isOpen={!this.state.collapsed}
    //       navbar
    //       className={classNames("items-menu", {
    //         "mb-1": !this.state.collapsed
    //       })}
    //     >
    //       {items.map(item => (
    //         <NavItem key={item} className="pl-4">
    //           <NavLink>{item}</NavLink>
    //         </NavItem>
    //       ))}
    //     </Collapse>
    //   </div>
    // );
  }
}

export default SubMenu;