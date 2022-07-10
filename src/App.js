import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementByAmount } from './redux/counter';
import IncrementByOne from './components/IncrementByOne';
import DecrementByOne from './components/DecrementbyOne';
import IncrementByUserValue from './components/IncrementByUserValue';

function App() {
  const { count } = useSelector((state) => state.counter);
  const [decrementUserValue, setDecrementUserValue] = useState('');
  const dispatch = useDispatch();
  
  const onChangeDecrement = (e) => {
    setDecrementUserValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <IncrementByOne />
      <DecrementByOne />
      <IncrementByUserValue />
      
      <div>
        <input type='number' onChange={onChangeDecrement} value={decrementUserValue} ></input>
        <button onClick={() => dispatch(decrementByAmount(Number(decrementUserValue)))}>Decrement by {decrementUserValue}</button>
      </div>
    </div>
  );
}

export default App;
