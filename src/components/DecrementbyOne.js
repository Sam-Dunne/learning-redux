import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement } from '../redux/counter';

export default function DecrementbyOne() {
    // const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        </div>
    )
}
