import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { decrementByAmount } from '../redux/counter';

export default function DecrementByUserValue() {
    const [decrementUserValue, setDecrementUserValue] = useState('');
    const dispatch = useDispatch();

    const onChangeDecrement = (e) => {
        setDecrementUserValue(e.target.value);
      };

    return (
        <div>
            <input type='number' onChange={onChangeDecrement} value={decrementUserValue} ></input>
            <button onClick={() => dispatch(decrementByAmount(Number(decrementUserValue)))}>Decrement by {decrementUserValue}</button>
        </div>
    )
}
