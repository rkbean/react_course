import React, { useState } from "react";
import './ExpenseForm.css';
import { useState } from 'react';

const ExpneseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '', 
    enteredDate: ''
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    })
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  return <form>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type='text' onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type='date' min="2019-01-01" max="2023-12-23" onChange={dateChangeHandler} />
      </div>
    </div>
    <div className="new_expense__actions">
      <button type="submit">Add Expense</button>
    </div>
  </form>
};

export default ExpneseForm;