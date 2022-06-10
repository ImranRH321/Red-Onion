import React from 'react';
import { Link } from 'react-router-dom';
import Breakfasts from '../Breakfasts/Breakfasts';

const Services = () => {
    return (
        <div className='mt-5'>
            <h2>Services</h2>
            <Breakfasts></Breakfasts>
            <Link className='mx-4' to='/breakfasts'>BreakFast</Link>
            <Link className='mx-4' to='/breakfasts'>BreakFast</Link>
            <Link className='mx-4' to='/breakfasts'>BreakFast</Link>
        </div>
    );
};

export default Services;