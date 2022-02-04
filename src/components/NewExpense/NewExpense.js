import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const showFormButtonHandler = () => {
    setShowForm(true);
  };

  const hideFormButtonHander = () => {
    setShowForm(false);
  };

  return <div className="new-expense">
  {!showForm && <button onClick={showFormButtonHandler}>Add New Expense</button>}
  {showForm && <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelForm={hideFormButtonHander}
      />}
  </div>;
};

export default NewExpense;
