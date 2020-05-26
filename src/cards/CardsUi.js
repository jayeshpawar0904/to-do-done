import React from 'react'
import './cardstyle.css'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

function CardsUi(props) {
    return (
        <div className='cs'>
        <Card>
    <Card.Body>
      <Card.Title>{props.exercise.duration}</Card.Title>
      <Card.Text>
      {props.exercise.description}
      </Card.Text>
      <Card.Text>
      {props.exercise.date.substring(0,10)}
      </Card.Text>
     
      <Link className='btn btn-outline-success' to={"/edit/"+props.exercise._id}>edit</Link>  <a href="#" className='btn btn-outline-success' onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{props.exercise.username}</small>
    </Card.Footer>
  </Card>
  </div>
    )
}

export default CardsUi
