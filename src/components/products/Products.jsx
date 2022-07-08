import React from 'react';
import style from './Products.module.css';
import {getProductsCreator} from "../../redux/store";

const Products = (props) => {

    let productsElements = props.products.map((el) =>
        <div className={style.cardItem} key={el.id}>
            <h5>
                <ul>
                    <li>
                        id: {el.id},
                        name: {el.name},
                        nick: {el.username},
                        email: {el.email}
                    </li>
                </ul>
            </h5>
        </div>);


    const getProducts = () => {
        props.dispatch(getProductsCreator());
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