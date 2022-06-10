import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const testSchema = Yup.object().shape({ 
    answer: Yup.string().nullable().required('Выберите один из вариантов ответа'),
});

const formTestOptions = {resolver: yupResolver(testSchema)};

export default formTestOptions;