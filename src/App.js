import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import img1 from './nav/round-add-button.png'
import Navbar from "./nav/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import PopUpForm from "./components/create-user.component";
import { FaPlusCircle} from "react-icons/fa";
import { IconContext} from "react-icons";


function App() {
  return (
    <Router>
      <div className='app'>
    <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />

      <div className="container center">
      <div className='fixed'>
      <Link to='/create' class="menu__link">
      <IconContext.Provider value={{ className: 'react-icons' }}>
      <FaPlusCircle  onClick={'/create'} color='purple-red' size='3rem' />
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
