import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CardsUi from '../cards/CardsUi'
import FlipMove from 'react-flip-move';
import { Container, Row, Col } from 'reactstrap';

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)

export default class Label extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {
        username:props.username
        ,exercises: []};

  }

  componentDidMount() {
    axios.get('http://localhost:5000/labels/'+this.props.match.params.username)
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      console.log(this.props.username)
     
        console.log(this.state.username)
        return <CardsUi exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div>
        <FlipMove duration={300} easing="ease-in-out">
            <Container fluid>
                <Col>
        <Row fnoGutters={true}> 

        { this.exerciseList() }

        </Row>
        </Col>
        </Container>
        </FlipMove>
            
         
      </div>
    )
  }
}