import React from 'react';
import { useSelector } from 'react-redux';
import DecrementByOne from './DecrementbyOne';
import IncrementByOne from './IncrementByOne';
import ChangeByUserValue from './ChangeByUserValue';

export default function CounterCard() {
  const { count } = useSelector((state) => state.counter);

  return (
    <div className='card shadow mx-auto'>
          <div className="card-body">
            <div className="container">
              <h6 className='text-center mb-2'>Decrement or Increment by 1</h6>
              <div className="row justify-content-center align-items-center my-2">
                <DecrementByOne />
                <h3 className='card-title text-primary col-3 text-center m-0'>{count}</h3>
                <IncrementByOne />
              </div>
            </div>
            <h2 className='text-center my-4'>Or</h2>
            <h6 className='text-center mb-2'>Change by Custom Value</h6>

            <ChangeByUserValue />
          </div>
        </div>
  )
}
