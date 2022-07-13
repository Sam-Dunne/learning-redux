import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IncrementByOne from '../components/IncrementByOne';
import DecrementByOne from '../components/DecrementbyOne';
import ChangeByUserValue from '../components/ChangeByUserValue';

function Counter() {
  const { count } = useSelector((state) => state.counter);

  return (
    <>
      <section>
        <div className='card shadow'>
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
      </section>
      <div className='justify-content-center d-flex'>
        <Link to="/" className='btn d-inline-block bg-primary text-light'>Home</Link>
      </div>
    </>
  )
}

export default Counter