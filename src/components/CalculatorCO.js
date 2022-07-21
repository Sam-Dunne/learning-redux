import { useSelector, useDispatch } from 'react-redux';
import { backspace, setArg1, setArg2, setOperation, calculate } from '../redux/calc';
// import DecrementByOne from './DecrementbyOne';
// import IncrementByOne from './IncrementByOne';
// import ChangeByUserValue from './ChangeByUserValue';

export default function CalculatorCO() {
    const { arg1, arg2, result, display, operation } = useSelector((state) => state.calculator);

    const dispatch = useDispatch();

    const handleArgClick = (val) => {
        if (!operation) {
            dispatch(setArg1(val));
            return;
        }

        dispatch(setArg2(val));
    };

    const handleCalculate = () => {
        dispatch(calculate())
    }

    

    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-6 col-lg-4 bg-primary p-4 rounded shadow'>
                    {/* calculator display */}
                    <div className='bg-light p-3 rounded mb-3'>Arg1: {arg1}</div>
                    <div className='bg-light p-3 rounded mb-3'>Op: {operation}</div>
                    <div className='bg-light p-3 rounded mb-3'>Arg2: {arg2}</div>
                    <div className='bg-light p-3 rounded mb-3'>Result: {result}</div>
                    <div className='bg-light p-3 rounded mb-3'>display: {display}</div>
                    {/* <div className='bg-light p-3 rounded mb-3'>Input display</div> */}
                    {/* numbers area */}
                    <div className='container '>
                        <div className='row d-flex justify-content-between align-items-center'>
                            <div className='col-9 bg-light px-3 py-5 rounded'>
                                <div className="row mb-3">
                                    <div className="d-flex justify-content-around">
                                        <a href="javascript:;" className="mouse-pointer anchor-noDecor circle bg-primary" onClick={() => handleArgClick(1)}><span className="text-light fs-2">1</span></a>
                                        <a href="javascript:;" className="mouse-pointer anchor-noDecor circle bg-primary" onClick={() => handleArgClick(2)}><span className="text-light fs-2">2</span></a>
                                        <a href="javascript:;" className="mouse-pointer anchor-noDecor circle bg-primary" onClick={() => handleArgClick(3)}><span className="text-light fs-2">3</span></a>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="d-flex justify-content-around">
                                        <a href="javascript:;" className="mouse-pointer anchor-noDecor circle bg-primary" onClick={() => handleArgClick(4)}><span className="text-light fs-2">4</span></a>
                                        <a href="javascript:;" className="mouse-pointer anchor-noDecor circle bg-primary" onClick={() => handleArgClick(5)}><span className="text-light fs-2">5</span></a>
                                        <a href="javascript:;" className="mouse-pointer anchor-noDecor circle bg-primary" onClick={() => handleArgClick(6)}><span className="text-light fs-2">6</span></a>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="d-flex justify-content-around">
                                        <a href="javascript:;" className="mouse-pointer anchor-noDecor circle bg-primary" onClick={() => handleArgClick(7)}><span className="text-light fs-2">7</span></a>
                                        <a href="javascript:;" className="mouse-pointer anchor-noDecor circle bg-primary" onClick={() => handleArgClick(8)}><span className="text-light fs-2">8</span></a>
                                        <a href="javascript:;" className="mouse-pointer anchor-noDecor circle bg-primary" onClick={() => handleArgClick(9)}><span className="text-light fs-2">9</span></a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="d-flex justify-content-around">
                                        <a href="javascript:;" className="mouse-pointer anchor-noDecor circle bg-primary text-light fw-bolder" onClick={() => handleArgClick('.')}>.</a>
                                        <a href="javascript:;" className="mouse-pointer anchor-noDecor circle bg-primary" onClick={() => handleArgClick(0)}><span className="text-light fs-2">0</span></a>
                                
                                        {/* <div className="circle bg-light"></div> */}
                                        {!arg1 
                                        ?
                                        <div className="circle bg-light"></div>
                                        :
                                        <a href="javascript:;" className="mouse-pointer anchor-noDecor circle bg-light" onClick={() => dispatch(backspace())}><i className="backspace-fudge bi bi-backspace fs-1 text-primary d-block" ></i></a>
                                     }
                                    </div>
                                </div>
                               
                            </div>
                            {/* action area */}
                            <div className='col-2 bg-light px-2 py-4 rounded'>
                                <a href="javascript:;" className="mouse-cursor" onClick={() => dispatch(setOperation('+'))}><i className="bi bi-plus-circle fs-2 text-primary mx-auto my-1 d-block" ></i></a>
                                <a href="javascript:;" className="mouse-cursor" onClick={() => dispatch(setOperation('-'))}><i className="bi bi-dash-circle fs-2 text-primary mx-auto my-1 d-block" ></i></a>
                                <a href="javascript:;" className="mouse-cursor" onClick={() => dispatch(setOperation('x'))}> <i className="bi bi-x-circle fs-2 text-primary mx-auto my-1 d-block" ></i></a>
                                <a href="javascript:;" className="mouse-cursor" onClick={() => dispatch(setOperation('/'))}><i className="bi bi-slash-circle fs-2 text-primary mx-auto mt-1 mb-4 d-block" ></i></a>
                                <a href="javascript:;" className="mouse-cursor" onClick={() => handleCalculate()}><i className="bi bi-arrow-return-left fs-2 text-primary mx-auto d-block" ></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <div className='card container d-flex shadow mx-auto'>

                        <div className="card-body">
                            <div className="">
                                <label className='text-center mb-2 mx-auto d-block'>Decrement or Increment by 1</label>
                                <div className='container'>
                                    <div className="row justify-content-center align-items-center my-2">
                                        <IncrementByOne />
                                        <h3 className='card-title text-primary col-3 text-center m-0'>{count}</h3>
                                        <DecrementByOne />
                                    </div>
                                </div>
                            </div>
                            <h2 className='text-center my-4'>Or</h2>
                            <label className='text-center mb-1 mx-auto d-block'>Enter your value below, then click icons</label>

                            <ChangeByUserValue />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
