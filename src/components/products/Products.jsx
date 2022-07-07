import React from 'react';
import style from './Products.module.css';
import {rerenderEntireTree} from "../../render";

const Products = (props) => {

    let productsElements = props.store.productsPage.products.map((el) =>
        <div className={style.listItem} key={el.id}>
            <h3>id={el.id},
                name={el.name},
                price={el.price}
            </h3>
        </div>);

    const getProducts = () => {
        // code here
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
            {productsElements}
        </div>
    );
};

export default Products;