import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement } from '../redux/counter';

export default function DecrementbyOne() {
    // const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <>
            <div className='flexbox'>
                <i className="bi bi-dash-circle text-primary" onClick={() => dispatch(decrement())}></i>
            </div>
        </>
    )
}
