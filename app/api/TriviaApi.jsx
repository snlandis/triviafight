import React, { Component } from 'react';
import axios from 'axios';
import Question from 'Question';

class TriviaApi extends Component {
  constructor(props) {
    super(props);

    this.state = {

      question: [],
      answers: [],
      answers2: [],
      correct_answer: '',
      type: [],
      category: [],
      length: 0

    };
  }
  componentWillMount() {
    axios.get('https://opentdb.com/api.php?amount=10')
    .then(response => {
      const questions = response.data.results
      const question1 = questions[0].question
      const correct = questions[0].correct_answer
      const incorrect = questions[0].incorrect_answers
      const qtype = questions[0].type
      const category = questions[0].category
      const length = questions.length

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


        category: decodeEntities(category),
        length: length

      })
    })
    .catch(error => {
      console.log('Error: ', error);
    });
  }


  render() {
    return (
      <div className="container">
          <h4>Category: { this.state.category }</h4>
          <Question />
      </div>
    );
  }
}

export default TriviaApi;
