import React, { Component } from 'react';
import axios from 'axios';


class TriviaApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
      type: '',
      difficulty: '',
      question: '',
      correct_answer: '',
      incorrect_answers: []
    };
  }


  componentWillMount() {
    console.log('hi')
    axios.get('https://opentdb.com/api.php?amount=10')
    .then(response => {
      console.log(response);

      this.setState({
        category: [],
        type: '',
        difficulty: '',
        question: '',
        correct_answer: '',
        incorrect_answers: []
      });
    })
    .catch(error => {
      console.log('Error: ', error);
    });
  }



  render() {
    return (
      <div className="container">
          <h1> </h1>
      </div>
    );
  }
}

export default TriviaApi;
