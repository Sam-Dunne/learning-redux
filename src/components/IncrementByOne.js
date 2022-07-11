import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../redux/counter';

export default function IncrementByOne() {
  const dispatch = useDispatch();


    return (
        <>
            <i className="bi bi-plus-circle col-2 text-primary" onClick={() => dispatch(increment())}></i>
        </>
    )
}
