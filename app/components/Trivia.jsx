import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import * as Redux from 'react-redux';
import * as actions from 'actions';
import router from 'app/router/';
class Trivia extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
  }

  componentDidMount() {
    axios.get(`https://www.opentdb.com/api.php?amount=20&type=multiple`)
      .then(res => {
        const results = res.json;
        this.setState({ results });
        console.log(res.json);
      });
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Redux.connect()(Trivia);
