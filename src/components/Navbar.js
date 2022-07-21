import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DecrementByOne from './DecrementbyOne';
import IncrementByOne from './IncrementByOne';


export default function Navbar() {
    const { count } = useSelector((state) => state.counter);
    // const { result } = useSelector((state) => state.calculator);

    return (
        <nav className='bg-primary py-3 px-5' >
            <h2 className='text-center text-light fs-4 d-block'>Redux Toolkit & SASS/SCSS Sandbox</h2>
            <div className='flexbox'>
                {/* <div className='flexbox'>
                    <Link to='/' className='btn btn-light text-primary d-block ml-auto mr-2'>Home View</Link>
                </div> */}
                <div className='flexbox'>
                    <Link to='/' className='btn btn-light text-primary d-block mx-auto'>Home</Link>
                </div>
                <div className='bg-light rounded mx-3 p-1'>
                    <h4 className='text-center'>Counter</h4>
                    <div className='counter-value-wrapper mx-3'>
                        <DecrementByOne />
                        <div className='text-primary mx-3 fs-2'>{count}</div>
                        <IncrementByOne />
                    </div>
                </div>
                {/* <div className='bg-light rounded mx-3 p-2'>
                    <h4 className='text-center'>Calculator</h4>
                    <div className='counter-value-wrapper mx-3'>
                        <div className='text-primary mx-3 fs-2'>{result}</div>
                    </div>
                </div> */}
                <div className='flexbox'>
                    <Link to='/counter' className='btn btn-light text-primary d-block mx-auto'>Counter View</Link>
                </div>
            </div>
        </nav>
    )
}
