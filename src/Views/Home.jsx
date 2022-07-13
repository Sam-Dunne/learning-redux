import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Home() {
    const { count } = useSelector((state) => state.counter);

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6 pb-4">
                    <h1 className="text-center">RTK/React Router V6 Playground</h1>
                </div>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <Link to="/counter" className='btn btn-rounded bg-primary text-light mx-auto'>RTK Counter</Link>
                    <h2 className="text-primary">Counter Value: {count}</h2>
                </div>
            </div>
            </section>
        </main>
    )
}

export default Home