import React from 'react';

function QuestionCount(props) {

  return (
    <div className="questionCount">
      
    </div>
  );

}

QuestionCount.propTypes = {
  counter: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired
};

export default QuestionCount;
