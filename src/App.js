import React ,{useState} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import './App.css';

import img1 from './nav/round-add-button.png'

import Navbarr from "./nav/navbar.component";
import SideNavPage from "./nav/Sidebar";
import ExercisesList from "./components/exercises-list.component";
import Label from "./components/label";
import LabBut from "./components/labBut";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Appl from "./components/PopUpForm";
import { FaPlusCircle} from "react-icons/fa";
import { IconContext} from "react-icons";
import Dashboard from './nav/Dashboard';




function App() {
  
  const [modalShow, setModalShow] = React.useState(false);
  return (
    
    <Router>
       <div >
         >
    <div className="sidenav ">
    
     <Dashboard/>
    
    
    </div>
   
    <Navbarr/>
    
    
    </div>
      <div className='app'>
      
     
  
    <div className="container">
    
    
      <br/>
      <Switch>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/labels/:username" component={Label}/>
      <Route path="/user" component={CreateUser} />
      </Switch>
      <div className="container center">
      <div className='fixed'>
      <Link to='/create' class="menu__link">
      <IconContext.Provider value={{ className: 'react-icons' }}>
      <FaPlusCircle  onClick={() => setModalShow(true)} color='purple-red' size='3rem' />
      <Appl
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </IconContext.Provider>
      </Link>

    

      
      </div>
      </div>
      </div>

      
      
      
      </div>
    </Router>
  );
}

export default App;


