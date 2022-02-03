import React, { useState } from 'react';
import ExpenceItem from './ExpenceItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import './Expense.css';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    // console.log('in expense.js');
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No expenses for this year</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenceItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onYearChange={filterChangeHandler}
        />

        {expenseContent}

      </Card>
    </div>
  );
}

export default Expenses;
