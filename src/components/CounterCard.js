import React from 'react';
import { useSelector } from 'react-redux';
import DecrementByOne from './DecrementbyOne';
import IncrementByOne from './IncrementByOne';
import ChangeByUserValue from './ChangeByUserValue';

export default function CounterCard() {
  const { count } = useSelector((state) => state.counter);

  return (
    <div className='card container d-flex w-75 shadow mx-auto'>
      <div className='row justify-content center'>

        <div className="card-body col-6">
          <div className="">
            <label className='text-center mb-2 mx-auto d-block'>Decrement or Increment by 1</label>
            <div className='container'>
              <div className="row justify-content-center align-items-center my-2">
                <IncrementByOne />
                <h3 className='card-title text-primary col-3 text-center m-0'>{count}</h3>
                <DecrementByOne />
              </div>
            </div>
          </div>
          <h2 className='text-center my-4'>Or</h2>
          <label className='text-center mb-2 mx-auto d-block'>Enter your value below, then click icons</label>

          <ChangeByUserValue />
        </div>
      </div>
    </div>
  )
}
