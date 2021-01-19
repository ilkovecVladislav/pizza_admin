import { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useIsAuthorized } from 'pages/LogInPage/state/selector';

type Props = {
  path: string;
};

const ProtectedRoute: FC<Props> = ({ path, ...routerProps }) => {
  const isAuthorized = useIsAuthorized();

  return isAuthorized ? <Route path={path} exact {...routerProps} /> : <Redirect to="/" />;
};

export default ProtectedRoute;
