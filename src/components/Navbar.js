import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='container bg-primary w-full' >

            <div className='row justify-content-between p-5'>
                <div classname='col-3'>
                    <Link to='/' className='btn btn-light text-primary'>Rtk Playground</Link>
                </div>

            </div>


        </nav>
    )
}
