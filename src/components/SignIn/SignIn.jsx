import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import formSignInOptions from "../../utils/validSchemas/signInSchema.js";
import { NavLink, useNavigate } from "react-router-dom";
import './SignIn.scss';
import homeIcon from "../../images/home-icon.svg";
import {LoggedInContext} from '../../contexts/LoggedInContext';
import {UserContext} from '../../contexts/UserContext.js';
import data from "../../utils/userData.js";

function SignIn (props) {
  const {setIsLoggedIn} = useContext(LoggedInContext);
  const {setUserLogin} = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm(formSignInOptions);
  const navigate = useNavigate();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  function handleLogin(e) {
    setLogin(e.target.value);
  }

  
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function onSubmit () {
    if (data.find(item => item.login === login && item.password === password )) {
      setIsLoggedIn(true);
      navigate('/');
    }
    else {
      setIsSuccess(false);
    }
  }

  return(
    <section className="signin">
      <form className="signin__form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <NavLink className="signin__home-link" to="/"><img src={homeIcon} className="signin__home-img" alt="Home page" />На главную</NavLink>
        <fieldset className="signin__fieldset">
        
          <label htmlFor="login" className="signin__label"> Логин
          <input
            {...register('login')}
            type="string" 
            name="login"
            id="email"
            placeholder="Введите ваш логин" 
            className="signin__input"
            onChange={handleLogin} />
            <span className="signin__input-error">{errors.login?.message}</span>
          </label>

          <label htmlFor="name" className="signin__label"> Пароль
          <input
            {...register('password',)}
            type="password" 
            name="password"
            id="password"
            placeholder="Введите ваш пароль" 
            className="signin__input"
            onChange={handlePassword} />
            <span className="signin__input-error">{errors.password?.message }</span>
            </label>
          <button className="signin__submit" disabled={isLoading} type="submit" onSubmit={onSubmit}>Войти</button>
        </fieldset>
      </form>
      <p className="signin__tip">Ещё не зарегистрированы? <NavLink className="signin__tip-link" to='/signup'> Зарегистрироваться</NavLink></p>
      <span className="signin__form-error">{!isSuccess && "Данные неверны"}</span>
    </section>
  )
}


export default SignIn;