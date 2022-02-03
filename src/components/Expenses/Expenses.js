import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
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



  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onYearChange={filterChangeHandler}
        />

        <ExpensesList items={filteredExpenses}/>

      </Card>
    </div>
  );
}

export default Expenses;
