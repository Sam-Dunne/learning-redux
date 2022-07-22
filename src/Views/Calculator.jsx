import CalculatorCO from "../components/CalculatorCO"
import { useSelector } from 'react-redux';
import IncrementByOne from "../components/IncrementByOne";
import DecrementByOne from "../components/DecrementbyOne";

function Calculator() {
  const { count } = useSelector((state) => state.counter);

  return (
    <>
      <section>
        <CalculatorCO />

        <div className="container min-vw-50 w-50 bg-primary rounded py-3 mt-3">
          <div className='row'>
            <div className='col-md-6 mx-auto'>
              <h6 className="text-center text-light">Counter</h6>
              <div className='counter-value-wrapper mx-auto px-2'>
                <DecrementByOne />
                <div className='text-primary mx-3 fs-2'>{count}</div>
                <IncrementByOne />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container min-vw-50 w-50 bg-primary rounded py-3 mt-3">
              <h6 className="text-center text-light">Calculator Value</h6>
              <div className='counter-value-wrapper mx-auto px-2'>
                <div className='text-primary mx-3 fs-2'>{result}</div>
              </div>
            </div> */}
      </section>
    </>
  )
}

export default Calculator