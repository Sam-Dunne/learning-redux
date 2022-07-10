import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount, decrementByAmount } from './redux/counter';
import IncrementByOne from './components/IncrementByOne';
import DecrementByOne from './components/DecrementbyOne';

function App() {
  const { count } = useSelector((state) => state.counter);
  const [incrementUserValue, setIncrementUserValue] = useState('');
  const [decrementUserValue, setDecrementUserValue] = useState('');
  const dispatch = useDispatch();
  const onChangeIncrement = (e) => {
    setIncrementUserValue(e.target.value);
  };
  const onChangeDecrement = (e) => {
    setDecrementUserValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <IncrementByOne />
      <DecrementByOne />
     
      <div>
        <input type='number' onChange={onChangeIncrement} value={incrementUserValue} ></input>
        <button onClick={() => dispatch(incrementByAmount(Number(incrementUserValue)))}>Increment by {incrementUserValue}</button>
      </div>
      <div>
        <input type='number' onChange={onChangeDecrement} value={decrementUserValue} ></input>
        <button onClick={() => dispatch(decrementByAmount(Number(decrementUserValue)))}>Decrement by {decrementUserValue}</button>
      </div>
    </div>
  );
}

export default App;
