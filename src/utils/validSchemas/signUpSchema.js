import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
    name: Yup.string()
            .required('Это поле обязательно').default(''),
    login: Yup.string()
            .required('Это поле обязятельно').default(''),
    password: Yup.string()
            .min(6, 'Пароль должен содержать минимум 6 символов')
            .max(20, 'Пароль не может превышать 20 символов')
            .required('Это поле обязательно').default(''),
});

const formSignUpOptions = {resolver: yupResolver(signUpSchema)};

export default formSignUpOptions;