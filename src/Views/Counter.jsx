import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import IncrementByOne from '../components/IncrementByOne';
import DecrementByOne from '../components/DecrementbyOne';
import IncrementByUserValue from '../components/IncrementByUserValue';
import DecrementByUserValue from '../components/DecrementByUserValue';

function Counter() {
  const { count } = useSelector((state) => state.counter);

  return (
    <div className="App">
    <h1 className='text-primary'>The count is: {count}</h1>
    <IncrementByOne />
    <DecrementByOne />
    <IncrementByUserValue />
    <DecrementByUserValue />
    <Link to="/" className='btn btn-rounded bg-primary text-light'>Home</Link>
    
  </div>
  )
}

export default Counter