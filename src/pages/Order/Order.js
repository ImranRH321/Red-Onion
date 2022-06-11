import React, { useContext } from "react";
import { myContext } from "../../App";

const Order = () => {
  const [cart, setCart] = useContext(myContext);

  return (
    <div>
      {/* <h1>Order Items here </h1> */}
      <div className="w-100 d-flex">
        {cart.map(pd => (
          <div className="w-50 d-block border p-4">
            <div className="d-flex justify-content-center align-items-center">
              <div className="w-50">
                <img className="w-100" src={pd.image} alt="" />
              </div>
              <div className="text-center w-50 ">
                <h6>{pd.name}</h6>
                <h3>{pd.price}</h3>
                <p className="text-muted">{pd.details.slice(0, 100)}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="w-50 ">
          <h3>lorem140</h3>
        </div>
      </div>
    </div>
  );
};

export default Order;
