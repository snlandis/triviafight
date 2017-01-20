import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import Response from './response';
import formEl from './form_elements';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    /*
		*	Declaring States for Form and Response
		*/
    this.state = {
      phonevalue: '',
      age: 0,
      conditions: 0,
      response: ''
    };
    // function not defined fix
    this.handlePhone = this.handlePhone.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  /*
	*	@summary update Phone state
	*/
  handlePhone(event) {
    this.setState({response: '', phonevalue: event.target.value});
  }
  /*
	*	@summary update Checkboxes state
	*/
  handleChange(key) {
    return function(e) {
      let state = {};
      state[key] = 1;
      this.setState(state);
    }.bind(this);
  };
  /*
	*	@summary Validate phone field
	*	@params event
	*/
  validatePhone = (evt) => {
    let theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    let regex = /^[0-9 ()+]+$/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault)
        theEvent.preventDefault();
      }
    }
  /*
	*	@summary handling submision event of Form
	*/
  Handlesubmit = (event) => {
    event.preventDefault();
    let self = this;
    let phoneNumber = this.state.phonevalue;
    /*
		*	ajax to api
		*/
    fetch('/api/sms-promotion', {
      method: 'POST',
      headers: {
        'Accept': 'text/plain, text/html',
        'Content-Type': "application/json; charset=utf-8"
      },
      body: JSON.stringify({phone: phoneNumber})
    }).then(function(response) {
      return response.text();
    }).then(function(answer) {
      /*
			*	@summary reseting state, form and update response state
			*/
      self.setState({phonevalue: ''});
      self.setState({response: answer});
      ReactDOM.findDOMNode(self.refs.theform).reset();
    });
    return false;
  }
  render() {
    let formProps = this.props;
    return (
      <div className="challenge">
        <div class="row">
          <div>
            <Response responseText={this.state.response}></Response>
          </div>
        </div>
        <div class="row">
          <div>
            <p className="challengeText">Enter the Phone # of someone you want to Trivia Fight</p>
          </div>
        </div>
        <div class="row">
              <form ref="theform" action={formProps.formAction} method={formProps.formMethod} onSubmit={this.Handlesubmit}>
              <formEl className="displayf">
              <input type="text" ref="phonevalue" name="phone" id="form__container_phone" className="form__container_phone" value={this.state.phonevalue} onChange={this.handlePhone} onKeyPress={this.validatePhone} required/>
              <button type="submit" className="form__container_submit">Submit</button>
              </formEl>
              </form>
        </div>
      </div>
    );
  }
}
