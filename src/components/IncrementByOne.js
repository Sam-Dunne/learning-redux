import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../redux/counter';

export default function IncrementByOne() {
  const dispatch = useDispatch();


    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment by 1</button>
        </div>
    )
}
