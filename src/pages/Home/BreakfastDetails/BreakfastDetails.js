import React, {  useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { myContext } from "../../../App";

const BreakfastDetails = () => {
  const { breakfastId } = useParams();
  const [breakfasts, setBreakfast] = useState({});
  const [cart, setCart] = useContext(myContext)

  useEffect(() => {
    fetch("/breakfast.json")
      .then(res => res.json())
      .then(data => {
        const product = data.find(pd => pd._id == breakfastId);
        setBreakfast(product);
      });
  }, [breakfastId]);

 const handleAddToCart = () => {
   const newCart = [...cart,breakfasts]
   setCart(newCart)
 }

  return (
    <div className="border d-flex align-items-center">
      <div className="w-50 border m-3 p-3">
        <div className="w-50 mx-auto">
          <img
            className="w-50"
            src={breakfasts.image}
            class="card-img-top"
            alt="..."
          />
        </div>
        <div className="w-75 mx-auto">
          <h6 className="mt-2">{breakfasts.name}</h6>
          <h5>Price: {breakfasts.price}</h5>
          <p>{breakfasts.details}</p>
          <button onClick={handleAddToCart} className="btn btn-dark">Add to Cart</button>
        </div>
      </div> 
      {/*  */}
      <div className="w-50 mx-auto">
         <h2>Cart Container </h2>
         <Link className="btn btn-link bg-primary text-decoration-none text-white" to='/order'>Order CheckList</Link>
      </div>
    </div>
  );
};

export default BreakfastDetails;
