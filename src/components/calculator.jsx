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
          data-cy='num1'
          onClick={(event) => setNum1(+event.target.value)}
          value={num1}
        />
        <input
          type='number'
          placeholder='0'
          data-cy='num2'
          onClick={(event) => setNum2(+event.target.value)}
          value={num2}
        />
      </div>
      <button onClick={Calculate}>Add Them!</button>
      <h2>{total}</h2>
    </div>
  );
};

export default Calculator;
