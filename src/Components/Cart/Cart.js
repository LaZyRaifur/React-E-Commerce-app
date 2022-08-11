import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const Total = cart.reduce((total, pd)=> total + pd.price, 0);
    

    let shipping = 0;
    if(Total > 35){
        shipping = 0;
    }
    else if(Total > 15){
        shipping = 4.99;
    }
    else if(Total > 0){
        shipping = 12.99;

    }

    const tax = (Total / 10).toFixed(2);
    const grandTotal = (Total + shipping  + Number(tax)).toFixed(2);


    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }



    return (
        <div>
            <h4>Order summery</h4>
            <p>Items Orders: {cart.length}</p>
            <p>Product Price: {formatNumber(Total)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;