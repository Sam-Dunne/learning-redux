import { useSelector, useDispatch } from 'react-redux';
import { backspace, setArg1, setArg2, setOperation, calculate } from '../redux/calc';
// import DecrementByOne from './DecrementbyOne';
// import IncrementByOne from './IncrementByOne';
// import ChangeByUserValue from './ChangeByUserValue';

export default function CalculatorCO() {
    const { arg1, 
        // arg2, result, 
        display, operation } = useSelector((state) => state.calculator);

    const dispatch = useDispatch();

    const handleArgClick = (e, val) => {
        e.preventDefault();
        if (!operation) {
            dispatch(setArg1(val));
            return;
        }

        dispatch(setArg2(val));
    };

    const handleCalculate = (e) => {
        e.preventDefault();
        dispatch(calculate())
    }

    const handleDispatch = (e, dispatchType, val) => {
        e.preventDefault();
        if (dispatchType === 'operation') {
            dispatch(setOperation(val));
        }

        if (dispatchType === "backspace") {
            dispatch(backspace());
        }
    }



    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-6 col-lg-4 bg-primary p-4 rounded shadow'>

                    {/* uncomment to show states for testing */}
                    {/* <div className='bg-light p-3 rounded mb-3'>Arg1: {arg1}</div>
                    <div className='bg-light p-3 rounded mb-3'>Op: {operation}</div>
                    <div className='bg-light p-3 rounded mb-3'>Arg2: {arg2}</div>
                    <div className='bg-light p-3 rounded mb-3'>Result: {result}</div> */}

                    {/* calculator display */}
                    {!display 
                    ?
                    <div className='flexbox bg-light p-3 rounded mb-3'><h2 className='h2-noMargin'>Use Number Pad</h2></div>
                    :        
                    <div className='flexbox-end bg-light py-3 px-5 rounded mb-3'><h2 className='h2-noMargin'>{display}</h2></div>
                    }
                    {/* numbers area */}
                    <div className='container '>
                        <div className='row d-flex justify-content-between align-items-center'>
                            <div className='col-9 bg-light px-3 py-4 rounded'>
                                <div className="row mb-3">
                                    <div className="d-flex justify-content-around">
                                        <a href="/" className="mouse-pointer anchor-noDecor circle bg-primary shadow-sm" onClick={(e) => handleArgClick(e, 1)}><span className="text-light fs-2">1</span></a>
                                        <a href="/" className="mouse-pointer anchor-noDecor circle bg-primary shadow-sm" onClick={(e) => handleArgClick(e, 2)}><span className="text-light fs-2">2</span></a>
                                        <a href="/" className="mouse-pointer anchor-noDecor circle bg-primary shadow-sm" onClick={(e) => handleArgClick(e, 3)}><span className="text-light fs-2">3</span></a>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="d-flex justify-content-around">
                                        <a href="/" className="mouse-pointer anchor-noDecor circle bg-primary shadow-sm" onClick={(e) => handleArgClick(e, 4)}><span className="text-light fs-2">4</span></a>
                                        <a href="/" className="mouse-pointer anchor-noDecor circle bg-primary shadow-sm" onClick={(e) => handleArgClick(e, 5)}><span className="text-light fs-2">5</span></a>
                                        <a href="/" className="mouse-pointer anchor-noDecor circle bg-primary shadow-sm" onClick={(e) => handleArgClick(e, 6)}><span className="text-light fs-2">6</span></a>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="d-flex justify-content-around">
                                        <a href="/" className="mouse-pointer anchor-noDecor circle bg-primary shadow-sm" onClick={(e) => handleArgClick(e, 7)}><span className="text-light fs-2">7</span></a>
                                        <a href="/" className="mouse-pointer anchor-noDecor circle bg-primary shadow-sm" onClick={(e) => handleArgClick(e, 8)}><span className="text-light fs-2">8</span></a>
                                        <a href="/" className="mouse-pointer anchor-noDecor circle bg-primary shadow-sm" onClick={(e) => handleArgClick(e, 9)}><span className="text-light fs-2">9</span></a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="d-flex justify-content-around">
                                        <a href="/" className="mouse-pointer anchor-noDecor circle bg-primary text-light fw-bolder" onClick={(e) => handleArgClick(e, '.')}>.</a>
                                        <a href="/" className="mouse-pointer anchor-noDecor circle bg-primary shadow-sm" onClick={(e) => handleArgClick(e, 0)}><span className="text-light fs-2">0</span></a>

                                        {/* Conditional render of Backspace Button */}
                                        {!arg1
                                            ?
                                            <div className="circle bg-light"></div>
                                            :
                                            <a href="/" className="mouse-pointer anchor-noDecor circle bg-light" onClick={(e) => handleDispatch(e, 'backspace', "")}><i className="backspace-fudge bi bi-backspace fs-1 text-primary d-block" ></i></a>
                                        }
                                    </div>
                                </div>

                            </div>
                            {/* operators area */}
                            <div className='col-2 bg-light px-2 py-2 rounded'>
                                <a href="/" className="mouse-cursor" onClick={(e) => handleDispatch(e, 'operation', '+')}><i className="bi bi-plus-circle fs-2 text-primary mx-auto my-1 d-block" ></i></a>
                                <a href="/" className="mouse-cursor" onClick={(e) => handleDispatch(e, 'operation', '-')}><i className="bi bi-dash-circle fs-2 text-primary mx-auto my-1 d-block" ></i></a>
                                <a href="/" className="mouse-cursor" onClick={(e) => handleDispatch(e, 'operation', 'x')}> <i className="bi bi-x-circle fs-2 text-primary mx-auto my-1 d-block" ></i></a>
                                <a href="/" className="mouse-cursor" onClick={(e) => handleDispatch(e, 'operation', '/')}><i className="bi bi-slash-circle fs-2 text-primary mx-auto mt-1 mb-4 d-block" ></i></a>
                                <a href="/" className="mouse-cursor" onClick={(e) => handleCalculate(e)}><i className="bi bi-arrow-return-left fs-2 text-primary mx-auto d-block" ></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
