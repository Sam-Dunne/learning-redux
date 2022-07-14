import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../redux/counter';

export default function IncrementByOne() {
  const dispatch = useDispatch();


    return (
        <div className='flexbox'>
            <i className="bi bi-plus-circle text-primary" onClick={() => dispatch(increment())}></i>
        </div>
    )
}
