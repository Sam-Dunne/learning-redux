import React from 'react';
import { useSelector } from 'react-redux';
import CounterCard from '../components/CounterCard';


function Home() {
    const { result } = useSelector((state) => state.calculator);

    return (
        <main className="container">
            <section className="">
                <div className="">
                    <h1 className="text-center">Redux Toolkit Playground</h1>
                    <p className='paragraph-wrapper px-lg-5'>The purpose of this project is to improve my understanding of controlled global state with Redux.</p>
                </div>
                <CounterCard />
                <p className='paragraph-wrapper'>Click the icons in the above card to change the state value. It will be updated in the Navbar and will be accessible in the Counter View (click the "Counter View" link in the Navbar to view).</p>

                <div className="container min-vw-50 w-50 bg-primary rounded py-3 mt-3">
                    <div className='row d-flex'>
                        <div className='col-md-6 mx-auto'>
                            <h6 className="text-center text-light">Calculator Value</h6>
                            <div className='counter-value-wrapper mx-auto px-2'>
                                <div className='text-primary mx-3 fs-2'>{result}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home