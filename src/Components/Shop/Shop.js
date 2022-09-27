import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Shop.css'
const Shop = () => {
    const [products, setproducts] = useState([])
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])

    const handleClick = (name) => {
        console.log(name);
        const newCart = [...cart, name];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product key={product.id} name={product} handleClick={handleClick}></Product>)
                }

            </div>
            <div className='cart-container'><h4>Orders Summary</h4>
                <p>Selected Item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;