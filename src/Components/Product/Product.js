import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const { name, seller, img, ratings
        , price } = props.name;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <p className='product-name'>{name}</p>
            <p className='product-item'>price: {price}</p>
            <p className='product-item'><small>Rating: {ratings} start</small></p>
            <p className='product-item' s><small>Seller: {seller} </small></p>
            <button onClick={() => props.handleClick(props.name)} className='btn-cart'>
                <p className='btn-text' >Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;