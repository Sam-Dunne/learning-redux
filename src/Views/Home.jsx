import React from 'react';
// import { useSelector } from 'react-redux';
import CounterCard from '../components/CounterCard';


function Home() {
    // const { count } = useSelector((state) => state.counter);

    return (
        <main className="container">
            <section className="">
                <div className="">
                    <h1 className="text-center">Redux Toolkit and SASS Playground</h1>
                    <p className='paragraph-wrapper '>The purpose of this project is to demonstrate basic understanding and application of the above technologies, with a focus on increasing the scalabilty and managability of applications through use of controlled global state via Redux, and globalized styling/Bootstrap overrides via SCSS.</p>
                </div>
                <CounterCard />
                <p className='paragraph-wrapper'>Click the icons in the above card to change the state value. It will be updated in the Navbar and will be accessible in the Counter View (click the "Counter View" link in the Navbar to view).</p>
            </section>
        </main>
    )
}

export default Home