import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LogInPage from 'pages/LogInPage';
import IngredientsPage from 'pages/IngredientsPage';
import CreateIngredientPage from 'pages/CreateIngredientPage';
import EditIngredientPage from 'pages/EditIngredientPage';
import ProtectedRoute from './ProtectedRoute';

const AppRouter = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LogInPage} exact />
      <ProtectedRoute path="/ingredients">
        <IngredientsPage />
      </ProtectedRoute>
      <ProtectedRoute path="/ingredient/new">
        <CreateIngredientPage />
      </ProtectedRoute>
      <ProtectedRoute path="/edit/:id">
        <EditIngredientPage />
      </ProtectedRoute>
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
