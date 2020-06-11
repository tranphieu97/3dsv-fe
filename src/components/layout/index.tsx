import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppHeader from './app-header';
import AppDrawer from './app-drawer';
import { Box } from '@material-ui/core';
import { drawerWidth } from '../../styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
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
  })
);

export default function PersistentDrawerLeft(props: any) {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Box>
      <CssBaseline />
      <AppDrawer
        toggleDrawer={toggleDrawer}
        openDrawer={openDrawer}
      ></AppDrawer>
      <Box>
        <AppHeader
          toggleDrawer={toggleDrawer}
          openDrawer={openDrawer}
        ></AppHeader>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: openDrawer,
          })}
        >
          <div className={classes.drawerHeader} />
          <Box>{props.children}</Box>
        </main>
      </Box>
    </Box>
  );
}
