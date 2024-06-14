import React, { useState } from 'react';

const App = () => {
  const [numbers, setNumbers] = useState('');
  const [rangeStart, setRangeStart] = useState('');
  const [rangeEnd, setRangeEnd] = useState('');
  const [randomCount, setRandomCount] = useState('');
  const [result, setResult] = useState('');

  const handleNumbersChange = (e) => {
    setNumbers(e.target.value);
  };

  const handleRangeStartChange = (e) => {
    setRangeStart(e.target.value);
  };

  const handleRangeEndChange = (e) => {
    setRangeEnd(e.target.value);
  };

  const handleRandomCountChange = (e) => {
    setRandomCount(e.target.value);
  };

  const calculateAverage = () => {
    const nums = numbers.split(',').map(Number);
    const avg = nums.reduce((acc, val) => acc + val, 0) / nums.length;
    setResult(`Average: ${avg}`);
  };

  const generateFibonacci = () => {
    const num = parseInt(rangeEnd);
    let fib = [0, 1];
    for (let i = 2; i <= num; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    setResult(`Fibonacci: ${fib.slice(0, num).join(', ')}`);
  };

  const generateEvenNumbers = () => {
    const start = parseInt(rangeStart);
    const end = parseInt(rangeEnd);
    const evens = [];
    for (let i = start; i <= end; i++) {
      if (i % 2 === 0) evens.push(i);
    }
    setResult(`Even Numbers: ${evens.join(', ')}`);
  };

  const generateRandomNumbers = () => {
    const start = parseInt(rangeStart);
    const end = parseInt(rangeEnd);
    const count = parseInt(randomCount);
    const randNumbers = Array.from({ length: count }, () => Math.floor(Math.random() * (end - start + 1)) + start);
    setResult(`Random Numbers: ${randNumbers.join(', ')}`);
  };

  return (
    <div className="container">
      <h1>Number Utility App</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter numbers separated by commas"
          value={numbers}
          onChange={handleNumbersChange}
        />
        <button onClick={calculateAverage}>a</button>
      </div>
      <div className="input-group">
        <input
          type="text"
          placeholder="Range start"
          value={rangeStart}
          onChange={handleRangeStartChange}
        />
        <input
          type="text"
          placeholder="Range end"
          value={rangeEnd}
          onChange={handleRangeEndChange}
        />
        <input
          type="text"
          placeholder="Random count"
          value={randomCount}
          onChange={handleRandomCountChange}
        />
        <button onClick={generateFibonacci}>f</button>
        <button onClick={generateEvenNumbers}>e</button>
        <button onClick={generateRandomNumbers}>r</button>
      </div>
      <div className="result">
        {result}
      </div>
    </div>
  );
};

export default App;
