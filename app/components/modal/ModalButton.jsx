import React from 'react';

var Modal = require('./Modal');


  class ModalButton extends React.Component {
    constructor(props) {
      super(props)
      this.state = { isModalOpen: false }
    }

    render() {
      return (
        <div>
          <button onClick={() => this.openModal()}>Open modal</button>
          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <h1>Challenge?</h1>
            <p>I'm proud of you!</p>
            <p><button onClick={() => this.closeModal()}>Close</button></p>
          </Modal>
        </div>
      )
    }

    openModal() {
      this.setState({ isModalOpen: true })
    }

    closeModal() {
      this.setState({ isModalOpen: false })
    }
  }

module.exports = ModalButton;
