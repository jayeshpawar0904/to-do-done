import React from "react";
import Label from '../components/label'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
class LabBut extends React.Component {
    constructor(props) {
        super(props)
      
        this.state = {
          username:props.username,
          users:[]
           
        }
      }
  render(){
      return(
          <div>
             <Link className='btn btn-outline-success' to={"/labels/"+'jayesh'}>labels</Link>
      
          </div>
      )
  }    
}
export default LabBut;