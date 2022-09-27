import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
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
    useEffect(() => {
        console.log('Local Storage first line', products)
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])
    const handleClick = (SelectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === SelectedProduct.id);
        if (!exists) {
            SelectedProduct.quantity = 1;
            newCart = [...cart, SelectedProduct];
        }
        else {
            const rest = cart.find(product => product.id !== SelectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(SelectedProduct);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product key={product.id} name={product} handleClick={handleClick}></Product>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;