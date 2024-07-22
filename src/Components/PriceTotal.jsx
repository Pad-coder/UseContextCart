import React, { useContext } from 'react'
import { ProductItems } from '../App'

function PriceTotal() {
    let { TotalPrice,
         Quantity,
         Products, }= useContext(ProductItems)
    
  return <>
   <hr />
      <div className="subTotal">
        <h3
          style={{
            fontSize: "20px",
            textAlign: "right",
            marginRight: "100px",
            marginLeft: "10px",
            display: "inline",
          }}
        >
          Subtotal (
          {Object.values(Quantity).reduce(
            (a, b) => (a += parseFloat(b) - 1),
            Products.length
          )} items):
        </h3>
        <span style={{ fontSize: "20px", marginRight: "20px" }}>
          ${TotalPrice.toFixed(2)}
        </span>
      </div>

      <div className="subTotal">
        <h4
          style={{
            fontSize: "20px",
            textAlign: "right",
            marginRight: "100px",
            marginLeft: "10px",
            display: "inline",
          }}
        >
          Shipping:
        </h4>{" "}
        <span style={{ fontSize: "19px", marginRight: "20px" }}>FREE</span>
      </div>
      <hr />
      <div className="subTotal">
        <h3
          style={{
            fontSize: "23px",
            textAlign: "right",
            marginRight: "100px",
            marginLeft: "10px",
            display: "inline",
          }}
        >
          Total:
        </h3>
        <span style={{ fontSize: "24px", marginRight: "20px" }}>
          ${TotalPrice.toFixed(2)}
        </span>
      </div>
      <hr />
  </>
}

export default PriceTotal