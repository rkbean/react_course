import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenceItem.css';

const ExpenceItem = (props) => {
  const [title, setTitle] = useState(props.title);
  
  // let title = props.title;

  const clickHandler = () => {
    setTitle('Updated:');
    console.log('we were clicked now!! - ' + title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenceItem;