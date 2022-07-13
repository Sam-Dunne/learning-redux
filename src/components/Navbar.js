import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Navbar() {
  const { count } = useSelector((state) => state.counter);

    return (
        <nav className='navbar bg-primary w-full p-3' >

            {/* <div className=' p-3'> */}
                {/* <div className=''> */}
                    <Link to='/' className='btn btn-light text-primary'>Rtk Playground</Link>
                    <div className='counter-value-wrapper'>
                        <div className='text-primary'>{count}</div>
                    </div>
                    <Link to='/counter' className='btn btn-light text-primary'>Counter</Link>
                {/* </div> */}

            {/* </div> */}

      
        </nav>
    )
}
