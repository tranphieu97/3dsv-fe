import React from 'react';
import { Box } from '@material-ui/core';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ItemsRoute from './items';

export default function Admin(props: any) {
  const { path, url } = useRouteMatch();
  return (
    <Box>
      <Switch>
        <Route exact path={`${path}/items`}>
          <ItemsRoute />
        </Route>
      </Switch>
    </Box>
  );
}
