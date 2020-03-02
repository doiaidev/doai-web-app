import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route';

import SingIn from '../pages/SignIn'
import SingUp from '../pages/SignUp'

import Dashboard from '../pages/Dashboard'
import Help from '../pages/Help'
import FeedBack from '../pages/FeedBack'
import Support from '../pages/Support'
import Profile from '../pages/Profile'

interface Props {
  path?: string;
  component?: Element;
}

const Routes: React.FC<Props> = ({ path, component }) => {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />

      <Route path="/login" component={SingIn} />
      <Route path="/register" component={SingUp} />

      <Route path="/help" component={Help} />
      <Route path="/feedback" component={FeedBack} />
      <Route path="/support" component={Support} />
      <Route path="/profile" component={Profile} isPrivate />
      {/* <Route path="/" component={() => <h1>404</h1>} /> */}
    </Switch>
  )
}

export default Routes;
