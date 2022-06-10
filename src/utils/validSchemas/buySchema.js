import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const buySchema = Yup.object().shape({
    name: Yup.string()
            .required('Это поле обязательно').default(''),
    email: Yup.string()
            .email('Введите верный email')
            .required('Это поле обязательно').default(''),
    oplata: Yup.string().nullable().required('Выберите один из вариантов'),
});

const formBuyOptions = {resolver: yupResolver(buySchema)};

export default formBuyOptions;