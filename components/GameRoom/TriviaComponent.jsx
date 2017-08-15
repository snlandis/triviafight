import React, { Component } from 'react';
import QuizQuestions from 'QuizQuestions';
import Quiz from './Quiz';
import Result from './Result';
import update from 'react-addons-update';

class TriviaComponent extends Component {


  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 0,
      question: '',
      answerOptions: [],
      answers: [],
      count: 5,
      result: '',
      correct: '',
      type: ''

    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = QuizQuestions.map((question) => this.shuffleArray(question.answers));
    let x = Math.floor(Math.random() * 547)
    this.setState({
      question: QuizQuestions[x].question,
      answerOptions: shuffledAnswerOptions[x],
      correct: QuizQuestions[x].correct,
      type: QuizQuestions[x].answers.type,
      answers: QuizQuestions[x].answers
    });

    // console.log(shuffledAnswerOptions[x]);
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleAnswerSelected(event) {
    event.preventDefault();
    console.log('what did i do', event.currentTarget.value)
    let currentAnswer = event.currentTarget.value;
    this.setUserAnswer(event.currentTarget.value);
    if (event.currentTarget.value === this.state.correct){
			alert('Correct!!')
       console.log('YEAH')
    } else {
			alert('Incorrect')
      console.log('HAHA')
      this.setState({count: this.state.count - 1});
      console.log(this.state.count);
      if (this.state.count <= 1){
        alert('You\'ve been knocked out!');
				window.location = ('/#/main');
      }
    }
    setTimeout(() => this.setNextQuestion(), 300)
    // if (this.state.questionId < QuizQuestions.length) {
        // setTimeout(() => this.setNextQuestion(), 300);
    // } else {
        // setTimeout(() => this.setResults(this.getResults()), 300);
    // }
  }


  setUserAnswer(type) {
    let correctAnswer = this.state.correct[0]
    let firstChoice = this.state.answers[type]
    // console.log('i',i);
    console.log('this.state.answers',this.state.answers)
    // console.log('What you chose: ', firstChoice)
    console.log('Correct answer: ', correctAnswer);

    // const updatedAnswersCount = update(this.state.answersCount, {
    //   [type]: {$apply: (currentValue) => currentValue + 1}
    // });

    this.setState({
        type: firstChoice,
        correct: correctAnswer
    });
  }

  checkForAnswer(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (event.currentTarget.value == this.state.correct){
      console.log('Correct');
    } else {
      console.log('Wrong');
    }
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    // console.log(questionId);
    let y = Math.floor(Math.random() * 547)
    this.setState({
        counter: counter,
        questionId: questionId,
        question: QuizQuestions[y].question,
        answerOptions: QuizQuestions[y].answers,
        type: QuizQuestions[y].answers.type,
        correct: QuizQuestions[y].correct
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        type={this.state.handleAnswerSelected}
        answerOptions={this.state.answerOptions}
        correct={this.state.correct}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={QuizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        checkForAnswer={this.checkForAnswer}
        className="quiz"
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

  render() {
    return (
      <div className="App">

        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }

}

export default TriviaComponent;
