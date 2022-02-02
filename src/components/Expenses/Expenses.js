import React, { useState } from 'react';
import ExpenceItem from './ExpenceItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import './Expense.css';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    console.log('in expense.js');
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onYearChange={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenceItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        
      </Card>
    </div>
  );
}

export default Expenses;
