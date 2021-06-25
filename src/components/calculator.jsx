import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(num1 + num2);
  const Calculate = () => {
    setTotal(num1 + num2);
  };
  return (
    <div className='App'>
      <h1 data-cy='title'>Adding Two Numbers</h1>
      <div className='number-inputs'>
        <input
          type='number'
          placeholder='0'
          onChange={(e) => setNum1(+e.target.value)}
          value={num1}
          data-cy='num1'
        />
        <input
          data-cy='num2'
          type='number'
          placeholder='0'
          onChange={(e) => setNum2(+e.target.value)}
          value={num2}
        />
      </div>
      <button onClick={() => Calculate()} data-cy='add-button'>Add Them!</button>
      <h2 data-cy='result'>Total:{total}</h2>
    </div>
  );
};

export default Calculator;
