import React, { useContext } from "react";
import "./ViewCart.css";
import { ProductItems } from "./../App";


function ViewCart() {
  let {
    Products,
    Quantity,
    handleQuantity,
    removeItem
  } = useContext(ProductItems);

  return <>
      <h1 className="Cart-Heading">Cart items </h1>
      {Products.map((e, i) => {
        return (
          <div className="CartContainer" key={i}>
            <div className="main">
              <div className="image-container">
                <img src={e.image} alt={e.title} style={{  }} />
              </div>
              <div className="Product-details">
                <h4>{e.title}</h4>
                <p>{e.description}</p>
              </div>
            </div>
            <div className="Select-Quantity">
              <div className="select">Qty:
                <select
                   name="Quantity"
                   id="Quantity"
                   value={Quantity[i]}
                   onChange={(e) => handleQuantity(e, i)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </select>
              </div>
              <div className="amount">
                <span>${e.price}</span>
                <button onClick={() => removeItem(i)}>Remove</button>
              </div>
            </div>
            </div>
          
        );
      })}
    </>
}

export default ViewCart;
