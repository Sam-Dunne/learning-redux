import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DecrementByOne from './DecrementbyOne';
import IncrementByOne from './IncrementByOne';


export default function Navbar() {
    const { count } = useSelector((state) => state.counter);

    return (
        <nav className='bg-primary py-3 px-5' >
            <h2 className='text-center text-light fs-4 d-block'>Redux Toolkit & SASS/SCSS Sandbox</h2>
            <div className='flexbox'>
                <div className='flexbox'>
                    <Link to='/' className='btn btn-light text-primary d-block mx-auto'>Home View</Link>
                </div>
                <div className='counter-value-wrapper mx-3 px-2'>
                    <DecrementByOne />
                    <div className='text-primary mx-3 fs-2'>{count}</div>
                    <IncrementByOne />
                </div>
                <div className='flexbox'>
                    <Link to='/counter' className='btn btn-light text-primary d-block mx-auto'>Counter View</Link>
                </div>
            </div>
        </nav>
    )
}
