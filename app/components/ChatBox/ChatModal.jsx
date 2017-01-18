var React = require('react');
var Modal = require('boron/FlyModal');

// Individual styles for the modal, modal content, and backdrop
var modalStyle = {
    transform: 'rotate(45deg) translateX(-50%)',
};

var backdropStyle = {
    backgroundColor: 'red'
};

var contentStyle = {
    backgroundColor: 'blue',
    height: '100%'
};

var Example = React.createClass({
    showModal: function(){
        this.refs.modal.show();
    },
    hideModal: function(){
        this.refs.modal.hide();
    },
    render: function() {
        return (
            <div>
                <button onClick={this.showModal}>Open</button>
                <Modal ref="modal" modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
                    <h2>I am a dialog</h2>
                    <button onClick={this.hideModal}>Close</button>
                </Modal>
            </div>
        );
    }
});
module.export = Example;
