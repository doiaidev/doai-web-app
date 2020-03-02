import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

// import { store } from '../store';

interface Props {
  component: string;
  isPrivate: boolean;
}

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  isPrivate,
  ...rest
}) => {
  // const { signed } = store.getState().auth;
   const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/profile" />;
  }

  const Layout = signed ? AuthLayout : DefaultLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );

}

export default RouteWrapper;
