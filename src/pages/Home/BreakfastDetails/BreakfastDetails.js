import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BreakfastDetails = () => {
  const { breakfastId } = useParams();
  const [breakfasts, setBreakfast] = useState({});

  useEffect(() => {
    fetch("/breakfast.json")
      .then(res => res.json())
      .then(data => {
        const product = data.find(pd => pd._id == breakfastId);
        setBreakfast(product);
      });
  }, [breakfastId]);

//   console.log(breakfastId);
//   console.log(breakfasts);

  return (
    <div className="border">
      <div className="w-50 ">
        <div className="w-50 mx-auto">
          <img
            className="w-50"
            src={breakfasts.image}
            class="card-img-top"
            alt="..."
          />
        </div>
        <div className="w-50 mx-auto">
          <h6>{breakfasts.name}</h6>
          <h5>Price: {breakfasts.price}</h5>
          <p>{breakfasts.details}</p>
        </div>
      </div>
    </div>
  );
};

export default BreakfastDetails;
