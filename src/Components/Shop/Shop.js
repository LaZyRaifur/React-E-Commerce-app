import React, { useState } from 'react';
import fakeData from './../../fakeData/index';
import '../Shop/Shop.css';
import Products from './../Products/Products';
import Cart from './../Cart/Cart';

const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);
    const [cart,setCart] = useState([]);



    const handleAddProduct = (product)=> {
        // console.log('added product ',product);
        const newCart = [...cart,product];
        setCart(newCart);

    }


    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        products.map(pd => <Products 
                            handlesAddProduct={handleAddProduct}
                            product={pd}></Products>)
                    }
                </ul>
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;