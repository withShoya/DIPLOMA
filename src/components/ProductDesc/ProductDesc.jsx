import products from "../../utils/productsList.js";
import {useParams, useNavigate} from 'react-router-dom';
import './ProductDesc.scss';
import {useContext} from 'react';
import { ProductContext } from '../../contexts/ProductContext.js';

function ProductDesc(props) {

    const navigate = useNavigate();

    const {setProducts} = useContext(ProductContext);

    function handleClick() {
        setProducts(prevState => [...prevState, item[0]]);
        navigate('/cart')
    }

    const {id} = useParams();

    const productId = id.slice(1);

    let item = products.filter((product) => product.id == productId);

    return (
        <div className="product">
            <img src={item[0].img} alt="product" className="product__img" />
            <div className="product__info">
                <h2 className="product__name">{item[0].name}</h2>
                <p className="product__description">{item[0].fullDescription}</p>
                <p className="product__description">{item[0].price} руб</p>
                <button type="button" onClick={handleClick} className="product__buy-btn">Купить</button>
            </div>
        </div>
    )
}

export default ProductDesc;