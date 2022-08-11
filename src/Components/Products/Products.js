import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'



const Products = (props) => {
  //console.log(props);
  const { name, img, price, seller, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-name">
        <h4>{name}</h4>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p>$ {price}</p>
        <br />
        <p>
          <small>only {stock} left in stock - Order very soon</small>
        </p>
        <button 
          className="main-button"
          onClick={()=>props.handlesAddProduct(props.product)}
          >
          
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
      </div>
    </div>
  );
};

export default Products;
