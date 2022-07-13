import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='nav container-fluid bg-primary w-full' >

            <div className='row justify-content-between p-3'>
                <div className='col-3'>
                    <Link to='/' className='btn btn-light text-primary'>Rtk Playground</Link>
                </div>

            </div>

      
        </nav>
    )
}
