import React from 'react';

function Question2(props) {

  return (
    <h2 className="question">{props.content}</h2>
  );

}

Question2.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Question2;
