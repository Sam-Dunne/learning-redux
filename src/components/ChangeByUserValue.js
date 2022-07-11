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
      <div className='input-group-prepend'>
        <i className="bi bi-dash-circle col-2 text-primary" onClick={() => dispatch(decrementByAmount(Number(userValue)))}></i>
      </div>
      <input type='number' placeholder='Enter Value' onChange={onChangeIncrement} value={userValue} className='form-control text-center'></input>
      <div className='input-group-append'>
        <i className="bi bi-plus-circle col-2 text-primary" onClick={() => dispatch(incrementByAmount(Number(userValue)))}></i>
      </div>
    </div>
  )
}
