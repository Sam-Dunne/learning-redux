import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CounterCard from '../components/CounterCard';


function Home() {
    const { count } = useSelector((state) => state.counter);

    return (
        <main className="container">
            <section className="">
                <div className="">
                    <h1 className="text-center">RTK/React Router V6 Playground</h1>
                </div>
                <CounterCard />
            </section>
        </main>
    )
}

export default Home