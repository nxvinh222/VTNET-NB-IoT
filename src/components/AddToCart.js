import React from "react"
import { Button } from "react-bootstrap"

import 'styles/AddToCart.css'

function AddToCart (props) {


   return (
      <div className="add-to-cart">
            <div className="quantity-input">
               <i 
                  className="fas fa-minus"
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
                  className="fas fa-plus"
                  onClick={() => props.setQuantity(prevQuantity => prevQuantity+1)}
               ></i>
            </div>
            <div className="add-button my-2">
                  <Button href="#" style={{width: "129px"}} variant="secondary">Add to Card</Button>{' '}
            </div>
      </div>
        
    )
}

export default AddToCart