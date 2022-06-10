import { useForm } from "react-hook-form";
import formSignUpOptions from "../../utils/validSchemas/signUpSchema";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import './SignUp.scss';
import homeIcon from '../../images/home-icon.svg';

function SignUp (props) {
  const { register, handleSubmit, formState: { errors } } = useForm(formSignUpOptions);
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);

  let timeout;
  
  function onSubmit () {
    console.log('Sign Up success!');
    setIsSuccess(true);
    clearTimeout(timeout);
    setTimeout(() => {
      navigate('/signin');
    }, 3000);
  }

  return(
    <section className="signup">
      <form className="signup__form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <NavLink className="signin__home-link" to="/"><img src={homeIcon} className="signin__home-img" alt="Home page" /></NavLink>
        <fieldset className="signup__fieldset">
          <label htmlFor="name" className="signup__label"> Имя
          <input
            {...register('name')}
            type="text" 
            name="name"
            id="name"
            placeholder="Введите ваше имя"
            className="signup__input" />
          <span className="signup__input-error">{errors.name?.message }</span>
          </label>
        
          <label htmlFor="login" className="signup__label"> Логин
          <input
            {...register('login')}
            type="text" 
            name="login"
            id="login"
            placeholder="Введите ваш логин" 
            className="signup__input" />
            <span className="signup__input-error">{errors.login?.message }</span>
          </label>

          <label htmlFor="name" className="signup__label"> Пароль
          <input
            {...register('password')}
            type="password" 
            name="password"
            id="password"
            placeholder="Введите ваш пароль" 
            className="signup__input" />
            <span className="signup__input-error">{ errors.password?.message }</span>
            </label>
            <button disabled={isSuccess} className="signup__submit" type="submit" onSubmit={onSubmit}>Зарегистрироваться</button>
        </fieldset>
      </form>
      <p className="signup__tip">Уже зарегистрированы? <NavLink className="signup__tip-link" to='/signin'> Войти</NavLink></p>
      <span className="signup__success">{isSuccess && "Регистрация успешна!"}</span>
    </section>
  )
}


export default SignUp;