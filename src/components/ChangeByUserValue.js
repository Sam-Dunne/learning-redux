import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { incrementByAmount, decrementByAmount } from '../redux/counter';

export default function ChangeByUserValue() {
  const [userValue, setUserValue] = useState('');

  const dispatch = useDispatch();
  //   const { count } = useSelector((state) => state.counter);

  const onChangeIncrement = (e) => {
    setUserValue(e.target.value);
  };

  return (

    <div className='input-group'>
      <div className="container">
        <div className='container'>
          <div className="row justify-content-center align-items-center my-2">
            <div className='input-group-prepend col-2 d-flex justify-content-center'>
              <i className="bi bi-dash-circle text-primary " onClick={() => dispatch(decrementByAmount(Number(userValue)))}></i>
            </div>
            <input type='number' placeholder='Enter Value' onChange={onChangeIncrement} value={userValue} className='form-control text-center w-50 mx-auto text-primary'></input>
            <div className='input-group-append col-2 d-flex justify-content-center'>
              <i className="bi bi-plus-circle text-primary" onClick={() => dispatch(incrementByAmount(Number(userValue)))}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
