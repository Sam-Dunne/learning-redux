import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IncrementByOne from '../components/IncrementByOne';
import DecrementByOne from '../components/DecrementbyOne';
import IncrementByUserValue from '../components/IncrementByUserValue';
import DecrementByUserValue from '../components/DecrementByUserValue';

function Counter() {
  const { count } = useSelector((state) => state.counter);

  return (
    <>
      <section>
        <div className='card'>
          <div className="card-body">
            <h3 className='card-title text-primary'>The count is: {count}</h3>
            <IncrementByOne />
            <DecrementByOne />
            <IncrementByUserValue />
            <DecrementByUserValue />
          </div>
        </div>
      </section>
      <Link to="/" className='btn btn-rounded bg-primary text-light'>Home</Link>
    </>
  )
}

export default Counter