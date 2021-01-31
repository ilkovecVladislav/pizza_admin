import { publicPost } from './publicAxios';
import { setToken } from './protectedAxios';

const AUTH_URL = '/login';

interface LoginParams {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

const login = (data: LoginParams): Promise<void> =>
  publicPost<LoginParams, LoginResponse>(AUTH_URL, data).then(({ token }) => {
    setToken({ token });
  });

export default login;
