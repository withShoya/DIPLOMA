import TestCard from "../Product/Product";
import { useEffect, useContext, useState } from "react";
import './Products.scss';
import { UserContext } from '../../contexts/UserContext.js';
import products from "../../utils/productsList.js";

function Products(props) {

  const {userLogin} = useContext(UserContext);


    return (
        <div className="tests">
          <ul className="tests__list">
            {products.length ? 
            products.map(product => {
              return (
              <li className="tests__list-item" key={product.id}>
              <TestCard name={product.name} id={product.id} img={product.img}  />
            </li>
              )
            })
            :
            <p className="tests__error">На данный момент товары закончились, зайдите позже!</p>  
            }
          </ul>
        </div>
    )
}

export default Products;