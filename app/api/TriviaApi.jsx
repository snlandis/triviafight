import React, { Component } from 'react';
import axios from 'axios';


class TriviaApi extends Component {
  constructor(props) {
    super(props);

    this.state = {

      question: [],
      answers: []

    };
  }



  componentWillMount() {
    axios.get('https://opentdb.com/api.php?amount=10')
    .then(response => {
      const questions = response.data.results
      const question1 = questions[0].question
      const correct = questions[0].correct_answer
      const incorrect = questions[0].incorrect_answers
      let arr1 = [correct, incorrect[0], incorrect[1], incorrect[2]];
      // console.log(arr1);
       arr1 = shuffle(arr1);
      console.log(arr1);
      function shuffle(arr1) {
        var currentIndex = arr1.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arr1[currentIndex];
        arr1[currentIndex] = arr1[randomIndex];
        arr1[randomIndex] = temporaryValue;



  }
    return arr1;

}


      this.setState({

        question: question1,
        answers: arr1

      });
    })
    .catch(error => {
      console.log('Error: ', error);
    });
  }



  render() {
    return (
      <div className="container">
          <h4>{ decodeURI(this.state.question) }</h4>
          <ul>
            <li></li>
          </ul>
      </div>
    );
  }
}

export default TriviaApi;
