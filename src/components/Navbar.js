import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='navbar bg-primary w-full p-3' >

            {/* <div className=' p-3'> */}
                {/* <div className=''> */}
                    <Link to='/' className='btn btn-light text-primary'>Rtk Playground</Link>
                    <Link to='/counter' className='btn btn-light text-primary'>Counter</Link>
                {/* </div> */}

            {/* </div> */}

      
        </nav>
    )
}
