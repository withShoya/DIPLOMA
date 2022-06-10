import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
    login: Yup.string()
            .required('Это поле обязательно').default(''),
    password: Yup.string()
             .min(6, 'Пароль должен содержать минимум 6 символов')
             .max(20, 'Пароль не может превышать 20 символов')
             .required('Это поле обязательно').default(''),
});

const formSignInOptions = {resolver: yupResolver(signInSchema)};

export default formSignInOptions;