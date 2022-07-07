import React from 'react';
import style from './Card.module.css';
import Products from "../products/Products";

const Card = (props) => {

    return (
        <div className={style.container}>
            <div className={style.card}>
                <h1>Ecommerce</h1>

                <Products store={props.store}/>
            </div>
        </div>
    )
}


export default Card;