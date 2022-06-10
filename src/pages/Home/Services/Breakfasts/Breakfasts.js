import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Breakfasts = () => {
  const [breakfasts, setBreakfast] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    fetch("breakfast.json")
      .then(res => res.json())
      .then(data => setBreakfast(data));
  }, []);

  const handleBreakFast = id => {
      console.log('clicked', id);
      navigate(`/breakfastDetail/:${id}`)
  }
  return (
    <div>
      <h2>breakfast {breakfasts.length}</h2>
      <div className="products">
        {/* {breakfasts.map(breakfast => console.log(breakfast))} */}
        <div className="row">
          {breakfasts.map(breakfast => (
            <div onClick={() => handleBreakFast(breakfast._id)} className="col-md-4 g-4 ">
              <div className="border p-2">
                <img className="w-50" src={breakfast.image} alt="" />
                <h4>{breakfast.name}</h4>
                <h5>{breakfast.price}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breakfasts;
