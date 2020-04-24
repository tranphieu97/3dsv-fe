import React, { useState } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './route/home-route';
import { ThemeProvider, Box } from '@material-ui/core';
import { theme } from './styles/theme'
import AppDrawer from './components/app-drawer';
import AppHeader from './components/app-header';
import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from './styles/theme'
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
}))

function App() {
  const classes = useStyles()
  const [isOpenDrawer, setIsOpendDrawer] = useState(false)

  const closeDrawer = () => {
    setIsOpendDrawer(false)
  }

  const openDrawer = () => {
    setIsOpendDrawer(true)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppDrawer isOpenDrawer={isOpenDrawer} closeDrawer={closeDrawer}/>
        <Box>
          <AppHeader isOpenDrawer={isOpenDrawer} openDrawer={openDrawer}/>
          <Box className={clsx(classes.content, {
            [classes.contentShift]: isOpenDrawer,
          })}>
            <Switch>
              <Route exact path="/" component={Home}></Route>
            </Switch>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
