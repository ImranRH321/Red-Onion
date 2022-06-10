import React from "react";
import { Link } from "react-router-dom";

const BreakfastSingle = ({ breakfast }) => {
  const { name, image, price, _id } = breakfast;
  console.log(_id);
  return (
    <div className="col">
      <div class="card">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h3 class="card-title">{name}</h3>
          <h4 class="card-text">Price: {price}</h4>
        </div>
        <Link className="btn btn-dark" to={`/breakfast/${_id}`}>Breafast Details</Link>
      </div>
    </div>
  );
};

export default BreakfastSingle;
