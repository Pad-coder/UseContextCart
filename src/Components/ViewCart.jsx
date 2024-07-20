import React, { useContext,useEffect,useState } from "react";
import './ViewCart.css'

import { ProductItems } from "../Context/ProductContext";


function ViewCart() {
    let {Products,SetProducts} = useContext(ProductItems)
    const [Quantity,setQuantity]=useState({})
    const [TotalPrice,SetTotalPrice]= useState(0)


    const handleQuantity=(e,i)=>{
        setQuantity({...Quantity,[i]:e.target.value})
        calculateTotalPrice();
    }

    const removeItem = (i) => {
        SetProducts(Products.filter((item, index) => index !== i));
        setQuantity((prevQuantity) => {
          const newQuantity = { ...prevQuantity };
          delete newQuantity[i];
          return newQuantity;
        });
      };

      useEffect(() => {
        let totalPrice = 0;
        Products.forEach((product, index) => {
          const quantity = Quantity[index] || 1;
          totalPrice += product.price * quantity;
        });
        SetTotalPrice(totalPrice);
      }, [Products, Quantity]);
      console.log(TotalPrice);
      
  return <>
    <h1 className="Cart-Heading">Cart items </h1>
    {
        Products.map((e,i) => {
            return (
                <div className="CartContainer" key={i}>
                <div className="main">
                    <div className="image-container"> 
                        <img src={e.image} alt={e.title} style={{width:'160px'}} />
                    </div>
                    <div className="Product-details">
                        <h4>{e.title}</h4>
                        <p>{e.description}</p>
                    </div>
                </div>
                <div className="Select-Quantity">
                    <div className="select">
                        <select name="Quantity" id="Quantity" value={Quantity[i]} onChange={(e)=>handleQuantity(e,i)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="amount">
                        <span>${Quantity[i]? e.price * Quantity[i]: e.price}</span>
                        <button onClick={() => removeItem(i)}>Remove</button>
                    </div>
                </div>
                </div>
            )
        })
    }
    <hr />
    <div className="subTotal"> 
        <h3 style={{textAlign:'right', marginRight:'100px', marginLeft:'10px', display:'inline'}}>Total:</h3> <span style={{fontSize:'25px', marginRight:'20px'}}>${TotalPrice.toFixed(2)}</span></div>
   <hr />
    </>
}

export default ViewCart;
