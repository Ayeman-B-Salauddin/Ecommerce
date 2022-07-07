import React from 'react';
import style from './Products.module.css';

const Products = (props) => {

    let productsElements = props.state.map(el =>
        <div className={style.listItem}>
            <h3> name={el.name} id={el.id} price={el.price} </h3></div>);

    const getProducts = () => {

    }

    return (
        <div className={style.list}>
            <div>
                <button
                    className={style.btn}
                    onClick={getProducts}>
                    List Products
                </button>
            </div>
            { productsElements }
        </div>
    );
};

export default Products;