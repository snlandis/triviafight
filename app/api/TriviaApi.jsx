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
      function shuffle(arr1) {
        var currentIndex = arr1.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
        while (0 !== currentIndex) {

    // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

    // And swap it with the current element.
        temporaryValue = arr1[currentIndex];
        arr1[currentIndex] = arr1[randomIndex];
        arr1[randomIndex] = temporaryValue;



  }
    return arr1;

}
var decodeEntities = (function() {
  // this prevents any overhead from creating the object each time
  var element = document.createElement('div');

  function decodeHTMLEntities (str) {
    if(str && typeof str === 'string') {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }

    return str;
  }

  return decodeHTMLEntities;
})();


      this.setState({

        question: decodeEntities(question1),
        correct_answer: correct

      })
    })
    .catch(error => {
      console.log('Error: ', error);
    });
  }



  render() {
    return (
      <div className="container">
          <h4>{ this.state.question }</h4>
          <ul>
            <li>A: {this.state.arr1} </li>
            <li>B: </li>
            <li>C: </li>
            <li>D: </li>
          </ul>
      </div>
    );
  }
}

export default TriviaApi;
