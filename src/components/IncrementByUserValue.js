import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { incrementByAmount } from '../redux/counter';

export default function IncrementByUserValue() {
  const [incrementUserValue, setIncrementUserValue] = useState('');
  const dispatch = useDispatch();
//   const { count } = useSelector((state) => state.counter);



    const onChangeIncrement = (e) => {
        setIncrementUserValue(e.target.value);
      };
    return (
        <div>
            <input type='number' onChange={onChangeIncrement} value={incrementUserValue} ></input>
            <button onClick={() => dispatch(incrementByAmount(Number(incrementUserValue)))}>Increment by {incrementUserValue}</button>
        </div>
    )
}
