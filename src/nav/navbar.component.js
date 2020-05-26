import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import { FaPlusCircle} from "react-icons/fa";
export default class Navbar extends Component {

  render() {
   
return(

<div>
  
<div className="container center">
  <nav className="menu">
      <h1 class="menu__logo">Epic Co.</h1>

      <div className="menu__right">
          <ul className="menu__list">
              <li className="menu__list-item"><Link to='/' className="menu__link menu__link--active">ToDo</Link></li>
              <li className="menu__list-item"><Link to='/create' class="menu__link">Create</Link></li>
              <li className="menu__list-item"><Link to='/' class="menu__link" >Notes</Link></li>
              <li className="menu__list-item"><Link to='/user' class="menu__link" >Labels</Link></li>
          </ul>

          <button className="menu__search-button"></button>

          <form className="menu__search-form hide" method="POST">
              <input className="menu__search-input" placeholder="Type and hit enter"/>
          </form>
      </div>
  </nav>
</div>

</div>
)

  }
}