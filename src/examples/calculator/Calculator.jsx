import React, { useState } from 'react'
import CalculatorButton from './Button';

export function Calculator() {
  const [calc, setCalc] = useState({
    current: '0',
    total: '0',
    isInitial: true,
    preOp: null
  });
  // const [oper, setOper] = useState(null);
  // const [operating, setOperating] = useState(false);
  


  const handleNumber = (value) => {
    let newValue = value;

    if (!calc.isInitial) {
      newValue = calc.current + value
    }

    setCalc({ ...calc, current: newValue, isInitial: false });
  };

  const handleOperator = (value) => {
    const total = calculate() + '';

    setCalc({ current: total, total: total, isInitial: true, preOp: value });
  };
  
  const calculate = () => {
    const current = +calc.current;
    let total = +calc.total;

    switch(calc.preOp) {
      case '+':
        total += current;
        break;
      case '-':
        total -= current;
        break;
      case '*':
        total *= current;
        break;
      case '/':
        total /= current;
        break;
      case '=':
        total /= current;
        break;
      default:
        total = current;
      }

    return total || 0;
  };

  const handlerClear = () => {
    setCalc({ current: '0', total: '0', isInitial: true, preOp: null });
  };

  const showDisplay = () => {
    return calc.current || '0';
  };

  return (
    <div className='calculator'>
      <div className="page-title">
        <h1>Calculator</h1>
      </div>
      
      <div className="display">{showDisplay()}</div>
      
      <CalculatorButton onClick={handleNumber} value='7'/>
      <CalculatorButton onClick={handleNumber} value='8'/>
      <CalculatorButton onClick={handleNumber} value='9'/>
      <CalculatorButton onClick={handleOperator} className='operator' value='/'/>
      
      <CalculatorButton onClick={handleNumber} value='4'/>
      <CalculatorButton onClick={handleNumber} value='5'/>
      <CalculatorButton onClick={handleNumber} value='6'/>
      <CalculatorButton onClick={handleOperator} className='operator' value='*'/>

      <CalculatorButton onClick={handleNumber} value='1'/>
      <CalculatorButton onClick={handleNumber} value='2'/>
      <CalculatorButton onClick={handleNumber} value='3'/>
      <CalculatorButton onClick={handleOperator} className='operator' value='-'/>

      <CalculatorButton onClick={handlerClear} value='C'/>
      <CalculatorButton onClick={handleNumber} value='0'/>
      <CalculatorButton onClick={handleOperator} value='='/>
      <CalculatorButton onClick={handleOperator} className='operator' value='+'/>
    </div>
  )
};
