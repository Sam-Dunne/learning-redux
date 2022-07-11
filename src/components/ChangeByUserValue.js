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
        <button onClick={() => dispatch(decrementByAmount(Number(userValue)))} className='btn btn-rounded bg-primary text-light'>Decrement</button>
      </div>
      <input type='number' placeholder='Enter Value' onChange={onChangeIncrement} value={userValue} className='form-control text-center'></input>
      <div className='input-group-prepend'>
        <button onClick={() => dispatch(incrementByAmount(Number(userValue)))} className='btn btn-rounded bg-primary text-light'>Increment</button>
      </div>
    </div>
  )
}
