import { useSelector } from 'react-redux';
import IncrementByOne from './components/IncrementByOne';
import DecrementByOne from './components/DecrementbyOne';
import IncrementByUserValue from './components/IncrementByUserValue';
import DecrementByUserValue from './components/DecrementByUserValue';

function App() {
  const { count } = useSelector((state) => state.counter);

  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <IncrementByOne />
      <DecrementByOne />
      <IncrementByUserValue />
      <DecrementByUserValue />
    </div>
  );
}

export default App;
