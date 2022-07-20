// import { useSelector } from 'react-redux';
// import DecrementByOne from './DecrementbyOne';
// import IncrementByOne from './IncrementByOne';
// import ChangeByUserValue from './ChangeByUserValue';

export default function CalculatorCO() {
    // const { count } = useSelector((state) => state.counter);

    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-6 col-lg-4 bg-primary p-4 rounded shadow'>
                    {/* calculator display */}
                    <div className='bg-light p-3 rounded mb-3'>Input display</div>
                    {/* numbers area */}
                    <div className='container '>
                        <div className='row d-flex justify-content-between'>
                            <div className='col-9 bg-light p-3 rounded'>
                                <div className="row mb-3">
                                    <div className="d-flex justify-content-around">
                                        <div className="circle bg-primary"><span className="text-light fs-2">1</span></div>
                                        <div className="circle bg-primary"><span className="text-light fs-2">2</span></div>
                                        <div className="circle bg-primary"><span className="text-light fs-2">3</span></div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="d-flex justify-content-around">
                                        <div className="circle bg-primary"><span className="text-light fs-2">4</span></div>
                                        <div className="circle bg-primary"><span className="text-light fs-2">5</span></div>
                                        <div className="circle bg-primary"><span className="text-light fs-2">6</span></div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="d-flex justify-content-around">
                                        <div className="circle bg-primary"><span className="text-light fs-2">7</span></div>
                                        <div className="circle bg-primary"><span className="text-light fs-2">8</span></div>
                                        <div className="circle bg-primary"><span className="text-light fs-2">9</span></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="d-flex justify-content-around">
                                        <div className="circle bg-light"></div>
                                        <div className="circle bg-primary"><span className="text-light fs-2">0</span></div>
                                        <div className="circle bg-light"></div>
                                        {/* <div className="circle bg-primary"><span className="text-light fs-2">9</span></div> */}
                                    </div>
                                </div>
                               
                            </div>
                            {/* action area */}
                            <div className='col-2 bg-light p-2 rounded'>
                                <i className="bi bi-plus-circle text-primary mx-auto my-2 d-block"></i>
                                <i className="bi bi-dash-circle text-primary mx-auto my-2 d-block"></i>
                                <i className="bi bi-x-circle text-primary mx-auto my-2 d-block"></i>
                                <i className="bi bi-slash-circle text-primary mx-auto my-2 d-block"></i>
                                <i className="bi bi-backspace text-primary mx-auto my-2 d-block"></i>
                                <i className="bi bi-arrow-return-left text-primary mx-auto d-block"></i>
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
