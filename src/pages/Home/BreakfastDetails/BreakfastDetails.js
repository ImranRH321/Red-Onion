import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BreakfastDetails = () => {
  const [breakfasts, setBreakfast] = useState([]);
  let { breakFastId } = useParams();

  useEffect(() => {
    fetch("/breakfast.json")
      .then(res => res.json())
      .then(data => {
        console.log(data.map(item => console.log(item._id)));
      });
  }, []);

  return (
    <div>
      <h1>BreakFast Details</h1>
    </div>
  );
};

export default BreakfastDetails;
