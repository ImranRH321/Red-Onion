import React, { useEffect, useState } from 'react';
import BreakfastSingle from '../BreakfastSingle/BreakfastSingle';
// import BreakfastSingle from '../BreakfastSingle/BreakfastSingle';

const Breakfasts = () => {
    const [breakfasts, setBreakfast]  = useState([])
    useEffect( () => {
        fetch('breakfast.json')
        .then(res => res.json())
        .then(data => setBreakfast(data)) 
    },[])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 container">
           
            {
                breakfasts.map(breakfast => <BreakfastSingle breakfast={breakfast} key={breakfast._id}></BreakfastSingle>)
            }
        </div>
    );
};

export default Breakfasts;