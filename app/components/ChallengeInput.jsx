import React, {PropTypes} from 'react'

function ChallengeInput() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("stop pressing me dick");
  }

  function handleClick (e) {
    e.preventDefault();
    alert("stop pressing me dick");
  }

  return (
    <form className='' onSubmit={handleSubmit}>
      <div className="row" id="challenge-pg">
        <div className="medium-6 columns">
          <label className="challenge-form">Enter Phone # of the Person You wish to Challenge
            <input type="text" placeholder="Phone Number"/>
          </label>
        </div>
        <div className="medium-6 columns">
          <label className="challenge-form">Find By Email
            <input type="text" placeholder="Email"/>
          </label>
        </div>
      </div>
      <button className='hollow button alert' id="challenge-btn" onClick={this.handleClick}>
        Challenge
      </button>
    </form>
  )
}


export default ChallengeInput
