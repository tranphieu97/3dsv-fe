import React from 'react';
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../layout';
import Home from '../routes/home';
import Admin from '../routes/admin';
import PageNotFound from '../routes/page-not-found';

export default function App() {
  return (
    <Box>
      <Layout>
        <Router>
          <Switch>
            <Route path='/admin'>
              <Admin></Admin>
            </Route>
            <Route path='/' exact={true}>
              <Home></Home>
            </Route>
            <Route path='*'>
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </Router>
      </Layout>
    </Box>
  );
}
