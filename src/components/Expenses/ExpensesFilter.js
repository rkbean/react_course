import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  // const [enteredYear, setEnterYear] = useState('');

  const yearChangeHandler = (event) => {
    // console.log('do we get to here?');
    // console.log('direct value - ' + event.target.value);
    // console.log(event);
    
    // setEnterYear(event.target.value);
    props.onYearChange(event.target.value);

  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearChangeHandler} >
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
