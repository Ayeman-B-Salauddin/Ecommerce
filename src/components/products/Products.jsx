import React from 'react';
import style from './Products.module.css';

const Products = (props) => {
    let productsElements =  props.store.products.map( d => <div> <h3> name={d.name} id={d.id} </h3></div>  );
    return (
        <div className={style.listItem}>
            { productsElements }
        </div>
    );
};

export default Products;