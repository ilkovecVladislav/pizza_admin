import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import Input from 'components/form/Input';
import { Container, Title, Form, SubmitButton } from './LogInPage.style';
import { logIn } from './state/reducer';

const schema = yup.object().shape({
  email: yup.string().required('Email обязательное поле').email('Неправильный email'),
  password: yup.string().required('Пароль обязательное поле'),
});

type FormValues = {
  email: string;
  password: string;
};

const LogIn = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    dispatch(logIn());
    history.push('/ingredients');
  };

  return (
    <Container>
      <Title>Авторизация</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          label="E-mail"
          type="email"
          name="email"
          error={errors?.email?.message}
        />
        <Input
          ref={register}
          label="Пароль"
          type="password"
          name="password"
          error={errors?.password?.message}
        />

        <SubmitButton type="submit">Войти</SubmitButton>
      </Form>
    </Container>
  );
};

export default LogIn;
