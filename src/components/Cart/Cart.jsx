import {useContext, useState, useEffect} from 'react';
import { ProductContext } from '../../contexts/ProductContext.js';
import { useForm } from "react-hook-form";
import formBuyOptions from "../../utils/validSchemas/buySchema";
import './Cart.scss';

function Cart(props) {

    const [isSuccess, setIsSuccess] = useState(false);

    function onSubmit(e) {
        setIsSuccess(true);
    }

    const [isEmpty, setIsEmpty] = useState(true);

    const {products} = useContext(ProductContext);
    const { register, handleSubmit, formState: { errors } } = useForm(formBuyOptions);

    function productsPriceSum() {
        let sum = 0
        products.forEach(product => {
            sum += product.price;
        });
        return sum;
    }


    useEffect(() => {
        products.length !== 0 && setIsEmpty(false);
    }, [])
    

    return (
        <div className="container">
        <div className="cart">
            <h2 className="cart__title">Корзина</h2>
            { !isEmpty ?
            <>
            <p className="cart__text">Товаров {products.length} на сумму {productsPriceSum()} руб.</p>
            {products.map(item => {
                return (
                    <div className="cart__item" key={item.id}>
                        <img src={item.img} alt="Image" className="cart__item-img" />
                        <p className="cart__item-name">{item.name}</p>
                        <p className="cart__item-desc">{item.shortDescription}</p>
                        <p className="cart__item-price">{item.price} руб.</p>
                    </div>
                )
            })
        }
        </>
            :
            <p className="cart__text">Корзина пуста</p>
}
        </div>
        { isSuccess ? <h2 className="success-message">Покупка совершена!</h2>
        :
        <form className={`pay-form ${isEmpty && "hidden"}`} noValidate onSubmit={handleSubmit(onSubmit)}>
        <h2 className="pay-form__title">Оплата</h2>
        <label htmlFor="name" className="signup__label"> ФИО
          <input
            {...register('name')}
            type="text" 
            name="name"
            id="name"
            placeholder="Введите ваше имя"
            className="signup__input" />
          <span className="signup__input-error">{errors.name?.message }</span>
          </label>
          <label htmlFor="email" className="signup__label"> E-mail
          <input
            {...register('email')}
            type="text" 
            name="email"
            id="email"
            placeholder="Введите ваш логин" 
            className="signup__input" />
            <span className="signup__input-error">{errors.email?.message }</span>
          </label>

          <p className="pay-form__oplata-title">Способ оплаты</p>

          <label className="pay-form__label-radio"> Карта
          <input
            {...register('oplata')}
            type="radio" 
            name="oplata"
            id="oplata1" 
            className="pay-form__input-radio" />
            <span className='pay-form__checkmark'></span>
          </label>
          <label className="pay-form__label-radio"> Qiwi
          <input
            {...register('oplata')}
            type="radio" 
            name="oplata"
            id="oplata2" 
            className="pay-form__input-radio" />
            <span className='pay-form__checkmark'></span>
          </label>
          <label className="pay-form__label-radio"> PayPal
          <input
            {...register('oplata')}
            type="radio" 
            name="oplata"
            id="oplata3" 
            className="pay-form__input-radio" />
            <span className='pay-form__checkmark'></span>
          </label>
          <span className="pay-form__input-error">{errors.oplata?.message }</span>
          <button type='submit' onSubmit={onSubmit} className="pay-form__btn">Оплатить</button>
        </form>
}
        </div>
    )
}

export default Cart;