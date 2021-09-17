import React, { useState, useEffect, useContext } from 'react';
import QAListEntry from './QAListEntry.jsx';
import {ContextObj} from '../../ContextObj';

const QAList = (props) => {
  var questionList = props.questions.results;
  var listButton;

  const [limit, setLimit] = useState(4);
  const {productId} = useContext(ContextObj);

  useEffect(() => {
    setLimit(4);
  }, [productId]);

  const listHandler = (array) => {
    var clone = array.slice();
    return clone.slice(0, limit);
  };

  const increaseLimit = () => {
    setLimit(prevState => prevState + 2);
  };

  if (questionList.length === 0) {
    return null;
  }

  if (questionList.length - listHandler(questionList).length === 0) {
    listButton = null;
  } else {
    listButton = <button onClick={increaseLimit}>More Answered Questions</button>;
  }

  return (
    <div>
      {listHandler(questionList).map((question, index) => (<QAListEntry question={question} key={index} />))}
      {listButton}
    </div>
  );
};

export default QAList;