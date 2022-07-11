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
        <div className='card'>
          <div className="card-body">
            <div className="container">
              <h5 className='text-center mb-2'>Decrement or Increment by 1</h5>
              <div className="row justify-content-center align-items-center my-2">
                <DecrementByOne />
                <h3 className='card-title text-primary col-4 text-center m-0'>{count}</h3>
                <IncrementByOne />
              </div>
            </div>
            <h3 className='text-center my-4'>Or</h3>
            <h5 className='text-center mb-2'>Change by Custom Value</h5>

            <ChangeByUserValue />
          </div>
        </div>
      </section>
      <Link to="/" className='btn btn-rounded bg-primary text-light'>Home</Link>
    </>
  )
}

export default Counter