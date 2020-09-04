import React, { useState } from "react"
import { Container, Row, Button } from "react-bootstrap"


function AddToCart (props) {


   return (
      <div className="add-to-cart">
            <div className="quantity-input">
               <i 
                  className="fas fa-minus text-danger"
                  onClick={() => props.setQuantity(prevQuantity => prevQuantity>1 ? prevQuantity-1 : 1)}
               ></i>
               <input 
                  className="text-center"
                  type="text"
                  name="quantity"
                  value={props.quantity}
                  onChange={props.handleTextChange}
                  style={{
                        outline: "none",
                        border: "none",
                        width: "100px"
                  }}
               />
               <i 
                  className="fas fa-plus text-danger"
                  onClick={() => props.setQuantity(prevQuantity => prevQuantity+1)}
               ></i>
            </div>
            <div className="add-button my-2">
                  <Button href="#" style={{width: "129px"}} variant="danger">Add to Card</Button>{' '}
            </div>
      </div>
        
    )
}

export default AddToCart